import Link from 'next/link';

interface Product {
  id: string;
  name: string;
  slug: string;
  description?: string;
  price: number;
  images: string[];
  category?: { name: string };
}

export function ProductCard({ product }: { product: Product }) {
  return (
    <div className="card">
      <div className="aspect-square bg-gray-100 flex items-center justify-center">
        {product.images?.[0] ? (
          <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover" />
        ) : (
          <span className="text-gray-400 text-sm">Pas d'image</span>
        )}
      </div>
      <div className="p-4">
        {product.category && (
          <span className="text-xs text-green-600 font-semibold uppercase">{product.category.name}</span>
        )}
        <h3 className="font-bold text-gray-800 mt-1 mb-2">{product.name}</h3>
        <p className="text-green-700 font-semibold mb-3">{product.price.toLocaleString()} FCFA</p>
        <Link href={`/fr/products/${product.slug}`} className="btn-primary text-sm py-2 w-full text-center block">
          Voir le produit
        </Link>
      </div>
    </div>
  );
}
