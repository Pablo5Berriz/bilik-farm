import Link from 'next/link';

export const metadata = {
  title: 'À propos — Bilik Farm',
  description: "Découvrez l'histoire, la mission et l'équipe de Bilik Farm, ferme agro-pastorale au Cameroun.",
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
            Une ferme agro-pastorale fondée sur la passion de la terre et l'engagement envers la durabilité.
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
              <span className="section-tag">Notre fondation</span>
              <h2 className="text-4xl font-extrabold text-green-900 mt-4 mb-2 leading-tight">
                Une histoire enracinée<br />dans <span className="text-green-600">la terre</span>
              </h2>
              <div className="section-divider" />
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  L'histoire de Bilik Farm est un témoignage de dévouement envers la terre et les animaux.
                  Fondée par <strong className="text-gray-800">Paul Quentin Ondoa Bidzo</strong>, notre ferme
                  a vu le jour grâce à un engagement inébranlable envers des pratiques agricoles durables et éthiques.
                </p>
                <p>
                  Nichée au cœur de la magnifique région du Centre au Cameroun, précisément dans le village de
                  Bilik, notre exploitation s'étend sur <strong className="text-gray-800">40 hectares de terres fertiles</strong>.
                  Mais notre histoire va bien au-delà de ces chiffres.
                </p>
                <p>
                  Nos modestes débuts étaient ancrés dans une passion pour la terre et une volonté de créer quelque
                  chose de durable et de significatif — une force pour le bien, préservant l'environnement et
                  contribuant au bien-être de la communauté.
                </p>
              </div>

              {/* Mini stats */}
              <div className="grid grid-cols-3 gap-4 mt-10 pt-8 border-t border-gray-100">
                {[
                  { number: '40', suffix: 'ha', label: 'de terres' },
                  { number: '10+', suffix: '', label: "ans d'expérience" },
                  { number: '5', suffix: '', label: 'services actifs' },
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
                  Chez Bilik Farm, nous sommes plus qu'une simple ferme — nous sommes des gardiens de la
                  terre et des fournisseurs de nourriture de qualité. Notre mission est profondément ancrée
                  dans notre engagement envers la préservation de l'environnement et la fourniture d'aliments
                  sains et nutritifs.
                </p>
                <p>
                  Pour atteindre cet objectif, nous avons adopté des techniques agricoles respectueuses de la
                  nature et nous nous engageons à maintenir les normes de qualité les plus strictes dans tout
                  ce que nous faisons.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  {
                    icon: 'fas fa-recycle',
                    title: 'Agriculture régénératrice',
                    desc: 'Nous restaurons et enrichissons nos sols à chaque saison',
                  },
                  {
                    icon: 'fas fa-heart',
                    title: 'Bien-être animal',
                    desc: 'Chaque animal est élevé dans des conditions dignes et naturelles',
                  },
                  {
                    icon: 'fas fa-handshake',
                    title: 'Impact local',
                    desc: "Nous créons des emplois et stimulons l'économie locale de Bilik",
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
              <span className="section-tag">Les hommes et femmes derrière la ferme</span>
              <h2 className="text-4xl font-extrabold text-green-900 mt-4 mb-2 leading-tight">
                Notre <span className="text-green-600">équipe</span>
              </h2>
              <div className="section-divider" />
              <div className="space-y-4 text-gray-600 leading-relaxed mb-10">
                <p>
                  Notre équipe est le cœur battant de Bilik Farm. Composée d'agriculteurs passionnés,
                  d'éleveurs attentionnés et de professionnels dédiés, chaque membre apporte son expertise
                  unique et son dévouement à notre mission commune.
                </p>
                <p>
                  Chaque membre de notre équipe incarne nos valeurs de respect, d'intégrité et de durabilité.
                  Nous croyons en un leadership axé sur la collaboration et le respect mutuel, où chacun est
                  encouragé à contribuer et à s'épanouir.
                </p>
                <p>
                  Ensemble, nous travaillons sans relâche pour garantir que chaque aspect de notre ferme
                  reflète nos valeurs et notre engagement envers l'excellence.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-10">
                {[
                  { icon: 'fas fa-seedling', label: 'Agronomes qualifiés' },
                  { icon: 'fas fa-fish',     label: 'Aquaculteurs certifiés' },
                  { icon: 'fas fa-paw',      label: 'Vétérinaires partenaires' },
                  { icon: 'fas fa-truck',    label: 'Logistique locale' },
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
            Venez nous voir
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-5 leading-tight">
            Venez nous rendre visite
          </h2>
          <p className="text-green-200 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Vous souhaitez découvrir Bilik Farm de près ? Contactez-nous pour planifier une visite
            ou en savoir plus sur nos activités.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href={`/${locale}/contact`} className="btn-white btn-lg">
              <i className="fas fa-envelope text-sm"></i> Nous contacter
            </Link>
            <Link href={`/${locale}/products`} className="btn-outline btn-lg">
              <i className="fas fa-store text-sm"></i> Voir nos produits
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
