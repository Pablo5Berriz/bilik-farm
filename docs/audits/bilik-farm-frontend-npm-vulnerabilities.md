# Inventaire npm frontend — Bilik Farm

## Lot

`BF-REPRISE-005A - Inventaire contrôlé des vulnérabilités npm frontend`

## Point de départ

- Branche : `main`.
- SHA : `81e9f3111d7acbbe7339bf653ad6410717d7073e`.
- Working tree initial : propre.

## Commandes exécutées

| Commande | Résultat |
| --- | --- |
| `git status --short --branch` | `## main` |
| `git rev-parse HEAD` | `81e9f3111d7acbbe7339bf653ad6410717d7073e` |
| `npm audit --json` | 5 entrées : 1 moderate, 4 high |
| `npm audit --omit=dev --json` | 2 entrées production : 1 moderate, 1 high |
| `npm ls next postcss eslint-config-next @next/eslint-plugin-next glob --depth=3` | graphe des paquets concernés |
| recherches `rg` sur les surfaces Next.js | pas de middleware, rewrites, `next/image`, WebSocket ou API route active |

## Synthèse npm audit

`npm audit` remonte cinq entrées agrégées :

| Package | Direct | Environnement | Sévérité npm | Cause |
| --- | --- | --- | --- | --- |
| `next@14.2.35` | oui | runtime/build | high | advisories Next.js multiples |
| `postcss@8.4.31` sous `next` | non | runtime/build via Next | moderate | XSS CSS stringify pour versions `<8.5.10` |
| `postcss@8.5.8` direct | oui | build CSS | moderate | même plage `<8.5.10` |
| `eslint-config-next@14.2.35` | oui | dev lint | high | dépend de `@next/eslint-plugin-next` vulnérable via `glob` |
| `@next/eslint-plugin-next@14.2.35` | non | dev lint | high | dépend de `glob@10.3.10` |
| `glob@10.3.10` | non | dev lint | high | injection de commande dans le CLI `glob` |

`npm audit --omit=dev` conserve uniquement `next` et le `postcss` embarqué par `next`.

## Graphe de dépendances concerné

```text
bilik-farm-frontend
+-- next@14.2.35
| `-- postcss@8.4.31
+-- postcss@8.5.8
+-- eslint-config-next@14.2.35
| `-- @next/eslint-plugin-next@14.2.35
|   `-- glob@10.3.10
+-- autoprefixer@10.4.27
| `-- postcss@8.5.8 deduped
`-- tailwindcss@3.4.19
  `-- postcss@8.5.8 deduped
```

Le projet contient deux instances PostCSS inférieures à `8.5.10` : `8.4.31` embarquée par Next et `8.5.8` déclarée directement.

## Surfaces applicatives observées

Surfaces absentes :

- pas de `middleware.ts`;
- pas de dossier `pages`;
- pas de `next.config.js` actif;
- pas de `rewrites`;
- pas de configuration `images.remotePatterns`;
- pas d’import `next/image`;
- pas de `beforeInteractive`;
- pas de nonce CSP;
- pas de WebSocket ou upgrade handler;
- pas de route API active dans `frontend/src/app/api`.

Surfaces présentes :

- App Router Next.js;
- routes dynamiques `[locale]`, `products/[id]`, `blog/[slug]`;
- `next start` possible en production locale;
- build Next.js avec pages dynamiques server-rendered on demand.

## Détail par entrée

### 1. `next`

- Type : dépendance directe.
- Version installée : `14.2.35`.
- Sévérité npm agrégée : `high`.
- Environnement : runtime et build.
- Exploitabilité observée : partielle et limitée par l’absence de middleware, rewrites, `next/image`, WebSocket, CSP nonce, scripts `beforeInteractive` et routes API actives.

Risque restant :

- le projet utilise App Router et `next start`; les vulnérabilités touchant les Server Components, le cache ou le rendu Next restent pertinentes si le site est exposé publiquement en mode serveur.

Voies de correction :

- migrer Next vers une version corrigée compatible dans un lot dédié;
- étudier un export statique pour réduire l’exposition serveur;
- conserver l’absence de middleware, rewrites, remote image optimizer et API routes tant qu’aucune correction Next n’est validée.

