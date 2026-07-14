import Link from 'next/link';

interface Service {
  title: string;
  description: string;
  icon: string;
  href: string;
}

export function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="card p-6 text-center">
      <div className="text-5xl mb-4">{service.icon}</div>
      <h3 className="text-xl font-bold text-green-900 mb-3">{service.title}</h3>
      <p className="text-gray-600 mb-4">{service.description}</p>
      <Link href={service.href} className="text-green-700 font-semibold hover:underline">
        En savoir plus &rarr;
      </Link>
    </div>
  );
}
