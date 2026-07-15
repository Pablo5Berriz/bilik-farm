# Décisions de contenu requises — Bilik Farm

Date : 2026-07-14
Source : registre `bilik-farm-content-claims-register.md`

## Matrice préalable BF-REPRISE-002B

| Claim ID | Fichier | Route | Texte actuel | Action | Texte cible |
| --- | --- | --- | --- | --- | --- |
| CLM-001 | `frontend/src/app/layout.tsx` | toutes | Ferme agro-pastorale | reformuler | Projet agricole intégré en développement |
| CLM-002, CLM-039, CLM-043, CLM-049, CLM-051, CLM-059, CLM-060 | layout, accueil, à propos | toutes, `/fr`, `/fr/about` | 40 hectares / 40 ha | remplacer | Première superficie d'environ 2,5 hectares dans la région du Centre au Cameroun |
| CLM-003, CLM-004, CLM-007, CLM-030, CLM-033, CLM-052, CLM-072, CLM-073, CLM-074, CLM-076, CLM-079 | layout, header, accueil, services | toutes, `/fr`, services | Services commerciaux actifs | classer futur | Activités prévues, non proposées comme services commerciaux |
| CLM-005, CLM-006, CLM-031, CLM-032, CLM-068, CLM-070, CLM-077, CLM-078 | header, accueil, produits, services | toutes, `/fr`, `/fr/products`, services | Produits ou ventes disponibles | reformuler | Filières ciblées, productions en développement |
| CLM-008, CLM-034, CLM-066 | header, accueil, à propos | toutes, `/fr`, `/fr/about` | Experts, agronomes qualifiés, aquaculteurs certifiés | retirer ou atténuer | Approche progressive et demande d'informations |
| CLM-009, CLM-040, CLM-057, CLM-062, CLM-063, CLM-064 | footer, accueil, à propos | toutes, `/fr`, `/fr/about` | Durabilité, agroécologie, régénératrice, impacts comme acquis | reformuler | Volonté de pratiques responsables et objectif de développement local |
| CLM-010, CLM-011, CLM-013, CLM-014 | footer | toutes | Réseaux sociaux, liens `#`, téléphone et email non confirmés | retirer | Région du Centre, Cameroun et lien contact |
| CLM-012 | footer | toutes | Bilik, Akono, Région Centre | reformuler | Région du Centre, Cameroun |
| CLM-015 | footer | toutes | Copyright 2025 | remplacer | Année dynamique avec `new Date().getFullYear()` |
| CLM-016 | contact | `/fr/contact` | Réponse rapide promise | atténuer | Message reçu, sans délai promis |
| CLM-017, CLM-022, CLM-025, CLM-028, CLM-044, CLM-045, CLM-046, CLM-047, CLM-069 | accueil, produits | `/fr`, `/fr/products` | Effectifs, volumes et expérience chiffrés | retirer | Aucune valeur de remplacement |
| CLM-018, CLM-020, CLM-024, CLM-050, CLM-061 | accueil, à propos | `/fr`, `/fr/about` | Qualité irréprochable, biologique, contrôle rigoureux | reformuler | Attention portée à la qualité, sans garantie absolue |
| CLM-019, CLM-021, CLM-023, CLM-026, CLM-027, CLM-029 | accueil | `/fr` | Prix FCFA | remplacer | Informations sur demande |
| CLM-035, CLM-036, CLM-037, CLM-054 | accueil | `/fr` | Témoignages nominatifs et satisfaction clients | retirer | Section supprimée |
| CLM-038 | accueil | `/fr` | Bilik, Cameroun | reformuler | Région du Centre, Cameroun |
| CLM-041, CLM-042 | accueil | `/fr` | Qualité garantie, livraison locale | retirer | Badges prudents sans garantie ni livraison |
| CLM-048, CLM-058 | accueil, à propos | `/fr`, `/fr/about` | Fondateur nommé | reformuler | Projet porté par une vision locale, sans identité personnelle publiée |
| CLM-053, CLM-067 | accueil, à propos | `/fr`, `/fr/about` | Visite proposée | reformuler | Contact pour en savoir plus |
| CLM-055, CLM-080 | accueil, détail produit | `/fr`, `/fr/products/[id]` | Commande | remplacer | Demander des informations |
| CLM-056 | à propos | `/fr/about` | Histoire, mission et équipe | reformuler | Présentation du projet et de ses axes de développement |
| CLM-065 | à propos | `/fr/about` | Équipe complète dédiée | atténuer | Réseau et partenaires à structurer progressivement |
| CLM-071 | produits | `/fr/products` | Surfaces par culture | retirer | Aucune surface par culture |
| CLM-075 | provenderie | `/fr/services/feedmill` | Placeholder abreuvoir public | conserver temporairement | Mention maintenue comme placeholder technique déjà documenté |

