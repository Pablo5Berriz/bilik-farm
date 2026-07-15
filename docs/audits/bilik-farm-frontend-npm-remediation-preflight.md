# Préflight de remédiation npm frontend — Bilik Farm

## 1. Point de départ

- Lot : `BF-REPRISE-005B - Préflight de stratégie de remédiation npm`
- Branche : `main`
- SHA initial : `ca1d1febc02b1654dafb5cecf85e4f68ca458c3d`
- Working tree initial : propre
- Objectif : déterminer une stratégie de correction sans modifier les dépendances.

## 2. Audits npm

Deux audits ont été capturés dans des fichiers temporaires non versionnés :

- audit complet : `npm audit --json > npm-audit-full.json`
- audit production : `npm audit --omit=dev --json > npm-audit-prod.json`

Résultats :

| Audit | Entrées npm | Sévérité |
| --- | ---: | --- |
| complet | 5 | 1 moderate, 4 high |
| production | 2 | 1 moderate, 1 high |

Entrées complètes :

- `next`
- `postcss`
- `eslint-config-next`
- `@next/eslint-plugin-next`
- `glob`

Entrées production :

- `next`
- `postcss` embarqué par `next`

Point PostCSS R1 : l'audit complet signale `postcss` comme direct avec deux nœuds vulnérables, `node_modules/postcss` et `node_modules/next/node_modules/postcss`. L'audit production ne conserve que `node_modules/next/node_modules/postcss`.

## 3. Advisories uniques

Les 5 entrées npm correspondent à 16 advisories uniques :

| Advisory | Paquet | Sévérité | Version installée | Plage affectée | Première version corrigée déduite | Chemin | Environnement | Correctif majeur |
| --- | --- | --- | ---: | --- | ---: | --- | --- | --- |
| GHSA-5j98-mcp5-4vw2 | `glob` | high | 10.3.10 | `>=10.2.0 <10.5.0` | 10.5.0 | `eslint-config-next -> @next/eslint-plugin-next -> glob` | dev lint | indirect |
| GHSA-9g9p-9gw9-jx7f | `next` | moderate | 14.2.35 | `>=10.0.0 <15.5.10` | 15.5.10 | `next` direct | runtime | oui |
| GHSA-h25m-26qc-wcjf | `next` | high | 14.2.35 | `>=13.0.0 <15.0.8` | 15.0.8 | `next` direct | runtime | oui |
| GHSA-ggv3-7p47-pfv8 | `next` | moderate | 14.2.35 | `>=9.5.0 <15.5.13` | 15.5.13 | `next` direct | runtime | oui |
| GHSA-3x4c-7xq6-9pq8 | `next` | moderate | 14.2.35 | `>=10.0.0 <15.5.14` | 15.5.14 | `next` direct | runtime | oui |
| GHSA-q4gf-8mx6-v5v3 | `next` | high | 14.2.35 | `>=13.0.0 <15.5.15` | 15.5.15 | `next` direct | runtime | oui |
| GHSA-qx2v-qp2m-jg93 | `postcss` | moderate | 8.4.31 via Next et 8.5.8 direct | `<8.5.10` | 8.5.10 | `next -> postcss` et `postcss` direct | runtime/build et build CSS | à confirmer par correction séparée |
| GHSA-8h8q-6873-q5fj | `next` | high | 14.2.35 | `>=13.0.0 <15.5.16` | 15.5.16 | `next` direct | runtime | oui |
| GHSA-3g8h-86w9-wvmq | `next` | low | 14.2.35 | `>=12.2.0 <15.5.16` | 15.5.16 | `next` direct | runtime | oui |
| GHSA-ffhc-5mcf-pf4q | `next` | moderate | 14.2.35 | `>=13.4.0 <15.5.16` | 15.5.16 | `next` direct | runtime | oui |
| GHSA-vfv6-92ff-j949 | `next` | low | 14.2.35 | `>=13.4.6 <15.5.16` | 15.5.16 | `next` direct | runtime | oui |
| GHSA-gx5p-jg67-6x7h | `next` | moderate | 14.2.35 | `>=13.0.0 <15.5.16` | 15.5.16 | `next` direct | runtime | oui |
| GHSA-h64f-5h5j-jqjh | `next` | moderate | 14.2.35 | `>=10.0.0 <15.5.16` | 15.5.16 | `next` direct | runtime | oui |
| GHSA-c4j6-fc7j-m34r | `next` | high | 14.2.35 | `>=13.4.13 <15.5.16` | 15.5.16 | `next` direct | runtime | oui |
| GHSA-wfc6-r584-vfw7 | `next` | moderate | 14.2.35 | `>=14.2.0 <15.5.16` | 15.5.16 | `next` direct | runtime | oui |
| GHSA-36qx-fr4f-26g5 | `next` | high | 14.2.35 | `>=12.2.0 <15.5.16` | 15.5.16 | `next` direct | runtime | oui |

