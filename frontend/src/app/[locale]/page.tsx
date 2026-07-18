import Link from 'next/link';

/* ─────────────────────────────────────────
   Static data
───────────────────────────────────────── */
const products = [
  {
    id: 1,
    title: 'Œufs de table',
    image: '/images/oeufs.jpeg',
    badge: 'Aviculture',
    description: "Filière avicole ciblée dans le développement progressif de Bilik Farm.",
    price: 'Informations sur demande',
    unit: '',
    slug: 'oeufs-de-table',
  },
  {
    id: 2,
    title: 'Carpes fraîches',
    image: '/images/carpe2.jpeg',
    badge: 'Aquaculture',
    description: "Filière aquacole envisagée dans l'approche intégrée du projet.",
    price: 'Informations sur demande',
    unit: '',
    slug: 'carpes-fraiches',
  },
  {
    id: 3,
    title: 'Tilapias frais',
    image: '/images/tilapia2.jpg',
    badge: 'Aquaculture',
    description: "Production en développement dans les axes aquacoles ciblés par Bilik Farm.",
    price: 'Informations sur demande',
    unit: '',
    slug: 'tilapias-frais',
  },
  {
    id: 4,
    title: 'Viande de porc',
    image: '/images/Porc.jpg',
    badge: 'Élevage',
    description: "Activité d'élevage prévue dans une montée en puissance progressive.",
    price: 'Informations sur demande',
    unit: '',
    slug: 'viande-de-porc',
  },
  {
    id: 5,
    title: 'Maïs frais',
    image: '/images/Mais.jpeg',
    badge: 'Agriculture',
    description: "Culture vivrière ciblée dans la première phase agricole du projet.",
    price: 'Informations sur demande',
    unit: '',
    slug: 'mais-frais',
  },
  {
    id: 6,
    title: 'Poules du village',
    image: '/images/poule_village.jpeg',
    badge: 'Aviculture',
    description: "Filière avicole envisagée, à confirmer selon la disponibilité réelle.",
    price: 'Informations sur demande',
    unit: '',
    slug: 'poules-du-village',
  },
];

const services = [
  {
    icon: 'fas fa-box-open',
    title: 'Provenderie prévue',
    description: "Développement prévu, non proposé actuellement comme service commercial.",
    image: '/images/provenderie.jpg',
    href: '/fr/services/feedmill',
  },
  {
    icon: 'fas fa-paw',
    title: "Élevage en développement",
    description: "Axe du projet autour de l'aviculture, de l'élevage et de l'aquaculture.",
    image: '/images/poule de ferme.jpg',
    href: '/fr/services/animals',
  },
  {
    icon: 'fas fa-seedling',
    title: 'Cultures ciblées',
    description: 'Cultures vivrières et maraîchères envisagées dans le développement agricole.',
    image: '/images/plantain.jpg',
    href: '/fr/services/fresh-produce',
  },
  {
    icon: 'fas fa-egg',
    title: 'Écloserie prévue',
    description: "Développement futur, non proposé actuellement comme service commercial.",
    image: '/images/oeufs2.jpg',
    href: '/fr/services/hatchery',
  },
  {
    icon: 'fas fa-lightbulb',
    title: 'Accompagnement futur',
    description: "Perspective d'appui technique à structurer progressivement.",
    image: '/images/conseil.jpg',
    href: '/fr/services/advisory',
  },
];

const gallery = [
  { src: '/images/agriculture.jpg', alt: 'Champs de culture', span: 'col-span-2 row-span-2' },
  { src: '/images/pondeuses2.jpg',  alt: 'Poules pondeuses',  span: '' },
  { src: '/images/Equipe.jpg',      alt: 'Notre équipe',      span: '' },
  { src: '/images/placeholder-abreuvoir.svg', alt: 'Emplacement provisoire pour une photo d’abreuvoir', span: '' },
  { src: '/images/mangeoire.jpg',   alt: 'Mangeoire',         span: '' },
  { src: '/images/Brouette.jpg',    alt: 'Travail au champ',  span: 'col-span-2' },
];

