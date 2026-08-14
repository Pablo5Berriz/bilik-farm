import type { Metadata } from 'next';
import { ServicePage } from '@/components/services/ServicePage';
import { projectAxes } from '@/data/services';

export const metadata: Metadata = {
  title: `${projectAxes.feedmill.title} | Bilik Farm`,
  description: projectAxes.feedmill.summary,
};

export default async function FeedmillPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return <ServicePage locale={locale} service="feedmill" />;
}
