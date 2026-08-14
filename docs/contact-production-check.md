# Vérification humaine du contact réel — Bilik Farm

## Pourquoi cette procédure existe

Le formulaire de contact (`/fr/contact`) transmet les messages via **FormSubmit** (`formsubmit.co`), un service tiers, sans backend propre à Bilik Farm. Le code a été testé automatiquement (voir `frontend/src/components/forms/ContactForm.test.tsx`, tests `CONTACT-001` à `CONTACT-005`), mais ces tests simulent (`mock`) la réponse réseau — **ils ne prouvent pas qu'un email est réellement livré**.

L'environnement d'exécution Claude Code utilisé pour développer et auditer ce projet bloque explicitement les connexions sortantes vers `formsubmit.co` (politique réseau du bac à sable, confirmée par `curl -sS "$HTTPS_PROXY/__agentproxy/status"` → `connect_rejected: gateway answered 403 to CONNECT`). Cette vérification doit donc être effectuée par un humain, depuis un poste avec un accès réseau normal, après déploiement.

## Procédure (≈ 10 minutes)

1. Déployer la branche candidate sur l'environnement choisi (ou servir `frontend/out/` localement après `npm run build`).
2. Ouvrir `/fr/contact`.
3. Remplir le formulaire avec des données de test clairement identifiables (ex. sujet : "Test contact — [date]") et l'envoyer.
4. Ouvrir la boîte `Bilik-farm@gmail.com`.
5. Chercher l'email d'activation envoyé par FormSubmit (première soumission vers une nouvelle adresse — comportement documenté de FormSubmit, pas un bug du site).
6. Confirmer l'activation en cliquant sur le lien reçu.
7. Retourner sur `/fr/contact` et envoyer un second message de test.
8. Confirmer sa réception dans `Bilik-farm@gmail.com`.
9. Vérifier que l'expéditeur, le sujet et le contenu du message reçu correspondent bien à ce qui a été saisi dans le formulaire.
10. Vérifier également le repli `mailto:` : cliquer sur le lien `Bilik-farm@gmail.com` du footer ou de la page contact et confirmer qu'il ouvre bien un client mail avec l'adresse pré-remplie.

## Critère de réussite

```
CONTACT-E2E-HUMAN : PASS
```

uniquement si les 10 étapes ci-dessus ont été exécutées avec succès, par une personne, hors de l'environnement Claude Code.

## Si une étape échoue

- Étape 5/6 (pas d'email d'activation reçu) : vérifier les spams, puis contacter le support FormSubmit si l'email n'apparaît toujours pas après quelques minutes.
- Étape 8 (deuxième message non reçu) : revérifier que l'activation (étape 6) a bien été confirmée — FormSubmit ne relaie aucun message tant que l'adresse n'est pas activée.
- Toute autre anomalie : documenter précisément le comportement observé avant de déclarer `PRODUCTION : GO`.

Tant que `CONTACT-E2E-HUMAN` n'a pas été exécuté avec un résultat `PASS`, la Release Candidate reste `PASS AVEC RÉSERVE HUMAINE` et `PRODUCTION : NO-GO`.