/* ─────────────────────────────────────────
   Page
───────────────────────────────────────── */
export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  return (
    <>
      {/* ══ HERO ══════════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <img
          src="/images/ferme.webp"
          alt="Bilik Farm"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* layered overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-950/90 via-green-900/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
          <div className="max-w-2xl">
            {/* tag pill */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20
                            text-white/90 text-sm font-medium px-4 py-2 rounded-full mb-8">
              <i className="fas fa-map-marker-alt text-green-400 text-xs"></i>
              Projet agricole intégré · Région du Centre, Cameroun
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-6 tracking-tight">
              Bilik Farm <br />
              <span className="text-green-400">en développement</span><br />
              au Cameroun
            </h1>

            <p className="text-lg text-white/75 mb-10 leading-relaxed max-w-lg">
              Un projet agricole intégré développé sur une première superficie d&apos;environ
              2,5 hectares dans la région du Centre au Cameroun.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href={`/${locale}/products`} className="btn-primary btn-lg">
                <i className="fas fa-seedling text-sm"></i> Découvrir le projet
              </Link>
              <Link href={`/${locale}/contact`} className="btn-outline btn-lg">
                <i className="fas fa-phone text-sm"></i> Nous contacter
              </Link>
            </div>

            {/* trust badges */}
            <div className="flex flex-wrap gap-6 mt-12 pt-10 border-t border-white/15">
              {[
                { icon: 'fas fa-leaf', label: 'Pratiques responsables' },
                { icon: 'fas fa-seedling', label: 'Approche progressive' },
                { icon: 'fas fa-handshake', label: 'Ancrage local' },
              ].map((b) => (
                <div key={b.label} className="flex items-center gap-2 text-white/70 text-sm">
                  <i className={`${b.icon} text-green-400`}></i>
                  {b.label}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5
                        text-white/50 text-xs animate-bounce">
          <span className="tracking-widest uppercase text-[10px]">Découvrir</span>
          <i className="fas fa-chevron-down"></i>
        </div>
      </section>

      {/* ══ STATS BAR ════════════════════════════════════════════════ */}
      <div className="bg-green-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-green-700/50">
            {[
              { icon: 'fas fa-mountain', number: '2,5', suffix: ' ha', label: 'Première superficie' },
              { icon: 'fas fa-seedling', number: 'Projet', suffix: '', label: 'Agriculture intégrée' },
              { icon: 'fas fa-fish',     number: 'Axe', suffix: '', label: 'Aquaculture ciblée' },
              { icon: 'fas fa-handshake', number: 'Local', suffix: '', label: 'Développement progressif' },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col items-center text-center py-8 px-4 gap-1">
                <div className="w-10 h-10 rounded-full bg-green-700/60 flex items-center justify-center mb-2">
                  <i className={`${stat.icon} text-green-300 text-sm`}></i>
                </div>
                <div className="text-3xl md:text-4xl font-extrabold text-white">
                  {stat.number}<span className="text-green-300 text-xl">{stat.suffix}</span>
                </div>
                <div className="text-green-200 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ══ NOTRE HISTOIRE ════════════════════════════════════════════ */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Images side by side */}
            <div className="relative">
              <div className="grid grid-cols-5 grid-rows-3 gap-3 h-[480px]">
                <div className="col-span-3 row-span-3 rounded-2xl overflow-hidden shadow-xl">
                  <img src="/images/Historique.png" alt="Histoire de Bilik Farm"
                    className="w-full h-full object-cover" />
                </div>
                <div className="col-span-2 row-span-2 rounded-2xl overflow-hidden shadow-lg">
                  <img src="/images/Equipe.jpg" alt="Notre équipe"
                    className="w-full h-full object-cover" />
                </div>
                <div className="col-span-2 row-span-1 rounded-2xl overflow-hidden shadow-lg">
                  <img src="/images/agriculture.jpg" alt="Agriculture"
                    className="w-full h-full object-cover" />
                </div>
              </div>
              {/* floating badge */}
              <div className="absolute -bottom-5 -right-4 bg-green-700 text-white
                              rounded-2xl px-5 py-4 shadow-xl text-center">
                <div className="text-2xl font-extrabold">2,5 ha</div>
                <div className="text-green-200 text-xs mt-0.5">première phase</div>
              </div>
            </div>

            {/* Text */}
            <div className="lg:pl-6">
              <span className="section-tag">Notre histoire</span>
              <h2 className="text-4xl font-extrabold text-green-900 mt-4 mb-2 leading-tight">
                Une ferme fondée sur<br />
                <span className="text-green-600">la passion</span>
              </h2>
              <div className="section-divider" />
              <p className="text-gray-600 mb-4 leading-relaxed">
                Bilik Farm est un projet agricole intégré en développement dans la région
                du Centre au Cameroun. Il démarre sur une première superficie d&apos;environ
                <strong> 2,5 hectares</strong>.
              </p>
              <p className="text-gray-500 mb-10 leading-relaxed">
                Le projet vise une montée en puissance progressive autour de l&apos;agriculture,
                de l&apos;élevage, de l&apos;aquaculture et du développement local.
              </p>

              <div className="space-y-4 mb-10">
                {[
                  { icon: 'fas fa-leaf',  title: 'Pratiques responsables', desc: "Volonté de développer une approche attentive aux sols et aux ressources" },
                  { icon: 'fas fa-award', title: 'Attention à la qualité', desc: 'Objectif de structurer des productions suivies avec soin' },
                  { icon: 'fas fa-users', title: 'Ancrage local', desc: 'Objectif de contribuer au développement local' },
                ].map((v) => (
                  <div key={v.title} className="flex items-start gap-4 p-4 rounded-xl bg-white shadow-sm border border-gray-100">
                    <div className="w-10 h-10 rounded-lg bg-green-600 flex items-center justify-center text-white shrink-0">
                      <i className={v.icon}></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 text-sm">{v.title}</h4>
                      <p className="text-xs text-gray-500 mt-0.5">{v.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link href={`/${locale}/about`} className="btn-primary btn-lg">
                Découvrir notre histoire <i className="fas fa-arrow-right text-sm"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══ PRODUITS PHARES ═══════════════════════════════════════════ */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-6">
            <div>
              <span className="section-tag">Catalogue</span>
              <h2 className="text-4xl font-extrabold text-green-900 mt-4 leading-tight">
                Filières ciblées
              </h2>
              <div className="section-divider" />
              <p className="text-gray-500 max-w-md leading-relaxed">
                Présentation des productions envisagées. Les disponibilités seront confirmées progressivement.
              </p>
            </div>
            <Link href={`/${locale}/products`} className="btn-outline-green btn-lg shrink-0">
              <i className="fas fa-th-large text-sm"></i> Voir tout
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {products.map((p) => (
              <div key={p.id} className="product-card">
                <div className="relative overflow-hidden" style={{ aspectRatio: '4/3' }}>
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <span className="card-badge">{p.badge}</span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-bold text-gray-800 text-lg mb-2">{p.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed flex-1 mb-5">{p.description}</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xl font-extrabold text-green-700">{p.price}</span>
                      <span className="text-gray-400 text-xs ml-1">{p.unit}</span>
                    </div>
                    <Link href={`/${locale}/products/${p.slug}`}
                      className="btn-primary btn-sm">
                      Détails
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ NOS SERVICES (image cards) ════════════════════════════════ */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="section-tag">Services</span>
            <h2 className="text-4xl font-extrabold text-green-900 mt-4">Ce que nous offrons</h2>
            <div className="section-divider-center" />
            <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
              Certaines activités font partie des développements prévus et ne sont pas encore proposées comme services commerciaux.
            </p>
          </div>

          {/* Row 1 — 3 cards */}
          <div className="grid md:grid-cols-3 gap-5 mb-5">
            {services.slice(0, 3).map((s) => (
              <Link key={s.title} href={s.href} className="service-img-card group">
                <img src={s.image} alt={s.title} loading="lazy" />
                <div className="service-img-overlay" />
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <div className="w-10 h-10 rounded-xl bg-white/15 backdrop-blur-sm border border-white/20
                                  flex items-center justify-center text-white mb-3">
                    <i className={s.icon}></i>
                  </div>
                  <h3 className="font-bold text-white text-lg leading-tight mb-1">{s.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed line-clamp-2">{s.description}</p>
                  <span className="mt-3 text-green-300 text-sm font-semibold inline-flex items-center gap-1">
                    En savoir plus <i className="fas fa-arrow-right text-xs"></i>
                  </span>
                </div>
              </Link>
            ))}
          </div>
          {/* Row 2 — 2 cards */}
          <div className="grid md:grid-cols-2 gap-5">
            {services.slice(3).map((s) => (
              <Link key={s.title} href={s.href} className="service-img-card">
                <img src={s.image} alt={s.title} loading="lazy" />
                <div className="service-img-overlay" />
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <div className="w-10 h-10 rounded-xl bg-white/15 backdrop-blur-sm border border-white/20
                                  flex items-center justify-center text-white mb-3">
                    <i className={s.icon}></i>
                  </div>
                  <h3 className="font-bold text-white text-lg leading-tight mb-1">{s.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{s.description}</p>
                  <span className="mt-3 text-green-300 text-sm font-semibold inline-flex items-center gap-1">
                    En savoir plus <i className="fas fa-arrow-right text-xs"></i>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══ GALERIE ═══════════════════════════════════════════════════ */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-6">
            <div>
              <span className="section-tag">Galerie</span>
              <h2 className="text-4xl font-extrabold text-green-900 mt-4">Notre ferme en images</h2>
              <div className="section-divider" />
            </div>
            <p className="text-gray-500 max-w-xs text-sm leading-relaxed">
              Images de référence du projet et de ses axes agricoles en développement.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] gap-3">
            <div className="gallery-item md:col-span-2 md:row-span-2">
              <img src="/images/agriculture.jpg" alt="Champs de culture" className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="gallery-item">
              <img src="/images/pondeuses2.jpg" alt="Poules pondeuses" className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="gallery-item">
              <img src="/images/Equipe.jpg" alt="Notre équipe" className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="gallery-item">
              <img src="/images/placeholder-abreuvoir.svg" alt="Emplacement provisoire pour une photo d’abreuvoir" className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="gallery-item">
              <img src="/images/mangeoire.jpg" alt="Mangeoire" className="w-full h-full object-cover" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* ══ CTA ═══════════════════════════════════════════════════════ */}
      <section className="relative py-28 overflow-hidden">
        <img src="/images/ferme.webp" alt=""
          className="absolute inset-0 w-full h-full object-cover object-center" aria-hidden="true" />
        <div className="absolute inset-0 bg-green-950/85" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="section-tag text-green-300 border-green-700 bg-green-900/50 mb-6">
            Demander des informations
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-5 leading-tight">
            Intéressé par le projet ?
          </h2>
          <p className="text-green-200 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Contactez-nous pour en savoir plus sur les axes agricoles en développement
            ou proposer un partenariat.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href={`/${locale}/contact`} className="btn-white btn-lg">
              <i className="fas fa-envelope text-sm"></i> Nous contacter
            </Link>
            <Link href={`/${locale}/about`} className="btn-outline btn-lg">
              <i className="fas fa-seedling text-sm"></i> Découvrir le projet
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
