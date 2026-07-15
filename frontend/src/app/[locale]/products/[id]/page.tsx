import { Container } from '@/components/ui/Container';

function formatTitle(slug: string) {
  return slug
    .split('-')
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}

async function getProduct(slug: string) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/products/${slug}`,
      { next: { revalidate: 60 } } as RequestInit,
    );
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}

export default async function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = await getProduct(params.id);
  const title = product?.name ?? formatTitle(params.id);
  const description = product?.description ?? "Cette page présente une filière ciblée par Bilik Farm. Les informations commerciales, la disponibilité et les prix seront communiqués uniquement après confirmation.";

  return (
    <Container className="py-12">
      <div className="grid md:grid-cols-2 gap-12">
        <div className="aspect-square bg-gray-100 rounded-xl flex items-center justify-center">
          <span className="text-gray-400">Image du produit</span>
        </div>
        <div>
          <h1 className="text-3xl font-bold text-green-900 mb-4">{title}</h1>
          <p className="text-2xl font-semibold text-green-700 mb-6">Informations sur demande</p>
          <p className="text-gray-600 mb-8">{description}</p>
          <button className="btn-primary w-full">Demander des informations</button>
        </div>
      </div>
    </Container>
  );
}
