# Audit complet du projet Bilik Farm

Date: 2026-07-14  
Racine analysee: `C:\Users\paulq\Downloads\Projets\Bilik-Farm`  
Verdict: `NO-GO TEMPORAIRE`

## 1. Resume executif

Le projet est un assemblage partiel de trois applications: un frontend Next.js public, un admin Next.js statique et un backend NestJS/Prisma non installable en l'etat. Le frontend contient une vitrine visuellement avancee sur quelques pages, mais le build de production echoue, plusieurs assets references sont absents, les pages dynamiques dependent d'une API non executable, et le contenu affirme des chiffres, prix, volumes, temoignages et surfaces non confirmes qui contredisent le cadrage produit fourni.

Maturite estimee: prototype avance de vitrine, pas MVP production.  
Phase reelle: reprise/audit pre-MVP.  
Pourcentage estime pondere: 34%.

Calcul pondere:

| Domaine | Poids | Avancement | Contribution |
| --- | ---: | ---: | ---: |
| Frontend public | 25 | 55% | 13.75 |
| Contenu et adequation Bilik Farm | 15 | 25% | 3.75 |
| Backend/API | 15 | 20% | 3.00 |
| Admin/CMS | 10 | 10% | 1.00 |
| Build/qualite/tests | 10 | 15% | 1.50 |
| Securite/confidentialite | 10 | 25% | 2.50 |
| SEO/accessibilite/performance | 10 | 35% | 3.50 |
| DevOps/deploiement | 5 | 0% | 0.00 |

Qualite generale: visuel public prometteur mais fragile techniquement.  
Risques majeurs: build casse, absence de depot Git, backend non installable, contenu non valide, failles de securite fonctionnelles.  
Verdict: `NO-GO TEMPORAIRE` tant que build, Git, backend/admin et contenu ne sont pas remis sous controle.

## 2. Perimetre analyse

Dossiers analyses:

- `frontend`: application Next.js publique, routes, composants, styles, assets, scripts npm.
- `admin`: application Next.js d'administration separee.
- `backend`: API NestJS, modules, Prisma schema, seed.
- `nginx`: configuration presente mais vide.
- `scripts`: script d'optimisation images.
- racine: `.env`, `.env.example`, `docker-compose.yml`, `README.md`, lockfiles.

Exclusions detaillees: `node_modules`, `.next`, caches et fichiers generes. Ils ont ete consideres uniquement pour determiner si les commandes pouvaient s'executer.

## 3. Etat Git

Le dossier racine n'est pas un depot Git:

- `git status --short --branch`: echec, `fatal: not a git repository`.
- Aucun dossier `.git` trouve dans les sous-dossiers.
- Branche active: absente.
- SHA actuel: absent.
- Dernier commit: absent.
- Branches, worktrees, sous-modules: non disponibles.

Risque: aucune tracabilite locale, aucun filet de securite avant reprise, impossible de distinguer proprement les changements utilisateur de l'historique.

## 4. Architecture reelle

Arborescence utile:

