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
    description: 'Issus de nos 10 000 poules pondeuses, inspectés quotidiennement pour une fraîcheur et une qualité irréprochables.',
    price: '2 200 FCFA',
    unit: '/ Alvéole',
    slug: 'oeufs-de-table',
  },
  {
    id: 2,
    title: 'Carpes fraîches',
    image: '/images/carpe2.jpeg',
    badge: 'Aquaculture',
    description: 'Élevées dans nos étangs contrôlés, nos carpes offrent une chair remarquable issue de pratiques durables.',
    price: '2 500 FCFA',
    unit: '/ Kg',
    slug: 'carpes-fraiches',
  },
  {
    id: 3,
    title: 'Tilapias frais',
    image: '/images/tilapia2.jpg',
    badge: 'Aquaculture',
    description: 'Chair tendre et savoureuse issue d\'un élevage en eau pure. 25 000 poissons produits par cycle.',
    price: '2 500 FCFA',
    unit: '/ Kg',
    slug: 'tilapias-frais',
  },
  {
    id: 4,
    title: 'Viande de porc',
    image: '/images/Porc.jpg',
    badge: 'Élevage',
    description: 'Nourris avec des aliments biologiques adaptés, nos 2 500 porcs produisent une viande juteuse d\'exception.',
    price: '2 800 FCFA',
    unit: '/ Kg',
    slug: 'viande-de-porc',
  },
  {
    id: 5,
    title: 'Maïs frais',
    image: '/images/Mais.jpeg',
    badge: 'Agriculture',
    description: 'Cultivé sur 20 hectares, récolté à la main au moment optimal de maturité pour garantir douceur et croquant.',
    price: '30 000 FCFA',
    unit: '/ 100 Kg',
    slug: 'mais-frais',
  },
  {
    id: 6,
    title: 'Poules du village',
    image: '/images/poule_village.jpeg',
    badge: 'Aviculture',
    description: 'Élevées en liberté dans un environnement naturel, nos 1 500 poules du village incarnent l\'authenticité paysanne.',
    price: '10 000 FCFA',
    unit: '/ pièce',
    slug: 'poules-du-village',
  },
];

