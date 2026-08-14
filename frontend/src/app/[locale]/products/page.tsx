import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { categorySections, getProductsByCategory } from '@/data/products';

export const metadata = {
  title: 'Filières ciblées — Bilik Farm',
  description: 'Découvrez les filières agricoles ciblées par Bilik Farm dans le cadre de son développement progressif.',
};

export default async function ProductsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  return (
    <>
      <section className="relative overflow-hidden bg-primary py-16 text-white sm:py-20 lg:py-24">
        <div aria-hidden="true" className="cameroon-pattern absolute inset-y-0 right-0 w-16 opacity-25 sm:w-28" />
        <Container className="relative">
          <nav aria-label="Fil d’Ariane" className="mb-10 flex items-center gap-3 text-sm text-white/55">
            <Link href={`/${locale}`} className="rounded-sm transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold">Accueil</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page" className="text-white">Filières ciblées</span>
          </nav>
          <div className="grid items-end gap-10 lg:grid-cols-[1fr_0.65fr]">
            <div className="max-w-4xl">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">Catalogue éditorial</p>
              <h1 className="mt-5 font-display text-5xl font-semibold leading-[0.98] tracking-[-0.035em] sm:text-6xl lg:text-7xl">Les filières au cœur du projet.</h1>
            </div>
            <p className="max-w-xl text-base leading-7 text-white/65 lg:pb-2">
              Une présentation des activités ciblées ou envisagées dans le développement progressif de Bilik Farm. Leur disponibilité commerciale n’est pas confirmée.
            </p>
          </div>
        </Container>
      </section>

      <nav aria-label="Catégories du catalogue" className="sticky top-20 z-30 border-b border-primary/10 bg-ivory/95 backdrop-blur-xl">
        <Container>
          <div className="flex gap-2 overflow-x-auto py-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {categorySections.map((section) => (
              <a key={section.id} href={`#${section.id}`} className="inline-flex min-h-11 shrink-0 items-center rounded-full border border-primary/15 px-5 py-2.5 text-sm font-semibold text-primary transition hover:border-terracotta hover:bg-terracotta hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2">
                {section.category}
              </a>
            ))}
          </div>
        </Container>
      </nav>

      {categorySections.map((section, sectionIndex) => {
        const categoryProducts = getProductsByCategory(section.category);

        return (
          <section key={section.id} id={section.id} className={`scroll-mt-40 py-20 sm:py-24 lg:py-28 ${sectionIndex % 2 === 0 ? 'bg-ivory' : 'bg-white'}`}>
            <Container>
              <div className="grid gap-10 lg:grid-cols-[0.42fr_1fr] lg:gap-16">
                <header className="lg:sticky lg:top-44 lg:self-start">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-terracotta">{section.category}</p>
                  <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-primary sm:text-5xl">{section.title}</h2>
                  <p className="mt-5 max-w-md text-sm leading-7 text-primary/70">{section.introduction}</p>
                  <p className="mt-7 border-t border-primary/15 pt-5 text-xs font-bold uppercase tracking-[0.16em] text-primary/70">
                    {categoryProducts.length} filière{categoryProducts.length > 1 ? 's' : ''} présentée{categoryProducts.length > 1 ? 's' : ''}
                  </p>
                </header>

                <div className={`grid gap-x-5 gap-y-10 sm:grid-cols-2 ${categoryProducts.length > 4 ? 'xl:grid-cols-3' : ''}`}>
                  {categoryProducts.map((product, productIndex) => (
                    <Link key={product.slug} href={`/${locale}/products/${product.slug}`} className={`group rounded-editorial focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-4 ${productIndex === 0 && categoryProducts.length < 4 ? 'sm:col-span-2' : ''}`}>
                      <article>
                        <div className={`relative overflow-hidden rounded-editorial bg-primary/5 shadow-soft ${productIndex === 0 && categoryProducts.length < 4 ? 'aspect-[16/9]' : 'aspect-[4/3]'}`}>
                          <img src={product.image} alt={product.title} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                          <span className="absolute left-4 top-4 rounded-full bg-ivory/95 px-3 py-1.5 text-[0.65rem] font-bold uppercase tracking-[0.14em] text-primary shadow-soft">{product.status}</span>
                        </div>
                        <div className="mt-5 grid grid-cols-[1fr_auto] gap-4">
                          <div>
                            <p className="text-[0.68rem] font-bold uppercase tracking-[0.15em] text-terracotta">{product.category}</p>
                            <h3 className="mt-2 font-display text-2xl font-semibold text-primary sm:text-3xl">{product.title}</h3>
                            <p className="mt-3 max-w-lg text-sm leading-6 text-primary/70">{product.description}</p>
                          </div>
                          <span aria-hidden="true" className="flex h-11 w-11 items-center justify-center rounded-full border border-primary/20 text-xl text-primary transition group-hover:bg-primary group-hover:text-white">↗</span>
                        </div>
                      </article>
                    </Link>
                  ))}
                </div>
              </div>
            </Container>
          </section>
        );
      })}

      <section className="relative overflow-hidden bg-terracotta py-20 text-white sm:py-24">
        <div aria-hidden="true" className="cameroon-pattern absolute bottom-0 right-0 h-full w-20 opacity-20 sm:w-32" />
        <Container className="relative">
          <div className="grid items-end gap-10 lg:grid-cols-[1fr_auto]">
            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-white">Informations</p>
              <h2 className="mt-5 font-display text-4xl font-semibold leading-tight sm:text-5xl">Une question sur les filières ciblées ?</h2>
              <p className="mt-5 max-w-2xl leading-7 text-white">La page contact permet de demander des informations sur le projet ou de proposer un partenariat.</p>
            </div>
            <Link href={`/${locale}/contact`} className="btn-white btn-lg text-center">Nous contacter</Link>
          </div>
        </Container>
      </section>
    </>
  );
}
