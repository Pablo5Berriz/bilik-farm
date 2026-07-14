import { Container } from '@/components/ui/Container';
import { notFound } from 'next/navigation';

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
  if (!product) return notFound();

  return (
    <Container className="py-12">
      <div className="grid md:grid-cols-2 gap-12">
        <div className="aspect-square bg-gray-100 rounded-xl flex items-center justify-center">
          <span className="text-gray-400">Image du produit</span>
        </div>
        <div>
          <h1 className="text-3xl font-bold text-green-900 mb-4">{product.name}</h1>
          <p className="text-2xl font-semibold text-green-700 mb-6">{product.price.toLocaleString()} FCFA</p>
          <p className="text-gray-600 mb-8">{product.description}</p>
          <button className="btn-primary w-full">Commander maintenant</button>
        </div>
      </div>
    </Container>
  );
}
