# Préflight de migration Next.js 15 — Bilik Farm

## Baseline

Lot : BF-REPRISE-006A — Préflight de migration Next.js 15, finalisé après reprises documentaires.
- Branche : `main`.
- Baseline Git de finalisation : `12a41ed2e520fdcfe23975d52e986d134c42337d`.
- Next actuel : `14.2.35`.
- Export actuel : `output: 'export'` avec `trailingSlash: true`.
- Node.js contrôlé : `22.17.1`.
- Périmètre : migration frontend étroite vers Next 15, sans Next 16.

## Cibles techniques

- Next : `14.2.35` vers `15.5.20`.
- `eslint-config-next` : `14.2.35` vers `15.5.20`.
- PostCSS direct : `8.5.8` vers `8.5.19`; seuil corrigé identifié : `8.5.10`.
- React : conserver `18.3.1`.
- React DOM : conserver `18.3.1`.
- ESLint : conserver `8.57.1`.
- TypeScript résolu : conserver `5.9.3`.

Les métadonnées npm vérifient l'existence de `next@15.5.20`, `eslint-config-next@15.5.20` et `postcss@8.5.19`. Next `15.5.20` accepte React et React DOM `^18.2.0` ou `^19.0.0`. `eslint-config-next@15.5.20` accepte ESLint 7, 8 ou 9 et TypeScript `>=3.3.1`.

