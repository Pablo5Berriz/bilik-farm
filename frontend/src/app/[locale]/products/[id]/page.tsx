import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Container } from '@/components/ui/Container';
import { getProductBySlug, products } from '@/data/products';

export function generateStaticParams() {
  return products.map((product) => ({ id: product.slug }));
}

export default async function ProductDetailPage({ params }: { params: Promise<{ locale: string; id: string }> }) {
  const { locale, id } = await params;
  const product = getProductBySlug(id);

  if (!product) {
    notFound();
  }

  const currentIndex = products.findIndex((item) => item.slug === product.slug);
  const nextProduct = products[(currentIndex + 1) % products.length];

  return (
    <>
      <section className="relative overflow-hidden bg-ivory py-12 sm:py-16 lg:py-20">
        <div aria-hidden="true" className="cameroon-pattern absolute left-0 top-0 h-2 w-full opacity-70" />
        <Container>
          <nav aria-label="Fil d’Ariane" className="mb-10 flex flex-wrap items-center gap-3 text-sm text-primary/50">
            <Link href={`/${locale}`} className="rounded-sm transition hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold">Accueil</Link>
            <span aria-hidden="true">/</span>
            <Link href={`/${locale}/products`} className="rounded-sm transition hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold">Filières ciblées</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page" className="text-primary">{product.title}</span>
          </nav>

          <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20">
            <div className="relative min-h-[370px] sm:min-h-[560px] lg:min-h-[650px]">
              <div className="absolute inset-x-0 inset-y-0 overflow-hidden rounded-[2rem] bg-primary/5 shadow-lift sm:right-12">
                <img src={product.image} alt={product.title} className="h-full w-full object-cover" />
              </div>
              <div className="absolute bottom-5 left-5 rounded-full bg-ivory/95 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-primary shadow-soft sm:bottom-8 sm:left-8">
                {product.status}
              </div>
              <div aria-hidden="true" className="cameroon-pattern absolute right-0 top-12 h-24 w-10 rounded-l opacity-70 sm:w-14" />
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-terracotta">{product.category}</p>
              <h1 className="mt-5 font-display text-5xl font-semibold leading-[0.98] tracking-[-0.035em] text-primary sm:text-6xl lg:text-7xl">{product.title}</h1>
              <p className="mt-8 text-lg leading-8 text-primary/70">{product.description}</p>

              <div className="mt-9 border-y border-primary/15 py-7">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-terracotta">À retenir</p>
                <p className="mt-3 leading-7 text-primary/65">Cette fiche présente une filière du projet Bilik Farm. Aucune disponibilité commerciale n’est confirmée à ce stade.</p>
              </div>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link href={`/${locale}/contact`} className="btn-primary btn-lg text-center">Demander des informations</Link>
                <Link href={`/${locale}/products`} className="btn-outline-green btn-lg text-center">Retour au catalogue</Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-primary/10 bg-white py-16 sm:py-20">
        <Container>
          <div className="grid gap-10 md:grid-cols-3">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-terracotta">Catégorie</p>
              <p className="mt-3 font-display text-2xl font-semibold text-primary">{product.category}</p>
            </div>
            <div className="border-t border-primary/10 pt-8 md:border-l md:border-t-0 md:pl-10 md:pt-0">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-terracotta">Statut</p>
              <p className="mt-3 font-display text-2xl font-semibold text-primary">{product.status}</p>
            </div>
            <div className="border-t border-primary/10 pt-8 md:border-l md:border-t-0 md:pl-10 md:pt-0">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-terracotta">Disponibilité</p>
              <p className="mt-3 font-display text-2xl font-semibold text-primary">Non confirmée</p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-primary py-16 text-white sm:py-20">
        <Container>
          <div className="grid items-center gap-8 sm:grid-cols-[1fr_auto]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-gold">Poursuivre le catalogue</p>
              <h2 className="mt-4 font-display text-3xl font-semibold sm:text-4xl">Découvrir aussi : {nextProduct.title}</h2>
            </div>
            <Link href={`/${locale}/products/${nextProduct.slug}`} className="btn-white btn-lg text-center">Voir la fiche suivante</Link>
          </div>
        </Container>
      </section>
    </>
  );
}
