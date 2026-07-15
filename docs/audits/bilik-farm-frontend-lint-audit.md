# Audit lint frontend - Bilik Farm

## Lot

`BF-REPRISE-004B-R1 - Etablissement du lint frontend reproductible`

## 1. Verdict

Verdict technique : **ACCEPTE**.

Le lint frontend est maintenant explicite, non interactif et reproductible. Les erreurs ESLint applicatives initiales ont ete corrigees uniquement lorsqu'elles etaient sans impact visuel attendu. Les avertissements restants sont documentes et reportes.

## 2. SHA et état initial

- Branche initiale : `main`
- SHA initial : `b510bb1fbe426bd365fe86a00d88ae7be4ebaeca`
- Working tree initial : propre

## 3. Versions initiales

- Node.js : `v22.17.1`
- npm : `11.5.2`
- `next` declare : `^14.2.0`
- `next` installe : `14.2.35`
- `react` declare : `^18.3.0`
- `react` installe : `18.3.1`
- `react-dom` declare : `^18.3.0`
- `react-dom` installe : `18.3.1`
- `typescript` declare : `^5.4.5`
- `typescript` installe : `5.9.3`
- Script lint initial : `next lint`

## 4. Dependances ESLint choisies

- `eslint@8.57.1`
- `eslint-config-next@14.2.35`

Justification : `eslint-config-next@14.2.35` correspond a la version Next.js installee et declare un peer dependency compatible avec ESLint `^7.23.0 || ^8.0.0`. ESLint 9 n'a pas ete retenu.

## 5. Installation

Commande executee :

```powershell
npm install --save-dev eslint@8.57.1 eslint-config-next@14.2.35
```

Resultat :

- `eslint@8.57.1` ajoute.
- `eslint-config-next@14.2.35` ajoute.
- `frontend/package.json` mis a jour.
- `frontend/package-lock.json` mis a jour.
- Aucune mise a niveau de `next`, `react`, `react-dom` ou `typescript` dans `package.json`.
- `npm audit fix`, `npm update`, `--force` et `--legacy-peer-deps` non utilises.

Note hors lot : npm signale `5 vulnerabilities` après installation. Aucun travail de vulnérabilités n'a été lancé.

## 6. Configuration ESLint

Configuration retenue : `.eslintrc.json`.

```json
{
  "extends": ["next/core-web-vitals"],
  "ignorePatterns": ["node_modules/**", ".next/**"]
}
```

Aucune flat config n'est presente. Aucune regle importante n'a ete desactivee.

## 7. Script npm

Script initial :

```json
"lint": "next lint"
```

Scripts finaux :

```json
"lint": "eslint . --ext .js,.jsx,.ts,.tsx",
"lint:fix": "eslint . --ext .js,.jsx,.ts,.tsx --fix"
```

Le script `lint:fix` n'a pas ete execute automatiquement.

## 8. Resultat lint initial

Commande :

```powershell
npm run lint
```

Resultat initial :

```text
49 problems (22 errors, 27 warnings)
```

Erreurs initiales :

- 22 x `react/no-unescaped-entities`

Avertissements initiaux :

- 27 x `@next/next/no-img-element`

Fichiers concernes par les erreurs :

- `frontend/src/app/[locale]/about/page.tsx`
- `frontend/src/app/[locale]/page.tsx`
- `frontend/src/app/[locale]/services/advisory/page.tsx`
- `frontend/src/app/[locale]/services/animals/page.tsx`
- `frontend/src/app/[locale]/services/feedmill/page.tsx`
- `frontend/src/app/[locale]/services/fresh-produce/page.tsx`
- `frontend/src/app/[locale]/services/hatchery/page.tsx`

Fichiers concernes par les avertissements :

- `frontend/src/app/[locale]/about/page.tsx`
- `frontend/src/app/[locale]/page.tsx`
- `frontend/src/app/[locale]/products/page.tsx`
- `frontend/src/app/[locale]/services/feedmill/page.tsx`
- `frontend/src/components/ui/Footer.tsx`
- `frontend/src/components/ui/Header.tsx`

## 9. Classification des diagnostics

| Diagnostic | Nombre | Classification | Decision |
| --- | ---: | --- | --- |
| `react/no-unescaped-entities` | 22 | SUR A CORRIGER | Remplacer les apostrophes de texte JSX par `&apos;` |
| `@next/next/no-img-element` | 27 | NECESSITE DECISION | Reporter, car remplacement par `next/image` peut modifier chargement ou rendu |

## 10. Corrections appliquees