## Résultat BF-REPRISE-002B

- Claims reformulés publiquement : 60.
- Claims reclassés comme futurs : 11.
- Claims retirés de l'interface publique : 8.
- Claims conservés ou hors périmètre autorisé : 8.
- Prix publics restants dans les pages autorisées : 0.
- Témoignages nominatifs restants : 0.
- CTA de commande ou devis restants : 0.
- Coordonnées placeholders restantes dans les pages autorisées : 0.

## 1. Identité et statut juridique

- Information affichée : Bilik Farm est une ferme agro-pastorale.
- Fichiers/routes : `frontend/src/app/layout.tsx`, `frontend/src/app/[locale]/page.tsx`, `frontend/src/app/[locale]/about/page.tsx`.
- Question au porteur : quel est le nom officiel actuel, et existe-t-il une entité juridique ?
- Choix possibles : Bilik Farm comme nom de projet, entreprise enregistrée, marque commerciale, future entité Bilik Agro Industries.
- Recommandation PM : ne pas présenter Bilik Agro Industries comme existante tant que non établie.
- Impact sans réponse : risque juridique et confusion de marque.

## 2. Surface et localisation

- Information affichée : 40 hectares à Bilik/Akono/Région Centre/Cameroun.
- Fichiers/routes : `/fr`, `/fr/about`, footer, metadata.
- Question au porteur : la surface actuelle est-elle 2,5 ha ou 40 ha ? Quelle est la localisation publiable exacte ?
- Choix possibles : surface actuelle, surface visée, surface potentielle d'extension.
- Recommandation PM : utiliser la surface actuelle validée et placer l'extension en perspective future.
- Impact sans réponse : risque critique de communication trompeuse.

## 3. Activités actuellement opérationnelles

- Information affichée : agriculture, élevage, aquaculture, provenderie, écloserie, conseils.
- Fichiers/routes : header, accueil, pages services.
- Question au porteur : quelles activités sont réellement en production aujourd'hui ?
- Choix possibles : opérationnel, en préparation, futur, hors périmètre.
- Recommandation PM : séparer clairement actuel / préparation / vision.
- Impact sans réponse : promesses commerciales non tenables.

## 4. Produits disponibles

- Information affichée : œufs, carpes, tilapias, clarias, porcs, lapins, poules, maïs, avocats, safou, papayes, manioc, bananes, plantains.
- Fichiers/routes : `/fr`, `/fr/products`, `/fr/services/fresh-produce`.
- Question au porteur : quels produits peuvent réellement être vendus ou présentés comme productions actuelles ?
- Choix possibles : disponible, saisonnier, test, futur, non disponible.
- Recommandation PM : retirer le statut "disponible" sans preuve.
- Impact sans réponse : risque commercial et réputationnel.

## 5. Prix et unités

- Information affichée : prix FCFA par alvéole, kg, 100 kg ou pièce.
- Fichiers/routes : accueil, catalogue, fiche produit dynamique.
- Question au porteur : les prix sont-ils officiels, actuels et maintenus ?
- Choix possibles : afficher prix, afficher "sur demande", retirer les prix.
- Recommandation PM : utiliser "sur demande" tant que la politique de prix n'est pas validée.
- Impact sans réponse : litiges commerciaux possibles.

## 6. Volumes et capacités

- Information affichée : 10 000 poules, 25 000 poissons, 2 500 porcs, 1 500 poules du village, 500 lapins, 266 alvéoles/jour.
- Fichiers/routes : `/fr`, `/fr/products`, `/fr/about`.
- Question au porteur : quels volumes sont actuels, mesurés et publiables ?
- Choix possibles : retirer, remplacer par fourchettes, classer en objectifs futurs.
- Recommandation PM : ne publier aucun volume sans preuve.
- Impact sans réponse : incohérence avec surface initiale et perte de crédibilité.

## 7. Services