Conclusion : toutes les advisories `next` observées nécessitent au minimum Next `15.x`; aucune n'est corrigeable dans la branche Next 14 disponible sur le registre.

## 4. Arbre de dépendances

Arbre simplifié :

```text
bilik-farm-frontend
+-- next@14.2.35                       direct, production
| `-- postcss@8.4.31                   transitif, production/build
+-- postcss@8.5.8                      direct, développement/build, dans la plage vulnérable <8.5.10
+-- eslint@8.57.1                      direct, développement
+-- eslint-config-next@14.2.35         direct, développement
| +-- @next/eslint-plugin-next@14.2.35 transitif, développement
| | `-- glob@10.3.10                   transitif, développement
| `-- eslint@8.57.1                    peer/dedupe
+-- autoprefixer@10.4.27               direct, développement/build
| `-- postcss@8.5.8                    dedupe
`-- tailwindcss@3.4.19                 direct, développement/build
  `-- postcss@8.5.8                    dedupe
```

Production réelle selon `npm audit --omit=dev` :

- `next@14.2.35`
- `next/node_modules/postcss@8.4.31`

Développement uniquement :

- `eslint-config-next@14.2.35`
- `@next/eslint-plugin-next@14.2.35`
- `glob@10.3.10`

Instances PostCSS :

| Version | Parent | Directe/transitive | Dev/prod | Dans la plage `<8.5.10` | Signalée par npm audit | Explication |
| --- | --- | --- | --- | --- | --- | --- |
| 8.4.31 | `next@14.2.35` | transitive | production/build | OUI | audit complet et audit production | Instance embarquée par Next, conservée avec `--omit=dev` |
| 8.5.8 | racine, `autoprefixer`, `tailwindcss` | directe et dédupliquée | build CSS/dev | OUI | audit complet uniquement | Dépendance directe du projet, supprimée de l'audit production par `--omit=dev`; l'audit complet l'inclut dans les nœuds vulnérables |

## 5. Versions corrigées disponibles

Versions disponibles lues sans installation :

- Next 14 : dernière version disponible `14.2.35`.
- Next 15 : versions disponibles jusqu'à `15.5.20`.
- Next 16 : versions disponibles jusqu'à `16.2.10`.
- `eslint-config-next` 14 : dernière version disponible `14.2.35`.
- `eslint-config-next` 15 : versions disponibles jusqu'à `15.5.20`.
- `eslint-config-next` 16 : versions disponibles jusqu'à `16.2.10`.
- `glob@10.5.0` existe.
- `postcss@8.5.10` existe.

Table de décision par advisory :

