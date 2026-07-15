# Périmètre MVP statique — Bilik Farm

## Décision

Le MVP initial de Bilik Farm est une vitrine frontend statique et autonome.

## Inclus

- accueil;
- présentation du projet;
- filières ciblées;
- pages informatives;
- galerie;
- axes futurs;
- page contact temporairement inactive;
- page d'actualités statique.

## Exclus

- backend;
- base de données;
- admin;
- CMS;
- authentification;
- commandes;
- paiements;
- formulaire actif;
- blog dynamique;
- gestion dynamique des produits.

## Contraintes

- aucun appel API métier;
- aucune dépendance à `NEXT_PUBLIC_API_URL`;
- aucun contenu généré depuis une base;
- aucune donnée commerciale fictive.

## Conditions de réouverture du backend

- besoin métier validé;
- architecture approuvée;
- manifeste de dépendances complet;
- migrations disponibles;
- sécurité des secrets définie;
- tests automatisés;
- stratégie de déploiement validée.

## Conséquences

- déploiement frontend autonome;
- maintenance du contenu dans le code pour le MVP;
- backend et admin reportés à une phase dédiée;
- toute réactivation dynamique nécessite une nouvelle décision PM.

## Quarantaine du code hors MVP

Les répertoires `backend/` et `admin/` restent dans le dépôt, mais ne font pas partie du produit exécutable. Ils ne doivent pas être installés, démarrés ou déployés sans directive PM.
