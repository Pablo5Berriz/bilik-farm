import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { ContactForm } from '@/components/forms/ContactForm';

export const metadata: Metadata = {
  title: 'Contact — Bilik Farm',
  description: 'Écrire à Bilik Farm pour demander des informations sur le projet ou proposer un partenariat.',
};

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return (
    <>
      <section className="relative overflow-hidden bg-primary py-16 text-white sm:py-20 lg:py-24">
        <div aria-hidden="true" className="cameroon-pattern absolute inset-y-0 right-0 w-16 opacity-25 sm:w-28" />
        <Container className="relative">
          <nav aria-label="Fil d’Ariane" className="mb-10 flex items-center gap-3 text-sm text-white/55"><Link href={`/${locale}`} className="rounded-sm hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold">Accueil</Link><span aria-hidden="true">/</span><span aria-current="page" className="text-white">Contact</span></nav>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">Nous contacter</p>
          <h1 className="mt-5 max-w-4xl font-display text-5xl font-semibold leading-[0.98] tracking-[-0.035em] sm:text-6xl lg:text-7xl">Échanger autour du projet Bilik Farm.</h1>
        </Container>
      </section>
      <section className="py-20 sm:py-24 lg:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-terracotta">Informations</p>
              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-primary">Un point d’entrée informatif.</h2>
              <p className="mt-6 leading-7 text-primary/70">Utilisez le formulaire ou écrivez directement à l’adresse ci-dessous. Chaque message est transmis par email à Bilik Farm.</p>
              <div className="mt-8 border-y border-primary/15 py-6">
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-terracotta">Email</p>
                <a href="mailto:Bilik-farm@gmail.com" className="mt-3 block font-display text-2xl font-semibold text-primary hover:text-terracotta focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold">Bilik-farm@gmail.com</a>
              </div>
              <div className="mt-6 border-b border-primary/15 pb-6"><p className="text-xs font-bold uppercase tracking-[0.15em] text-terracotta">Localisation du projet</p><p className="mt-3 font-display text-2xl font-semibold text-primary">Région du Centre, Cameroun</p></div>
              <p className="mt-6 text-sm leading-6 text-primary/70">
                <Link href={`/${locale}/confidentialite`} className="underline underline-offset-2 hover:text-terracotta focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold">
                  Confidentialité du formulaire de contact
                </Link>
              </p>
            </div>
            <div className="rounded-[2rem] border border-primary/10 bg-white p-6 shadow-soft sm:p-10"><ContactForm locale={locale} /></div>
          </div>
        </Container>
      </section>
    </>
  );
}
