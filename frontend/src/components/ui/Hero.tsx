import Link from 'next/link';

interface HeroProps {
  locale: string;
}

export function Hero({ locale }: HeroProps) {
  return (
    <section className="relative bg-gradient-to-br from-green-800 to-green-600 text-white py-24 md:py-36">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Bilik Farm
          <span className="block text-green-300 text-2xl md:text-3xl font-normal mt-2">
            L'excellence agricole à votre service
          </span>
        </h1>
        <p className="text-lg md:text-xl text-green-100 max-w-2xl mx-auto mb-10">
          Producteur de volailles, d'aliments et de produits frais de qualité supérieure.
          Nous cultivons la nature pour nourrir votre avenir.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href={`/${locale}/products`} className="btn-primary bg-white text-green-800 hover:bg-green-50">
            Nos Produits
          </Link>
          <Link href={`/${locale}/contact`} className="btn-secondary border-white text-white hover:bg-white hover:text-green-800">
            Nous contacter
          </Link>
        </div>
      </div>
    </section>
  );
}