| Advisory | Paquet | Installé | Première version corrigée | Disponible sans migration majeure | Décision |
| --- | --- | ---: | ---: | --- | --- |
| GHSA-5j98-mcp5-4vw2 | `glob` | 10.3.10 | 10.5.0 | à confirmer via arbre ESLint, non dans `eslint-config-next@14` | lot outillage requis |
| GHSA-9g9p-9gw9-jx7f | `next` | 14.2.35 | 15.5.10 | non | migration Next 15+ |
| GHSA-h25m-26qc-wcjf | `next` | 14.2.35 | 15.0.8 | non | migration Next 15+ |
| GHSA-ggv3-7p47-pfv8 | `next` | 14.2.35 | 15.5.13 | non | migration Next 15+ |
| GHSA-3x4c-7xq6-9pq8 | `next` | 14.2.35 | 15.5.14 | non | migration Next 15+ |
| GHSA-q4gf-8mx6-v5v3 | `next` | 14.2.35 | 15.5.15 | non | migration Next 15+ |
| GHSA-qx2v-qp2m-jg93 | `postcss` via Next et direct | 8.4.31 / 8.5.8 | 8.5.10 | direct oui si autorisé, embarqué Next non via Next 14 | corriger direct séparément; confirmer Next après migration |
| GHSA-8h8q-6873-q5fj | `next` | 14.2.35 | 15.5.16 | non | migration Next 15+ |
| GHSA-3g8h-86w9-wvmq | `next` | 14.2.35 | 15.5.16 | non | migration Next 15+ |
| GHSA-ffhc-5mcf-pf4q | `next` | 14.2.35 | 15.5.16 | non | migration Next 15+ |
| GHSA-vfv6-92ff-j949 | `next` | 14.2.35 | 15.5.16 | non | migration Next 15+ |
| GHSA-gx5p-jg67-6x7h | `next` | 14.2.35 | 15.5.16 | non | migration Next 15+ |
| GHSA-h64f-5h5j-jqjh | `next` | 14.2.35 | 15.5.16 | non | migration Next 15+ |
| GHSA-c4j6-fc7j-m34r | `next` | 14.2.35 | 15.5.16 | non | migration Next 15+ |
| GHSA-wfc6-r584-vfw7 | `next` | 14.2.35 | 15.5.16 | non | migration Next 15+ |
| GHSA-36qx-fr4f-26g5 | `next` | 14.2.35 | 15.5.16 | non | migration Next 15+ |

## 6. Compatibilité Next 14

La branche Next 14 publiée s'arrête à `14.2.35`, version déjà installée.

Conclusion : **pas de correction disponible dans Next 14** pour les advisories Next relevées par l'audit.

Métadonnées :

- `next@14.2.35` : Node `>=18.17.0`, React peer `^18.2.0`, dépendance `postcss@8.4.31`.
- `next@15.5.16` : Node `^18.18.0 || ^19.8.0 || >=20.0.0`, React peer `^18.2.0 || ... || ^19.0.0`, dépendance `postcss@8.4.31`.
- `next@15.5.20` : mêmes exigences générales que `15.5.16`, dépendance `postcss@8.4.31`.
- `next@16.2.10` : Node `>=20.9.0`, React peer `^18.2.0 || ... || ^19.0.0`, dépendance déclarée `postcss@8.4.31`.

Point important : les versions candidates Next 15/16 lues au registre déclarent encore `postcss@8.4.31`. La correction effective du `postcss` embarqué doit donc être vérifiée dans un lot de remédiation par audit post-installation, sans supposer qu'un upgrade de Next élimine cette entrée. L'instance directe `postcss@8.5.8` est également dans la plage `<8.5.10`; sa correction pourrait être traitée par une mise à jour directe contrôlée de `postcss`, mais ce lot ne modifie aucune dépendance.

## 7. Compatibilité ESLint

État actuel :

- `eslint@8.57.1`
- `eslint-config-next@14.2.35`
- `@next/eslint-plugin-next@14.2.35`
- `glob@10.3.10`

Métadonnées candidates :

- `eslint-config-next@14.2.35` dépend de `@next/eslint-plugin-next@14.2.35`, qui dépend de `glob@10.3.10`.
- `eslint-config-next@15.5.16` dépend de `@next/eslint-plugin-next@15.5.16`; ce plugin dépend de `fast-glob@3.3.1`, pas de `glob`.
- `eslint-config-next@15.5.20` présente le même profil.
- `eslint-config-next@16.2.10` requiert `eslint >=9.0.0`, donc migration ESLint majeure.

Conclusion :

