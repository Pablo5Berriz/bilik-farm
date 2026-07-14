import { Header } from '@/components/ui/Header';
import { Footer } from '@/components/ui/Footer';

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <>
      <Header locale={params.locale} />
      <main className="pt-20">{children}</main>
      <Footer />
    </>
  );
}
