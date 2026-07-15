# Registre des affirmations à valider — Bilik Farm

Date : 2026-07-14
SHA de référence : `6a5004f817f9fbf79eb8431087b55cb33d737dd4`
Périmètre : frontend public, composants UI, contenu admin statique, seed backend, `.env.example`, documents d'audit existants.

## Synthèse

- Affirmations recensées : 87
- Routes publiques concernées : 13
- Décisions requises : 41
- Contradictions détectées : 9
- Statut par défaut : toute affirmation commerciale, chiffrée, opérationnelle ou testimonial est `À CONFIRMER` sans source officielle.

## Mise à jour BF-REPRISE-002B

Date : 2026-07-14
SHA de départ : `e01aab6e74043c88852efef35ec38e7135407475`
SHA cible : commit local `fix(content): remove unverified public claims`

### Résolution des affirmations

| Résolution BF-002B | Nombre |
| --- | ---: |
| REFORMULE PUBLIC | 60 |
| RECLASSE FUTUR | 11 |
| RETIRE PUBLIC | 8 |
| CONSERVE OU HORS PERIMETRE | 8 |

### Nouvelles statistiques de risque public

| Indicateur | Nombre |
| --- | ---: |
| Affirmations publiques critiques restantes dans les fichiers autorisés | 0 |
| Prix publics restants dans les pages autorisées | 0 |
| Témoignages nominatifs restants | 0 |
| CTA commerciaux restants | 0 |
| Téléphones placeholders restants dans les pages autorisées | 0 |
| Services futurs encore présentés comme actifs | 0 |

Les textes précédents sont conservés dans le registre et dans `bilik-farm-content-source-map.csv`. Le CSV ajoute les colonnes `bf002b_resolution` et `bf002b_action` pour tracer l'action appliquée à chaque `claim_id`.

## Statistiques

### Par catégorie

| Catégorie | Nombre |
| --- | ---: |
| identité | 4 |
| localisation | 2 |
| surface | 7 |
| historique | 1 |
| production | 6 |
| élevage | 6 |
| agriculture | 2 |
| produits | 3 |
| prix | 6 |
| disponibilité | 5 |
| logistique | 4 |
| services | 12 |
| équipe | 1 |
| expertise | 4 |
| qualité | 6 |
| environnement | 4 |
| témoignages | 4 |
| contact | 5 |
| juridique | 4 |
| PLACEHOLDER TECHNIQUE | 1 |

### Par statut

| Statut | Nombre |
| --- | ---: |
| CONFIRMÉ | 1 |
| À CONFIRMER | 80 |
| FUTUR | 1 |
| À RETIRER | 3 |
| PLACEHOLDER TECHNIQUE | 2 |

### Par risque

| Risque | Nombre |
| --- | ---: |
| Critique | 37 |
| Élevé | 32 |
| Moyen | 17 |
| Faible | 1 |

### Fichiers contenant le plus d'affirmations risquées

| Fichier | Nombre approximatif |
| --- | ---: |
| `frontend/src/app/[locale]/page.tsx` | 34 |
| `frontend/src/app/[locale]/products/page.tsx` | 24 |
| `frontend/src/app/[locale]/about/page.tsx` | 18 |
| `frontend/src/app/[locale]/services/feedmill/page.tsx` | 18 |
| `frontend/src/components/ui/Footer.tsx` | 8 |

## Registre

