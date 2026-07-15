# Audit du code mort frontend — Bilik Farm

## SHA de référence

`dbddbe105d93093cd8965a418916ef7437550b6c`

## Méthode

- Inventaire complet de `frontend/src`.
- Recherche des imports locaux explicites.
- Recherche ciblée des exports hérités du prototype.
- Exclusion des fichiers chargés par convention Next.js.
- Suppression uniquement lorsque l'absence d'import et d'usage JSX est démontrée.

## Fichiers inspectés

32 fichiers inspectés dans `frontend/src`, incluant routes Next.js, composants, formulaire, utilitaires, styles et fichiers `.gitkeep`.

## Symboles analysés

| Symbole ou fichier | Catégorie | Preuve | Décision |
| --- | --- | --- | --- |
| `formatPrice` | utilitaire | Défini uniquement dans `frontend/src/lib/utils.ts`; aucun import ni appel | SUPPRIMER |
| `slugify` | utilitaire | Défini uniquement dans `frontend/src/lib/utils.ts`; aucun import ni appel | SUPPRIMER |
| `cn` | utilitaire | Défini uniquement dans `frontend/src/lib/utils.ts`; aucun import ni appel | SUPPRIMER |
| `frontend/src/lib/utils.ts` | utilitaire | Aucun import de `@/lib/utils`, `lib/utils` ou `utils` | SUPPRIMER |
| `Hero` | composant UI | Export non importé, ancien contenu prototype | SUPPRIMER |
| `ProductCard` | composant UI | Export non importé, ancien composant catalogue dynamique | SUPPRIMER |
| `ServiceCard` | composant UI | Export non importé, ancien composant de service générique | SUPPRIMER |
| `TestimonialCard` | composant UI | Export non importé, témoignages retirés du MVP | SUPPRIMER |
| `Button` | composant UI | Importé par `ContactForm` | CONSERVER |
| `Container` | composant UI | Importé par `Section` et plusieurs routes | CONSERVER |
| `Section` | composant UI | Importé par blog, contact et pages services | CONSERVER |
| `Header` | composant UI | Chargé par `frontend/src/app/[locale]/layout.tsx` | CONSERVER |
| `Footer` | composant UI | Chargé par `frontend/src/app/[locale]/layout.tsx` | CONSERVER |
| `ContactForm` | formulaire | Importé par la page contact | SIMPLIFIER |

## Éléments supprimés

- `frontend/src/lib/utils.ts`
- `frontend/src/components/ui/Hero.tsx`
- `frontend/src/components/ui/ProductCard.tsx`
- `frontend/src/components/ui/ServiceCard.tsx`
- `frontend/src/components/ui/TestimonialCard.tsx`

## Éléments conservés

- Routes Next.js par convention.
- `Button`, `Container`, `Section`, `Header`, `Footer`.
- `ContactForm`, simplifié mais conservé pour la page contact.
- Fichiers `.gitkeep`, non concernés par le nettoyage fonctionnel.

## Éléments à confirmer

Aucun élément supprimé n'est classé à confirmer. Les composants conservés ont un import réel ou une convention Next.js.

## Risques évités

- Suppression de fichiers Next.js conventionnels évitée.
- Aucun contenu visible volontairement modifié.
- Aucun style modifié.
- Aucun backend ou admin modifié.
- Aucune dépendance ajoutée.

## Résultat final

- fichiers supprimés : 5;
- fonctions supprimées : 3;
- imports supprimés : 0;
- composants simplifiés : 1;
- comportement public modifié : non.
