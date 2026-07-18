# Préflight de migration Next.js 15 — Bilik Farm

## Baseline

- Lot : `BF-REPRISE-006A`, finalisé par la reprise documentaire `BF-REPRISE-006A-R2`.
- Branche : `main`.
- Baseline opérationnelle de la reprise finale : `aa06f544983353ba20b5f7d674b9e66dca82797b`.
- Frontend actuel : Next.js `14.2.35`, React et React DOM `18.3.1`, `eslint-config-next` `14.2.35`, ESLint `8.57.1`.
- Runtime de contrôle : Node.js `22.17.1` (compatible avec la contrainte Next 15 `^18.18.0 || ^19.8.0 || >=20.0.0`).
- TypeScript résolu : `5.9.3` (déclaration projet `^5.4.5`).
- Export actuel : `output: 'export'`, `trailingSlash: true`.
- Périmètre : analyse et documentation seulement ; aucune dépendance ni code applicatif modifié.

## Versions analysées et cible recommandée

Le registre npm expose les correctifs de la branche 15 jusqu'à `15.5.20`. La version `15.5.16`, précédemment candidate minimale commune, couvre les plages d'avis observées jusqu'à `<15.5.16`, mais n'est plus la dernière version de maintenance 15. La balise npm `backport` pointe vers `15.5.20`.

**Cible recommandée : Next.js `15.5.20`.**

Raisons :

- dernière version stable publiée de la branche 15.5 observée ;
- inclut les correctifs de sécurité contenus dans `15.5.16` et les backports ultérieurs ;
- reste strictement dans Next 15 ;
- accepte React/React DOM `^18.2.0` ou `^19.0.0` selon ses métadonnées npm ;
- accepte le Node.js actuellement utilisé ;
- conserve l'export statique et `generateStaticParams`.

