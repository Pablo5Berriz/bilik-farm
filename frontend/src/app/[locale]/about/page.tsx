import Link from 'next/link';
import { Container } from '@/components/ui/Container';

export const metadata = {
  title: 'À propos — Bilik Farm',
  description: 'Découvrez le positionnement de Bilik Farm, projet agricole intégré en développement au Cameroun.',
};

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  return (
    <>
      <section className="relative overflow-hidden bg-ivory py-12 sm:py-16 lg:py-20">
        <div aria-hidden="true" className="cameroon-pattern absolute left-0 top-0 h-2 w-full opacity-70" />
        <Container>
          <nav aria-label="Fil d’Ariane" className="mb-10 flex items-center gap-3 text-sm text-primary/50">
            <Link href={`/${locale}`} className="rounded-sm hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold">Accueil</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page" className="text-primary">À propos</span>
          </nav>
          <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-terracotta">Notre projet</p>
              <h1 className="mt-5 font-display text-5xl font-semibold leading-[0.98] tracking-[-0.035em] text-primary sm:text-6xl lg:text-7xl">Une ambition agricole ancrée dans la région du Centre.</h1>
              <p className="mt-7 max-w-xl text-lg leading-8 text-primary/70">Bilik Farm est un projet agricole intégré en développement au Cameroun.</p>
            </div>
            <div className="relative min-h-[380px] sm:min-h-[560px]">
              <div className="absolute inset-0 overflow-hidden rounded-[2rem] shadow-lift sm:left-10"><img src="/images/historique.jpg" alt="Vue associée à l’histoire du projet Bilik Farm" className="h-full w-full object-cover" /></div>
              <div className="absolute bottom-6 left-0 max-w-xs rounded-editorial bg-primary p-6 text-white shadow-lift">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-gold">Première phase</p>
                <p className="mt-3 font-display text-2xl font-semibold">Environ 2,5 hectares</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-primary/10 bg-white py-20 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-terracotta">Construction progressive</p>
              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-primary sm:text-5xl">Poser les bases avant toute extension.</h2>
            </div>
            <div className="space-y-5 text-lg leading-8 text-primary/65">
              <p>Le projet vise à structurer progressivement des activités agricoles, d’élevage et d’aquaculture.</p>
              <p>Cette première phase permet de consolider l’approche du projet avant toute extension commerciale ou industrielle.</p>
              <p>Les capacités, volumes et disponibilités ne sont pas communiqués tant qu’ils ne sont pas confirmés.</p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-primary py-20 text-white sm:py-24 lg:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">Approche intégrée</p>
              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl">Trois axes complémentaires.</h2>
              <p className="mt-6 max-w-lg leading-7 text-white/65">Une organisation progressive adaptée au territoire et à l’avancement réel du projet.</p>
            </div>
            <div className="divide-y divide-white/15 border-y border-white/15">
              {[
                ['01', 'Agriculture', 'Des cultures vivrières et fruitières ciblées.'],
                ['02', 'Élevage', 'Des filières avicoles et des élevages complémentaires envisagés.'],
                ['03', 'Aquaculture', 'Un axe aquacole intégré au développement du projet.'],
              ].map(([number, title, description]) => (
                <div key={title} className="grid grid-cols-[3rem_1fr] gap-5 py-7 sm:grid-cols-[4rem_1fr] sm:px-5">
                  <span className="font-display text-xl text-gold">{number}</span>
                  <div><h3 className="font-display text-2xl font-semibold">{title}</h3><p className="mt-3 text-sm leading-6 text-white/60">{description}</p></div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="overflow-hidden py-20 sm:py-24 lg:py-28">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="relative min-h-[420px] sm:min-h-[560px]">
              <div className="absolute inset-y-0 left-0 right-16 overflow-hidden rounded-[2rem] shadow-lift sm:right-24"><img src="/images/Equipe.jpg" alt="Équipe associée au projet Bilik Farm" loading="lazy" className="h-full w-full object-cover" /></div>
              <div className="absolute bottom-7 right-0 h-48 w-44 overflow-hidden rounded-editorial border-8 border-ivory shadow-lift sm:h-64 sm:w-56"><img src="/images/agriculture.jpg" alt="Parcelle agricole" loading="lazy" className="h-full w-full object-cover" /></div>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-terracotta">Réseau à structurer</p>
              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-primary sm:text-5xl">Une communication claire et crédible.</h2>
              <p className="mt-7 text-lg leading-8 text-primary/70">Le projet doit structurer son réseau technique, ses partenaires et ses pratiques avant de communiquer sur des capacités commerciales.</p>
              <p className="mt-5 leading-7 text-primary/60">Les collaborations futures seront présentées uniquement lorsqu’elles seront confirmées.</p>
              <Link href={`/${locale}/contact`} className="btn-primary btn-lg mt-9">Proposer un partenariat</Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-terracotta py-20 text-white sm:py-24">
        <div aria-hidden="true" className="cameroon-pattern absolute bottom-0 right-0 h-full w-20 opacity-20 sm:w-32" />
        <Container className="relative">
          <div className="grid items-end gap-8 lg:grid-cols-[1fr_auto]">
            <div className="max-w-3xl"><p className="text-xs font-bold uppercase tracking-[0.18em] text-white/70">Poursuivre</p><h2 className="mt-5 font-display text-4xl font-semibold leading-tight sm:text-5xl">Découvrir les filières ciblées par Bilik Farm.</h2></div>
            <Link href={`/${locale}/products`} className="btn-white btn-lg text-center">Voir le catalogue</Link>
          </div>
        </Container>
      </section>
    </>
  );
}
