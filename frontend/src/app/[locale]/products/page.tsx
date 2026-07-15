import Link from 'next/link';

export const metadata = {
  title: 'Filières ciblées — Bilik Farm',
  description: 'Découvrez les filières agricoles ciblées par Bilik Farm dans le cadre de son développement progressif.',
};

/* ─────────────────────────────────────────
   Catalogue complet
───────────────────────────────────────── */
const catalogue = [
  {
    id: 'aviculture',
    tag: 'Aviculture',
    icon: 'fas fa-egg',
    title: 'Œufs & Volailles',
    bg: 'bg-white',
    products: [
      {
        slug: 'oeufs-de-table',
        title: 'Œufs de table',
        image: '/images/oeufs.jpeg',
        description: "Filière avicole ciblée dans le développement progressif de Bilik Farm.",
        price: 'Informations sur demande',
        unit: '',
      },
      {
        slug: 'poules-pondeuses',
        title: 'Poules pondeuses',
        image: '/images/pondeuses2.jpg',
        description: "Activité prévue, à confirmer selon la structuration réelle de l'élevage.",
        price: 'Informations sur demande',
        unit: '',
      },
      {
        slug: 'poules-du-village',
        title: 'Poules du village',
        image: '/images/poule_village.jpeg',
        description: "Filière avicole envisagée, sans disponibilité commerciale confirmée.",
        price: 'Informations sur demande',
        unit: '',
      },
    ],
  },
  {
    id: 'aquaculture',
    tag: 'Aquaculture',
    icon: 'fas fa-fish',
    title: 'Poissons frais',
    bg: 'bg-gray-50',
    products: [
      {
        slug: 'carpes-fraiches',
        title: 'Carpes fraîches',
        image: '/images/carpe2.jpeg',
        description: "Filière aquacole envisagée dans l'approche intégrée du projet.",
        price: 'Informations sur demande',
        unit: '',
      },
      {
        slug: 'tilapias-frais',
        title: 'Tilapias frais',
        image: '/images/tilapia2.jpg',
        description: "Production en développement dans les axes aquacoles ciblés.",
        price: 'Informations sur demande',
        unit: '',
      },
      {
        slug: 'clarias-frais',
        title: 'Clarias frais',
        image: '/images/clarias3.jpg',
        description: "Espèce envisagée dans les filières aquacoles futures.",
        price: 'Informations sur demande',
        unit: '',
      },
    ],
  },
  {
    id: 'elevage',
    tag: 'Élevage',
    icon: 'fas fa-paw',
    title: 'Viandes & animaux',
    bg: 'bg-white',
    products: [
      {
        slug: 'lapins',
        title: 'Lapins',
        image: '/images/Lapin.jpeg',
        description: "Activité d'élevage prévue, sans effectif ni disponibilité publiés.",
        price: 'Informations sur demande',
        unit: '',
      },
      {
        slug: 'viande-de-porc',
        title: 'Viande de porc',
        image: '/images/Porc.jpg',
        description: "Filière porcine envisagée dans une montée en puissance progressive.",
        price: 'Informations sur demande',
        unit: '',
      },
    ],
  },
  {
    id: 'agriculture',
    tag: 'Agriculture',
    icon: 'fas fa-seedling',
    title: 'Fruits & légumes frais',
    bg: 'bg-gray-50',
    products: [
      {
        slug: 'mais-frais',
        title: 'Maïs frais',
        image: '/images/Mais.jpeg',
        description: "Culture vivrière ciblée dans la première phase agricole du projet.",
        price: 'Informations sur demande',
        unit: '',
      },
      {
        slug: 'avocats',
        title: 'Avocats',
        image: '/images/Avocat.jpeg',
        description: "Culture fruitière envisagée selon l'évolution du projet.",
        price: 'Informations sur demande',
        unit: '',
      },
      {
        slug: 'safou',
        title: 'Safout (Prune africaine)',
        image: '/images/safou.jpg',
        description: "Filière fruitière ciblée, sans disponibilité commerciale confirmée.",
        price: 'Informations sur demande',
        unit: '',
      },
      {
        slug: 'papayes',
        title: 'Papayes',
        image: '/images/Papaye.jpg',
        description: "Culture envisagée dans le développement maraîcher et fruitier.",
        price: 'Informations sur demande',
        unit: '',
      },
      {
        slug: 'manioc',
        title: 'Manioc',
        image: '/images/manioc.jpg',
        description: "Culture vivrière ciblée dans le programme agricole.",
        price: 'Informations sur demande',
        unit: '',
      },
      {
        slug: 'bananes-douces',
        title: 'Bananes douces',
        image: '/images/Banane.jpg',
        description: "Culture fruitière envisagée, sans surface publiée.",
        price: 'Informations sur demande',
        unit: '',
      },
      {
        slug: 'plantains',
        title: 'Plantains',
        image: '/images/plantain.jpg',
        description: "Culture vivrière ciblée, à développer progressivement.",
        price: 'Informations sur demande',
        unit: '',
      },
    ],
  },
];