Références officielles : [guide de migration Next 15](https://nextjs.org/docs/app/guides/upgrading/version-15), [export statique Next 15](https://nextjs.org/docs/15/pages/guides/static-exports), [Next.js 15.5](https://nextjs.org/blog/next-15-5).

### Relevé npm de reprise BF-REPRISE-006A-R1

Métadonnées relues directement sur le registre npm le 17 juillet 2026 :

- `npm view postcss version` retourne `8.5.19` ;
- `npm view postcss versions --json` contient `8.5.19` ;
- `npm view postcss@8.5.19 version dist.tarball dist.integrity --json` retourne la version, le tarball `https://registry.npmjs.org/postcss/-/postcss-8.5.19.tgz` et une intégrité SHA-512 ;
- `npm view postcss dist-tags --json` associe `latest` à `8.5.19` ;
- le registre date la publication de `8.5.19` du 13 juillet 2026 ;
- `npm view next@15.5.20 version` et `npm view eslint-config-next@15.5.20 version` retournent tous deux `15.5.20`.

Ainsi, `postcss@8.5.19` est une version npm existante et vérifiée au moment de cette reprise. La version cible directe peut être fixée à `8.5.19`. En revanche, aucune version transitive réellement résolue après migration ne peut être affirmée sans installation : seule la déclaration du package Next peut être vérifiée dans ce lot.

## Matrice des dépendances

| Dépendance | Version installée | Cible proposée | Statut | Justification |
| --- | ---: | ---: | --- | --- |
| `next` | `14.2.35` | `15.5.20` | obligatoire | cible de migration et correctifs Next connus |
| `eslint-config-next` | `14.2.35` | `15.5.20` | obligatoire | alignement avec Next ; remplace le chemin vulnérable vers `glob` |
| `@next/eslint-plugin-next` | `14.2.35` transitive | `15.5.20` transitive | automatique | fourni par `eslint-config-next`; utilise `fast-glob@3.3.1` |
| `glob` | `10.3.10` transitive | absent de ce chemin | automatique | le plugin cible ne déclare plus `glob`, mais `fast-glob` |
| `postcss` direct | `8.5.8` | `8.5.19` | obligatoire sécurité | l'avis affecte `<8.5.10`; `8.5.19` est la dernière version observée |
| `postcss` sous Next | `8.4.31` | à observer après installation | conditionnel | aucune action avant inspection de l'arbre réellement résolu |
| `react` | `18.3.1` | inchangée | recommandé minimal | satisfait le peer npm `^18.2.0` de Next `15.5.20` |
| `react-dom` | `18.3.1` | inchangée | recommandé minimal | doit rester aligné avec React |
| `eslint` | `8.57.1` | inchangée | recommandé minimal | `eslint-config-next@15.5.20` accepte ESLint 7, 8 ou 9 |
| `typescript` | `5.9.3` résolue | inchangée | recommandé minimal | `eslint-config-next` accepte TypeScript `>=3.3.1`; Next 15 supporte cette version |

React 19, ESLint 9 et Next 16 sont hors périmètre et non nécessaires à cette migration étroite.

## Matrice de sécurité

Baseline `npm audit --json` : 5 entrées, soit 1 moderate et 4 high.

| Entrée | Version/origine actuelle | Correction requise observée | Effet de Next 15.5.20 | Action complémentaire |
| --- | --- | --- | --- | --- |
| `next` | `14.2.35`, directe | seuil commun au moins `15.5.16` | oui pour les avis Next listés | aucune, hors vérification post-installation |
| `postcss` sous Next | `8.4.31`, transitive | `>=8.5.10` | Next `15.5.20` déclare `8.4.31`; l'arbre installé reste à observer | si une version `<8.5.10` subsiste, STOP et décision PM séparée avant tout override |
| `postcss` direct | `8.5.8`, directe | `>=8.5.10` | non | mettre à jour vers `8.5.19` |
| `eslint-config-next` | `14.2.35`, directe dev | arbre plugin corrigé | oui avec `15.5.20` | aligner explicitement la version |
| `@next/eslint-plugin-next` | `14.2.35`, transitive dev | retirer le `glob` vulnérable | oui avec `15.5.20` | automatique via config cible |
| `glob` | `10.3.10`, transitive dev | `>=10.5.0` ou suppression du chemin | oui, chemin remplacé par `fast-glob` | confirmer avec `npm ls` et audit |

Projection : Next et la chaîne ESLint/glob sont corrigibles par la migration coordonnée, et PostCSS direct doit évoluer séparément. Pour PostCSS transitif, aucune conclusion sur l'arbre futur ne sera tirée avant l'installation. Si une version `<8.5.10` subsiste, la migration s'arrête et le constat est retourné au PM sans appliquer d'override.

## Impact code Next 15

Next 15 rend `params` asynchrone dans les pages et layouts App Router. L'accès synchrone reste temporairement toléré, mais l'adaptation explicite évite avertissements et dette de migration. Aucun `searchParams`, `cookies()`, `headers()`, `draftMode()`, `notFound()` ou `redirect()` actif n'a été trouvé.

| Fichier | API actuelle | Changement attendu | Nécessité | Risque |
| --- | --- | --- | --- | --- |
| `frontend/src/app/[locale]/layout.tsx` | `params: { locale: string }` | `params: Promise<{ locale: string }>` et `await params`; layout `async` | obligatoire | faible |
| `frontend/src/app/[locale]/page.tsx` | `params: { locale: string }` | type Promise et `await params`; page `async` | obligatoire | faible |
| `frontend/src/app/[locale]/about/page.tsx` | idem | idem | obligatoire | faible |
| `frontend/src/app/[locale]/products/page.tsx` | idem | idem | obligatoire | faible |
| `frontend/src/app/[locale]/products/[id]/page.tsx` | `params: { locale; id }` | type Promise, `await params`, puis utiliser l'objet résolu | obligatoire | faible à moyen |
| `frontend/src/app/[locale]/services/feedmill/page.tsx` | `params: { locale: string }` | type Promise et `await params`; page `async` | obligatoire | faible |

Éléments sans adaptation attendue : metadata statique, `Link`, balises `<img>`, page racine à redirection HTML, pages sans `params`, `generateStaticParams`, `output: 'export'` et `trailingSlash`.

Référence : [APIs de requête asynchrones de Next 15](https://nextjs.org/docs/app/guides/upgrading/version-15#async-request-apis).

## Compatibilité de l'export statique

La cible conserve les fonctions nécessaires :

- `next build` génère toujours `out/` avec `output: 'export'` ;
- `trailingSlash: true` continue de produire des répertoires avec `index.html` ;
- `generateStaticParams` reste supporté et s'exécute au build ;
- `[locale]` reste borné à `fr` ;
- les 15 valeurs de `products/[id]` restent générées ;
- aucune API, middleware, rewrite, header dynamique, ISR ou runtime Node applicatif n'est requis ;
- le résultat demeure compatible avec un serveur de fichiers statiques et sans `next start`.

Routes à revalider : `/`, `/fr`, `/fr/about`, `/fr/blog`, `/fr/contact`, `/fr/products`, les 15 fiches `/fr/products/*` et les cinq routes `/fr/services/*`.

## Compatibilité React

Les métadonnées npm de `next@15.5.20` déclarent `react` et `react-dom` compatibles avec `^18.2.0` ou `^19.0.0`. Les versions `18.3.1` installées satisfont donc les peers. Le code n'utilise aucune API nécessitant React 19.

Décision minimale : conserver React et React DOM `18.3.1`. React 19 est hors périmètre et non indispensable.

## Compatibilité ESLint

`eslint-config-next@15.5.20` accepte ESLint `^7.23.0 || ^8.0.0 || ^9.0.0`. ESLint `8.57.1` peut rester. Le script actuel utilise déjà directement la CLI ESLint, ce qui est compatible avec la dépréciation de `next lint` en Next 15.5.

Décision minimale : aligner uniquement `eslint-config-next` sur `15.5.20`, conserver ESLint 8 et préserver `ignorePatterns`, notamment `out/**`.

## Compatibilité PostCSS

### PostCSS direct

La version `8.5.8` est affectée par l'avis `<8.5.10`. La version minimale corrigée est `8.5.10`. La dernière version npm vérifiée est `8.5.19`, retenue comme cible directe. Le changement reste dans PostCSS 8 et présente un risque faible pour Tailwind CSS 3.4 et Autoprefixer, à confirmer par build.

### PostCSS transitif de Next

`next@15.5.20` déclare `postcss: 8.4.31` dans ses métadonnées npm. Cette déclaration ne prouve pas à elle seule la version qui sera effectivement présente dans l'arbre après installation et déduplication.

Décision de contrôle :

1. migrer uniquement les dépendances explicitement autorisées ;
2. effectuer une installation normale ;
3. exécuter `npm ls postcss` ;
4. exécuter les audits complet et production ;
5. observer l'arbre réellement résolu ;
6. si une instance PostCSS `<8.5.10` subsiste, arrêter la migration et retourner le constat au PM ;
7. ne jamais appliquer automatiquement d'override lors du premier passage de migration.

## Plan minimal proposé pour BF-REPRISE-006B

### Obligatoire

1. Migrer `next` vers `15.5.20`.
2. Migrer `eslint-config-next` vers `15.5.20`.
3. Migrer le PostCSS direct vers `8.5.19`.
4. Conserver React `18.3.1`.
5. Conserver React DOM `18.3.1`.
6. Conserver ESLint `8.57.1`.
7. Adapter uniquement les six signatures `params` réellement requises par Next 15.
8. Régénérer normalement le lockfile, sans `--force`, sans `--legacy-peer-deps` et sans `audit fix`.
9. Exécuter `npm ls`.
10. Exécuter les audits complet et production.
11. Exécuter lint, typecheck et build.
12. Valider `out/` depuis un serveur statique.
13. Retester les 26 routes, les liens et les assets.

### Gate PostCSS transitif

Après l'installation, exécuter `npm ls postcss`.

- Si aucune version `<8.5.10` ne subsiste : aucun override.
- Si une version `<8.5.10` subsiste : **STOP**. Documenter l'arbre constaté et retourner au PM.

Aucun override ne doit être appliqué automatiquement dans `BF-REPRISE-006B` sans directive complémentaire.

### Hors périmètre

- React 19 ;
- ESLint 9 ;
- Next 16 ;
- refonte ESLint ou passage au flat config ;
- migration UI, routing, contenu, backend ou admin ;
- adoption de Turbopack ;
- correction opportuniste des 27 avertissements `<img>`.

## Commandes proposées

Dans un lot autorisé, épingler les versions avec une installation npm normale, puis exécuter :

```text
npm ls next react react-dom eslint eslint-config-next postcss @next/eslint-plugin-next glob --all
npm audit
npm audit --omit=dev
npm run lint
npx tsc --noEmit
npm run build
```

Après build, confirmer `out/`, servir directement le dossier avec un serveur statique et répéter les validations HTTP de `BF-REPRISE-005C`.

## Risques et rollback

| Risque | Contrôle | Critère de rollback |
| --- | --- | --- |
| typage async de `params` | typecheck et build | erreur de type ou route non générée |
| modification du rendu statique | inventaire de `out/` et tests HTTP | page absente, 404/500 ou navigation cassée |
| nouvelles règles lint | comparaison à 0 erreur / 27 avertissements | nouvelle erreur non directement corrigeable dans le périmètre |
| PostCSS transitif vulnérable après installation | `npm ls postcss` et audits | STOP et retour PM avant tout override |
| arbre npm inattendu | `npm ls` et deux audits | peer conflict, paquet vulnérable non expliqué ou Next 16 introduit |

Rollback : revenir à la baseline qui sera fixée par le PM avant `BF-REPRISE-006B`, au moyen d'un commit de réversion explicite ; restaurer ensemble `package.json`, `package-lock.json` et les six signatures de pages, puis refaire lint, typecheck, build et test statique. Ne jamais utiliser `git reset --hard` comme procédure de rollback partagée.

## Verdict technique

**CANDIDAT À MIGRATION ÉTROITE.** La migration Next 15 et les adaptations `params` sont à faible risque. PostCSS transitif constitue un gate d'observation : toute version `<8.5.10` impose un arrêt et un retour au PM avant override.
