import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';

export const metadata: Metadata = {
  title: 'Actualités — Bilik Farm',
  description: "Aucun article officiel n'est publié à ce jour. Cette section sera activée lorsque les premiers contenus confirmés de Bilik Farm seront disponibles.",
};

export default async function BlogPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return (
    <>
      <section className="relative overflow-hidden bg-ivory py-16 sm:py-20 lg:py-24">
        <div aria-hidden="true" className="cameroon-pattern absolute left-0 top-0 h-2 w-full opacity-70" />
        <Container>
          <nav aria-label="Fil d’Ariane" className="mb-10 flex items-center gap-3 text-sm text-primary/70"><Link href={`/${locale}`} className="rounded-sm hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold">Accueil</Link><span aria-hidden="true">/</span><span aria-current="page" className="text-primary">Actualités</span></nav>
          <div className="grid gap-10 lg:grid-cols-[1fr_0.65fr] lg:items-end">
            <div><p className="text-xs font-bold uppercase tracking-[0.18em] text-terracotta">Section éditoriale</p><h1 className="mt-5 font-display text-5xl font-semibold leading-[0.98] tracking-[-0.035em] text-primary sm:text-6xl lg:text-7xl">Les actualités viendront avec les faits.</h1></div>
            <p className="text-lg leading-8 text-primary/70">Cette section sera publiée lorsque les premiers contenus officiels de Bilik Farm auront été validés.</p>
          </div>
        </Container>
      </section>
      <section className="border-y border-primary/10 bg-white py-24 sm:py-28">
        <Container>
          <div className="mx-auto max-w-3xl text-center"><p className="text-xs font-bold uppercase tracking-[0.18em] text-terracotta">En préparation</p><h2 className="mt-5 font-display text-4xl font-semibold text-primary sm:text-5xl">Aucun article officiel publié à ce jour.</h2><p className="mx-auto mt-6 max-w-xl leading-7 text-primary/70">Bilik Farm privilégie une communication progressive, fondée sur des informations confirmées.</p><Link href={`/${locale}/about`} className="btn-primary btn-lg mt-9">Découvrir le projet</Link></div>
        </Container>
      </section>
    </>
  );
}
