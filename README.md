# Bilik Farm

Bilik Farm est le site vitrine statique d'un projet agricole intégré en développement, sur une première superficie d'environ 2,5 hectares dans la région du Centre au Cameroun. Le site présente le projet, ses filières ciblées (aviculture, aquaculture, élevage, agriculture) et un canal de contact, avec un ton volontairement prudent : aucune activité n'est présentée comme opérationnelle ou disponible tant qu'elle n'est pas confirmée.

## État actuel

- Produit exécutable : **vitrine statique frontend uniquement** (`frontend/`).
- `backend/` (NestJS + Prisma) et `admin/` (Next.js) sont présents dans le dépôt mais **hors périmètre du produit exécutable actuel** : non installés, non exécutés, non déployés. Voir [`docs/architecture/bilik-farm-mvp-static-scope.md`](docs/architecture/bilik-farm-mvp-static-scope.md) et [`docs/security/bilik-farm-non-mvp-quarantine.md`](docs/security/bilik-farm-non-mvp-quarantine.md).
- Aucune base de données, aucune API métier, aucune authentification n'est active.

## Stack

- [Next.js](https://nextjs.org/) 15 (App Router), export statique (`output: 'export'`)
- React 18, TypeScript
- Tailwind CSS
- Contenu codé en dur dans `frontend/src/data/` (pas de CMS)

## Architecture

Site 100 % statique : `next build` génère et exporte des pages HTML/CSS/JS statiques dans `frontend/out/`, sans serveur applicatif, sans appel API, sans base de données.

## Routes principales

| Route | Contenu |
| --- | --- |
| `/fr` | Accueil |
| `/fr/about` | À propos du projet |
| `/fr/products` | Filières ciblées (15 produits) |
| `/fr/products/[slug]` | Fiche produit |
| `/fr/services/{feedmill,animals,fresh-produce,hatchery,advisory}` | Axes du projet |
| `/fr/blog` | Actualités (page d'attente, aucun article publié) |
| `/fr/contact` | Formulaire de contact et email de contact |

Le site est en français uniquement (`fr`).

## Installation

```bash
cd frontend
npm ci
```

## Développement local

```bash
cd frontend
npm run dev
```

Le site est servi sur `http://localhost:3000`.

## Quality gates

```bash
cd frontend
npm run lint       # ESLint
npm run typecheck  # tsc --noEmit
npm run build      # build + export statique
npm audit          # dépendances
```

Ces commandes s'exécutent aussi en CI sur chaque pull request et push vers `main` ([`.github/workflows/ci.yml`](.github/workflows/ci.yml)).

## Build statique

```bash
cd frontend
npm run build
```

Génère le site statique exportable dans `frontend/out/`.

## Déploiement

Aucun hébergeur, pipeline de déploiement ou environnement de production n'est actuellement configuré dans ce dépôt. Le dossier `frontend/out/` généré par le build est un site statique déployable sur tout hébergeur de fichiers statiques.

## Fonctionnalités différées / hors MVP

Les éléments suivants font partie d'une vision future du projet et **ne sont pas implémentés dans le produit actuel** :

- CRM (gestion des ventes, des stocks, du suivi administratif)
- Tableau de bord d'administration
- Gestion des clients et des commandes
- Blog dynamique / CMS
- Backend API et base de données actifs

Le code correspondant à certaines de ces intentions existe dans `backend/` et `admin/`, mais reste en quarantaine (non installé, non exécuté) jusqu'à une décision produit explicite de réouverture.
