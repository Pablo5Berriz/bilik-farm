import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { projectAxes, type ServiceSlug } from '@/data/services';

interface ServicePageProps {
  locale: string;
  service: ServiceSlug;
}

export function ServicePage({ locale, service }: ServicePageProps) {
  const axis = projectAxes[service];
  const otherAxes = Object.values(projectAxes).filter((item) => item.slug !== service).slice(0, 3);

  return (
    <>
      <section className="relative overflow-hidden bg-ivory py-12 sm:py-16 lg:py-20">
        <div aria-hidden="true" className="cameroon-pattern absolute left-0 top-0 h-2 w-full opacity-70" />
        <Container>
          <nav aria-label="Fil d’Ariane" className="mb-10 flex flex-wrap items-center gap-3 text-sm text-primary/70">
            <Link href={`/${locale}`} className="rounded-sm transition hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold">Accueil</Link>
            <span aria-hidden="true">/</span>
            <span>Axes du projet</span>
            <span aria-hidden="true">/</span>
            <span aria-current="page" className="text-primary">{axis.title}</span>
          </nav>

          <div className="grid items-center gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-terracotta">{axis.eyebrow}</p>
              <h1 className="mt-5 font-display text-5xl font-semibold leading-[0.98] tracking-[-0.035em] text-primary sm:text-6xl lg:text-7xl">{axis.title}</h1>
              <p className="mt-7 max-w-xl text-lg leading-8 text-primary/70">{axis.summary}</p>
              <div className="mt-8 inline-flex rounded-full border border-primary/15 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-primary shadow-soft">Statut · {axis.status}</div>
            </div>
            <div className="relative min-h-[360px] sm:min-h-[520px]">
              <div className="absolute inset-0 overflow-hidden rounded-[2rem] shadow-lift sm:left-10">
                <img src={axis.image} alt={axis.imageAlt} className="h-full w-full object-cover" />
              </div>
              <div aria-hidden="true" className="cameroon-pattern absolute right-0 top-10 h-24 w-10 rounded-l opacity-70 sm:w-14" />
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-primary/10 bg-white py-20 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-terracotta">Position actuelle</p>
              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-primary">Un axe présenté avec prudence.</h2>
              <p className="mt-6 leading-7 text-primary/70">{axis.description}</p>
            </div>
            <div className="divide-y divide-primary/15 border-y border-primary/15">
              {axis.points.map((point, index) => (
                <div key={point.title} className="grid grid-cols-[3rem_1fr] gap-5 py-7 sm:grid-cols-[4rem_1fr] sm:px-5">
                  <span className="font-display text-xl text-terracotta">0{index + 1}</span>
                  <div>
                    <h3 className="font-display text-2xl font-semibold text-primary">{point.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-primary/70">{point.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-primary py-20 text-white sm:py-24">
        <Container>
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">Autres axes</p>
              <h2 className="mt-4 font-display text-4xl font-semibold">Poursuivre la découverte.</h2>
            </div>
            <Link href={`/${locale}/products`} className="rounded-sm text-sm font-semibold text-white/70 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold">Voir les filières ciblées →</Link>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {otherAxes.map((item) => (
              <Link key={item.slug} href={`/${locale}/services/${item.slug}`} className="group rounded-editorial border border-white/15 p-6 transition hover:-translate-y-1 hover:border-gold/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold">
                <p className="text-[0.68rem] font-bold uppercase tracking-[0.15em] text-gold">{item.status}</p>
                <h3 className="mt-4 font-display text-2xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/60">{item.summary}</p>
                <span className="mt-6 inline-block text-xl transition group-hover:translate-x-1" aria-hidden="true">→</span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-terracotta py-20 text-white sm:py-24">
        <div aria-hidden="true" className="cameroon-pattern absolute bottom-0 right-0 h-full w-20 opacity-20 sm:w-32" />
        <Container className="relative">
          <div className="grid items-end gap-8 lg:grid-cols-[1fr_auto]">
            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-white">Échanger sur le projet</p>
              <h2 className="mt-5 font-display text-4xl font-semibold leading-tight sm:text-5xl">Demander des informations ou proposer un partenariat.</h2>
            </div>
            <Link href={`/${locale}/contact`} className="btn-white btn-lg text-center">Nous contacter</Link>
          </div>
        </Container>
      </section>
    </>
  );
}