- une correction dev-only de l'arbre `glob` semble possible via `eslint-config-next@15.5.x`, mais elle désynchroniserait l'outillage Next 15 avec un runtime Next 14 si elle était appliquée seule;
- `eslint-config-next@16` n'est pas compatible avec ESLint 8 et imposerait une migration ESLint 9.

## 8. Faisabilité de l’export statique

Recherche effectuée :

```powershell
rg -n "cookies\(|headers\(|draftMode\(|revalidate|dynamic\s*=|force-dynamic|generateStaticParams|notFound\(|redirect\(|middleware|ImageResponse|next/headers|next/server|next/image|remotePatterns|rewrites|beforeInteractive|WebSocket|upgrade|route\.ts" frontend/src frontend
```

Résultats applicatifs significatifs :

- `frontend/src/app/page.tsx` utilise `redirect('/fr')`.
- `frontend/src/app/[locale]/blog/[slug]/page.tsx` utilise `notFound()`.
- pas de `cookies()`;
- pas de `headers()`;
- pas de `draftMode()`;
- pas de `revalidate`;
- pas de `dynamic = 'force-dynamic'`;
- pas de middleware;
- pas de `next/server`;
- pas de route API active;
- pas de `next/image`.

Évaluation : **POSSIBLE AVEC ADAPTATIONS MINEURES**.

Adaptations nécessaires probables :

- ajouter `generateStaticParams` pour les routes dynamiques `[locale]` et `products/[id]`;
- traiter explicitement la route `blog/[slug]` qui appelle actuellement `notFound()` systématiquement;
- remplacer ou valider le `redirect('/fr')` racine dans un contexte `output: 'export'`;
- vérifier que tous les liens et images locales fonctionnent après export;
- remplacer `next start` par un hébergement de fichiers statiques pour la validation runtime exportée.

Intérêt sécurité :

- réduit fortement l'exposition serveur Next pour ce MVP;
- ne corrige pas les packages vulnérables dans le lockfile, mais réduit l'exploitabilité runtime si le site n'est plus servi par `next start`.

## 9. Comparaison des stratégies

| Stratégie | Réduit l’exposition runtime | Corrige Next | Corrige PostCSS | Corrige ESLint/glob | Régression | Effort | Recommandation |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| A — Mise à jour corrective dans Next 14 | Non | Non | Non | Non | Faible | Faible | Rejetée |
| B — Export statique | Oui | Non | Non | Non | Moyenne | Moyen | Mitigation immédiate recommandée |
| C — Migration Next 15 corrigée | Oui/partiellement | Oui, à partir de la cible commune validée | À confirmer dans l’arbre cible; PostCSS direct à corriger séparément | Non nécessairement | Moyenne | Moyen | Remédiation runtime requise |
| D — Migration coordonnée Next + ESLint | Oui | Oui | À confirmer après installation | Oui si l’arbre cible retire `glob` vulnérable | Moyenne à élevée | Moyen à élevé | Remédiation complète candidate |
| E — Acceptation temporaire documentée | Non | Non | Non | Non | Faible | Faible | Repli temporaire uniquement |

## 10. Contrôles compensatoires

- Ne pas exposer le serveur de développement.
- Ne pas traiter de données non fiables dans le frontend.
- Limiter les requêtes, délais, tailles de corps et débits au reverse proxy lorsque `next start` est utilisé.
- Maintenir l’absence de routes API actives.
- Maintenir l’absence de middleware complexe et de rewrites.
- Ne pas activer d’optimisation d’images distantes sans décision.
- Ne pas exécuter le CLI `glob` avec des arguments externes.
- Limiter le lint au code contrôlé du dépôt.
- Ne pas accepter de CSS ou de styles arbitraires provenant d’utilisateurs.
- Isoler le service Next.
- Réexaminer la décision avant toute contribution externe non fiable.

## 11. Recommandation

### MESURE IMMÉDIATE DE MITIGATION

Préparer un lot d’export statique contrôlé, sans changement initial de dépendance, afin de supprimer l’exposition publique d’un serveur Next 14.

