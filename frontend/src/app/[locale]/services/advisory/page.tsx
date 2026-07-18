import { ServicePage } from '@/components/services/ServicePage';

export default async function AdvisoryPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return <ServicePage locale={locale} service="advisory" />;
}