Références : [migration Next 15](https://nextjs.org/docs/app/guides/upgrading/version-15), [export statique Next 15](https://nextjs.org/docs/15/pages/guides/static-exports), [Next.js 15.5](https://nextjs.org/blog/next-15-5).

## Matrice des dépendances

| Dépendance | Version actuelle ou déclarée | Cible | Statut | Action |
| --- | --- | --- | --- | --- |
| `next` | `14.2.35` | `15.5.20` | obligatoire | migrer la dépendance directe |
| `eslint-config-next` | `14.2.35` | `15.5.20` | obligatoire | aligner sur la cible Next |
| `@next/eslint-plugin-next` | `14.2.35` transitive | `15.5.20` transitive | automatique | laisser `eslint-config-next` résoudre le plugin |
| `glob` | `10.3.10` transitive | absent du chemin cible observé | automatique | confirmer avec `npm ls` et les audits |
| `postcss` direct | `8.5.8` | `8.5.19` | obligatoire | migrer la dépendance directe |
| `postcss` transitif de Next | `8.4.31` déclaré sous Next | à observer après installation | conditionnel | aucune action avant inspection de l'arbre réellement installé |
| `react` | `18.3.1` | `18.3.1` | conservé | aucune mise à niveau |
| `react-dom` | `18.3.1` | `18.3.1` | conservé | aucune mise à niveau |
| `eslint` | `8.57.1` | `8.57.1` | conservé | aucune mise à niveau |
| `typescript` | `5.9.3` résolue | `5.9.3` | conservé | aucune mise à niveau |

## Matrice de sécurité

Baseline `npm audit` : cinq entrées agrégées, soit une moderate et quatre high.

| Problème logique | État actuel | Traitement projeté | Contrôle requis |
| --- | --- | --- | --- |
| Next | `next@14.2.35` affecté par les avis recensés | migrer vers `15.5.20` | audits complet et production après installation |
| PostCSS direct | `8.5.8`, affecté car `<8.5.10` | migrer vers `8.5.19` | vérifier la version résolue et le build CSS |
| PostCSS transitif de Next | Next `15.5.20` déclare PostCSS `8.4.31` | état à déterminer après installation | `npm ls postcss`; audits; STOP et retour PM si une version `<8.5.10` subsiste; aucun override automatique |
| Chaîne ESLint | `eslint-config-next@14.2.35` et plugin associé | migrer la configuration vers `15.5.20` | confirmer l'arbre avec `npm ls` et l'audit complet |
| Glob transitif | `glob@10.3.10` via le plugin actuel | le chemin cible observé utilise `fast-glob` | confirmer la disparition du chemin vulnérable |

Projection : la migration coordonnée vers Next `15.5.20` et `eslint-config-next@15.5.20` doit traiter les entrées directement liées à Next et à la chaîne ESLint concernée. PostCSS direct sera mis à niveau séparément vers `8.5.19`. L'état du PostCSS transitif sera déterminé uniquement après installation et inspection de l'arbre réel. Aucune décision d'override n'est préautorisée.

## Impact code Next 15

Next 15 rend `params` asynchrone dans les pages et layouts App Router. Les six fichiers existants suivants doivent recevoir une seule adaptation : typer `params` comme une promesse et résoudre sa valeur avant utilisation.

| Fichier | État actuel | Adaptation prévue | Risque |
| --- | --- | --- | --- |
| `frontend/src/app/[locale]/layout.tsx` | `params: { locale: string }` | `params: Promise<{ locale: string }>` puis `await params` | faible |
| `frontend/src/app/[locale]/page.tsx` | `params: { locale: string }` | `params: Promise<{ locale: string }>` puis `await params` | faible |
| `frontend/src/app/[locale]/about/page.tsx` | `params: { locale: string }` | `params: Promise<{ locale: string }>` puis `await params` | faible |
| `frontend/src/app/[locale]/products/page.tsx` | `params: { locale: string }` | `params: Promise<{ locale: string }>` puis `await params` | faible |
| `frontend/src/app/[locale]/products/[id]/page.tsx` | `params: { locale: string; id: string }` | type Promise puis utiliser l'objet résolu | faible à moyen |
| `frontend/src/app/[locale]/services/feedmill/page.tsx` | `params: { locale: string }` | `params: Promise<{ locale: string }>` puis `await params` | faible |

Aucun `searchParams`, `cookies()`, `headers()`, `draftMode()`, `notFound()` ou `redirect()` actif n'a été identifié.

## Compatibilité de l'export statique

La cible Next 15 conserve les mécanismes nécessaires :

- `output: 'export'` et génération de `out/` par `next build`;
- `trailingSlash: true`;
- `generateStaticParams` pour `fr` et les 15 identifiants produits;
- service par un serveur de fichiers statiques;
- absence de dépendance à `next start`.

Les 26 routes publiques, les liens internes et les assets devront être retestés après migration.

## Plan unique pour BF-REPRISE-006B

### Phase 1 — Migration autorisée

1. Migrer `next` vers `15.5.20`.
2. Migrer `eslint-config-next` vers `15.5.20`.
3. Migrer PostCSS direct vers `8.5.19`.
4. Conserver React `18.3.1`.
5. Conserver React DOM `18.3.1`.
6. Conserver ESLint `8.57.1`.
7. Adapter les six usages de `params` nécessaires.
8. Régénérer normalement `package-lock.json`, sans `--force`, sans `--legacy-peer-deps` et sans `audit fix`.

### Phase 2 — Inspection obligatoire

9. Exécuter `npm ls`.
10. Exécuter `npm ls postcss`.
11. Exécuter les audits complet et production.

### Gate PostCSS

- Si aucune version PostCSS `<8.5.10` ne subsiste : **CONTINUER**.
- Si une version PostCSS `<8.5.10` subsiste : **STOP IMMÉDIAT**.

En cas d'arrêt, retourner au PM l'arbre `npm ls postcss`, l'origine exacte de la version, l'audit complet et l'audit production. Aucun override ne doit être appliqué.

### Phase 3 — Validation si le gate autorise la poursuite

12. Exécuter le lint.
13. Exécuter le typecheck.
14. Exécuter le build.
15. Vérifier `out/`.
16. Servir `out/` depuis un serveur statique.
17. Tester toutes les routes.
18. Tester les liens.
19. Tester les assets.

## Risques et rollback

| Risque | Contrôle | Critère d'arrêt ou rollback |
| --- | --- | --- |
| typage asynchrone de `params` | typecheck et build | erreur de type ou route non générée |
| régression de l'export | inventaire de `out/` et tests HTTP | page absente, 404/500 ou navigation cassée |
| nouvelles règles lint | comparaison avec la baseline | nouvelle erreur non traitable dans le périmètre |
| PostCSS transitif vulnérable | `npm ls postcss` et audits | STOP et retour PM |
| arbre npm inattendu | `npm ls` et audits | peer conflict ou dépendance non autorisée |

Rollback : restaurer ensemble `package.json`, `package-lock.json` et les six adaptations `params` au moyen d'un commit de réversion explicite, puis refaire lint, typecheck, build et validation statique.

## Hors périmètre

- React 19;
- ESLint 9;
- Next 16;
- Turbopack;
- flat config ESLint;
- correction des 27 avertissements `no-img-element`;
- backend;
- admin;
- refonte UI;
- changements métier;
- override PostCSS sans nouvelle directive PM.

## Verdict technique

**CANDIDAT À MIGRATION ÉTROITE.** Le gate PostCSS impose une inspection après installation et interdit tout override automatique.
