export default function AdminProductsPage() {
  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Produits</h1>
        <button className="bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800">+ Nouveau produit</button>
      </div>
      <div className="bg-white rounded-xl shadow overflow-hidden">
        <p className="text-center text-gray-500 py-12">Chargement des produits...</p>
      </div>
    </div>
  );
}
