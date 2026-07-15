# Inventaire npm frontend - Bilik Farm

## Lot

`BF-REPRISE-005A - Inventaire controle des vulnerabilites npm frontend`

## Point de depart

- Branche : `main`
- SHA : `81e9f3111d7acbbe7339bf653ad6410717d7073e`
- Working tree initial : propre

## Commandes executees

| Commande | Resultat |
| --- | --- |
| `git status --short --branch` | `## main` |
| `git rev-parse HEAD` | `81e9f3111d7acbbe7339bf653ad6410717d7073e` |
| `npm audit --json` | 5 entrees : 1 moderate, 4 high |
| `npm audit --omit=dev --json` | 2 entrees prod : 1 moderate, 1 high |
| `npm ls next postcss eslint-config-next @next/eslint-plugin-next glob --depth=3` | Graphe des paquets concerne |
| Recherches `rg` sur surfaces Next.js | Pas de middleware, rewrites, `next/image`, `beforeInteractive`, WebSocket, CSP nonce, API route active |

## Synthese npm audit

`npm audit` remonte 5 entrees agregees :

| Package | Direct | Environnement | Severite npm | Cause |
| --- | --- | --- | --- | --- |
| `next@14.2.35` | oui | runtime/build | high | Advisories Next.js multiples, dont DoS RSC, image optimizer, request smuggling/cache, SSRF WebSocket |
| `postcss@8.4.31` sous `next` | non | runtime/build via Next | moderate | XSS en stringify CSS pour versions `<8.5.10` |
| `postcss@8.5.8` direct | oui | build CSS | moderate dans l'audit complet | Même plage `<8.5.10`; absent de l'audit prod car omis avec les dépendances dev |
| `eslint-config-next@14.2.35` | oui | dev lint | high | Depend de `@next/eslint-plugin-next` vulnerable via `glob` |
| `@next/eslint-plugin-next@14.2.35` | non | dev lint | high | Depend de `glob@10.3.10` |
| `glob@10.3.10` | non | dev lint | high | Injection de commande dans le CLI `glob` via `-c/--cmd` |

`npm audit --omit=dev` conserve uniquement :

- `next`
- `postcss` embarque par `next`

Les trois autres entrees sont liees a l'outillage ESLint ajoute pour le lint reproductible.

## Graphe de dependances concerne

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

Note : le projet contient deux instances de PostCSS inférieures à `8.5.10` :

- `8.4.31` embarquée par Next;
- `8.5.8` déclarée directement pour la chaîne CSS.

L'audit complet signale `postcss` avec les nœuds `node_modules/next/node_modules/postcss` et `node_modules/postcss`. L'audit production ne conserve que l'instance embarquée par Next, car l'instance directe relève de la chaîne build/dev.

## Surfaces applicatives observees

Surfaces absentes dans le frontend actuel :

- pas de `middleware.ts`;
- pas de dossier `pages`;
- pas de `next.config.js` actif;
- pas de `rewrites`;
- pas de configuration `images.remotePatterns`;
- pas d'import `next/image`;
- pas de `beforeInteractive`;
- pas de nonce CSP;
- pas de WebSocket ou upgrade handler;
- pas de route API active dans `frontend/src/app/api`;
- `frontend/src/app/admin` ne contient qu'un `.gitkeep`.

Surfaces presentes :

- App Router Next.js;
- routes dynamiques `[locale]`, `products/[id]`, `blog/[slug]`;
- `next start` possible en production locale;
- build Next.js avec pages dynamiques server-rendered on demand.

## Detail par entree

### 1. `next`

- Type : dependance directe.
- Version installee : `14.2.35`.
- Severite npm agregee : `high`.
- Environnement : runtime et build.
- Advisories observees : DoS RSC, image optimizer, request smuggling via rewrites, cache poisoning, XSS via CSP nonce ou scripts `beforeInteractive`, SSRF via WebSocket upgrades, bypass middleware/pages i18n.
- Exploitabilite reelle dans ce MVP : **partielle et limitee**.

Facteurs reduisant l'exposition :

- pas de middleware;
- pas de rewrites;
- pas de pages router i18n;
- pas de `next/image` ni configuration remote image;
- pas de WebSocket;
- pas de CSP nonce;
- pas de scripts `beforeInteractive`;
- pas de routes API actives.

Risque restant :

- le projet utilise App Router et `next start`; les vulnerabilites DoS/cache touchant les Server Components ou le rendu Next restent a considerer si le site est expose publiquement en mode serveur.

Voies de correction possibles :

