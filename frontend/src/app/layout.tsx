import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import '../styles/globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'Bilik Farm — Ferme Agro-Pastorale',
  description: 'Bilik Farm — Ferme agro-pastorale de 40 hectares au cœur du Cameroun. Produits frais, animaux, aquaculture, provenderie et conseils agricoles.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          crossOrigin="anonymous"
        />
      </head>
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
