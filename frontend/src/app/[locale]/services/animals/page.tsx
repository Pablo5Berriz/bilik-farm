import type { Metadata } from 'next';
import { ServicePage } from '@/components/services/ServicePage';
import { projectAxes } from '@/data/services';

export const metadata: Metadata = {
  title: `${projectAxes.animals.title} | Bilik Farm`,
  description: projectAxes.animals.summary,
};

export default async function AnimalsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return <ServicePage locale={locale} service="animals" />;
}
