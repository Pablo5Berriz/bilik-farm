import { ServicePage } from '@/components/services/ServicePage';

export default async function AnimalsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return <ServicePage locale={locale} service="animals" />;
}
