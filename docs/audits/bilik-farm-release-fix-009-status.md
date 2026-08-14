# Statut de release — après BILIK-FARM-RELEASE-FIX-009

Ce document enregistre l'état des points ouverts après le lot correctif de release, pour référence des lots suivants.

## Accessibilité — contraste WCAG AA

**Statut : CORRIGÉ ET VÉRIFIÉ.**

- Avant ce lot : 325 violations `color-contrast` (axe-core) sur 26/27 pages.
- Cause : le token `terracotta` (`#C35B3E`) et les opacités basses de `text-primary` (`/45`, `/50`, `/60`, `/65`) tombaient sous le seuil 4.5:1 sur fond blanc/ivoire, et le texte blanc à opacité réduite (`text-white/70`, `/75`) tombait sous le seuil sur fond `bg-terracotta`.
- Correctif : `terracotta` assombri vers `#A94730` (déjà utilisé comme teinte de survol dans le code) ; les opacités `/45`/`/50`/`/60`/`/65` de `text-primary` relevées à `/70` (déjà une valeur existante et conforme) ; le texte blanc sur fond `bg-terracotta` rendu opaque (`text-white` plein) dans les 4 sections concernées.
- Après ce lot : 0 violation `color-contrast` sur les 27 pages réelles, re-vérifié par un passage `axe-core` complet.
- Seul défaut d'accessibilité restant : `landmark-one-main`/`region` sur la page 404 par défaut de Next.js (non personnalisée) — P3, hors scope, déjà documenté (BUG-003, audit précédent).

## SEO — metadata par page

**Statut : CORRIGÉ ET VÉRIFIÉ.**

- Avant ce lot : 24/27 pages partageaient le titre/description générique du site (les 15 fiches produit, le blog, le contact, les 5 pages services).
- Correctif : `generateMetadata` ajouté sur les 15 fiches produit (dérivé de `src/data/products.ts` : titre, catégorie, statut, description réels) ; `export const metadata` ajouté sur l'accueil, le blog, le contact, la nouvelle page confidentialité, et les 5 pages services (dérivé de `src/data/services.ts`).
- Après ce lot : 27/27 pages ont un titre distinct et pertinent (vérifié par extraction du `<head>` rendu, pas seulement du code source).
- Toujours absents (hors scope de ce lot) : sitemap.xml, robots.txt, Open Graph, canonical, données structurées.

## Sécurité — `sharp`

**Statut : RISQUE ACCEPTÉ TEMPORAIREMENT (inchangé, non corrigé dans ce lot).**

`npm audit` : 2 vulnérabilités high sur `sharp` (dépendance optionnelle de `next`, utilisée uniquement par le serveur d'optimisation d'image intégré de Next). Ce projet n'utilise ni `next/image` ni de serveur Next actif (export statique pur), donc le chemin de code vulnérable n'est jamais exécuté. Correctif disponible uniquement via `next@16` (majeur, hors scope). Voir `docs/security/bilik-farm-contact-integration.md` et le rapport BILIK-FARM-QA-008 pour le détail complet de cette fiche de risque.

## Avertissements `<img>` (ESLint `no-img-element`)

**Statut : DEFERRED — P2 (inchangé, non corrigé dans ce lot).**

Toujours 17 avertissements, aucune migration `next/image` entreprise (hors scope explicite de ce lot). Vérifié par QA-008 : aucun impact démontré sur le layout shift, la déformation d'image ou le responsive.

## Contact réel (FormSubmit)

**Statut : PRÊT TECHNIQUEMENT, NON CONFIRMÉ EN LIVRAISON RÉELLE.**

Voir `docs/contact-production-check.md` pour la procédure de validation humaine requise avant `PRODUCTION : GO`.