```text
Bilik-Farm
|-- .env
|-- .env.example
|-- .gitignore                  (vide)
|-- docker-compose.yml           (vide)
|-- README.md                    (vide)
|-- package-lock.json            (lockfile racine sans package.json)
|-- admin
|   |-- package.json
|   |-- next.config.js
|   `-- src/app
|       |-- page.tsx
|       |-- dashboard/page.tsx
|       |-- products/page.tsx
|       |-- testimonials/page.tsx
|       |-- blog/page.tsx
|       |-- messages/page.tsx
|       `-- users/page.tsx
|-- backend
|   |-- package.json             (vide)
|   |-- nest-cli.json
|   |-- tsconfig.json
|   `-- src
|       |-- app.module.ts
|       |-- main.ts
|       |-- common
|       |-- modules/auth
|       |-- modules/products
|       |-- modules/categories
|       |-- modules/testimonials
|       |-- modules/blog
|       |-- modules/contact
|       |-- modules/orders
|       |-- modules/users
|       |-- modules/mail
|       `-- prisma/schema.prisma
|-- frontend
|   |-- package.json
|   |-- package-lock.json
|   |-- next.config.js
|   |-- tailwind.config.js
|   |-- src/app/[locale]
|   |   |-- page.tsx
|   |   |-- about/page.tsx
|   |   |-- products/page.tsx
|   |   |-- products/[id]/page.tsx
|   |   |-- contact/page.tsx
|   |   |-- blog/page.tsx
|   |   |-- blog/[slug]/page.tsx
|   |   `-- services/*
|   |-- src/components
|   |-- src/lib
|   |-- src/styles
|   `-- public/images
|-- nginx/nginx.conf             (vide)
`-- scripts/optimize-images.js
```

Diagramme textuel:

```text
Navigateur
  -> frontend Next.js App Router
     -> pages statiques codees en dur
     -> routes blog/product detail via fetch NEXT_PUBLIC_API_URL
     -> formulaire contact via POST /api/contact
  -> backend NestJS attendu sur :3001
     -> Prisma Client
     -> PostgreSQL DATABASE_URL
  -> admin Next.js attendu sur :3002
     -> aucune auth
     -> aucun appel API implemente
```

Divergences: le frontend public embarque `src/lib/prisma.ts`, ce qui brouille la separation frontend/API et casse le build. L'admin est separe mais non connecte. Le backend reference Nest/Prisma mais son `package.json` vide le rend inexecutable.

## 5. Inventaire fonctionnel

| Domaine | Fonctionnalite | Statut | Preuves | Fichiers | Tests | Risque | Action |
| ------- | -------------- | ------ | ------- | -------- | ----- | ------ | ------ |
| Git | Versionnement | ABSENT | commandes Git en erreur | racine | git status KO | Eleve | Initialiser ou rattacher au depot source |
| Frontend | Accueil | PARTIEL | page riche mais contenu non confirme et assets manquants | `frontend/src/app/[locale]/page.tsx` | build KO | Eleve | Corriger assets/build puis valider contenu |
| Frontend | A propos | PARTIEL | page statique complete visuellement | `about/page.tsx` | build KO | Moyen | Aligner surface, histoire, mission |
| Frontend | Produits | PARTIEL | catalogue statique, prix/chiffres non confirmes | `products/page.tsx` | build KO | Eleve | Remplacer par contenu valide/provisoire |
| Frontend | Details produit | BLOQUE | depend API `/api/products/:slug` | `products/[id]/page.tsx` | API non executable | Eleve | Stabiliser API ou fallback statique |
| Frontend | Blog | BLOQUE | depend API `/api/blog` | `blog/*` | API non executable | Moyen | Decider CMS/blog phase MVP |
| Frontend | Contact | PARTIEL | POST API sans anti-spam/rate-limit | `ContactForm.tsx`, backend contact | build/API KO | Eleve | Valider bout en bout, securiser |
| Services | Provenderie | PARTIEL | page riche mais promesse commerciale | `services/feedmill/page.tsx` | build KO | Moyen | Confirmer disponibilite |
| Services | Animaux/fresh/advisory/hatchery | SQUELETTE OU MOCK | texte court generique | `services/*/page.tsx` | build KO | Moyen | Completer ou retirer du MVP |
| Admin | Tableau de bord | SQUELETTE OU MOCK | cartes avec tiret | `admin/src/app/dashboard/page.tsx` | admin build KO | Eleve | Installer/connecter/proteger ou retirer |
| CMS | Edition contenu | ABSENT | aucun modele d'admin utilisable | admin/backend | aucun | Eleve | Decider CMS simple ou statique |
| Backend | Auth | PARTIEL | register/login sans roles stricts | `backend/src/modules/auth` | non executable | Eleve | Installer dependances, durcir auth |
| Backend | Produits/categories | PARTIEL | services CRUD Prisma | `backend/src/modules/products` | non executable | Moyen | DTO/validation/permissions |
| Backend | Contact | PARTIEL | stockage DB uniquement | `backend/src/modules/contact` | non executable | Eleve | anti-spam, notifications, consentement |
| Backend | Orders | HORS PERIMETRE ACTUEL | marketplace/commandes commencees | `orders/*` | non executable | Moyen | Backlog futur |
| DB | Schema Prisma | PARTIEL | schema present sans migrations | `backend/src/prisma/schema.prisma` | aucune migration | Eleve | Creer migrations apres decision |
| DevOps | Docker/Nginx | SQUELETTE OU MOCK | fichiers vides | `docker-compose.yml`, `nginx.conf` | aucun | Moyen | Definir deployment cible |

## 6. Analyse des pages

- `/`: redirige vers `/fr`. Fonctionnel en code.
- `/fr`: visuellement avancee, mais non validee. Contient 40 ha, 10 000 poules, 25 000 poissons, 2 500 porcs, +10 ans, livraison locale, temoignages nominatifs. Plusieurs images referencees n'existent pas: `Tilapia.jpg`, `Animaux.jpg`, `Vives.jpg`, `incubateur.webp`, `pondeuse.jpg`, `abrevoir.jpeg`.
- `/fr/about`: page statique coherente en forme, mais contenu a confirmer. Contradiction avec le contexte d'audit qui parle de 2,5 ha initiaux, pas 40 ha.
- `/fr/products`: catalogue statique riche, mais prix, quantites, surfaces et disponibilites non valides. Des produits sont presentes comme disponibles.
- `/fr/products/[id]`: non fonctionnel sans backend. Affiche une zone "Image du produit" et appelle l'API.
- `/fr/contact`: formulaire present mais non valide bout en bout car backend non executable. Pas de consentement, honeypot, rate limiting ou protection spam.
- `/fr/blog`: depend API. Affiche vide si API absente, sans vrai contenu editorial.
- `/fr/blog/[slug]`: depend API et rend HTML via `dangerouslySetInnerHTML`.
- `/fr/services/feedmill`: page riche, mais contenu commercial a confirmer.
- `/fr/services/animals`, `/fresh-produce`, `/hatchery`, `/advisory`: squelettes courts.
- Mentions legales, politique de confidentialite, galerie dediee, actualites statiques, projets futurs, developpement durable, partenariats, investisseurs: absents.
- 404 personnalisee: absente.

## 7. Analyse UI/UX et identite

Forces:

- Direction visuelle claire: vert agricole, images reelles ou agricoles, sections lisibles.
- Header responsive avec menu mobile.
- CTA presents sur pages principales.
- Grilles produits/services comprehensibles.

Incoherences:

- Beaucoup d'elements arrondis et effets hover generiques de template.
- Font Awesome charge depuis CDN dans `<head>`, dependance externe et cout reseau.
- Plusieurs assets manquants provoqueraient des images cassees.
- Footer contient telephone placeholder et liens sociaux non verifies.
- Services et produits presentent une activite operationnelle trop ambitieuse.

## 8. Analyse technique

Stack reelle:

- Frontend: Next.js 14.2.x, React 18.3, TypeScript 5.4, Tailwind CSS 3.4, npm.
- Admin: Next.js 14, React 18, TypeScript, Tailwind declare, mais dependances non installees.
- Backend: intention NestJS + Prisma + PostgreSQL + JWT + bcrypt + class-validator, mais `package.json` vide.
- CMS: aucun CMS reel.
- ORM/DB: Prisma schema present, pas de migrations.
- Tests: aucun outil ni fichier de test detecte.
- CI/CD: absent.
- Analytics: absent.
- SEO: metadata minimale seulement.

Compatibilite:

- Frontend: dependances installees mais build bloque par `@prisma/client`.
- Admin/backend: non executables sans installation/manifestes corrects.

## 9. Securite

| Gravite | Description | Emplacement | Scenario | Impact | Correction | Priorite |
| --- | --- | --- | --- | --- | --- | --- |
| Critique | Aucun depot Git | racine | reprise sans historique ni sauvegarde | perte de travail | rattacher/init Git avant edits code | P0 |
| Critique | Seed admin avec mot de passe faible connu | `backend/src/prisma/seed.ts` | compte admin previsible si seed lance | prise de controle | secret genere, rotation, procedure env | P0 |
| Elevee | Backend non installable mais endpoints auth/admin prevus | `backend/package.json` | securite non testee | faux sentiment de fonctionnalite | rendre executable puis tests | P0 |
| Elevee | Absence de rate limiting/anti-spam sur contact | `ContactForm.tsx`, `contact.controller.ts` | spam ou stockage massif | indisponibilite, couts | honeypot, throttling, captcha leger si besoin | P1 |
| Elevee | `dangerouslySetInnerHTML` pour le blog | `blog/[slug]/page.tsx` | contenu CMS mal nettoye | XSS | sanitizer cote serveur/client | P1 |
| Elevee | Register public cree des utilisateurs sans workflow | `auth.controller.ts` | creation de comptes non controlee | surface d'attaque | fermer ou limiter inscription | P1 |
| Moyenne | Secrets placeholders dans `.env.example` | `.env.example` | mauvaise config en prod | auth faible | documentation de secrets forts | P1 |
| Moyenne | CORS depend de variables possiblement undefined | `backend/src/main.ts` | blocage ou ouverture mal maitrisee | indisponibilite/securite | validation config | P2 |
| Moyenne | Dependances vulnerables | `frontend/package-lock.json` | DoS/XSS selon contexte | risque prod | upgrade controle apres build | P1 |

Aucune valeur secrete reelle n'a ete reproduite.

## 10. SEO

Etat:

- Metadata globale presente dans `frontend/src/app/layout.tsx`.
- Metadata par pages about/products seulement.
- Pas de sitemap, robots, canonical, Open Graph complet, Twitter cards, structured data.
- Pas de pages legales.
- SEO local insuffisant: Yaounde, Mefou-et-Akono, Centre, Cameroun ne sont pas structurees en donnees locales.
- Donnees trompeuses possibles: 40 ha et volumes importants non confirmes.

Recommandations:

- Corriger d'abord le contenu verifie.
- Ajouter `LocalBusiness`/`Organization` schema lorsque les informations legales sont confirmees.
- Ajouter sitemap/robots et metadata par route.
- Eviter le bourrage de mots-cles; travailler pages dediees agriculture, elevage, produits, contact/localisation.

## 11. Performance

Problemes:

- Utilisation de `<img>` partout au lieu de `next/image`.
- Font Awesome via CDN externe.
- Poppins Google Font avec 6 graisses.
- Nombreuses images JPEG/PNG non normalisees, certaines >300 KB; pas de dimensions explicites partout.
- Animations hover et grandes images hero, a surveiller sur mobile lent.
- Build impossible donc pas de mesure fiable Lighthouse/Core Web Vitals.

Impact mobile: risque de chargement lourd en Afrique subsaharienne sur connexion limitee.  
Correctifs: limiter polices, remplacer CDN icons, optimiser images, tailles responsives, lazy loading systematique, tester sur throttling.

## 12. Resultats des commandes

Voir aussi `docs/audits/bilik-farm-command-results.md`.

Commandes principales:

- `git status --short --branch`: echec, pas de depot Git.
- `node --version`: v22.17.1.
- `npm --version`: 11.5.2.
- `pnpm --version`: 10.33.0.
- `yarn --version`: commande absente.
- `npm run lint` dans `frontend`: echec interactif, ESLint non configure.
- `npm run build` dans `frontend`: echec TypeScript, module `@prisma/client` introuvable dans `frontend/src/lib/prisma.ts`.
- `.\\node_modules\\.bin\\tsc --noEmit` dans `frontend`: meme erreur.
- `npm audit --omit=dev` dans `frontend`: 2 vulnerabilites, 1 haute Next.js, 1 moderee PostCSS.
- `npm run lint` et `npm run build` dans `admin`: echec, `next` non reconnu car dependances absentes.
- Backend: pas de commande npm exploitable, `package.json` vide.

## 13. Comparaison au MVP

| Exigence | Prevue | Presente | Fonctionnelle | Validee | Ecart | Action |
| -------- | -----: | -------: | ------------: | ------: | ----- | ------ |
| Accueil | oui | oui | non | non | build KO/contenu non confirme | P0/P1 |
| Presentation | oui | oui | non | non | contenu contradictoire | P1 |
| Histoire | oui | oui | non | non | chiffres a confirmer | P1 |
| Mission | oui | oui | non | non | generique | P2 |
| Vision | oui | partiel | non | non | pas de page/section claire | P2 |
| Valeurs | oui | partiel | non | non | non valide | P2 |
| Agriculture | oui | partiel | non | non | via produits seulement | P1 |
| Elevage | oui | partiel | non | non | via services/produits | P1 |
| Produits | oui | oui | non | non | donnees non confirmees | P1 |
| Galerie | oui | partiel | non | non | section home, assets manquants | P1 |
| Actualites | oui | partiel | non | non | API bloquee, aucun contenu | P2 |
| Projets futurs | oui | non | non | non | absent | P2 |
| Developpement durable | oui | partiel | non | non | claims generiques | P2 |
| Contact | oui | oui | non | non | API/anti-spam absents | P1 |
| Partenariat | oui | non | non | non | absent | P2 |
| Localisation | oui | partiel | non | non | footer seulement | P1 |
| Reseaux sociaux | oui | partiel | non | non | liens non verifies/placeholders | P2 |
| Mentions legales | oui | non | non | non | absent | P1 |
| Confidentialite | oui | non | non | non | absent | P1 |
| SEO | oui | partiel | non | non | minimal | P2 |
| Responsive | oui | partiel | non | non | non teste visuellement | P2 |
| Accessibilite | oui | partiel | non | non | labels incomplets, focus a verifier | P2 |
| Admin simple | si justifie | squelette | non | non | non connecte/protege | P1 |

## 14. Dette technique

- Absence de Git.
- Build frontend casse.
- `frontend/src/lib/prisma.ts` inutilise/incorrect cote frontend.
- Backend `package.json` vide.
- Racine sans `package.json` mais avec `package-lock.json`.
- `README.md`, `.gitignore`, `docker-compose.yml`, `nginx.conf` vides.
- Aucune migration Prisma.
- Aucun test.
- Pas de CI.
- Squelettes admin et services.
- Contenu durcode dans pages.
- Donnees produit dupliquees entre home et products.
- Images referencees absentes.
- Imports et composants morts/probablement inutilises: `Hero`, `ProductCard`, `ServiceCard`, `TestimonialCard`, `apiGet/apiPost` partiellement.

## 15. Blocages

Techniques:

- Pas de depot Git.
- Build frontend KO.
- Backend non installable.
- Admin non installable.
- API non disponible.

Contenu:

- Surface reelle 2,5 ha vs contenu 40 ha.
- Volumes, prix, temoignages, certifications/experts/logistique a confirmer.
- Positionnement Bilik Agro Industries futur non formalise.

Produit:

- Decider si commandes/order et marketplace restent hors MVP.
- Decider CMS/admin maintenant ou contenu statique temporaire.

Juridique:

- Mentions legales et politique de confidentialite absentes.
- Validation professionnelle requise pour collecte de donnees, investissement, export futur.

## 16. Plan de reprise

| ID | Priorite | Domaine | Tache | Justification | Fichiers probables | Dependances | Critere d'acceptation |
| -- | -------- | ------- | ----- | ------------- | ------------------ | ----------- | --------------------- |
| BF-P0-001 | P0 | Git | Mettre le projet sous Git ou rattacher au depot source | proteger le travail | racine | decision utilisateur | `git status` disponible |
| BF-P0-002 | P0 | Build | Debloquer build frontend | condition MVP | `frontend/src/lib/prisma.ts`, imports | Git | `npm run build` passe |
| BF-P0-003 | P0 | Assets | Corriger references images cassees | UX/qualite | pages frontend, `public/images` | contenu | aucune image 404 |
| BF-P0-004 | P0 | Backend | Restaurer `backend/package.json` | API inexecutable | `backend/package.json` | choix stack | install/build backend passent |
| BF-P1-001 | P1 | Contenu | Remplacer claims non valides par contenu prudent | risque reputational | pages frontend | validation produit | aucune promesse non confirmee |
| BF-P1-002 | P1 | Contact | Valider formulaire bout en bout | capture leads MVP | frontend/backend contact | backend | message stocke/notifie, spam limite |
| BF-P1-003 | P1 | Legal | Ajouter mentions legales/confidentialite provisoires a valider | minimum production | nouvelles routes | infos legales | pages accessibles |
| BF-P1-004 | P1 | Admin/CMS | Decider et securiser admin ou le sortir du MVP | surface attaque | `admin`, backend auth | decision | admin protege ou retire |
| BF-P2-001 | P2 | SEO | Ajouter sitemap/robots/metadonnees locales | acquisition | frontend app | contenu valide | fichiers presents, metadata par page |
| BF-P2-002 | P2 | A11y | Audit clavier/labels/focus/contraste | WCAG AA | composants | build | corrections critiques |
| BF-P2-003 | P2 | Performance | Optimiser images/polices/icons | mobile lent | assets/layout | build | Lighthouse mobile ameliore |
| BF-P3-001 | P3 | Tests | Ajouter tests smoke/routes | non regression | frontend/backend | build | CI locale minimale |
| BF-P3-002 | P3 | DevOps | Docker/NGINX/deploiement reproductible | production | docker/nginx | cible hebergement | runbook deploy |

## 17. Prochain lot recommande

Nom: `LOT BILIK-FARM-REPRISE-001 - Stabilisation socle`

Objectif: securiser la reprise et rendre le frontend public buildable sans modifier le perimetre produit.

Perimetre:

- Initialiser/rattacher Git apres decision.
- Corriger le build frontend.
- Supprimer ou isoler l'import Prisma cote frontend.
- Corriger references images cassees.
- Documenter contenu non confirme sans encore reecrire tout le site.

Fichiers probables:

- `frontend/src/lib/prisma.ts`
- imports eventuels de `frontend/src/lib/prisma.ts`
- `frontend/src/app/[locale]/page.tsx`
- `frontend/src/app/[locale]/products/page.tsx`
- `frontend/public/images`

Risques: petites corrections techniques peuvent exposer d'autres erreurs TypeScript apres le premier blocage.  
Tests: `npm run build`, `.\\node_modules\\.bin\\tsc --noEmit`, verification routes principales.  
Definition of Done: Git operationnel, build frontend OK, images principales non cassees, liste de contenu a valider conservee.

## 18. Decisions requises

- Fournir ou creer le depot Git officiel.
- Confirmer surface actuelle: 2,5 ha initiaux vs 40 ha affiches.
- Confirmer produits reellement disponibles, volumes, prix et zones de livraison.
- Confirmer si les temoignages affiches sont reels et autorises.
- Decider si l'admin/CMS est requis dans le MVP ou reporte.
- Decider si commandes en ligne/orders sont hors perimetre pour l'instant.
- Fournir informations legales minimales et politique de confidentialite a valider.

## 19. Verdict

`NO-GO TEMPORAIRE`

Le projet ne doit pas etre mis en production en l'etat. La continuation est possible sans refonte totale, car le frontend public contient une base reutilisable, mais la reprise doit commencer par Git, build, contenu verifie, backend/admin et securite minimale.
