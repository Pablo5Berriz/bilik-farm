import type { Metadata } from 'next';
import { ServicePage } from '@/components/services/ServicePage';
import { projectAxes } from '@/data/services';

export const metadata: Metadata = {
  title: `${projectAxes.hatchery.title} | Bilik Farm`,
  description: projectAxes.hatchery.summary,
};

export default async function HatcheryPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return <ServicePage locale={locale} service="hatchery" />;
}
