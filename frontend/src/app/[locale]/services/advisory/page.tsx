import type { Metadata } from 'next';
import { ServicePage } from '@/components/services/ServicePage';
import { projectAxes } from '@/data/services';

export const metadata: Metadata = {
  title: `${projectAxes.advisory.title} | Bilik Farm`,
  description: projectAxes.advisory.summary,
};

export default async function AdvisoryPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return <ServicePage locale={locale} service="advisory" />;
}
