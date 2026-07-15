# Quarantaine des modules hors MVP — Bilik Farm

## Décision

Le backend et l'admin sont conservés dans le dépôt uniquement pour analyse future.

## Modules concernés

- `backend/`
- `admin/`

## Risques neutralisés

- identifiant administrateur codé en dur;
- mot de passe faible;
- seed commercial fictif;
- données de démonstration interprétables comme réelles.

## Risques encore ouverts

- manifeste backend incomplet;
- absence de migrations validées;
- absence d'authentification sécurisée;
- absence de contrôle d'accès;
- absence de tests;
- absence de stratégie de secrets;
- absence de déploiement approuvé.

## Règles de quarantaine

- aucune installation;
- aucune exécution;
- aucun déploiement;
- aucune exposition réseau;
- aucune réactivation sans décision PM.

## Conditions de sortie de quarantaine

- architecture approuvée;
- dépendances restaurées de manière contrôlée;
- migrations reproductibles;
- secrets externalisés;
- seed sécurisé et idempotent;
- authentification et autorisations testées;
- couverture de tests minimale;
- audit sécurité;
- procédure de déploiement.