- decision PM pour upgrade Next vers une version corrigee compatible, avec lot de migration dedie;
- si l'objectif reste strictement statique, etudier une sortie statique ou un mode d'hebergement qui reduit l'exposition serveur;
- conserver l'absence de middleware, rewrites, remote image optimizer et API routes tant qu'aucune correction Next n'est validee.

### 2. `postcss`

- Type : direct et transitif via `next`.
- Versions concernées : `8.4.31` sous `node_modules/next/node_modules/postcss` et `8.5.8` sous `node_modules/postcss`.
- Severite npm : `moderate`.
- Advisory : XSS via `</style>` non echappe dans CSS stringify pour versions `<8.5.10`.
- Environnement : runtime/build interne Next pour `8.4.31`; build CSS/dev pour `8.5.8`.
- Exploitabilite reelle dans ce MVP : **à distinguer par environnement**.

Facteurs reduisant l'exposition :

- CSS source controle dans le repo;
- pas de generation CSS depuis contenu utilisateur;
- pas de route API active recevant CSS arbitraire.

Risque restant :

- l'instance embarquée par Next reste pertinente tant que `next start` ou le build Next sont utilisés;
- l'instance directe reste pertinente pour la chaîne CSS/build, même si elle n'apparaît pas dans l'audit production.

Voies de correction possibles :

- corriger l'instance directe via mise à jour contrôlée de `postcss` lorsque PM autorise un lot dépendances;
- corriger ou confirmer l'instance embarquée via upgrade Next ou audit post-installation;
- ne pas accepter de CSS ou style arbitraire provenant d'utilisateurs.

### 3. `eslint-config-next`

- Type : dependance directe dev.
- Version installee : `14.2.35`.
- Severite npm agregee : `high`.
- Environnement : lint uniquement.
- Cause : embarque `@next/eslint-plugin-next`, qui depend de `glob@10.3.10`.
- Exploitabilite reelle dans ce MVP : **faible en production**, car absent du runtime public.

Risque restant :

- exposition locale/CI si des commandes lint executent du contenu non fiable ou des chemins manipules par un attaquant.

Voies de correction possibles :

- upgrade coordonne de l'outillage ESLint/Next lorsque PM autorise;
- limiter l'execution lint a du code source controle.

### 4. `@next/eslint-plugin-next`

- Type : transitif via `eslint-config-next`.
- Version installee : `14.2.35`.
- Severite npm agregee : `high`.
- Environnement : dev lint.
- Cause : depend de `glob@10.3.10`.
- Exploitabilite reelle dans ce MVP : **faible en production**, identique a l'entree ESLint.

Voies de correction possibles :

- upgrade de `eslint-config-next` vers une version dont l'arbre transitif n'inclut plus le `glob` vulnerable;
- a evaluer avec compatibilite Next, car `npm audit` propose `eslint-config-next@16.2.10`, changement majeur.

### 5. `glob`

- Type : transitif via `@next/eslint-plugin-next`.
- Version installee : `10.3.10`.
- Severite npm : `high`.
- Advisory : injection de commande dans le CLI `glob` via `-c/--cmd`.
- Environnement : dev lint.
- Exploitabilite reelle dans ce MVP : **tres faible dans l'usage actuel**, car le projet n'appelle pas le CLI `glob` avec `-c/--cmd`.

Risque restant :

- devient pertinent si un script local ou CI expose le CLI `glob` a des arguments non fiables.

Voies de correction possibles :

- upgrade transitif via `eslint-config-next`;
- eviter tout usage direct du CLI `glob -c/--cmd`.

## Fix npm propose

`npm audit` propose :

- `next@16.2.10` pour `next` et `postcss` via Next;
- `eslint-config-next@16.2.10` pour l'arbre ESLint.

Ces corrections sont marquees `isSemVerMajor: true`. Elles impliquent une mise a niveau majeure et ne doivent pas etre appliquees automatiquement dans ce lot.

## Decision d'inventaire

Verdict : **INVENTAIRE TERMINE, CORRECTION NON LANCEE**.

Aucune commande interdite n'a ete executee :

- pas de `npm audit fix`;
- pas de `npm update`;
- pas de mise a niveau;
- pas de modification de dependance;
- pas de modification de lockfile.

## Suite recommandee

Ouvrir un lot PM distinct pour choisir entre :

1. upgrade majeur Next/ESLint vers versions corrigees, avec validation lint, typecheck, build et runtime;
2. mitigation d'exposition serveur en conservant l'etat statique du MVP;
3. acceptation temporaire documentee des risques dev-only `glob`/ESLint jusqu'au prochain lot de dependances.

## Préflight de remédiation

Le préflight de stratégie est documenté dans `docs/audits/bilik-farm-frontend-npm-remediation-preflight.md`.