- Information affichée : provenderie, sacs de 50 kg, écloserie, conseil agricole, équipements.
- Fichiers/routes : `/fr`, `/fr/services/feedmill`, `/fr/services/hatchery`, `/fr/services/advisory`.
- Question au porteur : ces services sont-ils déjà vendus ?
- Choix possibles : actif, test interne, prévu, retirer.
- Recommandation PM : limiter le MVP aux services réellement disponibles.
- Impact sans réponse : risque de demandes impossibles à honorer.

## 8. Équipe et expertise

- Information affichée : agronomes qualifiés, aquaculteurs certifiés, vétérinaires partenaires, experts.
- Fichiers/routes : `/fr/about`, `/fr/services/advisory`.
- Question au porteur : quelles personnes, qualifications et partenariats sont confirmés ?
- Choix possibles : nommer l'équipe, rester générique, retirer les certifications.
- Recommandation PM : ne pas afficher certifications ou partenaires sans autorisation.
- Impact sans réponse : risque légal et réputationnel.

## 9. Témoignages

- Information affichée : Marie Nkodo, Jean-Pierre Mbarga, Alphonse Ntouba.
- Fichiers/routes : `/fr`.
- Question au porteur : ces témoignages sont-ils réels, autorisés et vérifiables ?
- Choix possibles : conserver avec autorisation, anonymiser, retirer.
- Recommandation PM : retirer avant production sans preuve écrite.
- Impact sans réponse : risque de faux témoignage.

## 10. Livraison et commandes

- Information affichée : livraison locale, passez commande, devis, appeler directement.
- Fichiers/routes : `/fr`, `/fr/products`, `/fr/services/feedmill`, footer.
- Question au porteur : quels canaux de commande et zones de livraison existent ?
- Choix possibles : formulaire de contact seulement, téléphone, WhatsApp, devis manuel, pas de commande.
- Recommandation PM : transformer en demandes d'information si commande non opérationnelle.
- Impact sans réponse : leads perdus et promesses non tenues.

## 11. Partenariats et export

- Information affichée : pas de page export active, mais le contexte projet mentionne une vision future.
- Fichiers/routes : absent du frontend actuel.
- Question au porteur : faut-il présenter les partenariats/export comme vision future ?
- Choix possibles : absent MVP, section vision future, page partenariats.
- Recommandation PM : classer export et marchés canadiens comme `FUTUR`.
- Impact sans réponse : risque d'afficher une capacité inexistante.

## 12. Informations de contact

- Information affichée : téléphone placeholder, email info@bilikfarm.com, réseaux sociaux.
- Fichiers/routes : footer, contact.
- Question au porteur : quels contacts sont officiels et opérationnels ?
- Choix possibles : téléphone réel, email réel, WhatsApp, réseaux sociaux confirmés.
- Recommandation PM : retirer tout placeholder avant démonstration externe.
- Impact sans réponse : site non crédible.

## 13. Mentions environnementales

- Information affichée : durable, agroécologie, régénératrice, biologique, respect de l'environnement.
- Fichiers/routes : metadata, accueil, about, products.
- Question au porteur : quelles pratiques sont réelles et documentées ?
- Choix possibles : engagement général, pratiques spécifiques, certifications, retrait des termes forts.
- Recommandation PM : éviter les termes certifiants sans preuve.
- Impact sans réponse : greenwashing potentiel.

## 14. Informations légales

- Information affichée : copyright 2025, email admin seed, placeholders `.env.example`.
- Fichiers/routes : footer, backend seed, config.
- Question au porteur : quelle entité porte le site et quelles mentions légales doivent être publiées ?
- Choix possibles : entrepreneur individuel, société, projet agricole en constitution.
- Recommandation PM : ajouter pages légales seulement après validation des informations.
- Impact sans réponse : blocage production.

## Contradictions internes détectées

1. Surface globale affichée à 40 ha vs cadrage projet autour de 2,5 ha initiaux.
2. Somme des surfaces par culture supérieure à la surface globale.
3. Effectifs animaux très élevés sans cohérence prouvée avec la surface.
4. Services présentés comme actifs alors que l'état backend/admin ne valide aucun flux.
5. Témoignages nominatifs sans preuve d'autorisation.
6. Commandes et devis affichés sans canal commercial validé.
7. Livraison locale affichée sans zones ni processus.
8. Claims qualité/biologique/certifié sans preuve.
9. Placeholder d'abreuvoir présent dans une galerie publique.
