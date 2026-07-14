import Link from 'next/link';

const foods = [
  {
    img: '/images/mais2.jpg',
    alt: 'Aliments démarrage poules pondeuses',
    badge: 'Aviculture',
    title: 'Démarrage — Poules pondeuses',
    desc: "Formulé pour les poussins de 0 à 8 semaines. Riche en protéines et minéraux essentiels pour une croissance saine et rapide. Sacs de 50 kg.",
  },
  {
    img: '/images/pondeuses2.jpg',
    alt: 'Aliments croissance poules pondeuses',
    badge: 'Aviculture',
    title: 'Croissance — Poules pondeuses',
    desc: "Adapté pour les poulettes de 8 semaines à l'entrée en ponte. Équilibre nutritionnel optimal pour maximiser la production d'œufs. Sacs de 50 kg.",
  },
  {
    img: '/images/safou2.JPG',
    alt: 'Aliments démarrage poules du village',
    badge: 'Aviculture',
    title: 'Démarrage — Poules du village',
    desc: "Conçu pour les besoins spécifiques des poules du village en croissance. Favorise la santé et la vitalité des poussins rustiques. Sacs de 50 kg.",
  },
  {
    img: '/images/Papaye2.jpeg',
    alt: 'Aliments croissance poules du village',
    badge: 'Aviculture',
    title: 'Croissance — Poules du village',
    desc: "Adapté aux poules du village en phase de croissance. Soutient leur développement naturel et leur résistance aux maladies. Sacs de 50 kg.",
  },
  {
    img: '/images/manioc2.jpg',
    alt: 'Aliments croissance porcs',
    badge: 'Élevage',
    title: 'Croissance — Porcs',
    desc: "Formule équilibrée pour assurer une croissance saine et une viande de qualité supérieure. Adaptés aux différents stades de développement porcin. Sacs de 50 kg.",
  },
  {
    img: '/images/Banane2.jpg',
    alt: 'Aliments pour poissons',
    badge: 'Aquaculture',
    title: 'Aliments — Poissons',
    desc: "Granulés flottants ou coulants adaptés aux carpes, tilapias et clarias. Riche en protéines marines pour une croissance rapide et saine. Sacs de 50 kg.",
  },
];

const equipment = [
  {
    img: '/images/placeholder-abreuvoir.svg',
    alt: "Emplacement provisoire pour une photo d'abreuvoir",
    badge: 'Équipement',
    title: 'Abreuvoirs',
    desc: "Conçus pour garantir un accès constant à l'eau fraîche. Robustes, faciles à nettoyer et adaptés à tous types d'animaux de ferme.",
    cta: 'Renseignements',
  },
  {
    img: '/images/mangeoire.jpg',
    alt: 'Mangeoires',
    badge: 'Équipement',
    title: 'Mangeoires',
    desc: "Distribution efficace et propre de la nourriture. Réduit le gaspillage alimentaire et facilite la gestion quotidienne de votre ferme.",
    cta: 'Renseignements',
  },
  {
    img: '/images/Brouette.jpg',
    alt: 'Brouettes',
    badge: 'Équipement',
    title: 'Brouettes',
    desc: "Brouettes robustes en acier galvanisé pour le transport de matériaux, d'aliments et de fumier. Indispensables pour les tâches quotidiennes.",
    cta: 'Renseignements',
  },
];

export default function FeedmillPage({ params }: { params: { locale: string } }) {
  const { locale } = params;

  return (
    <>
      {/* ══ HERO ══════════════════════════════════════════════════════ */}
      <section className="relative h-[420px] md:h-[520px] flex items-end overflow-hidden">
        <img
          src="/images/provenderie.jpg"
          alt="Provenderie"
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-green-950/90 via-green-900/50 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 w-full">
          <nav className="flex items-center gap-2 text-white/60 text-sm mb-5">
            <Link href={`/${locale}`} className="hover:text-white transition-colors">Accueil</Link>
            <i className="fas fa-chevron-right text-xs" />
            <span>Nos Services</span>
            <i className="fas fa-chevron-right text-xs" />
            <span className="text-white font-medium">Provenderie</span>
          </nav>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4">
            Provenderie
          </h1>
          <p className="text-white/75 text-lg max-w-xl leading-relaxed">
            Aliments formulés pour une nutrition optimale de vos animaux.
            Disponibles en sacs de 50&nbsp;kg pour toutes les espèces.
          </p>
        </div>
      </section>

      {/* ══ ALIMENTS ══════════════════════════════════════════════════ */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="section-tag">Alimentation animale</span>
            <h2 className="text-4xl font-extrabold text-green-900 mt-4">Nos aliments pour animaux</h2>
            <div className="section-divider-center" />
            <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
              Des aliments spécialement formulés pour répondre aux besoins nutritionnels spécifiques
              de chaque espèce. Disponibles en sacs de 50&nbsp;kg.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {foods.map((item) => (
              <div key={item.title} className="product-card">
                <div className="relative overflow-hidden" style={{ aspectRatio: '4/3' }}>
                  <img
                    src={item.img}
                    alt={item.alt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <span className="card-badge">{item.badge}</span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-bold text-gray-800 text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed flex-1 mb-5">{item.desc}</p>
                  <Link href={`/${locale}/contact`} className="btn-primary btn-sm self-start">
                    <i className="fas fa-envelope" /> Demander un devis
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ ÉQUIPEMENTS ═══════════════════════════════════════════════ */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="section-tag">Équipements agricoles</span>
            <h2 className="text-4xl font-extrabold text-green-900 mt-4">Matériel d'élevage</h2>
            <div className="section-divider-center" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {equipment.map((item) => (
              <div key={item.title} className="product-card">
                <div className="relative overflow-hidden" style={{ aspectRatio: '4/3' }}>
                  <img
                    src={item.img}
                    alt={item.alt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <span className="card-badge">{item.badge}</span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-bold text-gray-800 text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed flex-1 mb-5">{item.desc}</p>
                  <Link href={`/${locale}/contact`} className="btn-primary btn-sm self-start">
                    <i className="fas fa-envelope" /> {item.cta}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA ═══════════════════════════════════════════════════════ */}
      <section className="relative py-28 overflow-hidden">
        <img
          src="/images/provenderie.jpg"
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
            Besoin d'aliments ou d'équipements&nbsp;?
          </h2>
          <p className="text-green-200 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Contactez-nous pour un devis personnalisé selon le type et la taille de votre élevage.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href={`/${locale}/contact`} className="btn-white btn-lg">
              <i className="fas fa-envelope text-sm" /> Demander un devis
            </Link>
            <a href="tel:+237000000000" className="btn-outline btn-lg">
              <i className="fas fa-phone text-sm" /> Appeler directement
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
