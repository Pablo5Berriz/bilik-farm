# Audit lint frontend - Bilik Farm

## Lot

`BF-REPRISE-004B - Lint reproductible et audit qualite frontend`

## Point de depart

- Branche : `main`
- SHA : `dd962e57649ec6b88dd733558ecbd8fbe35f1236`
- Working tree initial : propre

## Perimetre

- Etablir si le lint frontend est reproductible et non interactif.
- Inventorier les erreurs et avertissements disponibles.
- Corriger uniquement les defauts surs, sans modifier le rendu ni les dependances.
- Produire ce rapport avant tout travail sur les vulnerabilites.

## Commandes executees

| Commande | Resultat |
| --- | --- |
| `git status --porcelain=v1 -b` | `## main` |
| `git rev-parse --short=40 HEAD` | `dd962e57649ec6b88dd733558ecbd8fbe35f1236` |
| `npm run lint` | Echec : ouverture de l'assistant interactif Next.js ESLint |
| `rg '"eslint"\|'"eslint-config-next"'\|@next/eslint-plugin-next' package-lock.json package.json` | Aucune entree ESLint dans le manifeste ou le lockfile |
| `node .\node_modules\next\dist\bin\next lint --help` | Confirme que `next lint` lance une configuration guidee si ESLint n'est pas configure |
| `node .\node_modules\typescript\bin\tsc --noEmit` | OK |
| `npm run build` | OK |

## Constat lint

Le script actuel est :

```json
"lint": "next lint"
```

Dans l'etat verrouille du projet, ce script n'est pas reproductible en CI ou en execution non interactive. Il ouvre l'assistant Next.js :

```text
? How would you like to configure ESLint?
  Strict (recommended)
  Base
  Cancel
```

Le projet ne contient pas de configuration ESLint et le lockfile ne contient pas `eslint`, `eslint-config-next` ni `@next/eslint-plugin-next`. Un vrai lint Next.js non interactif requerrait donc une modification des dependances, ce qui est hors perimetre de ce lot.

## Inventaire des erreurs et avertissements

| Source | Erreurs | Avertissements | Statut |
| --- | ---: | ---: | --- |
| `npm run lint` | 1 infrastructure | 0 disponible | Bloque par assistant interactif |
| ESLint applicatif | Non disponible | Non disponible | ESLint absent du lockfile |
| TypeScript `tsc --noEmit` | 0 | 0 | Verifie |
| Build Next.js | 0 | 0 | Verifie |

## Corrections appliquees

Aucune correction source n'a ete appliquee.

Raison : les erreurs et avertissements applicatifs ne sont pas inventoriables sans ajouter l'outillage ESLint requis. Modifier du code sans diagnostic lint reproductible aurait depasse le cadre du lot.

## Decision qualite

Verdict : **BLOQUE, ARRET CONFORME**.

Le frontend reste typable et buildable, mais le lint reproductible n'est pas etabli. La prochaine action technique sure est un lot dedie a l'ajout explicite des dependances et de la configuration ESLint, avec modification controlee de `frontend/package.json` et `frontend/package-lock.json`.

## Hors perimetre confirme

- Aucune vulnerabilite traitee.
- Aucune dependance ajoutee ou supprimee.
- Aucun rendu frontend modifie.
- Aucun fichier backend modifie.
- Aucun fichier admin modifie.
