import Link from 'next/link';

export default function AdminHomePage() {
  const sections = [
    { href: '/dashboard', label: 'Tableau de bord', icon: '📊' },
    { href: '/products', label: 'Produits', icon: '🛒' },
    { href: '/testimonials', label: 'Témoignages', icon: '💬' },
    { href: '/blog', label: 'Blog', icon: '📝' },
    { href: '/messages', label: 'Messages', icon: '✉️' },
    { href: '/users', label: 'Utilisateurs', icon: '👥' },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Administration Bilik Farm</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl w-full">
        {sections.map((section) => (
          <Link key={section.href} href={section.href}
            className="bg-white rounded-xl shadow p-6 text-center hover:shadow-md transition-shadow">
            <div className="text-3xl mb-2">{section.icon}</div>
            <div className="font-semibold text-gray-700">{section.label}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
