import Link from 'next/link';

export default function RootPage() {
  return (
    <>
      <meta httpEquiv="refresh" content="0;url=/fr" />
      <p>
        Redirection vers <Link href="/fr">la version française de Bilik Farm</Link>.
      </p>
    </>
  );
}
