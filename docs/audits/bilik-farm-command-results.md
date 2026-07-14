# Resultats des commandes d'audit

Date: 2026-07-14  
Racine: `C:\Users\paulq\Downloads\Projets\Bilik-Farm`

## Environnement

```text
node --version
v22.17.1

npm --version
11.5.2

pnpm --version
10.33.0

yarn --version
Erreur: yarn n'est pas reconnu.
```

Cause probable: Yarn n'est pas installe globalement. Le projet utilise npm cote frontend/admin.

## Git

```text
git status --short --branch
fatal: not a git repository (or any of the parent directories): .git
```

Resultat: echec.  
Cause: aucun depot Git detecte a la racine ni dans les sous-dossiers.  
Blocage: critique pour reprise controlee.  
Recommandation: rattacher au depot officiel ou initialiser Git avant modification du code produit.

## Documentation et structure

```text
README.md: vide
docker-compose.yml: vide
.gitignore: vide
backend/package.json: vide
nginx/nginx.conf: vide
```

Resultat: documentation et configuration de deploiement inexistantes en pratique.

## Frontend - lint

Commande:

```powershell
cd C:\Users\paulq\Downloads\Projets\Bilik-Farm\frontend
npm run lint
```

Sortie utile:

```text
> bilik-farm-frontend@0.1.0 lint
> next lint

? How would you like to configure ESLint?
Strict (recommended)
Base
Cancel
```

Resultat: echec/non exploitable en audit automatise.  
Cause probable: aucune configuration ESLint existante; `next lint` tente une configuration interactive.  
Blocage: moyen.  
Action: ajouter une configuration lint explicite apres stabilisation Git/build.

## Frontend - build

Commande:

```powershell
cd C:\Users\paulq\Downloads\Projets\Bilik-Farm\frontend
npm run build
```

Sortie utile:

```text
Next.js 14.2.35
Creating an optimized production build ...
Compiled successfully
Linting and checking validity of types ...
Failed to compile.

./src/lib/prisma.ts:1:30
Type error: Cannot find module '@prisma/client' or its corresponding type declarations.
```

Resultat: echec.  
Cause probable: `frontend/src/lib/prisma.ts` importe Prisma cote frontend alors que `@prisma/client` n'est pas une dependance frontend; separation frontend/backend incoherente.  
Blocage: critique.  
Action: supprimer/isoler l'usage Prisma du frontend ou ajouter une architecture fullstack coherente apres decision.

## Frontend - typecheck

Commande:

```powershell
cd C:\Users\paulq\Downloads\Projets\Bilik-Farm\frontend
.\node_modules\.bin\tsc --noEmit
```

Sortie:

```text
src/lib/prisma.ts(1,30): error TS2307: Cannot find module '@prisma/client' or its corresponding type declarations.
```

Resultat: echec.  
Cause: identique au build.  
Blocage: critique.

## Frontend - audit dependances

Commande:

```powershell
cd C:\Users\paulq\Downloads\Projets\Bilik-Farm\frontend
npm audit --omit=dev
```

Sortie resumee:

```text
2 vulnerabilities (1 moderate, 1 high)
next: high severity, plusieurs advisories DoS/XSS/cache poisoning/SSRF selon contexte
postcss <8.5.10: moderate, XSS via CSS stringify
fix available via npm audit fix --force
Will install next@16.2.10, which is a breaking change
```

Resultat: echec audit avec vulnerabilites.  
Cause: versions actuelles de Next/PostCSS dans lockfile.  
Blocage: eleve avant production, mais aucune mise a jour appliquee pendant l'audit.  
Action: traiter apres stabilisation build avec upgrade controle, tests et verification de compatibilite.

## Admin - lint

Commande:

```powershell
cd C:\Users\paulq\Downloads\Projets\Bilik-Farm\admin
npm run lint
```

Sortie:

```text
> bilik-farm-admin@0.1.0 lint
> next lint

'next' n'est pas reconnu en tant que commande interne ou externe
```

Resultat: echec.  
Cause: dependances admin non installees, aucun `node_modules` admin detecte.  
Blocage: eleve pour toute administration.

## Admin - build

Commande:

```powershell
cd C:\Users\paulq\Downloads\Projets\Bilik-Farm\admin
npm run build
```

Sortie:

```text
> bilik-farm-admin@0.1.0 build
> next build

'next' n'est pas reconnu en tant que commande interne ou externe
```

Resultat: echec.  
Cause: dependances admin non installees.  
Blocage: eleve.

## Backend

Commande npm non lancee car `backend/package.json` est vide.

Constat:

```text
backend/package.json: 0 octet
```

Resultat: backend non installable/non executable en l'etat.  
Cause: manifeste absent ou perdu.  
Blocage: critique.  
Action: restaurer le manifeste NestJS/Prisma exact avant toute validation API.

## Assets

Commande:

```powershell
rg -n "(/images/...)" frontend/src
```

References absentes constatees par comparaison avec `frontend/public/images`:

```text
/images/Tilapia.jpg
/images/Animaux.jpg
/images/Vives.jpg
/images/incubateur.webp
/images/pondeuse.jpg
/images/abrevoir.jpeg
```

Resultat: plusieurs images cassees probables.  
Cause: noms de fichiers divergents ou assets non ajoutes.  
Blocage: moyen pour build, eleve pour qualite UX.  
Action: renommer references ou ajouter assets valides.