| ID | Affirmation ou résumé | Fichier:ligne | Route | Section | Catégorie | Statut proposé | Risque | Preuve disponible | Décision requise | Recommandation future |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| CLM-001 | Bilik Farm est une ferme agro-pastorale | `frontend/src/app/layout.tsx:11` | toutes | metadata | identité | À CONFIRMER | Moyen | code seulement | Confirmer le positionnement officiel | Garder seulement si juridiquement exact |
| CLM-002 | Ferme agro-pastorale de 40 hectares au Cameroun | `frontend/src/app/layout.tsx:12` | toutes | metadata | surface | À CONFIRMER | Critique | contredit le cadrage 2,5 ha | Confirmer surface actuelle | Remplacer par surface validée ou formulation prudente |
| CLM-003 | Produits frais, animaux, aquaculture, provenderie et conseils agricoles | `frontend/src/app/layout.tsx:12` | toutes | metadata | services | À CONFIRMER | Élevé | code seulement | Confirmer activités réellement opérationnelles | Distinguer activités actuelles et prévues |
| CLM-004 | Navigation vers provenderie | `frontend/src/components/ui/Header.tsx:38` | toutes | header | services | À CONFIRMER | Élevé | page existe | Confirmer service opérationnel | Maintenir ou classer comme projet |
| CLM-005 | Navigation vers vente d'animaux | `frontend/src/components/ui/Header.tsx:39` | toutes | header | services | À CONFIRMER | Élevé | page existe | Confirmer vente réelle d'animaux | Maintenir seulement si disponible |
| CLM-006 | Navigation vers vente de vivres frais | `frontend/src/components/ui/Header.tsx:40` | toutes | header | services | À CONFIRMER | Élevé | page existe | Confirmer disponibilité de vivres | Mettre en attente si non commercialisé |
| CLM-007 | Navigation vers écloserie | `frontend/src/components/ui/Header.tsx:41` | toutes | header | services | À CONFIRMER | Élevé | page existe | Confirmer couvoir/écloserie | Classer futur si non opérationnel |
| CLM-008 | Navigation vers conseils | `frontend/src/components/ui/Header.tsx:42` | toutes | header | expertise | À CONFIRMER | Moyen | page existe | Confirmer service conseil | Décrire seulement capacité validée |
| CLM-009 | Bilik Farm promeut agriculture durable et agroécologie | `frontend/src/components/ui/Footer.tsx:16` | toutes | footer | environnement | À CONFIRMER | Élevé | code seulement | Confirmer pratiques et preuves | Utiliser une formulation non certifiante |
| CLM-010 | Liens Facebook et Instagram officiels | `frontend/src/components/ui/Footer.tsx:20` | toutes | footer | contact | À CONFIRMER | Moyen | liens codés | Confirmer comptes officiels | Corriger ou retirer avant production |
| CLM-011 | Liens YouTube et WhatsApp placeholders `#` | `frontend/src/components/ui/Footer.tsx:22` | toutes | footer | contact | À RETIRER | Élevé | lien `#` | Fournir vrais liens ou retirer | Ne pas publier en l'état |
| CLM-012 | Adresse Bilik, Akono, Région Centre, Cameroun | `frontend/src/components/ui/Footer.tsx:74` | toutes | footer | localisation | À CONFIRMER | Élevé | code seulement | Confirmer localisation officielle | Ajouter précision vérifiée |
| CLM-013 | Téléphone `+237 XXX XXX XXX` | `frontend/src/components/ui/Footer.tsx:78` | toutes | footer | contact | À RETIRER | Élevé | placeholder évident | Fournir numéro réel | Retirer placeholder |
| CLM-014 | Email `info@bilikfarm.com` | `frontend/src/components/ui/Footer.tsx:82` | toutes | footer | contact | À CONFIRMER | Élevé | code seulement | Confirmer domaine/mail opérationnel | Tester réception avant publication |
| CLM-015 | Copyright 2025 Bilik Farm | `frontend/src/components/ui/Footer.tsx:91` | toutes | footer | juridique | À CONFIRMER | Moyen | code seulement | Confirmer entité titulaire | Adapter à identité légale |
| CLM-016 | Formulaire promet une réponse rapide | `frontend/src/components/forms/ContactForm.tsx:30` | `/fr/contact` | formulaire | contact | À CONFIRMER | Moyen | API non validée | Confirmer capacité de traitement | Lier à canal opérationnel |
| CLM-017 | Œufs issus de 10 000 poules pondeuses | `frontend/src/app/[locale]/page.tsx:12` | `/fr` | produits phares | production | À CONFIRMER | Critique | code seulement | Confirmer cheptel actuel | Remplacer si non prouvé |
| CLM-018 | Œufs inspectés quotidiennement et qualité irréprochable | `frontend/src/app/[locale]/page.tsx:12` | `/fr` | produits phares | qualité | À CONFIRMER | Élevé | code seulement | Confirmer protocole qualité | Atténuer sans preuve |
| CLM-019 | Prix œufs : 2 200 FCFA / alvéole | `frontend/src/app/[locale]/page.tsx:13` | `/fr` | produits phares | prix | À CONFIRMER | Critique | code seulement | Confirmer prix et unité | Centraliser prix validés |
| CLM-020 | Carpes élevées dans étangs contrôlés et pratiques durables | `frontend/src/app/[locale]/page.tsx:22` | `/fr` | produits phares | production | À CONFIRMER | Élevé | code seulement | Confirmer aquaculture active | Documenter ou reformuler |
| CLM-021 | Prix carpes : 2 500 FCFA / kg | `frontend/src/app/[locale]/page.tsx:23` | `/fr` | produits phares | prix | À CONFIRMER | Critique | code seulement | Confirmer prix | Centraliser prix validés |
| CLM-022 | Tilapias : 25 000 poissons produits par cycle | `frontend/src/app/[locale]/page.tsx:32` | `/fr` | produits phares | production | À CONFIRMER | Critique | code seulement | Confirmer volume/cycle | Retirer si non prouvé |
| CLM-023 | Prix tilapias : 2 500 FCFA / kg | `frontend/src/app/[locale]/page.tsx:33` | `/fr` | produits phares | prix | À CONFIRMER | Critique | code seulement | Confirmer prix | Centraliser prix validés |
| CLM-024 | Porcs nourris avec aliments biologiques | `frontend/src/app/[locale]/page.tsx:42` | `/fr` | produits phares | qualité | À CONFIRMER | Critique | aucune certification | Confirmer biologique/certification | Éviter le terme biologique sans preuve |
| CLM-025 | 2 500 porcs produisent une viande juteuse d'exception | `frontend/src/app/[locale]/page.tsx:42` | `/fr` | produits phares | élevage | À CONFIRMER | Critique | code seulement | Confirmer effectif porcin | Remplacer ou retirer |
| CLM-026 | Prix porc : 2 800 FCFA / kg | `frontend/src/app/[locale]/page.tsx:43` | `/fr` | produits phares | prix | À CONFIRMER | Critique | code seulement | Confirmer prix | Centraliser prix validés |
| CLM-027 | Maïs à 30 000 FCFA / 100 kg | `frontend/src/app/[locale]/page.tsx:53` | `/fr` | produits phares | prix | À CONFIRMER | Critique | code seulement | Confirmer disponibilité/prix | Centraliser prix validés |
| CLM-028 | 1 500 poules du village en liberté | `frontend/src/app/[locale]/page.tsx:62` | `/fr` | produits phares | élevage | À CONFIRMER | Critique | code seulement | Confirmer effectif et mode | Atténuer si non prouvé |
| CLM-029 | Prix poules du village : 10 000 FCFA pièce | `frontend/src/app/[locale]/page.tsx:63` | `/fr` | produits phares | prix | À CONFIRMER | Critique | code seulement | Confirmer prix | Centraliser prix validés |
| CLM-030 | Provenderie : aliments pour poules, porcs, poissons, sacs 50 kg disponibles | `frontend/src/app/[locale]/page.tsx:73` | `/fr` | services | services | À CONFIRMER | Critique | code seulement | Confirmer provenderie et stock | Classer futur si non opérationnel |
| CLM-031 | Vente d'animaux : carpes, tilapias, clarias, poules, porcs, lapins | `frontend/src/app/[locale]/page.tsx:80` | `/fr` | services | disponibilité | À CONFIRMER | Critique | code seulement | Confirmer espèces disponibles | Lister uniquement produits réels |
| CLM-032 | Vivres frais cultivés : maïs, avocats, safou, papaye, manioc, bananes, plantains | `frontend/src/app/[locale]/page.tsx:87` | `/fr` | services | agriculture | À CONFIRMER | Critique | code seulement | Confirmer cultures disponibles | Lister cultures actuelles vs projet |
| CLM-033 | Écloserie avec installations modernes et taux de réussite élevés | `frontend/src/app/[locale]/page.tsx:93` | `/fr` | services | services | À CONFIRMER | Critique | code seulement | Confirmer équipement et taux | Retirer taux sans mesure |
| CLM-034 | Experts accompagnent pour maximiser les rendements | `frontend/src/app/[locale]/page.tsx:101` | `/fr` | services | expertise | À CONFIRMER | Élevé | code seulement | Confirmer équipe conseil | Atténuer promesse de rendement |
| CLM-035 | Témoignage Marie Nkodo | `frontend/src/app/[locale]/page.tsx:119` | `/fr` | témoignages | témoignages | À CONFIRMER | Critique | code seulement | Confirmer authenticité/autorisation | Retirer si non documenté |
| CLM-036 | Témoignage Jean-Pierre Mbarga | `frontend/src/app/[locale]/page.tsx:125` | `/fr` | témoignages | témoignages | À CONFIRMER | Critique | code seulement | Confirmer authenticité/autorisation | Retirer si non documenté |
| CLM-037 | Témoignage Alphonse Ntouba | `frontend/src/app/[locale]/page.tsx:131` | `/fr` | témoignages | témoignages | À CONFIRMER | Critique | code seulement | Confirmer authenticité/autorisation | Retirer si non documenté |
| CLM-038 | Ferme agro-pastorale à Bilik, Cameroun | `frontend/src/app/[locale]/page.tsx:162` | `/fr` | hero | localisation | À CONFIRMER | Moyen | code seulement | Confirmer commune/localité | Utiliser localisation validée |
| CLM-039 | 40 hectares dédiés à élevage, aquaculture et agriculture durable | `frontend/src/app/[locale]/page.tsx:172` | `/fr` | hero | surface | À CONFIRMER | Critique | contredit cadrage 2,5 ha | Confirmer surface | Corriger avant publication |
| CLM-040 | Agriculture durable | `frontend/src/app/[locale]/page.tsx:188` | `/fr` | badges | environnement | À CONFIRMER | Élevé | code seulement | Définir pratiques | Documenter ou atténuer |
| CLM-041 | Qualité garantie | `frontend/src/app/[locale]/page.tsx:189` | `/fr` | badges | qualité | À CONFIRMER | Élevé | code seulement | Définir garantie | Retirer si pas de garantie formelle |
| CLM-042 | Livraison locale | `frontend/src/app/[locale]/page.tsx:190` | `/fr` | badges | logistique | À CONFIRMER | Élevé | code seulement | Confirmer zones de livraison | Retirer si non opérationnel |
| CLM-043 | Stat 40 ha terres fertiles | `frontend/src/app/[locale]/page.tsx:214` | `/fr` | stats | surface | À CONFIRMER | Critique | contredit cadrage 2,5 ha | Confirmer surface | Corriger avant publication |
| CLM-044 | Stat 10 000 poules pondeuses | `frontend/src/app/[locale]/page.tsx:215` | `/fr` | stats | élevage | À CONFIRMER | Critique | code seulement | Confirmer effectif | Retirer si non prouvé |
| CLM-045 | Stat 25 000 poissons / vague | `frontend/src/app/[locale]/page.tsx:216` | `/fr` | stats | production | À CONFIRMER | Critique | code seulement | Confirmer volume | Retirer si non prouvé |
| CLM-046 | Stat 2 500 porcs en élevage | `frontend/src/app/[locale]/page.tsx:217` | `/fr` | stats | élevage | À CONFIRMER | Critique | code seulement | Confirmer effectif | Retirer si non prouvé |
| CLM-047 | '+10 ans d'expérience' | `frontend/src/app/[locale]/page.tsx:257` | `/fr` | histoire | historique | À CONFIRMER | Élevé | code seulement | Confirmer date de démarrage | Ajuster à historique réel |
| CLM-048 | Fondée par Paul Quentin Ondoa Bidzo | `frontend/src/app/[locale]/page.tsx:271` | `/fr` | histoire | identité | À CONFIRMER | Moyen | code seulement | Confirmer fondateur et nom public | Garder si validé |
| CLM-049 | Exploitation de 40 hectares | `frontend/src/app/[locale]/page.tsx:274` | `/fr` | histoire | surface | À CONFIRMER | Critique | contredit cadrage 2,5 ha | Confirmer surface | Corriger avant publication |
| CLM-050 | Contrôle rigoureux avant livraison | `frontend/src/app/[locale]/page.tsx:284` | `/fr` | valeurs | qualité | À CONFIRMER | Élevé | code seulement | Confirmer contrôle qualité | Atténuer sans preuve |
| CLM-051 | Produits frais cultivés/élevés sur 40 hectares | `frontend/src/app/[locale]/page.tsx:318` | `/fr` | produits | surface | À CONFIRMER | Critique | contredit cadrage 2,5 ha | Confirmer surface | Corriger avant publication |
| CLM-052 | Gamme complète de services agricoles | `frontend/src/app/[locale]/page.tsx:366` | `/fr` | services | services | À CONFIRMER | Élevé | code seulement | Confirmer gamme réelle | Réduire au périmètre réel |
| CLM-053 | Transparence et visite des installations sur place | `frontend/src/app/[locale]/page.tsx:423` | `/fr` | galerie | logistique | À CONFIRMER | Moyen | code seulement | Confirmer visites possibles | Encadrer la visite |
| CLM-054 | Satisfaction clients comme récompense | `frontend/src/app/[locale]/page.tsx:457` | `/fr` | témoignages | témoignages | À CONFIRMER | Élevé | témoignages non sourcés | Confirmer base client | Retirer sans preuve |
| CLM-055 | Passez commande / contactez pour commande | `frontend/src/app/[locale]/page.tsx:500` | `/fr` | CTA | disponibilité | À CONFIRMER | Critique | API/vente non validées | Confirmer canal commercial | Remplacer par demande d'information si nécessaire |
| CLM-056 | À propos : histoire, mission, équipe | `frontend/src/app/[locale]/about/page.tsx:5` | `/fr/about` | metadata | identité | À CONFIRMER | Moyen | code seulement | Confirmer contenu officiel | Alignement marque |
| CLM-057 | Ferme fondée sur passion et durabilité | `frontend/src/app/[locale]/about/page.tsx:35` | `/fr/about` | hero | environnement | À CONFIRMER | Moyen | code seulement | Confirmer valeurs | Garder si validé |
| CLM-058 | À propos : fondée par Paul Quentin Ondoa Bidzo | `frontend/src/app/[locale]/about/page.tsx:65` | `/fr/about` | histoire | identité | À CONFIRMER | Moyen | code seulement | Confirmer fondateur | Garder si validé |
| CLM-059 | À propos : Bilik, région Centre, 40 hectares | `frontend/src/app/[locale]/about/page.tsx:69` | `/fr/about` | histoire | surface | À CONFIRMER | Critique | contredit cadrage 2,5 ha | Confirmer surface/localité | Corriger avant publication |
| CLM-060 | À propos : 40 ha, 10+ ans, 5 services actifs | `frontend/src/app/[locale]/about/page.tsx:83` | `/fr/about` | stats | production | À CONFIRMER | Critique | code seulement | Confirmer stats | Retirer chiffres non validés |
| CLM-061 | Mission : fournisseurs de nourriture de qualité | `frontend/src/app/[locale]/about/page.tsx:115` | `/fr/about` | mission | qualité | À CONFIRMER | Élevé | code seulement | Confirmer production active | Reformuler si ferme en démarrage |
| CLM-062 | Agriculture régénératrice | `frontend/src/app/[locale]/about/page.tsx:130` | `/fr/about` | engagements | environnement | À CONFIRMER | Élevé | code seulement | Confirmer pratiques | Ne pas utiliser sans preuve |
| CLM-063 | Bien-être animal | `frontend/src/app/[locale]/about/page.tsx:136` | `/fr/about` | engagements | élevage | À CONFIRMER | Élevé | code seulement | Confirmer conditions | Documenter ou atténuer |
| CLM-064 | Impact local : emplois et économie locale | `frontend/src/app/[locale]/about/page.tsx:141` | `/fr/about` | engagements | logistique | À CONFIRMER | Moyen | code seulement | Confirmer emplois actuels | Distinguer objectif et réalité |
| CLM-065 | Équipe d'agriculteurs, éleveurs et professionnels dédiés | `frontend/src/app/[locale]/about/page.tsx:200` | `/fr/about` | équipe | équipe | À CONFIRMER | Élevé | code seulement | Confirmer équipe réelle | Éviter surpromesse |
| CLM-066 | Agronomes qualifiés, aquaculteurs certifiés, vétérinaires partenaires | `frontend/src/app/[locale]/about/page.tsx:217` | `/fr/about` | équipe | expertise | À CONFIRMER | Critique | code seulement | Confirmer qualifications/partenaires | Retirer sans preuve |
| CLM-067 | Venez nous rendre visite | `frontend/src/app/[locale]/about/page.tsx:252` | `/fr/about` | CTA | logistique | À CONFIRMER | Moyen | code seulement | Confirmer visites possibles | Encadrer modalités |
| CLM-068 | Produits : tous les produits frais du Cameroun | `frontend/src/app/[locale]/products/page.tsx:5` | `/fr/products` | metadata | produits | À CONFIRMER | Élevé | code seulement | Confirmer catalogue officiel | Adapter au périmètre réel |
| CLM-069 | Catalogue œufs : 10 000 poules et 266 alvéoles/jour | `frontend/src/app/[locale]/products/page.tsx:23` | `/fr/products` | catalogue | production | À CONFIRMER | Critique | code seulement | Confirmer capacité journalière | Retirer si non prouvé |
| CLM-070 | Produits disponibles par catégorie | `frontend/src/app/[locale]/products/page.tsx:240` | `/fr/products` | catalogue | disponibilité | À CONFIRMER | Critique | code seulement | Confirmer disponibilités | Ne pas afficher disponible sans stock réel |
| CLM-071 | Surfaces par culture : 20 ha maïs, 10 ha avocats, 25 ha manioc, 5 ha bananes, 25 ha plantains | `frontend/src/app/[locale]/products/page.tsx:114` | `/fr/products` | catalogue | surface | À CONFIRMER | Critique | somme incohérente | Confirmer surfaces | Corriger après validation |
| CLM-072 | Page provenderie : aliments disponibles en sacs 50 kg et devis | `frontend/src/app/[locale]/services/feedmill/page.tsx:104` | `/fr/services/feedmill` | provenderie | services | À CONFIRMER | Critique | code seulement | Confirmer production/vente | Classer futur si non opérationnel |
| CLM-073 | Formules aliments poules/porcs/poissons riches et adaptées | `frontend/src/app/[locale]/services/feedmill/page.tsx:9` | `/fr/services/feedmill` | provenderie | qualité | À CONFIRMER | Élevé | code seulement | Confirmer formulations | Vérifier conformité |
| CLM-074 | Vente d'équipements agricoles : abreuvoirs, mangeoires, brouettes | `frontend/src/app/[locale]/services/feedmill/page.tsx:151` | `/fr/services/feedmill` | équipements | services | À CONFIRMER | Critique | code seulement | Confirmer vente équipement | Retirer si non commercialisé |
| CLM-075 | Placeholder abreuvoir provisoire | `frontend/src/app/[locale]/services/feedmill/page.tsx:50` | `/fr/services/feedmill` | équipements | PLACEHOLDER TECHNIQUE | PLACEHOLDER TECHNIQUE | Moyen | registre provisoire | Fournir vraie photo | Remplacer avant production |
| CLM-076 | Conseil agricole par experts | `frontend/src/app/[locale]/services/advisory/page.tsx:6` | `/fr/services/advisory` | service | expertise | À CONFIRMER | Élevé | code seulement | Confirmer expertise | Reformuler si accompagnement futur |
| CLM-077 | Élevage avicole de qualité supérieure | `frontend/src/app/[locale]/services/animals/page.tsx:6` | `/fr/services/animals` | service | élevage | À CONFIRMER | Élevé | code seulement | Confirmer activité | Adapter au réel |
| CLM-078 | Produits frais cultivés localement et récoltés à maturité | `frontend/src/app/[locale]/services/fresh-produce/page.tsx:9` | `/fr/services/fresh-produce` | service | agriculture | À CONFIRMER | Élevé | code seulement | Confirmer disponibilité | Adapter au réel |
| CLM-079 | Couvoir moderne produisant des poussins d'un jour de haute qualité génétique | `frontend/src/app/[locale]/services/hatchery/page.tsx:6` | `/fr/services/hatchery` | service | services | À CONFIRMER | Critique | code seulement | Confirmer couvoir | Classer futur si non opérationnel |
| CLM-080 | Fiche produit dynamique permet commander maintenant | `frontend/src/app/[locale]/products/[id]/page.tsx:31` | `/fr/products/[id]` | détail produit | disponibilité | À CONFIRMER | Élevé | API backend indisponible | Confirmer parcours commande | Désactiver si non fonctionnel |
| CLM-081 | Blog vide : aucun article disponible | `frontend/src/app/[locale]/blog/page.tsx:22` | `/fr/blog` | blog | produits | CONFIRMÉ | Faible | comportement code | Valider stratégie éditoriale | Ajouter contenu validé plus tard |
| CLM-082 | Seed admin avec email admin@bilikfarm.com | `backend/src/prisma/seed.ts:8` | backend | seed | juridique | À CONFIRMER | Élevé | seed code | Confirmer email admin | Remplacer avant production |
| CLM-083 | Seed admin mot de passe `admin123` | `backend/src/prisma/seed.ts:12` | backend | seed | juridique | À RETIRER | Critique | seed code | Définir secret sécurisé | Changer avant toute exécution |
| CLM-084 | Seed produit poulet fermier 2 500 FCFA stock 100 | `backend/src/prisma/seed.ts:32` | backend | seed | produits | À CONFIRMER | Élevé | seed non officiel | Confirmer ou retirer seed | Ne pas traiter comme source officielle |
| CLM-085 | Admin présente produits, témoignages, blog, messages, utilisateurs | `admin/src/app/page.tsx:6` | admin | dashboard | services | À CONFIRMER | Moyen | UI statique | Confirmer besoin admin | Backlog CMS/admin |
| CLM-086 | Dashboard admin inclut commandes | `admin/src/app/dashboard/page.tsx:6` | admin | dashboard | disponibilité | FUTUR | Moyen | UI statique | Décider si commandes MVP | Reporter hors MVP si non validé |
| CLM-087 | `.env.example` contient placeholders DB/JWT/mail | `.env.example:2` | config | env | juridique | PLACEHOLDER TECHNIQUE | Moyen | exemple config | Valider variables avant prod | Garder comme exemple sans secret réel |

