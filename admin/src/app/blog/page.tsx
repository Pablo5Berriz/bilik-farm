export default function AdminBlogPage() {
  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Blog</h1>
        <button className="bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800">+ Nouvel article</button>
      </div>
      <div className="bg-white rounded-xl shadow overflow-hidden">
        <p className="text-center text-gray-500 py-12">Chargement des articles...</p>
      </div>
    </div>
  );
}