### 2. `postcss`

- Type : dépendance directe et dépendance transitive de `next`.
- Versions concernées : `8.4.31` sous `node_modules/next/node_modules/postcss` et `8.5.8` sous `node_modules/postcss`.
- Sévérité npm : `moderate`.
- Advisory : `GHSA-qx2v-qp2m-jg93`.
- Plage affectée : `<8.5.10`.
- Environnement : runtime/build interne de Next pour `8.4.31`; chaîne CSS et build du projet pour `8.5.8`.
- Exploitabilité observée : faible dans l’état actuel, car les sources CSS sont contrôlées dans le dépôt et aucune route API ne reçoit de CSS arbitraire.

Risque restant :

- l’instance embarquée par Next reste utilisée lors du build et potentiellement dans le runtime Next; l’instance directe reste utilisée dans la chaîne CSS et le build; l’export statique ne supprime aucune des deux versions du lockfile.

Voies de correction :

- migrer Next de façon contrôlée pour remplacer ou corriger son instance embarquée;
- mettre à jour le PostCSS direct vers une version non affectée;
- relancer les audits complet et production après installation;
- refuser tout CSS ou style arbitraire provenant d’utilisateurs.

### 3. `eslint-config-next`

- Type : dépendance directe de développement.
- Version installée : `14.2.35`.
- Sévérité npm agrégée : `high`.
- Environnement : lint uniquement.
- Cause : embarque `@next/eslint-plugin-next`, qui dépend de `glob@10.3.10`.
- Exploitabilité observée : faible en production, car absent du runtime public.

Risque restant :

- exposition locale ou CI si le lint est exécuté sur du contenu non fiable ou avec des chemins manipulés par un attaquant.

Voies de correction :

- migrer l’outillage ESLint/Next dans un lot coordonné;
- limiter l’exécution lint au code source contrôlé.

### 4. `@next/eslint-plugin-next`

- Type : dépendance transitive de `eslint-config-next`.
- Version installée : `14.2.35`.
- Sévérité npm agrégée : `high`.
- Environnement : dev lint.
- Cause : dépend de `glob@10.3.10`.
- Exploitabilité observée : faible en production, identique à l’entrée ESLint.

Risque restant :

- exposition locale ou CI si l’outillage lint traite des chemins ou arguments non fiables.

Voies de correction :

- migrer `eslint-config-next` vers une version dont l’arbre transitif n’inclut plus le `glob` vulnérable;
- vérifier la compatibilité avec la version Next retenue.

### 5. `glob`

- Type : dépendance transitive de `@next/eslint-plugin-next`.
- Version installée : `10.3.10`.
- Sévérité npm : `high`.
- Advisory : injection de commande dans le CLI `glob` via `-c/--cmd`.
- Environnement : dev lint uniquement.
- Exploitabilité observée : faible, car aucun usage applicatif du CLI `glob` avec arguments externes n’a été identifié.

Risque restant :

- devient pertinent si un script local ou CI expose le CLI `glob` à des arguments non fiables.

Voies de correction :

- corriger transitivement via une migration coordonnée de `eslint-config-next`;
- éviter tout usage direct du CLI `glob -c/--cmd`.

## Correctif npm proposé

`npm audit fix --force` propose une migration majeure non contrôlée, notamment vers une version plus récente de l’écosystème Next/ESLint. Cette voie n’est pas retenue sans décision PM.

## Décision d’inventaire

Les cinq vulnérabilités npm sont confirmées et documentées. Deux concernent le runtime ou le build de production (`next`, `postcss` embarqué par Next). Trois relèvent de l’outillage de développement lié au lint (`eslint-config-next`, `@next/eslint-plugin-next`, `glob`).

Aucune correction automatique n’a été appliquée.

## Suite recommandée

Préparer un préflight de remédiation pour comparer export statique, migration Next 15, migration coordonnée Next/ESLint et acceptation temporaire documentée.

## Préflight de remédiation

Le préflight associé est documenté dans `docs/audits/bilik-farm-frontend-npm-remediation-preflight.md`.
