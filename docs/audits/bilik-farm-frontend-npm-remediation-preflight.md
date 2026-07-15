# Préflight de remédiation npm frontend — Bilik Farm

## 1. Point de départ

- Lot : `BF-REPRISE-005B - Préflight de stratégie de remédiation npm`.
- Branche : `main`.
- SHA de départ du lot initial : `ca1d1febc02b1654dafb5cecf85e4f68ca458c3d`.
- Frontend concerné : `frontend`.
- Objectif : définir une stratégie de remédiation sans modifier les dépendances.

## 2. Audits npm

Deux audits ont été analysés :

- audit complet : `npm audit --json`;
- audit production : `npm audit --omit=dev --json`.

Résultats :

| Audit | Entrées npm | Sévérité |
| --- | ---: | --- |
| complet | 5 | 1 moderate, 4 high |
| production | 2 | 1 moderate, 1 high |

Entrées complètes : `next`, `postcss`, `eslint-config-next`, `@next/eslint-plugin-next`, `glob`.

Entrées production : `next` et `postcss` embarqué par `next`.

## 3. Advisories uniques

Les cinq entrées npm regroupent seize advisories uniques :

| Paquet | Version installée | Sévérité agrégée | Première correction observée | Décision |
| --- | ---: | --- | ---: | --- |
| `next` | 14.2.35 | high | 15.5.16 pour couvrir toutes les plages observées | migration Next requise |
| `postcss` via Next | 8.4.31 | moderate | 8.5.10 | à vérifier après migration Next |
| `postcss` direct | 8.5.8 | moderate | 8.5.10 | mise à jour directe contrôlée |
| `eslint-config-next` | 14.2.35 | high | via arbre 15.x à confirmer | migration outillage requise |
| `glob` | 10.3.10 | high | 10.5.0 | correction transitive attendue via outillage |

Conclusion : aucune correction Next 14 n’est disponible pour les advisories Next relevées.

## 4. Arbre de dépendances

Arbre simplifié :

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

Production réelle selon l’audit `--omit=dev` : `next@14.2.35` et `next/node_modules/postcss@8.4.31`.

## 5. Versions corrigées disponibles

- Next 14 : dernière version observée `14.2.35`, déjà installée.
- Next 15 : versions observées jusqu’à `15.5.20`.
- Next 16 : versions observées jusqu’à `16.2.10`.
- `postcss@8.5.10` existe.
- `glob@10.5.0` existe.
- `eslint-config-next@15.5.x` remplace l’arbre `glob` par un arbre `fast-glob` selon les métadonnées observées.

## 6. Compatibilité Next 14

La branche Next 14 publiée s’arrête à `14.2.35`.

Conclusion : aucune mise à jour corrective Next 14 n’est disponible pour ce projet.

Point PostCSS : les versions Next candidates lues déclarent encore `postcss@8.4.31`; l’état réel devra donc être vérifié par audit après installation dans un lot autorisé.

## 7. Compatibilité ESLint

État actuel :

- `eslint@8.57.1`;
- `eslint-config-next@14.2.35`;
- `@next/eslint-plugin-next@14.2.35`;
- `glob@10.3.10`.

Une correction dev-only semble possible via `eslint-config-next@15.5.x`, mais elle doit être coordonnée avec la migration Next pour éviter un outillage désynchronisé.

## 8. Faisabilité de l’export statique

Surfaces observées :

- App Router Next.js;
- routes dynamiques `[locale]`, `products/[id]`, `blog/[slug]`;
- redirection racine vers `/fr`;
- absence de routes API actives;
- absence de middleware;
- absence de `next/image`;
- absence de `cookies()`, `headers()`, `draftMode()` et `revalidate`.

Évaluation : **POSSIBLE AVEC ADAPTATIONS MINEURES**.

Adaptations probables :

- ajouter les paramètres statiques pour les locales et produits;
- traiter le cas `blog/[slug]`;
- valider ou remplacer la redirection racine;
- vérifier routes, assets, images locales et navigation.

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
