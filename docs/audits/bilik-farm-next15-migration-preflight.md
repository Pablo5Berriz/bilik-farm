# Préflight de migration Next.js 15 — Bilik Farm

## Baseline

- Lot : `BF-REPRISE-006A`.
- Branche : `main`.
- SHA initial : `086050ba5c309c4956a3a8919a352a4a1a79fad1`.
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
| `postcss` sous Next | `8.4.31` | à observer après installation | option conditionnelle à valider | Next `15.5.20` déclare `8.4.31`, mais l'arbre cible n'est pas installé dans ce lot |
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
| `postcss` sous Next | `8.4.31`, transitive | `>=8.5.10` | non démontré : Next `15.5.20` déclare `8.4.31`, mais la résolution cible reste à observer | envisager un override ciblé vers une version publiée et corrigée seulement si l'installation conserve une version vulnérable |
| `postcss` direct | `8.5.8`, directe | `>=8.5.10` | non | mettre à jour vers `8.5.19` |
| `eslint-config-next` | `14.2.35`, directe dev | arbre plugin corrigé | oui avec `15.5.20` | aligner explicitement la version |
| `@next/eslint-plugin-next` | `14.2.35`, transitive dev | retirer le `glob` vulnérable | oui avec `15.5.20` | automatique via config cible |
| `glob` | `10.3.10`, transitive dev | `>=10.5.0` ou suppression du chemin | oui, chemin remplacé par `fast-glob` | confirmer avec `npm ls` et audit |

Projection : Next et la chaîne ESLint/glob sont corrigibles par la migration coordonnée. PostCSS direct doit évoluer séparément. La migration Next seule ne corrige pas le PostCSS transitif : sans override, l'audit devrait conserver au moins l'avis PostCSS et son effet agrégé sur Next. L'override ne doit être adopté que dans un lot autorisé, après build et audit réels ; il ne peut pas être validé par ce préflight sans installation.

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

`next@15.5.20` déclare `postcss: 8.4.31` dans ses métadonnées npm. Cette déclaration ne prouve toutefois pas à elle seule la version qui sera effectivement présente dans l'arbre après installation et déduplication. Le futur lot doit d'abord installer les versions autorisées, puis relever l'arbre réel avec `npm ls postcss` et les audits. Si une version transitive `<8.5.10` subsiste, il devra soit :

1. appliquer, après autorisation, un override npm strictement ciblé vers une version PostCSS 8 publiée et corrigée — `8.5.19` est la candidate vérifiée au 17 juillet 2026 — puis valider lint, typecheck, build, export et audits ;
2. si l'override provoque une incompatibilité, le retirer et documenter le risque résiduel en attendant un backport Next 15 qui relève PostCSS.

L'override est une **option conditionnelle à valider**, pas une exigence automatique de la migration Next 15. Il est inutile si l'arbre réellement installé ne contient plus de PostCSS vulnérable.

## Plan minimal proposé pour BF-REPRISE-006B

### Obligatoire

1. Mettre `next` et `eslint-config-next` exactement à `15.5.20`.
2. Mettre le PostCSS direct à `8.5.19`.
3. Conserver React/React DOM `18.3.1`, ESLint `8.57.1` et TypeScript actuel.
4. Adapter les six fichiers listés à `params: Promise<...>` avec `await params`.
5. Régénérer le lockfile par une installation npm normale, sans `--force`, sans `--legacy-peer-deps` et sans `audit fix`.
6. Exécuter `npm ls`, audits complet et production, lint, typecheck, build et contrôle de `out/`.
7. Servir `out/` statiquement et retester les 26 routes, liens et assets.

### Recommandé sous autorisation PM explicite

1. Observer d'abord l'arbre réellement installé avec `npm ls postcss` et les audits.
2. Uniquement si une version transitive `<8.5.10` subsiste, demander l'autorisation d'un override ciblé vers une version PostCSS 8 publiée et corrigée ; `8.5.19` est la candidate npm vérifiée lors de cette reprise.
3. Après override éventuel, prouver qu'aucune version `<8.5.10` ne subsiste et exiger `npm audit` sans les cinq entrées actuelles ; si un nouvel avis apparaît, l'analyser sans correction forcée.

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
| override PostCSS incompatible | build CSS, inspection visuelle et audit | erreur PostCSS/Tailwind ou rendu CSS altéré |
| arbre npm inattendu | `npm ls` et deux audits | peer conflict, paquet vulnérable non expliqué ou Next 16 introduit |

Rollback : revenir au commit baseline `086050ba5c309c4956a3a8919a352a4a1a79fad1` par un commit de réversion explicite, restaurer le couple `package.json`/`package-lock.json` et les six signatures de pages, puis refaire lint, typecheck, build et test statique. Ne jamais utiliser `git reset --hard` comme procédure de rollback partagée.

## Verdict technique

**CANDIDAT À MIGRATION ÉTROITE**, sous réserve d'une décision PM explicite sur l'override PostCSS transitif. La migration Next 15 et les adaptations `params` sont à faible risque ; la remédiation complète de sécurité ne peut pas être affirmée sans installation, audit et build dans `BF-REPRISE-006B`.
