import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';

export const metadata: Metadata = {
  title: 'Accueil — Bilik Farm',
  description: "Bilik Farm est un projet agricole intégré en développement sur une première superficie d'environ 2,5 hectares dans la région du Centre au Cameroun.",
};

const sectors = [
  {
    title: 'Agriculture',
    status: 'Filières ciblées',
    description: 'Cultures vivrières et fruitières envisagées dans le développement progressif du projet.',
    image: '/images/agriculture.jpg',
    href: 'products',
  },
  {
    title: 'Élevage',
    status: 'En développement',
    description: 'Un axe autour de l’aviculture et de plusieurs élevages complémentaires.',
    image: '/images/pondeuses2.jpg',
    href: 'services/animals',
  },
  {
    title: 'Aquaculture',
    status: 'Activité envisagée',
    description: 'Une filière aquacole ciblée dans l’approche intégrée de Bilik Farm.',
    image: '/images/tilapia2.jpg',
    href: 'products',
  },
];

const featured = [
  { title: 'Œufs de table', category: 'Aviculture', image: '/images/oeufs.jpeg', slug: 'oeufs-de-table' },
  { title: 'Poules du village', category: 'Aviculture', image: '/images/poule_village.jpeg', slug: 'poules-du-village' },
  { title: 'Tilapias', category: 'Aquaculture', image: '/images/tilapia2.jpg', slug: 'tilapias-frais' },
  { title: 'Maïs', category: 'Agriculture', image: '/images/Mais.jpeg', slug: 'mais-frais' },
  { title: 'Avocat', category: 'Agriculture', image: '/images/Avocat.jpeg', slug: 'avocats' },
  { title: 'Safou', category: 'Agriculture', image: '/images/safou2.JPG', slug: 'safou' },
];

