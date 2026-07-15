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

| Stratégie | Réduit l'exposition runtime | Corrige Next | Corrige PostCSS | Corrige ESLint/glob | Régression | Effort | Recommandation |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| A - Mise à jour corrective dans Next 14 | non | non | non | non | faible | faible | rejetée |
| B - Export statique | oui | non | non | non | moyenne | moyen | mitigation immédiate recommandée |
| C - Migration Next 15 corrigée | oui/partiellement | oui, cible minimale commune `15.5.16` | à vérifier dans l'arbre cible; direct `postcss` à corriger séparément | non nécessairement | moyenne | moyen | remédiation technique requise ensuite |
| D - Migration coordonnée Next + ESLint | oui | oui | à vérifier | oui si `eslint-config-next` 15+ retire `glob` | moyenne à élevée | moyen à élevé | stratégie complète de repli |
| E - Acceptation temporaire documentée | non | non | non | non | faible | faible | temporaire seulement |

## 10. Contrôles compensatoires

Contrôles immédiats applicables sans modification dans ce lot :

- ne pas exposer de serveur de développement;
- ne pas traiter de données non fiables dans le frontend;
- limiter les requêtes au reverse proxy si `next start` est exposé;
- appliquer des délais, limites de corps et limites de débit au niveau proxy;
- maintenir l'absence de routes API actives;
- maintenir l'absence de middleware complexe;
- ne pas configurer `images.remotePatterns` sans décision;
- ne pas utiliser `next/image` remote optimizer avant correction;
- ne pas exécuter le CLI `glob` avec des arguments externes;
- limiter le lint au code du dépôt;
- ne pas accepter de CSS utilisateur;
- isoler le service Next;
- réviser la décision avant toute ouverture à des contributions externes non fiables.

## 11. Recommandation

### MESURE IMMÉDIATE DE MITIGATION

Préparer un lot d'export statique contrôlé, sans changement de dépendance initial, afin de réduire l'exposition d'un serveur Next 14 public.

Classement : **POSSIBLE AVEC ADAPTATIONS MINEURES**.

Cette mesure ne corrige pas les dépendances vulnérables et ne fera pas disparaître les entrées `npm audit`. Elle réduit l'exploitabilité runtime liée à l'exposition de `next start`.

Fichiers susceptibles d'être modifiés dans ce prochain lot :

- `frontend/next.config.js`;
- routes dynamiques sous `frontend/src/app/[locale]`;
- éventuellement `frontend/src/app/page.tsx`;
- scripts npm si une commande export/serve statique est retenue.

Tests requis :

- `npm run lint`;
- `tsc --noEmit`;
- `npm run build`;
- validation des routes exportées;
- validation des images locales;
- validation navigation et formulaire désactivé.

Procédure de retour arrière :

- revert du commit d'export statique;
- retour au mode `next start`;
- conservation du rapport de risque.

Conditions de GO :

- routes dynamiques exportables avec paramètres finis;
- aucun besoin serveur confirmé;
- validation runtime statique complète.

Conditions de NO-GO :

- besoin serveur App Router réel;
- route dynamique non exportable sans refonte;
- régression de navigation ou d'assets.

### REMÉDIATION TECHNIQUE REQUISE

Préparer ensuite une migration coordonnée vers une version Next 15 corrigée et un arbre ESLint compatible.

Version Next minimale commune candidate : `15.5.16`, car c'est le seuil le plus élevé parmi les plages Next observées. Une cible plus récente de la même branche, comme `15.5.20`, peut être étudiée dans le lot de remédiation sans passer automatiquement à Next 16.

Cette stratégie corrige les advisories Next selon les plages d'audit, mais doit confirmer après installation :

- statut `npm audit --omit=dev`;
- statut `npm audit`;
- présence ou absence persistante de `postcss@8.4.31`;
- correction de l'instance directe `postcss@8.5.8`;
- compatibilité lint/build/runtime.

### STRATÉGIE DE REPLI

