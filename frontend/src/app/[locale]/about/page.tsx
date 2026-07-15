import Link from 'next/link';

export const metadata = {
  title: 'À propos — Bilik Farm',
  description: "Découvrez le positionnement de Bilik Farm, projet agricole intégré en développement au Cameroun.",
};

export default function AboutPage({ params }: { params: { locale: string } }) {
  const { locale } = params;

  return (
    <>
      {/* ══ PAGE HERO ═══════════════════════════════════════════════ */}
      <section className="relative py-28 overflow-hidden">
        <img
          src="/images/Historique.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-green-950/90 via-green-900/75 to-green-800/60" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-6">
            <Link href={`/${locale}`} className="hover:text-white transition-colors">Accueil</Link>
            <i className="fas fa-chevron-right text-[10px]"></i>
            <span className="text-white/90">À propos</span>
          </nav>

          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-5">
            À propos de <span className="text-green-400">Bilik Farm</span>
          </h1>
          <p className="text-lg text-white/70 max-w-xl leading-relaxed">
            Un projet agricole intégré en développement dans la région du Centre au Cameroun.
          </p>
        </div>
      </section>

      {/* ══ HISTOIRE ════════════════════════════════════════════════ */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Image */}
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/historique.jpg"
                alt="Histoire de Bilik Farm"
                loading="lazy"
                className="w-full object-cover aspect-[4/3]"
              />
            </div>

            {/* Text */}
            <div>
              <span className="section-tag">Notre projet</span>
              <h2 className="text-4xl font-extrabold text-green-900 mt-4 mb-2 leading-tight">
                Une première phase<br />dans <span className="text-green-600">la région du Centre</span>
              </h2>
              <div className="section-divider" />
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Bilik Farm est un projet agricole intégré en développement. Il vise à structurer
                  progressivement des activités agricoles, d'élevage et d'aquaculture.
                </p>
                <p>
                  Le projet démarre dans la région du Centre au Cameroun sur une première superficie
                  d'environ <strong className="text-gray-800">2,5 hectares</strong>.
                </p>
                <p>
                  Cette première phase permet de poser les bases du projet avant toute extension
                  commerciale ou industrielle.
                </p>
              </div>

              {/* Mini stats */}
              <div className="grid grid-cols-3 gap-4 mt-10 pt-8 border-t border-gray-100">
                {[
                  { number: '2,5', suffix: 'ha', label: 'première phase' },
                  { number: 'Centre', suffix: '', label: 'Cameroun' },
                  { number: 'Projet', suffix: '', label: 'en développement' },
                ].map((s) => (
                  <div key={s.label} className="text-center">
                    <div className="text-2xl font-extrabold text-green-700">
                      {s.number}<span className="text-green-400 text-lg">{s.suffix}</span>
                    </div>
                    <div className="text-xs text-gray-400 mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ MISSION ═════════════════════════════════════════════════ */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Text — left */}
            <div className="order-2 lg:order-1">
              <span className="section-tag">Nos engagements</span>
              <h2 className="text-4xl font-extrabold text-green-900 mt-4 mb-2 leading-tight">
                Notre <span className="text-green-600">mission</span>
              </h2>
              <div className="section-divider" />
              <div className="space-y-4 text-gray-600 leading-relaxed mb-10">
                <p>
                  Chez Bilik Farm, l'objectif est de développer progressivement un modèle agricole
                  intégré, adapté au territoire et attentif à la qualité des productions futures.
                </p>
                <p>
                  Les activités seront structurées par étapes, sans présenter de capacité, de volume
                  ou de disponibilité tant qu'ils ne sont pas confirmés.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  {
                    icon: 'fas fa-recycle',
                    title: 'Pratiques responsables',
                    desc: 'Volonté de développer des pratiques attentives aux sols et aux ressources',
                  },
                  {
                    icon: 'fas fa-heart',
                    title: 'Approche progressive',
                    desc: "Structuration des activités d'élevage par étapes",
                  },
                  {
                    icon: 'fas fa-handshake',
                    title: 'Impact local',
                    desc: "Objectif de contribuer au développement local",
                  },
                ].map((v) => (
                  <div key={v.title} className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
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
            </div>

            {/* Image — right */}
            <div className="order-1 lg:order-2 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/Historique.png"
                alt="Mission de Bilik Farm"
                loading="lazy"
                className="w-full object-cover aspect-[4/3]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ══ ÉQUIPE ══════════════════════════════════════════════════ */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Image */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/Equipe.jpg"
                  alt="Équipe Bilik Farm"
                  loading="lazy"
                  className="w-full object-cover aspect-[4/3]"
                />
              </div>
              <div className="absolute -bottom-5 -right-4 bg-green-700 text-white rounded-2xl px-5 py-4 shadow-xl text-center">
                <div className="text-2xl font-extrabold">100%</div>
                <div className="text-green-200 text-xs mt-0.5">Passion locale</div>
              </div>
            </div>

            {/* Text */}
            <div>
              <span className="section-tag">Réseau à structurer</span>
              <h2 className="text-4xl font-extrabold text-green-900 mt-4 mb-2 leading-tight">
                Notre <span className="text-green-600">approche</span>
              </h2>
              <div className="section-divider" />
              <div className="space-y-4 text-gray-600 leading-relaxed mb-10">
                <p>
                  Bilik Farm avance avec une approche progressive. Le projet doit structurer son réseau
                  technique, ses partenaires et ses pratiques avant de communiquer sur des capacités
                  commerciales.
                </p>
                <p>
                  Les collaborations futures seront présentées uniquement lorsqu'elles seront confirmées.
                </p>
                <p>
                  Cette prudence permet de conserver une communication claire, sobre et crédible.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-10">
                {[
                  { icon: 'fas fa-seedling', label: 'Agriculture' },
                  { icon: 'fas fa-fish',     label: 'Aquaculture' },
                  { icon: 'fas fa-paw',      label: 'Élevage' },
                  { icon: 'fas fa-handshake', label: 'Partenariats' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3 bg-green-50 rounded-xl px-4 py-3">
                    <i className={`${item.icon} text-green-600`}></i>
                    <span className="text-sm font-medium text-gray-700">{item.label}</span>
                  </div>
                ))}
              </div>

              <Link href={`/${locale}/contact`} className="btn-primary btn-lg">
                <i className="fas fa-envelope text-sm"></i> Rejoindre notre réseau
              </Link>
            </div>
          </div>
        </div>
      </section>

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
            Nous contacter
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-5 leading-tight">
            En savoir plus sur Bilik Farm
          </h2>
          <p className="text-green-200 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Contactez-nous pour demander des informations sur le projet ou proposer un partenariat.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href={`/${locale}/contact`} className="btn-white btn-lg">
              <i className="fas fa-envelope text-sm"></i> Nous contacter
            </Link>
            <Link href={`/${locale}/products`} className="btn-outline btn-lg">
              <i className="fas fa-seedling text-sm"></i> Voir les filières ciblées
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
