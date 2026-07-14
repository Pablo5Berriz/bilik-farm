import Link from 'next/link';

export const metadata = {
  title: 'Nos Produits — Bilik Farm',
  description: 'Découvrez tous les produits de Bilik Farm : œufs, poissons, viandes, fruits et légumes frais du Cameroun.',
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
        description: "Issus de nos 10 000 poules pondeuses, inspectés quotidiennement. ~266 alvéoles de 30 œufs produites par jour.",
        price: '2 200 FCFA',
        unit: '/ Alvéole',
      },
      {
        slug: 'poules-pondeuses',
        title: 'Poules pondeuses',
        image: '/images/pondeuse.jpg',
        description: "Mises en vente en fin de cycle de ponte. Élevées dans des poulaillers équipés de cages automatiques.",
        price: '2 200 FCFA',
        unit: '/ unité',
      },
      {
        slug: 'poules-du-village',
        title: 'Poules du village',
        image: '/images/poule_village.jpeg',
        description: "1 500 poules élevées en liberté dans un environnement naturel. Saveur authentique et qualité inégalée.",
        price: '10 000 FCFA',
        unit: '/ unité',
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
        description: "Élevées dans nos étangs contrôlés. Chair délicieuse, texture fine et goût exceptionnel. 25 000 / vague.",
        price: '2 500 FCFA',
        unit: '/ Kg',
      },
      {
        slug: 'tilapias-frais',
        title: 'Tilapias frais',
        image: '/images/Tilapia.jpg',
        description: "Chair tendre et savoureuse en eau pure. Idéaux pour les grillades, plats en sauce ou ceviches.",
        price: '2 500 FCFA',
        unit: '/ Kg',
      },
      {
        slug: 'clarias-frais',
        title: 'Clarias frais',
        image: '/images/clarias3.jpg',
        description: "Chair tendre et délicate issue d'un élevage soigné. Expérience gustative unique appréciée des fins palais.",
        price: '2 500 FCFA',
        unit: '/ Kg',
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
        description: "500 lapins élevés dans des enclos spacieux, nourris de foin et légumes frais. Viande tendre et savoureuse.",
        price: '4 000 FCFA',
        unit: '/ unité',
      },
      {
        slug: 'viande-de-porc',
        title: 'Viande de porc',
        image: '/images/Porc.jpg',
        description: "2 500 porcs élevés avec des aliments biologiques. Viande juteuse et savoureuse de qualité exceptionnelle.",
        price: '2 800 FCFA',
        unit: '/ Kg',
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
        description: "Cultivé sur 20 ha. Récolté à la main à maturité optimale. Douceur naturelle et texture croquante garanties.",
        price: '30 000 FCFA',
        unit: '/ 100 Kg',
      },
      {
        slug: 'avocats',
        title: 'Avocats',
        image: '/images/Avocat.jpeg',
        description: "Sélectionnés pour leur onctuosité et leur goût riche. Cultivés sur 10 ha de terres fertiles à Bilik.",
        price: '7 000 FCFA',
        unit: '/ 100 Kg',
      },
      {
        slug: 'safou',
        title: 'Safout (Prune africaine)',
        image: '/images/safou.jpg',
        description: "Cueillis à maturité parfaite pour préserver leur texture fondante et leur saveur exotique unique.",
        price: '10 000 FCFA',
        unit: '/ 100 Kg',
      },
      {
        slug: 'papayes',
        title: 'Papayes',
        image: '/images/Papaye.jpg',
        description: "Mûries à point, juteuses et riches en vitamines. Parfaites pour les smoothies et salades de fruits tropicaux.",
        price: '2 200 FCFA',
        unit: '/ 100 Kg',
      },
      {
        slug: 'manioc',
        title: 'Manioc',
        image: '/images/manioc.jpg',
        description: "Polyvalent et nourrissant, cultivé sur 25 ha. Base incontournable de la cuisine camerounaise traditionnelle.",
        price: '25 000 FCFA',
        unit: '/ 100 Kg',
      },
      {
        slug: 'bananes-douces',
        title: 'Bananes douces',
        image: '/images/Banane.jpg',
        description: "Sélectionnées pour leur goût sucré et texture tendre. Source naturelle d'énergie cultivée sur 5 ha.",
        price: '2 000 FCFA',
        unit: '',
      },
      {
        slug: 'plantains',
        title: 'Plantains',
        image: '/images/plantain.jpg',
        description: "Cultivés sur 25 ha. Polyvalents — frits, bouillis ou grillés. Saveur subtilement sucrée et texture satisfaisante.",
        price: '3 000 FCFA',
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
            Nos <span className="text-green-400">Produits</span>
          </h1>
          <p className="text-lg text-white/70 max-w-xl leading-relaxed">
            Des produits frais et de qualité supérieure, cultivés et élevés avec soin à Bilik Farm.
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
                {cat.products.length} produit{cat.products.length > 1 ? 's' : ''} disponible{cat.products.length > 1 ? 's' : ''}
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
            Passez commande
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-5 leading-tight">
            Vous souhaitez passer commande ?
          </h2>
          <p className="text-green-200 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Contactez-nous directement pour discuter de vos besoins et obtenir un devis personnalisé.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href={`/${locale}/contact`} className="btn-white btn-lg">
              <i className="fas fa-envelope text-sm"></i> Nous contacter
            </Link>
            <a href="tel:+237000000000" className="btn-outline btn-lg">
              <i className="fas fa-phone text-sm"></i> Appeler directement
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