Maintenir temporairement Next 14 uniquement derrière des contrôles compensatoires, sans exposition publique non maîtrisée.

### STRATÉGIES REJETÉES

- Mise à jour corrective dans Next 14 : rejetée, aucune version Next 14 corrigée disponible.
- Migration directe Next 16 : rejetée à ce stade, car Node `>=20.9.0` est requis et `eslint-config-next@16` impose ESLint 9.
- `npm audit fix --force` : rejeté, car il force une migration majeure sans analyse de régression.
- Override manuel de `postcss` embarqué par Next : rejeté sans preuve de compatibilité.

### PRÉREQUIS

- décision PM sur priorité : mitigation d'exposition ou correction lockfile;
- environnement Node cible confirmé;
- maintien du backend/admin en quarantaine;
- aucun ajout d'API ou middleware avant décision.

### RISQUES RÉSIDUELS

- tant que `next@14.2.35` reste installé, `npm audit` continuera de signaler les advisories runtime;
- tant que `eslint-config-next@14.2.35` reste installé, `glob@10.3.10` restera signalé en dev;
- tant que `postcss@8.5.8` direct reste installé, il reste dans la plage `<8.5.10`;
- l'export statique réduit l'exposition serveur mais ne nettoie pas l'audit npm.

### PROCHAIN LOT PROPOSÉ

`BF-REPRISE-005C - Faisabilité et prototype d'export statique frontend`

Objectif : modifier uniquement la configuration et les routes nécessaires pour produire un export statique validé, sans toucher aux versions de dépendances.

## 12. Plan du prochain lot

1. Ajouter ou ajuster la configuration `output: 'export'` dans un lot dédié.
2. Définir les paramètres statiques pour locales et produits.
3. Clarifier la route `blog/[slug]` actuellement `notFound()`.
4. Remplacer ou valider la redirection racine.
5. Construire et servir l'export statique.
6. Comparer les routes demandées et les assets.
7. Décider ensuite si une migration Next 15 reste nécessaire pour nettoyer le lockfile.

## 13. Commandes exécutées

```powershell
git status --short --branch
git rev-parse HEAD
npm audit --json > npm-audit-full.json
npm audit --omit=dev --json > npm-audit-prod.json
npm ls next postcss eslint eslint-config-next @next/eslint-plugin-next glob --all
npm view next@14 version
npm view next@15 version
npm view next@16 version
npm view eslint-config-next@14 version
npm view eslint-config-next@15 version
npm view eslint-config-next@16 version
npm view next@14.2.35 engines peerDependencies dependencies
npm view next@15.5.16 engines peerDependencies dependencies
npm view next@15.5.20 engines peerDependencies dependencies
npm view next@16.2.10 engines peerDependencies dependencies
npm view eslint-config-next@14.2.35 peerDependencies dependencies
npm view eslint-config-next@15.5.16 peerDependencies dependencies
npm view eslint-config-next@15.5.20 peerDependencies dependencies
npm view eslint-config-next@16.2.10 peerDependencies dependencies
npm view @next/eslint-plugin-next@15.5.16 dependencies
npm view @next/eslint-plugin-next@15.5.20 dependencies
npm view @next/eslint-plugin-next@16.2.10 dependencies
npm view glob@10.5.0 version engines
npm view postcss@8.5.10 version engines
rg -n "cookies\(|headers\(|draftMode\(|revalidate|dynamic\s*=|force-dynamic|generateStaticParams|notFound\(|redirect\(|middleware|ImageResponse|next/headers|next/server|next/image|remotePatterns|rewrites|beforeInteractive|WebSocket|upgrade|route\.ts" frontend/src frontend
```

## 14. Confirmation de non-modification

Aucune modification effectuée sur :

- `frontend/package.json`;
- `frontend/package-lock.json`;
- `frontend/src/**`;
- `frontend/next.config.js`;
- `frontend/.eslintrc.json`;
- `backend/**`;
- `admin/**`.

Les fichiers temporaires `npm-audit-full.json` et `npm-audit-prod.json` doivent être supprimés avant commit.
