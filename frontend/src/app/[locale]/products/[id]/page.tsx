import { Container } from '@/components/ui/Container';
import Link from 'next/link';

const productIds = [
  'oeufs-de-table',
  'poules-pondeuses',
  'poules-du-village',
  'carpes-fraiches',
  'tilapias-frais',
  'clarias-frais',
  'lapins',
  'viande-de-porc',
  'mais-frais',
  'avocats',
  'safou',
  'papayes',
  'manioc',
  'bananes-douces',
  'plantains',
];

export function generateStaticParams() {
  return productIds.map((id) => ({ id }));
}

function formatTitle(slug: string) {
  return slug
    .split('-')
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}

export default async function ProductDetailPage({ params }: { params: Promise<{ locale: string; id: string }> }) {
  const { locale, id } = await params;
  const title = formatTitle(id);

  return (
    <Container className="py-12">
      <div className="grid md:grid-cols-2 gap-12">
        <div className="aspect-square bg-gray-100 rounded-xl flex items-center justify-center">
          <span className="text-gray-400">Image du produit</span>
        </div>
        <div>
          <h1 className="text-3xl font-bold text-green-900 mb-4">{title}</h1>
          <p className="text-2xl font-semibold text-green-700 mb-6">Informations sur demande</p>
          <p className="text-gray-600 mb-8">
            Cette page présente une filière ciblée par Bilik Farm. Les informations commerciales et la disponibilité seront communiquées uniquement après validation.
          </p>
          <Link href={`/${locale}/contact`} className="btn-primary w-full text-center block">
            Demander des informations
          </Link>
        </div>
      </div>
    </Container>
  );
}