Cette mesure ne corrige ni les dépendances vulnérables ni les entrées `npm audit`. Elle réduit uniquement la surface d’exposition runtime liée à `next start`.

Classement : **POSSIBLE AVEC ADAPTATIONS MINEURES**.

Fichiers susceptibles d’être modifiés dans le lot d’export :

- `frontend/next.config.js`;
- les routes dynamiques sous `frontend/src/app/[locale]`;
- éventuellement `frontend/src/app/page.tsx`;
- les scripts npm nécessaires à la validation de l’export.

Tests requis :

- lint;
- typecheck;
- build;
- validation de toutes les routes exportées;
- validation des assets et images locales;
- validation de la navigation;
- validation du formulaire désactivé.

Conditions de GO :

- paramètres statiques finis pour toutes les routes dynamiques;
- aucun besoin serveur réel;
- build statique complet;
- validation fonctionnelle de l’export.

Conditions de NO-GO :

- route dynamique non exportable sans refonte importante;
- dépendance réelle au runtime serveur;
- régression de navigation ou d’assets.

### REMÉDIATION TECHNIQUE REQUISE

Planifier ensuite une migration coordonnée vers une version Next 15 corrigée.

Version minimale commune candidate : `15.5.16`.

Une version plus récente de la même branche, telle que `15.5.20`, pourra être évaluée sans passage automatique à Next 16.

La migration devra :

- vérifier l’instance PostCSS embarquée par Next;
- mettre à jour séparément l’instance PostCSS directe;
- aligner `eslint-config-next`;
- confirmer la disparition ou non de `glob@10.3.10`;
- relancer les audits complet et production;
- valider lint, typecheck, build et runtime.

### STRATÉGIE DE REPLI

Maintenir temporairement Next 14 derrière les contrôles compensatoires documentés, sans exposition publique non maîtrisée, uniquement si l’export statique et la migration sont bloqués.

### STRATÉGIES REJETÉES

- Mise à jour corrective dans Next 14 : aucune version corrigée disponible.
- Migration directe et automatique vers Next 16 : risque de régression trop élevé.
- `npm audit fix --force` : migration majeure non contrôlée.
- Override manuel de PostCSS embarqué par Next : compatibilité non démontrée.

### PRÉREQUIS

- décision PM sur le lot d’export statique;
- environnement Node cible confirmé;
- backend et admin maintenus en quarantaine;
- aucune nouvelle API ou middleware avant décision.

### RISQUES RÉSIDUELS

- `next@14.2.35` demeure signalé tant qu’il n’est pas migré;
- `eslint-config-next@14.2.35` conserve le chemin vulnérable vers `glob`;
- les deux instances PostCSS restent inférieures à `8.5.10`;
- l’export statique ne nettoie pas le lockfile.

### PROCHAIN LOT PROPOSÉ

`BF-REPRISE-005C — Prototype contrôlé d’export statique frontend`

## 12. Plan du prochain lot

1. Configurer temporairement `output: 'export'`.
2. Définir les paramètres statiques pour les locales.
3. Définir les paramètres statiques pour les produits.
4. Résoudre le cas de `blog/[slug]`.
5. Valider ou remplacer la redirection racine.
6. Construire l’export.
7. Servir les fichiers statiques sans `next start`.
8. Tester les routes, assets, images et liens.
9. Documenter le GO ou le NO-GO.

## 13. Commandes exécutées

- Vérification Git initiale.
- Audits npm complet et production.
- Inspection de l’arbre de dépendances.
- Lecture des versions disponibles dans le registre npm.
- Inspection des surfaces dynamiques Next.js.
- Lint.
- Typecheck.
- Build.
- Vérification du diff.

## 14. Confirmation de non-modification

Aucune modification n’a été effectuée sur :

- `frontend/package.json`;
- `frontend/package-lock.json`;
- `frontend/src/**`;
- `frontend/next.config.js`;
- `frontend/.eslintrc.json`;
- `backend/**`;
- `admin/**`.

Les fichiers temporaires d’audit ont été supprimés avant le commit.
