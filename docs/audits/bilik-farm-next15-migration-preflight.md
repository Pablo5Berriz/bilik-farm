# Préflight de migration Next.js 15 — Bilik Farm

## 1. Baseline

Lot : BF-REPRISE-006A — Préflight de migration Next.js 15 finalisé après reprises documentaires.

- Branche : `main`.
- Baseline Git de finalisation : `610eaada5d4b1ecd710c90f77930794e97b9d0a9`.
- Next actuel : `14.2.35`.
- React : `18.3.1`.
- React DOM : `18.3.1`.
- `eslint-config-next` : `14.2.35`.
- ESLint : `8.57.1`.
- TypeScript résolu : `5.9.3`.
- Node de validation : `22.17.1`.
- Export : `output: 'export'`.
- Trailing slash : `true`.

## 2. Cibles techniques

- Next : `15.5.20`.
- `eslint-config-next` : `15.5.20`.
- PostCSS direct : `8.5.19`.
- React : `18.3.1` conservé.
- React DOM : `18.3.1` conservé.
- ESLint : `8.57.1` conservé.
- TypeScript : `5.9.3` conservé.

Next 16, React 19 et ESLint 9 sont hors périmètre.

## 3. Matrice des dépendances

| Dépendance | Version actuelle ou déclarée | Cible | Statut | Action |
| --- | --- | --- | --- | --- |
| `next` | `14.2.35` | `15.5.20` | obligatoire | migrer la dépendance directe |
| `eslint-config-next` | `14.2.35` | `15.5.20` | obligatoire | aligner sur Next |
| `@next/eslint-plugin-next` | `14.2.35` transitive | `15.5.20` transitive | automatique | laisser `eslint-config-next` résoudre le plugin |
| `glob` | `10.3.10` transitive | absent du chemin cible observé | automatique | confirmer avec `npm ls` et les audits |
| `postcss` direct | `8.5.8` | `8.5.19` | obligatoire | migrer la dépendance directe |
| `postcss` transitif de Next | `8.4.31` déclaré par Next `15.5.20` | à observer après installation | conditionnel | aucune avant inspection de l'arbre réellement installé |
| `react` | `18.3.1` | `18.3.1` | conservé | aucune mise à niveau |
| `react-dom` | `18.3.1` | `18.3.1` | conservé | aucune mise à niveau |
| `eslint` | `8.57.1` | `8.57.1` | conservé | aucune mise à niveau |
| `typescript` | `5.9.3` résolue | `5.9.3` | conservé | aucune mise à niveau |

## 4. Matrice de sécurité

| Problème logique | État actuel | Traitement projeté | Contrôle requis |
| --- | --- | --- | --- |
| `next` | `14.2.35` affecté par les avis recensés | migrer vers `15.5.20` | audits complet et production après installation |
| `postcss` direct | `8.5.8`, affecté car `<8.5.10` | migrer vers `8.5.19` | vérifier la version résolue et le build CSS |
| `postcss` transitif de Next | Next `15.5.20` déclare PostCSS `8.4.31`; l'arbre réel reste inconnu | inspecter après installation | `npm ls postcss` et audits; si une version `<8.5.10` subsiste, STOP et retour PM; aucun override automatique |
| `eslint-config-next / @next/eslint-plugin-next` | chaîne actuelle `14.2.35` | migrer vers `15.5.20` | confirmer l'arbre et l'audit complet |
| `glob` | `10.3.10` via le plugin actuel | disparition attendue du chemin vulnérable | confirmer avec `npm ls` et l'audit complet |

Projection : La migration coordonnée doit traiter les entrées liées à Next et à la chaîne ESLint identifiée. PostCSS direct sera migré vers `8.5.19`. L'état du PostCSS transitif sera déterminé exclusivement après installation et inspection de l'arbre réel. Aucun override n'est préautorisé.

## 5. Impact code Next 15

| Fichier | État actuel | Adaptation prévue | Risque |
| --- | --- | --- | --- |
| `frontend/src/app/[locale]/layout.tsx` | `params: { locale: string }` | typer `params` comme Promise et résoudre avant utilisation | faible |
| `frontend/src/app/[locale]/page.tsx` | `params: { locale: string }` | typer `params` comme Promise et résoudre avant utilisation | faible |
| `frontend/src/app/[locale]/about/page.tsx` | `params: { locale: string }` | typer `params` comme Promise et résoudre avant utilisation | faible |
| `frontend/src/app/[locale]/products/page.tsx` | `params: { locale: string }` | typer `params` comme Promise et résoudre avant utilisation | faible |
| `frontend/src/app/[locale]/products/[id]/page.tsx` | `params: { locale: string; id: string }` | typer `params` comme Promise et utiliser l'objet résolu | faible à moyen |
| `frontend/src/app/[locale]/services/feedmill/page.tsx` | `params: { locale: string }` | typer `params` comme Promise et résoudre avant utilisation | faible |

## 6. Compatibilité de l’export statique

La migration doit conserver une seule fois les propriétés suivantes :

- `output: 'export'`;
- `trailingSlash: true`;
- `generateStaticParams`;
- génération de `out/`;
- service par serveur de fichiers statiques;
- absence de `next start`.

## 7. Plan BF-REPRISE-006B

### Phase 1 — Migration

1. `next` → `15.5.20`.
2. `eslint-config-next` → `15.5.20`.
3. PostCSS direct → `8.5.19`.
4. Conserver React `18.3.1`.
5. Conserver React DOM `18.3.1`.
6. Conserver ESLint `8.57.1`.
7. Adapter les six signatures `params`.
8. Régénérer normalement le lockfile.

### Phase 2 — Inspection

9. `npm ls`.
10. `npm ls postcss`.
11. `npm audit`.
12. `npm audit --omit=dev`.

### Gate PostCSS

- Si aucune version `<8.5.10` ne subsiste : **CONTINUER**.
- Si une version `<8.5.10` subsiste : **STOP ET RETOUR PM**.

Aucun override.

### Phase 3 — Validation

13. Lint.
14. Typecheck.
15. Build.
16. Contrôle de `out/`.
17. Serveur statique.
18. Tests des routes.
19. Tests des liens.
20. Tests des assets.

## 8. Risques et rollback

| Risque | Contrôle | Critère d'arrêt ou rollback |
| --- | --- | --- |
| migration `params` | typecheck et build | erreur de type ou route non générée |
| lockfile | `npm ls` et diff | conflit de peers ou dépendance hors périmètre |
| PostCSS direct | build CSS et audit | erreur de build ou régression CSS |
| PostCSS transitif | `npm ls postcss` et audits | version `<8.5.10` : STOP et retour PM |
| export statique | inventaire de `out/` et tests HTTP | page absente, 404/500, lien ou asset cassé |

Rollback : revenir au SHA précédant le futur lot de migration `BF-REPRISE-006B`, restaurer ensemble les dépendances, le lockfile et les six signatures `params`, puis refaire les validations.

## 9. Hors périmètre

- Next 16;
- React 19;
- ESLint 9;
- Turbopack;
- flat config ESLint;
- correction des 27 warnings `no-img-element`;
- backend;
- admin;
- UI;
- contenu métier;
- override PostCSS sans nouvelle directive PM.

## 10. Verdict technique

CANDIDAT À MIGRATION CONTRÔLÉE SOUS AUTORISATION PM