## Contradictions internes détectées

1. Surface globale : le site affiche 40 ha (`page.tsx:172`, `about/page.tsx:70`) alors que le cadrage projet mentionne environ 2,5 ha initiaux.
2. Surfaces par culture : 20 ha maïs + 10 ha avocats + 25 ha manioc + 5 ha bananes + 25 ha plantains dépassent largement 40 ha.
3. Production animale : 10 000 poules, 1 500 poules du village, 2 500 porcs, 500 lapins et 25 000 poissons semblent incompatibles avec un démarrage à 2,5 ha sans preuve.
4. Services présentés comme actifs : provenderie, écloserie, conseil, vente d'équipements et vente d'animaux sont formulés comme opérationnels sans validation.
5. Témoignages : trois personnes nommées et localisées sont affichées sans source ni autorisation.
6. Commande/devis : plusieurs CTA demandent commande ou devis alors que le backend et le canal commercial ne sont pas validés.
7. Livraison : le badge "Livraison locale" et le contrôle qualité "avant livraison" supposent une logistique non documentée.
8. Qualité/biologique/certifié : le site utilise qualité garantie, biologique, agronomes qualifiés, aquaculteurs certifiés et vétérinaires partenaires sans preuve.
9. Galerie : un placeholder technique d'abreuvoir est affiché dans "Notre ferme en images", acceptable uniquement temporairement.

## Routes publiques couvertes

- `/`
- `/fr`
- `/fr/about`
- `/fr/products`
- `/fr/products/[id]`
- `/fr/contact`
- `/fr/blog`
- `/fr/blog/[slug]`
- `/fr/services/feedmill`
- `/fr/services/animals`
- `/fr/services/fresh-produce`
- `/fr/services/hatchery`
- `/fr/services/advisory`
