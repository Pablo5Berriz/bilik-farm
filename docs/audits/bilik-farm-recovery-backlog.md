# Backlog de reprise Bilik Farm

## P0 - Securite, build casse, risque de perte

| ID | Domaine | Tache | Justification | Critere d'acceptation |
| -- | ------- | ----- | ------------- | --------------------- |
| BF-P0-001 | Git | Rattacher ou initialiser le depot Git officiel | Le projet n'a aucune tracabilite locale | `git status`, branche et SHA disponibles |
| BF-P0-002 | Frontend | Debloquer le build Next.js | `npm run build` echoue sur `@prisma/client` | `npm run build` passe dans `frontend` |
| BF-P0-003 | Assets | Corriger images referencees absentes | Plusieurs images du hero/catalogue/galerie sont introuvables | aucune reference `/images/*` absente |
| BF-P0-004 | Backend | Restaurer un `backend/package.json` coherent | API NestJS inexecutable | installation et build backend possibles |
| BF-P0-005 | Secrets | Remplacer le seed admin faible avant toute prod | Mot de passe admin connu dans seed | seed ne contient aucun mot de passe fixe faible |

## P1 - Blocage MVP

| ID | Domaine | Tache | Justification | Critere d'acceptation |
| -- | ------- | ----- | ------------- | --------------------- |
| BF-P1-001 | Contenu | Reviser tous les chiffres et promesses | Le site affirme 40 ha et volumes non confirmes | contenu classe valide/provisoire/futur |
| BF-P1-002 | Contact | Rendre le formulaire fonctionnel et securise | Canal commercial MVP | stockage/notification, validation, anti-spam, consentement |
| BF-P1-003 | Legal | Ajouter mentions legales et confidentialite | Donnees personnelles collectees | pages accessibles et a valider juridiquement |
| BF-P1-004 | Admin | Decider admin/CMS MVP | Admin actuel est un mock non protege | admin retire du MVP ou protege/connecte |
| BF-P1-005 | Backend | Verifier routes API principales | Frontend depend produits/blog/contact | smoke tests API passent |
| BF-P1-006 | Perimetre | Sortir orders/marketplace du MVP si non valide | Complexite hors perimetre initial | backlog futur explicite |

## P2 - Fonctionnalites importantes

| ID | Domaine | Tache | Justification | Critere d'acceptation |
| -- | ------- | ----- | ------------- | --------------------- |
| BF-P2-001 | SEO | Ajouter sitemap, robots, metadata, OG | Vitrine officielle indexable | audit SEO de base OK |
| BF-P2-002 | SEO local | Structurer Cameroun/Centre/Mefou-et-Akono/Yaounde | Acquisition locale | donnees locales coherentes et non bourrees |
| BF-P2-003 | Accessibilite | Tester clavier, focus, contrastes, erreurs | WCAG 2.2 AA cible | blocages critiques corriges |
| BF-P2-004 | Performance | Remplacer CDN icons et optimiser images | Mobile lent/forfait limite | poids page reduit et assets stables |
| BF-P2-005 | Pages MVP | Ajouter projets futurs, durabilite, partenariats | MVP incomplet | routes ou sections accessibles |

## P3 - Optimisation et amelioration

| ID | Domaine | Tache | Justification | Critere d'acceptation |
| -- | ------- | ----- | ------------- | --------------------- |
| BF-P3-001 | Tests | Ajouter tests smoke frontend/API | Non regression | commandes test documentees |
| BF-P3-002 | CI | Ajouter pipeline lint/typecheck/build | Qualite continue | CI passe sur branche |
| BF-P3-003 | DevOps | Completer Docker/NGINX/runbook | Deploiement reproductible | environnement local/prod documente |
| BF-P3-004 | CMS | Ameliorer edition contenu si retenue | Autonomie proprietaire | textes/produits/galerie editables |
| BF-P3-005 | Analytics | Ajouter mesure respectueuse vie privee | Pilotage audience | outil choisi et politique mise a jour |

## Prochain lot recommande

`LOT BILIK-FARM-REPRISE-001 - Stabilisation socle`

Objectif: reprendre le controle technique sans changer le produit: Git, build frontend, assets manquants, liste de contenu a valider.

Commandes attendues apres correction:

```powershell
git status --short --branch
cd frontend
npm run build
.\node_modules\.bin\tsc --noEmit
```
