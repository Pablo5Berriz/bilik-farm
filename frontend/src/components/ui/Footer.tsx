import Link from 'next/link';
import { Container } from './Container';

interface FooterProps {
  locale?: string;
}

export function Footer({ locale = 'fr' }: FooterProps) {
  const navigation = [
    { href: `/${locale}`, label: 'Accueil' },
    { href: `/${locale}/about`, label: 'À propos' },
    { href: `/${locale}/products`, label: 'Filières ciblées' },
    { href: `/${locale}/contact`, label: 'Contact' },
  ];
  const axes = [
    { href: `/${locale}/services/feedmill`, label: 'Provenderie prévue' },
    { href: `/${locale}/services/animals`, label: 'Élevage en développement' },
    { href: `/${locale}/services/fresh-produce`, label: 'Cultures ciblées' },
    { href: `/${locale}/services/hatchery`, label: 'Écloserie prévue' },
    { href: `/${locale}/services/advisory`, label: 'Accompagnement futur' },
  ];
  const linkStyle = 'rounded-sm text-sm text-white/70 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-4 focus-visible:ring-offset-primary';

  return (
    <footer className="relative overflow-hidden bg-primary text-white">
      <div aria-hidden="true" className="cameroon-pattern absolute inset-x-0 top-0 h-2 opacity-80" />
      <Container className="py-14 sm:py-16 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.35fr_0.75fr_1fr_0.9fr]">
          <div className="max-w-sm">
            <Link href={`/${locale}`} className="inline-flex items-center gap-3 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-4 focus-visible:ring-offset-primary">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-ivory">
                <img src="/images/Logo.png" alt="" className="h-10 w-10 object-contain" />
              </span>
              <span className="font-display text-2xl font-semibold">Bilik Farm</span>
            </Link>
            <p className="mt-5 text-sm leading-7 text-white/70">
              Bilik Farm développe progressivement un projet agricole intégré dans la région du Centre au Cameroun.
            </p>
          </div>
          <div>
            <h2 className="font-display text-lg font-semibold">Navigation</h2>
            <ul className="mt-5 space-y-3">
              {navigation.map((link) => <li key={link.href}><Link href={link.href} className={linkStyle}>{link.label}</Link></li>)}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-lg font-semibold">Axes du projet</h2>
            <ul className="mt-5 space-y-3">
              {axes.map((link) => <li key={link.href}><Link href={link.href} className={linkStyle}>{link.label}</Link></li>)}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-lg font-semibold">Ancrage</h2>
            <p className="mt-5 text-sm leading-7 text-white/70">Région du Centre<br />Cameroun</p>
            <a href="mailto:Bilik-farm@gmail.com" className={`mt-5 block ${linkStyle}`}>
              Bilik-farm@gmail.com
            </a>
            <Link href={`/${locale}/contact`} className={`mt-5 inline-flex min-h-11 items-center rounded-full border border-white/30 px-5 py-2.5 font-semibold text-white hover:border-gold hover:text-gold ${linkStyle}`}>
              Page contact
            </Link>
          </div>
        </div>
      </Container>
      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-2 py-5 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Bilik Farm. Tous droits réservés.</p>
          <p>Projet agricole intégré en développement.</p>
        </Container>
      </div>
    </footer>
  );
}
