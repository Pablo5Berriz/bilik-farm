export default function DashboardPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Tableau de bord</h1>
      <div className="grid md:grid-cols-4 gap-6">
        {['Produits', 'Commandes', 'Messages', 'Utilisateurs'].map((label) => (
          <div key={label} className="bg-white rounded-xl shadow p-6">
            <p className="text-gray-500 text-sm">{label}</p>
            <p className="text-3xl font-bold text-green-700 mt-1">—</p>
          </div>
        ))}
      </div>
    </div>
  );
}
