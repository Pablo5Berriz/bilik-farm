import { Header } from '@/components/ui/Header';
import { Footer } from '@/components/ui/Footer';

export function generateStaticParams() {
  return [{ locale: 'fr' }];
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <>
      <Header locale={locale} />
      <main className="pt-20">{children}</main>
      <Footer />
    </>
  );
}