const projectAxes = [
  {
    number: '01',
    title: 'Provenderie prévue',
    description: 'Une infrastructure envisagée pour accompagner progressivement les activités d’élevage.',
    href: 'services/feedmill',
  },
  {
    number: '02',
    title: 'Écloserie prévue',
    description: 'Un axe futur du projet, présenté sans disponibilité commerciale à ce stade.',
    href: 'services/hatchery',
  },
  {
    number: '03',
    title: 'Accompagnement futur',
    description: 'Une perspective d’appui technique qui reste à structurer au fil du développement.',
    href: 'services/advisory',
  },
];

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  return (
    <>
      <section className="relative overflow-hidden bg-ivory pb-16 pt-10 sm:pb-20 sm:pt-14 lg:pb-24 lg:pt-20">
        <div aria-hidden="true" className="cameroon-pattern absolute left-0 top-0 h-2 w-full opacity-70" />
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div className="relative z-10 order-2 lg:order-1">
              <p className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-terracotta sm:text-sm">
                <span className="h-px w-9 bg-terracotta" aria-hidden="true" />
                Région du Centre, Cameroun
              </p>
              <h1 className="max-w-3xl font-display text-[clamp(3rem,8vw,6.8rem)] font-semibold leading-[0.94] tracking-[-0.045em] text-primary">
                Cultiver une vision, construire <em className="font-normal text-terracotta">progressivement.</em>
              </h1>
              <p className="mt-7 max-w-xl text-base leading-7 text-primary/70 sm:text-lg sm:leading-8">
                Bilik Farm est un projet agricole intégré en développement autour de l’agriculture, de l’élevage et de l’aquaculture.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link href={`/${locale}/about`} className="btn-primary btn-lg text-center">
                  Découvrir le projet
                </Link>
                <Link href={`/${locale}/products`} className="btn-outline-green btn-lg text-center">
                  Voir les filières
                </Link>
              </div>
            </div>

            <div className="relative order-1 min-h-[360px] sm:min-h-[510px] lg:order-2 lg:min-h-[650px]">
              <div className="absolute inset-x-8 bottom-0 top-0 overflow-hidden rounded-[2rem] shadow-lift sm:left-16 sm:right-0 lg:left-10">
                <img src="/images/ferme.webp" alt="Vue agricole illustrant le projet Bilik Farm" className="h-full w-full object-cover" />
              </div>
              <div className="absolute bottom-6 left-0 max-w-[16rem] rounded-editorial bg-primary p-5 text-white shadow-lift sm:bottom-10 sm:max-w-xs sm:p-7">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">Première phase</p>
                <p className="mt-3 font-display text-2xl leading-tight sm:text-3xl">Environ 2,5 hectares</p>
                <p className="mt-3 text-sm leading-6 text-white/65">Une construction agricole pensée par étapes.</p>
              </div>
              <div aria-hidden="true" className="cameroon-pattern absolute right-0 top-10 h-20 w-8 rounded-l opacity-70 sm:w-12" />
            </div>
          </div>
        </Container>
      </section>

      <section aria-labelledby="project-status" className="border-y border-primary/10 bg-white">
        <Container>
          <div className="grid gap-0 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
            <div className="py-8 md:pr-10 lg:py-10">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-terracotta">Statut du projet</p>
              <h2 id="project-status" className="mt-3 font-display text-3xl font-semibold text-primary">Projet en développement</h2>
            </div>
            <div className="border-t border-primary/10 py-8 md:border-l md:border-t-0 md:px-10 lg:py-10">
              <p className="text-sm font-semibold text-primary">Première phase</p>
              <p className="mt-2 text-sm leading-6 text-primary/70">Une superficie d’environ 2,5 hectares.</p>
            </div>
            <div className="border-t border-primary/10 py-8 md:border-l md:border-t-0 md:pl-10 lg:py-10">
              <p className="text-sm font-semibold text-primary">Approche</p>
              <p className="mt-2 text-sm leading-6 text-primary/70">Un développement progressif et ancré localement.</p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-primary py-20 text-white sm:py-24 lg:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">Une approche intégrée</p>
              <h2 className="mt-5 font-display text-4xl font-semibold leading-tight sm:text-5xl">Trois dimensions, une construction commune.</h2>
              <p className="mt-6 max-w-md leading-7 text-white/65">
                Le projet associe des filières complémentaires et avance selon les réalités de chaque étape.
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-3">
              {sectors.map((sector) => (
                <Link key={sector.title} href={`/${locale}/${sector.href}`} className="group overflow-hidden rounded-editorial border border-white/10 bg-white/5 transition hover:-translate-y-1 hover:border-gold/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold">
                  <div className="aspect-[4/5] overflow-hidden">
                    <img src={sector.image} alt={`Illustration de l’axe ${sector.title.toLowerCase()}`} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                  </div>
                  <div className="p-5">
                    <p className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-gold">{sector.status}</p>
                    <h3 className="mt-3 font-display text-2xl font-semibold">{sector.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-white/60">{sector.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24 lg:py-28">
        <Container>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-terracotta">Filières ciblées</p>
              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-primary sm:text-5xl">Une lecture visuelle des productions envisagées.</h2>
            </div>
            <Link href={`/${locale}/products`} className="link-arrow min-h-11 self-start sm:self-auto">Voir toutes les filières <span aria-hidden="true">→</span></Link>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-x-4 gap-y-9 sm:gap-x-6 lg:grid-cols-3">
            {featured.map((item, index) => (
              <Link key={item.slug} href={`/${locale}/products/${item.slug}`} className={`group rounded-editorial focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-4 ${index === 0 ? 'lg:col-span-2' : ''}`}>
                <div className={`overflow-hidden rounded-editorial bg-primary/5 shadow-soft ${index === 0 ? 'aspect-[16/9] lg:aspect-[2/1]' : 'aspect-[4/3]'}`}>
                  <img src={item.image} alt={item.title} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                </div>
                <div className="mt-4 flex items-start justify-between gap-3">
                  <div>
                    <p className="text-[0.68rem] font-bold uppercase tracking-[0.15em] text-terracotta">{item.category} · Filière ciblée</p>
                    <h3 className="mt-2 font-display text-xl font-semibold text-primary sm:text-2xl">{item.title}</h3>
                  </div>
                  <span aria-hidden="true" className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-primary/20 text-primary transition group-hover:bg-primary group-hover:text-white">↗</span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-primary/10 bg-white py-20 sm:py-24 lg:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-terracotta">Axes du projet</p>
              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-primary sm:text-5xl">Des infrastructures pensées pour accompagner le développement.</h2>
              <p className="mt-6 max-w-lg leading-7 text-primary/70">Ces axes sont prévus ou à structurer. Ils ne sont pas présentés comme des services commerciaux actuellement disponibles.</p>
            </div>
            <div className="divide-y divide-primary/15 border-y border-primary/15">
              {projectAxes.map((axis) => (
                <Link key={axis.title} href={`/${locale}/${axis.href}`} className="group grid min-h-44 grid-cols-[3rem_1fr_auto] gap-4 py-7 transition hover:bg-ivory focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold sm:grid-cols-[4rem_1fr_auto] sm:px-5">
                  <span className="font-display text-xl text-terracotta">{axis.number}</span>
                  <span>
                    <span className="block font-display text-2xl font-semibold text-primary sm:text-3xl">{axis.title}</span>
                    <span className="mt-3 block max-w-lg text-sm leading-6 text-primary/70">{axis.description}</span>
                  </span>
                  <span aria-hidden="true" className="text-2xl text-primary transition group-hover:translate-x-1">→</span>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="overflow-hidden py-20 sm:py-24 lg:py-28">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="relative min-h-[430px] sm:min-h-[560px]">
              <div className="absolute inset-y-0 left-0 right-16 overflow-hidden rounded-[2rem] shadow-lift sm:right-24">
                <img src="/images/Historique.png" alt="Repère visuel sur la construction de Bilik Farm" loading="lazy" className="h-full w-full object-cover" />
              </div>
              <div className="absolute bottom-7 right-0 h-48 w-44 overflow-hidden rounded-editorial border-8 border-ivory shadow-lift sm:h-64 sm:w-56">
                <img src="/images/Equipe.jpg" alt="Équipe associée au projet Bilik Farm" loading="lazy" className="h-full w-full object-cover" />
              </div>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-terracotta">Histoire et vision</p>
              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-primary sm:text-5xl">Construire avec méthode, au rythme du projet.</h2>
              <p className="mt-7 text-lg leading-8 text-primary/70">Bilik Farm se développe progressivement dans la région du Centre au Cameroun, avec l’ambition de relier agriculture, élevage et aquaculture au sein d’un même projet.</p>
              <p className="mt-5 leading-7 text-primary/70">La première phase, d’environ 2,5 hectares, constitue le point de départ de cette construction.</p>
              <Link href={`/${locale}/about`} className="btn-primary btn-lg mt-9">Lire la présentation du projet</Link>
            </div>
          </div>
        </Container>
      </section>

      <section aria-labelledby="photo-sequence" className="bg-primary py-20 text-white sm:py-24">
        <Container>
          <div className="mb-10 max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">Séquence photographique</p>
            <h2 id="photo-sequence" className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl">Les dimensions agricoles du projet.</h2>
          </div>
          <div className="grid auto-rows-[190px] grid-cols-2 gap-3 sm:auto-rows-[250px] lg:grid-cols-4 lg:grid-rows-[260px_190px]">
            <figure className="col-span-2 row-span-2 overflow-hidden rounded-editorial"><img src="/images/agriculture.jpg" alt="Parcelle agricole" loading="lazy" className="h-full w-full object-cover" /></figure>
            <figure className="overflow-hidden rounded-editorial"><img src="/images/pondeuses2.jpg" alt="Poules pondeuses" loading="lazy" className="h-full w-full object-cover" /></figure>
            <figure className="overflow-hidden rounded-editorial"><img src="/images/tilapia2.jpg" alt="Poissons illustrant l’axe aquacole" loading="lazy" className="h-full w-full object-cover" /></figure>
            <figure className="col-span-2 overflow-hidden rounded-editorial"><img src="/images/plantain2.jpeg" alt="Régime de plantains" loading="lazy" className="h-full w-full object-cover" /></figure>
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-terracotta py-20 text-white sm:py-24 lg:py-28">
        <div aria-hidden="true" className="cameroon-pattern absolute bottom-0 right-0 h-full w-20 opacity-20 sm:w-32" />
        <Container className="relative">
          <div className="grid items-end gap-10 lg:grid-cols-[1fr_auto]">
            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-white">Poursuivre la découverte</p>
              <h2 className="mt-5 font-display text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">Comprendre le projet ou proposer un partenariat.</h2>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link href={`/${locale}/contact`} className="btn-white btn-lg text-center">Nous contacter</Link>
              <Link href={`/${locale}/products`} className="btn-outline btn-lg text-center">Voir les filières</Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