/* ─────────────────────────────────────────
   Page
───────────────────────────────────────── */
export default function ProductsPage({ params }: { params: { locale: string } }) {
  const { locale } = params;

  return (
    <>
      {/* ══ PAGE HERO ═══════════════════════════════════════════════ */}
      <section className="relative py-28 overflow-hidden">
        <img
          src="/images/ferme.webp"
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-green-950/90 via-green-900/75 to-green-800/60" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-6">
            <Link href={`/${locale}`} className="hover:text-white transition-colors">Accueil</Link>
            <i className="fas fa-chevron-right text-[10px]"></i>
            <span className="text-white/90">Nos Produits</span>
          </nav>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-5">
            Filières <span className="text-green-400">ciblées</span>
          </h1>
          <p className="text-lg text-white/70 max-w-xl leading-relaxed">
            Les éléments ci-dessous présentent des productions envisagées, sans disponibilité commerciale confirmée.
          </p>

          {/* Category anchors */}
          <div className="flex flex-wrap gap-3 mt-8">
            {catalogue.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20
                           text-white/80 hover:text-white hover:bg-white/20 text-sm font-medium
                           px-4 py-2 rounded-full transition-all"
              >
                <i className={`${cat.icon} text-green-400 text-xs`}></i>
                {cat.tag}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CATALOGUE ═══════════════════════════════════════════════ */}
      {catalogue.map((cat, idx) => (
        <section
          key={cat.id}
          id={cat.id}
          className={`py-20 ${cat.bg} scroll-mt-20`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Section header */}
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-4">
              <div>
                <span className="section-tag">
                  <i className={`${cat.icon} mr-1`}></i> {cat.tag}
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-green-900 mt-3">
                  {cat.title}
                </h2>
                <div className="section-divider" />
              </div>
              <p className="text-sm text-gray-400">
                {cat.products.length} filière{cat.products.length > 1 ? 's' : ''} ciblée{cat.products.length > 1 ? 's' : ''}
              </p>
            </div>

            {/* Products grid */}
            <div className={`grid gap-7 ${
              cat.products.length === 2
                ? 'sm:grid-cols-2 max-w-2xl'
                : 'sm:grid-cols-2 lg:grid-cols-3'
            }`}>
              {cat.products.map((p) => (
                <div key={p.slug} className="product-card">
                  <div className="relative overflow-hidden" style={{ aspectRatio: '4/3' }}>
                    <img
                      src={p.image}
                      alt={p.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <span className="card-badge">{cat.tag}</span>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="font-bold text-gray-800 text-lg mb-2">{p.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed flex-1 mb-5">{p.description}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div>
                        <span className="text-xl font-extrabold text-green-700">{p.price}</span>
                        {p.unit && (
                          <span className="text-gray-400 text-xs ml-1">{p.unit}</span>
                        )}
                      </div>
                      <Link href={`/${locale}/products/${p.slug}`} className="btn-primary btn-sm">
                        Détails
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Separator between sections (except last) */}
          {idx < catalogue.length - 1 && (
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
              <div className="h-px bg-gradient-to-r from-transparent via-green-200 to-transparent" />
            </div>
          )}
        </section>
      ))}

      {/* ══ CTA ═════════════════════════════════════════════════════ */}
      <section className="relative py-28 overflow-hidden">
        <img
          src="/images/ferme.webp"
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-green-950/85" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="section-tag text-green-300 border-green-700 bg-green-900/50 mb-6">
            Demander des informations
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-5 leading-tight">
            Vous souhaitez en savoir plus ?
          </h2>
          <p className="text-green-200 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Contactez-nous pour demander des informations ou proposer un partenariat.
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
