export type ServiceSlug = 'advisory' | 'animals' | 'feedmill' | 'fresh-produce' | 'hatchery';

export interface ProjectAxis {
  slug: ServiceSlug;
  title: string;
  eyebrow: string;
  status: string;
  summary: string;
  description: string;
  image: string;
  imageAlt: string;
  points: Array<{ title: string; description: string }>;
}

export const projectAxes: Record<ServiceSlug, ProjectAxis> = {
  advisory: {
    slug: 'advisory',
    title: 'Accompagnement futur',
    eyebrow: 'Perspective à structurer',
    status: 'Développement futur',
    summary: 'Une perspective de conseil agricole qui reste à organiser et à confirmer.',
    description: 'Cette activité fait partie des développements prévus de Bilik Farm et n’est pas encore proposée comme service commercial.',
    image: '/images/conseil.jpg',
    imageAlt: 'Illustration de la perspective d’accompagnement agricole',
    points: [
      { title: 'Compétences à confirmer', description: 'Les compétences mobilisées seront présentées uniquement après validation.' },
      { title: 'Modalités à structurer', description: 'Aucune modalité d’accompagnement n’est publiée à ce stade.' },
      { title: 'Communication progressive', description: 'Les informations évolueront avec la structuration réelle de cet axe.' },
    ],
  },
  animals: {
    slug: 'animals',
    title: 'Élevage en développement',
    eyebrow: 'Axe du projet',
    status: 'En développement',
    summary: 'Un axe progressif autour de l’aviculture et d’élevages complémentaires.',
    description: 'Les filières d’élevage seront présentées progressivement, sans disponibilité ni effectif publiés tant qu’ils ne sont pas confirmés.',
    image: '/images/pondeuses2.jpg',
    imageAlt: 'Poules illustrant l’axe élevage de Bilik Farm',
    points: [
      { title: 'Aviculture ciblée', description: 'Les œufs et volailles font partie des filières présentées par le projet.' },
      { title: 'Élevages complémentaires', description: 'Les axes lapin et porc sont envisagés dans une progression maîtrisée.' },
      { title: 'Disponibilité non confirmée', description: 'Aucun effectif ou calendrier commercial n’est communiqué.' },
    ],
  },
  feedmill: {
    slug: 'feedmill',
    title: 'Provenderie prévue',
    eyebrow: 'Infrastructure envisagée',
    status: 'Prévue',
    summary: 'Une infrastructure envisagée pour accompagner progressivement les activités d’élevage.',
    description: 'La provenderie commerciale reste une perspective future. Aucune formule, capacité ou disponibilité n’est publiée à ce stade.',
    image: '/images/provenderie.jpg',
    imageAlt: 'Équipement illustrant la provenderie prévue',
    points: [
      { title: 'Alimentation animale', description: 'Une piste de développement liée aux axes avicoles, porcins et aquacoles.' },
      { title: 'Équipements associés', description: 'Le matériel d’élevage reste présenté comme une perspective future.' },
      { title: 'Aucune offre active', description: 'Cette infrastructure n’est pas proposée actuellement comme service commercial.' },
    ],
  },
  'fresh-produce': {
    slug: 'fresh-produce',
    title: 'Cultures ciblées',
    eyebrow: 'Agriculture',
    status: 'Filières ciblées',
    summary: 'Des productions vivrières et fruitières intégrées au développement agricole du projet.',
    description: 'Les cultures sont présentées comme productions ciblées ou envisagées, sans disponibilité commerciale publiée tant qu’elle n’est pas confirmée.',
    image: '/images/agriculture.jpg',
    imageAlt: 'Parcelle illustrant les cultures ciblées',
    points: [
      { title: 'Cultures vivrières', description: 'Le maïs, le manioc et le plantain figurent parmi les filières ciblées.' },
      { title: 'Cultures fruitières', description: 'L’avocat, le safou, la papaye et la banane sont également envisagés.' },
      { title: 'Développement progressif', description: 'Les cultures seront présentées selon leur avancement réel.' },
    ],
  },
  hatchery: {
    slug: 'hatchery',
    title: 'Écloserie prévue',
    eyebrow: 'Développement futur',
    status: 'Prévue',
    summary: 'Une infrastructure future associée au développement progressif du projet.',
    description: 'Cette activité fait partie des développements prévus de Bilik Farm et n’est pas encore proposée comme service commercial.',
    image: '/images/oeufs2.jpg',
    imageAlt: 'Œufs illustrant le projet d’écloserie',
    points: [
      { title: 'Infrastructure future', description: 'L’écloserie reste une composante prévue et non une activité disponible.' },
      { title: 'Capacité non publiée', description: 'Aucune capacité ou performance n’est communiquée à ce stade.' },
      { title: 'Avancement à confirmer', description: 'Les informations seront précisées avec le développement réel du projet.' },
    ],
  },
};
