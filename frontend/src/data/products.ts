export type ProductCategory = 'Aviculture' | 'Aquaculture' | 'Élevage' | 'Agriculture';
export type ProductStatus = 'Filière ciblée' | 'Activité envisagée' | 'En développement' | 'Production prévue';

export interface Product {
  slug: string;
  title: string;
  category: ProductCategory;
  status: ProductStatus;
  image: string;
  description: string;
}

export interface ProductCategorySection {
  id: string;
  category: ProductCategory;
  title: string;
  introduction: string;
}

export const categorySections: ProductCategorySection[] = [
  {
    id: 'aviculture',
    category: 'Aviculture',
    title: 'Œufs et volailles',
    introduction: 'Des filières avicoles envisagées dans la construction progressive du projet.',
  },
  {
    id: 'aquaculture',
    category: 'Aquaculture',
    title: 'Filières aquacoles',
    introduction: 'Plusieurs espèces ciblées pour développer progressivement l’axe aquacole.',
  },
  {
    id: 'elevage',
    category: 'Élevage',
    title: 'Élevages complémentaires',
    introduction: 'Des activités d’élevage prévues comme composantes du projet agricole intégré.',
  },
  {
    id: 'agriculture',
    category: 'Agriculture',
    title: 'Cultures vivrières et fruitières',
    introduction: 'Des cultures ciblées selon une mise en œuvre progressive et les réalités du projet.',
  },
];

export const products: Product[] = [
  {
    slug: 'oeufs-de-table',
    title: 'Œufs de table',
    category: 'Aviculture',
    status: 'Filière ciblée',
    image: '/images/oeufs.jpeg',
    description: 'Filière avicole ciblée dans le développement progressif de Bilik Farm.',
  },
  {
    slug: 'poules-pondeuses',
    title: 'Poules pondeuses',
    category: 'Aviculture',
    status: 'Production prévue',
    image: '/images/pondeuses2.jpg',
    description: 'Activité prévue, à confirmer selon la structuration réelle de l’élevage.',
  },
  {
    slug: 'poules-du-village',
    title: 'Poules du village',
    category: 'Aviculture',
    status: 'Activité envisagée',
    image: '/images/poule_village.jpeg',
    description: 'Filière avicole envisagée, sans disponibilité commerciale confirmée.',
  },
  {
    slug: 'carpes-fraiches',
    title: 'Carpes fraîches',
    category: 'Aquaculture',
    status: 'Activité envisagée',
    image: '/images/carpe2.jpeg',
    description: 'Filière aquacole envisagée dans l’approche intégrée du projet.',
  },
  {
    slug: 'tilapias-frais',
    title: 'Tilapias frais',
    category: 'Aquaculture',
    status: 'En développement',
    image: '/images/tilapia2.jpg',
    description: 'Production en développement dans les axes aquacoles ciblés.',
  },
  {
    slug: 'clarias-frais',
    title: 'Clarias frais',
    category: 'Aquaculture',
    status: 'Activité envisagée',
    image: '/images/clarias3.jpg',
    description: 'Espèce envisagée dans les filières aquacoles futures.',
  },
  {
    slug: 'lapins',
    title: 'Lapins',
    category: 'Élevage',
    status: 'Production prévue',
    image: '/images/Lapin.jpeg',
    description: 'Activité d’élevage prévue, sans effectif ni disponibilité publiés.',
  },
  {
    slug: 'viande-de-porc',
    title: 'Viande de porc',
    category: 'Élevage',
    status: 'Activité envisagée',
    image: '/images/Porc.jpg',
    description: 'Filière porcine envisagée dans une montée en puissance progressive.',
  },
  {
    slug: 'mais-frais',
    title: 'Maïs frais',
    category: 'Agriculture',
    status: 'Filière ciblée',
    image: '/images/Mais.jpeg',
    description: 'Culture vivrière ciblée dans la première phase agricole du projet.',
  },
  {
    slug: 'avocats',
    title: 'Avocats',
    category: 'Agriculture',
    status: 'Activité envisagée',
    image: '/images/Avocat.jpeg',
    description: 'Culture fruitière envisagée selon l’évolution du projet.',
  },
  {
    slug: 'safou',
    title: 'Safout (Prune africaine)',
    category: 'Agriculture',
    status: 'Filière ciblée',
    image: '/images/safou.jpg',
    description: 'Filière fruitière ciblée, sans disponibilité commerciale confirmée.',
  },
  {
    slug: 'papayes',
    title: 'Papayes',
    category: 'Agriculture',
    status: 'Activité envisagée',
    image: '/images/Papaye.jpg',
    description: 'Culture envisagée dans le développement maraîcher et fruitier.',
  },
  {
    slug: 'manioc',
    title: 'Manioc',
    category: 'Agriculture',
    status: 'Filière ciblée',
    image: '/images/manioc.jpg',
    description: 'Culture vivrière ciblée dans le programme agricole.',
  },
  {
    slug: 'bananes-douces',
    title: 'Bananes douces',
    category: 'Agriculture',
    status: 'Activité envisagée',
    image: '/images/Banane.jpg',
    description: 'Culture fruitière envisagée, sans surface publiée.',
  },
  {
    slug: 'plantains',
    title: 'Plantains',
    category: 'Agriculture',
    status: 'Filière ciblée',
    image: '/images/plantain.jpg',
    description: 'Culture vivrière ciblée, à développer progressivement.',
  },
];

export function getProductsByCategory(category: ProductCategory) {
  return products.filter((product) => product.category === category);
}

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}