| Fichier | Regle ESLint | Probleme | Correction | Impact visuel attendu |
| --- | --- | --- | --- | --- |
| `frontend/src/app/[locale]/about/page.tsx` | `react/no-unescaped-entities` | Apostrophes non echappees dans texte JSX | Remplacement par `&apos;` | AUCUN |
| `frontend/src/app/[locale]/page.tsx` | `react/no-unescaped-entities` | Apostrophes non echappees dans texte JSX | Remplacement par `&apos;` | AUCUN |
| `frontend/src/app/[locale]/services/advisory/page.tsx` | `react/no-unescaped-entities` | Apostrophe non echappee dans texte JSX | Remplacement par `&apos;` | AUCUN |
| `frontend/src/app/[locale]/services/animals/page.tsx` | `react/no-unescaped-entities` | Apostrophes non echappees dans texte JSX | Remplacement par `&apos;` | AUCUN |
| `frontend/src/app/[locale]/services/feedmill/page.tsx` | `react/no-unescaped-entities` | Apostrophes non echappees dans texte JSX | Remplacement par `&apos;` | AUCUN |
| `frontend/src/app/[locale]/services/fresh-produce/page.tsx` | `react/no-unescaped-entities` | Apostrophes non echappees dans texte JSX | Remplacement par `&apos;` | AUCUN |
| `frontend/src/app/[locale]/services/hatchery/page.tsx` | `react/no-unescaped-entities` | Apostrophes non echappees dans texte JSX | Remplacement par `&apos;` | AUCUN |

## 11. Diagnostics reportes

Les 27 avertissements `@next/next/no-img-element` sont reportes.

Raison : remplacer massivement `<img>` par `next/image` peut modifier le chargement, les dimensions calculees, le comportement responsive ou le rendu percu. Ce changement requiert un lot distinct avec verification visuelle.

## 12. Resultat lint final

Commande :

```powershell
npm run lint
```

Resultat final :

```text
27 problems (0 errors, 27 warnings)
```

Le lint est non interactif et retourne un code de sortie `0`.

## 13. Typecheck

Commande :

```powershell
.\node_modules\.bin\tsc --noEmit
```

Resultat : `PASS`.

## 14. Build

Commande :

```powershell
npm run build
```

Resultat : `PASS`.

Le build utilise `Next.js 14.2.35` et conserve les 27 avertissements `@next/next/no-img-element` documentes.

## 15. Validation runtime

Serveur teste :

```text
next start -p 3001
```

Le port `3000` etait deja occupe par un autre processus local, donc le serveur de validation a ete lance sur `3001`.

Un premier test a expose un cache `.next` incoherent : `app-paths-manifest.json` ne contenait que `/[locale]/page`. L'artefact genere `.next` a ete supprime puis regenere par `npm run build`. Aucun fichier versionne hors perimetre n'a ete modifie par cette operation.

| Route | Resultat |
| --- | --- |
| `/fr` | HTTP 200 |
| `/fr/about` | HTTP 200 |
| `/fr/products` | HTTP 200 |
| `/fr/products/oeufs-de-table` | HTTP 200 |
| `/fr/contact` | HTTP 200 |
| `/fr/blog` | HTTP 200 |

Controle navigateur :

- `/fr/contact` : formulaire toujours desactive.
- `/fr/blog` : page statique chargee.
- Navigation directe des routes demandees : OK.
- Erreurs console critiques : 0.
- Reponses 404/500 : 0.

Validation runtime : **PASS**.

## 16. Rapport d'audit mis a jour

Ce fichier a ete remplace par le rapport R1 complet.

## 17. Fichiers modifies

- `docs/audits/bilik-farm-frontend-lint-audit.md`
- `frontend/.eslintrc.json`
- `frontend/package.json`
- `frontend/package-lock.json`
- `frontend/src/app/[locale]/about/page.tsx`
- `frontend/src/app/[locale]/page.tsx`
- `frontend/src/app/[locale]/services/advisory/page.tsx`
- `frontend/src/app/[locale]/services/animals/page.tsx`
- `frontend/src/app/[locale]/services/feedmill/page.tsx`
- `frontend/src/app/[locale]/services/fresh-produce/page.tsx`
- `frontend/src/app/[locale]/services/hatchery/page.tsx`

## 18. Vérification du diff

- `git diff --check` : PASS.
- Diff limité aux fichiers autorisés.
- Aucun fichier backend ou admin modifié.
- Aucun changement de version de Next.js, React, React DOM ou TypeScript.
- Aucun changement volontaire de rendu ou de contenu métier.

## 19. Commit technique créé

- Commit : `0a37f413d3a742aa0e44057e205c6ff95bf5de7c`
- Message : `build(frontend): configure reproducible eslint`
- Amend utilisé : non.
- Push effectué : non.

## 20. SHA et état après implémentation technique

- Branche : `main`
- SHA technique : `0a37f413d3a742aa0e44057e205c6ff95bf5de7c`
- Working tree après le commit technique : propre.

## 21. Écarts ou incidents

- npm a signalé cinq vulnérabilités après l’installation des dépendances ESLint; aucun correctif n’a été appliqué dans ce lot.
- Le port `3000` était occupé; la validation runtime a été exécutée sur le port `3001`.
- Le cache `.next` incohérent a été supprimé puis régénéré par un build propre.
- Aucun fichier versionné hors périmètre n’a été modifié par cette régénération.

## 22. Confirmation d’arrêt

Le lint frontend reproductible a été établi, les corrections sûres ont été appliquées, puis le typecheck, le build et la validation runtime ont réussi.

Le rapport a été finalisé par des correctifs documentaires distincts. Aucun audit ni correctif de vulnérabilités n’a été lancé.
