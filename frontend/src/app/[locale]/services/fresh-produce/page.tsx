import type { Metadata } from 'next';
import { ServicePage } from '@/components/services/ServicePage';
import { projectAxes } from '@/data/services';

export const metadata: Metadata = {
  title: `${projectAxes['fresh-produce'].title} | Bilik Farm`,
  description: projectAxes['fresh-produce'].summary,
};

export default async function FreshProducePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return <ServicePage locale={locale} service="fresh-produce" />;
}
