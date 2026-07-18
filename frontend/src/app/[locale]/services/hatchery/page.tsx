import { ServicePage } from '@/components/services/ServicePage';

export default async function HatcheryPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return <ServicePage locale={locale} service="hatchery" />;
}
