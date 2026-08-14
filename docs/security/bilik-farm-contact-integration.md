# Intégration FormSubmit — formulaire de contact

Documentation technique de l'intégration tierce utilisée par `/fr/contact` (`frontend/src/components/forms/ContactForm.tsx`), requise par BILIK-FARM-RELEASE-FIX-009.

- **Service** : FormSubmit (formsubmit.co), service tiers indépendant, sans compte préalable requis.
- **Endpoint** : `https://formsubmit.co/ajax/Bilik-farm@gmail.com` (AJAX JSON, pas de redirection de page).
- **Méthode** : `POST` via `fetch`, `Accept: application/json`, corps `FormData`.
- **Données transmises** : `name`, `email`, `phone` (facultatif), `subject`, `message`, plus les champs de configuration FormSubmit (`_subject`, `_template=table`, `_captcha=false`) et un champ honeypot anti-spam (`_honey`, normalement vide).
- **Frontend only** : oui — aucun backend, aucune base de données Bilik Farm n'intervient. Le composant est un composant client (`'use client'`) qui appelle directement l'endpoint FormSubmit depuis le navigateur du visiteur.
- **Cookies introduits par notre code** : aucun.
- **Scripts tiers injectés par notre code pour cette intégration** : aucun — l'appel est un simple `fetch`, pas de script FormSubmit chargé sur la page.

## Ce qui n'est pas vérifié

Bilik Farm n'a pas d'accès ni de contrat avec FormSubmit permettant de garantir : la durée de conservation des données côté FormSubmit, la localisation de leurs serveurs, l'usage exact qu'ils font des données transitant par leur service en dehors du relais email, ou l'absence de cookies/scripts propres à FormSubmit une fois la requête réseau effectuée (hors du contrôle du code de ce site). Ces points sont signalés comme **À VALIDER AVANT PUBLICATION** sur `/fr/confidentialite`.

## Statut

`RISQUE ACCEPTÉ TEMPORAIREMENT` — intégration techniquement fonctionnelle et documentée ; la preuve de livraison réelle d'email reste une vérification humaine distincte (voir `docs/contact-production-check.md`), non exécutable depuis l'environnement Claude Code (réseau sandbox bloquant `formsubmit.co`).