const services = [
  {
    icon: 'fas fa-box-open',
    title: 'Provenderie',
    description: 'Aliments formulés pour une nutrition optimale — poules, porcs, poissons. Sacs de 50 kg disponibles.',
    image: '/images/provenderie.jpg',
    href: '/fr/services/feedmill',
  },
  {
    icon: 'fas fa-paw',
    title: "Vente d'animaux",
    description: 'Carpes, tilapias, clarias, poules de ferme, porcs et lapins issus de notre élevage.',
    image: '/images/poule de ferme.jpg',
    href: '/fr/services/animals',
  },
  {
    icon: 'fas fa-seedling',
    title: 'Vivres frais',
    description: 'Maïs, avocats, safou, papaye, manioc, bananes et plantains cultivés sur nos champs.',
    image: '/images/plantain.jpg',
    href: '/fr/services/fresh-produce',
  },
  {
    icon: 'fas fa-egg',
    title: 'Écloserie',
    description: 'Incubation professionnelle avec des installations modernes et des taux de réussite élevés.',
    image: '/images/oeufs2.jpg',
    href: '/fr/services/hatchery',
  },
  {
    icon: 'fas fa-lightbulb',
    title: 'Conseils agricoles',
    description: 'Nos experts vous accompagnent pour améliorer vos pratiques et maximiser vos rendements.',
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

const testimonials = [
  {
    stars: 5,
    text: 'Des produits d\'une fraîcheur exceptionnelle ! Les œufs de Bilik Farm sont incomparables. Je recommande vivement à toute personne cherchant des produits de qualité.',
    author: 'Marie Nkodo',
    role: 'Cliente fidèle, Yaoundé',
  },
  {
    stars: 5,
    text: 'J\'achète mes poissons chez Bilik Farm depuis plus d\'un an. La qualité est constante et le service est excellent. Une ferme qui mérite vraiment d\'être connue !',
    author: 'Jean-Pierre Mbarga',
    role: 'Restaurateur, Douala',
  },
  {
    stars: 4.5,
    text: 'Les conseils agricoles de l\'équipe m\'ont permis d\'améliorer considérablement mon élevage. Bilik Farm est une vraie référence dans la région.',
    author: 'Alphonse Ntouba',
    role: 'Agriculteur, Akono',
  },
];

/* ─────────────────────────────────────────
   Page
───────────────────────────────────────── */
export default function HomePage({ params }: { params: { locale: string } }) {
  const { locale } = params;

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
              Ferme Agro-Pastorale · Bilik, Cameroun
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-6 tracking-tight">
              La nature <br />
              <span className="text-green-400">au service</span><br />
              de votre table
            </h1>

            <p className="text-lg text-white/75 mb-10 leading-relaxed max-w-lg">
              40 hectares de terres fertiles dédiés à l'élevage, l'aquaculture et
              l'agriculture durable au cœur de la région Centre du Cameroun.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href={`/${locale}/products`} className="btn-primary btn-lg">
                <i className="fas fa-store text-sm"></i> Nos produits
              </Link>
              <Link href={`/${locale}/contact`} className="btn-outline btn-lg">
                <i className="fas fa-phone text-sm"></i> Nous contacter
              </Link>
            </div>

            {/* trust badges */}
            <div className="flex flex-wrap gap-6 mt-12 pt-10 border-t border-white/15">
              {[
                { icon: 'fas fa-leaf', label: 'Agriculture durable' },
                { icon: 'fas fa-award', label: 'Qualité garantie' },
                { icon: 'fas fa-truck', label: 'Livraison locale' },
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
              { icon: 'fas fa-mountain', number: '40', suffix: ' ha', label: 'Terres fertiles' },
              { icon: 'fas fa-egg',      number: '10 000', suffix: '', label: 'Poules pondeuses' },
              { icon: 'fas fa-fish',     number: '25 000', suffix: '', label: 'Poissons / vague' },
              { icon: 'fas fa-piggy-bank', number: '2 500', suffix: '', label: 'Porcs en élevage' },
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
                <div className="text-2xl font-extrabold">+10 ans</div>
                <div className="text-green-200 text-xs mt-0.5">d'expérience</div>
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
                Fondée par <strong>Paul Quentin Ondoa Bidzo</strong>, Bilik Farm est née d'un
                engagement inébranlable envers des pratiques agricoles durables et éthiques.
                Nichée au cœur de la région Centre du Cameroun, notre exploitation s'étend
                sur <strong>40 hectares de terres fertiles</strong>.
              </p>
              <p className="text-gray-500 mb-10 leading-relaxed">
                Nous croyons que l'agriculture peut être une force pour le bien : créer des emplois,
                stimuler l'économie locale et nourrir les communautés dans le respect de l'environnement.
              </p>

              <div className="space-y-4 mb-10">
                {[
                  { icon: 'fas fa-leaf',  title: 'Agriculture durable',     desc: "Pratiques respectueuses de l'environnement à chaque étape" },
                  { icon: 'fas fa-award', title: 'Qualité irréprochable',    desc: 'Contrôle rigoureux de chaque produit avant livraison' },
                  { icon: 'fas fa-users', title: 'Ancrage communautaire',    desc: 'Contribution au développement économique local' },
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
                Nos Produits Phares
              </h2>
              <div className="section-divider" />
              <p className="text-gray-500 max-w-md leading-relaxed">
                Produits frais cultivés et élevés avec soin sur nos 40 hectares de terres fertiles.
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
              Bilik Farm propose une gamme complète de services agricoles pour répondre à tous vos besoins.
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
              Bilik Farm en toute transparence — venez découvrir nos installations sur place.
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

      {/* ══ TÉMOIGNAGES ═══════════════════════════════════════════════ */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="section-tag">Témoignages</span>
            <h2 className="text-4xl font-extrabold text-green-900 mt-4">
              Ce que disent nos <span className="text-green-600">clients</span>
            </h2>
            <div className="section-divider-center" />
            <p className="text-gray-500 max-w-md mx-auto leading-relaxed">
              La satisfaction de nos clients est notre plus belle récompense.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-7">
            {testimonials.map((t) => (
              <div key={t.author} className="avis-card">
                {/* Stars */}
                <div className="flex gap-0.5 text-amber-400 text-sm">
                  {Array.from({ length: Math.floor(t.stars) }).map((_, i) => (
                    <i key={i} className="fas fa-star"></i>
                  ))}
                  {t.stars % 1 !== 0 && <i className="fas fa-star-half-alt"></i>}
                </div>

                <p className="text-gray-600 leading-relaxed text-[15px] relative z-10">
                  {t.text}
                </p>

                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <div className="w-11 h-11 rounded-full bg-green-100 flex items-center justify-center
                                  text-green-600 text-2xl shrink-0">
                    <i className="fas fa-user-circle"></i>
                  </div>
                  <div>
                    <p className="font-bold text-gray-800 text-sm">{t.author}</p>
                    <p className="text-xs text-gray-400">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
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
            Passez commande
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-5 leading-tight">
            Intéressé par nos produits ?
          </h2>
          <p className="text-green-200 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Contactez-nous directement pour passer commande ou obtenir plus d'informations
            sur nos produits et services.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href={`/${locale}/contact`} className="btn-white btn-lg">
              <i className="fas fa-envelope text-sm"></i> Nous écrire
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
