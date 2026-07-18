'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Container } from './Container';

interface HeaderProps {
  locale: string;
}

export function Header({ locale }: HeaderProps) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const closeMenus = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
        setServicesOpen(false);
      }
    };
    document.addEventListener('keydown', closeMenus);
    return () => document.removeEventListener('keydown', closeMenus);
  }, []);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesOpen(false);
      }
      if (menuOpen && mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [menuOpen]);

  const navLinks = [
    { href: `/${locale}`, label: 'Accueil', exact: true },
    { href: `/${locale}/about`, label: 'À propos' },
    { href: `/${locale}/products`, label: 'Filières ciblées' },
  ];

  const services = [
    { href: `/${locale}/services/feedmill`, label: 'Provenderie prévue' },
    { href: `/${locale}/services/animals`, label: 'Élevage en développement' },
    { href: `/${locale}/services/fresh-produce`, label: 'Cultures ciblées' },
    { href: `/${locale}/services/hatchery`, label: 'Écloserie prévue' },
    { href: `/${locale}/services/advisory`, label: 'Accompagnement futur' },
  ];

  const currentPath = pathname.replace(/\/$/, '') || '/';
  const isActive = (href: string, exact = false) => exact ? currentPath === href : currentPath.startsWith(href);
  const focusStyle = 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2';

  return (
    <header className={`fixed inset-x-0 top-0 z-50 border-b transition duration-300 ${scrolled ? 'border-primary/10 bg-ivory/95 shadow-soft backdrop-blur-xl' : 'border-transparent bg-ivory/90 backdrop-blur-md'}`}>
      <a href="#main-content" className="sr-only z-[60] rounded bg-primary px-4 py-3 text-white focus:not-sr-only focus:absolute focus:left-4 focus:top-3">
        Aller au contenu
      </a>
      <Container>
        <div className="flex h-20 items-center justify-between">
          <Link href={`/${locale}`} className={`group flex min-h-11 items-center gap-3 rounded-sm ${focusStyle}`} aria-label="Bilik Farm — Accueil">
            <img src="/images/Logo.png" alt="" className="h-11 w-11 rounded-full object-contain" />
            <span className="font-display text-xl font-semibold tracking-tight text-primary sm:text-2xl">Bilik Farm</span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Navigation principale">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} aria-current={isActive(link.href, link.exact) ? 'page' : undefined}
                className={`rounded-full px-4 py-2.5 text-sm font-semibold transition ${focusStyle} ${isActive(link.href, link.exact) ? 'bg-primary/8 text-primary' : 'text-primary/70 hover:bg-primary/5 hover:text-primary'}`}>
                {link.label}
              </Link>
            ))}
            <div className="relative" ref={dropdownRef}>
              <button type="button" onClick={() => setServicesOpen((open) => !open)} aria-expanded={servicesOpen} aria-haspopup="menu"
                className={`flex min-h-11 items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold transition ${focusStyle} ${pathname.includes('/services/') ? 'bg-primary/8 text-primary' : 'text-primary/70 hover:bg-primary/5 hover:text-primary'}`}>
                Axes du projet
                <span aria-hidden="true" className={`text-xs transition-transform ${servicesOpen ? 'rotate-180' : ''}`}>⌄</span>
              </button>
              {servicesOpen && (
                <div role="menu" className="absolute right-0 top-[calc(100%+0.75rem)] w-72 overflow-hidden rounded-editorial border border-primary/10 bg-white p-2 shadow-lift">
                  {services.map((service) => (
                    <Link role="menuitem" key={service.href} href={service.href} onClick={() => setServicesOpen(false)}
                      className={`block rounded-xl px-4 py-3 text-sm font-medium transition ${focusStyle} ${isActive(service.href) ? 'bg-primary text-white' : 'text-primary/75 hover:bg-ivory hover:text-primary'}`}>
                      {service.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link href={`/${locale}/contact`} aria-current={isActive(`/${locale}/contact`) ? 'page' : undefined}
              className={`ml-2 inline-flex min-h-11 items-center rounded-full px-5 py-2.5 text-sm font-semibold transition ${focusStyle} ${isActive(`/${locale}/contact`) ? 'bg-primary text-white' : 'bg-terracotta text-white hover:bg-[#a94730]'}`}>
              Nous contacter
            </Link>
          </nav>

          <div className="lg:hidden" ref={mobileMenuRef}>
            <button type="button" onClick={() => setMenuOpen((open) => !open)} aria-expanded={menuOpen} aria-controls="mobile-navigation"
              className={`inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-primary/20 text-primary transition hover:bg-primary hover:text-white ${focusStyle}`}>
              <span className="sr-only">{menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}</span>
              <span aria-hidden="true" className="text-xl leading-none">{menuOpen ? '×' : '☰'}</span>
            </button>
            {menuOpen && (
              <nav id="mobile-navigation" aria-label="Navigation mobile" className="absolute inset-x-0 top-full max-h-[calc(100vh-5rem)] overflow-y-auto border-t border-primary/10 bg-ivory px-5 pb-8 pt-5 shadow-lift sm:px-8">
                <div className="mx-auto max-w-[80rem] space-y-1">
                  {navLinks.map((link) => (
                    <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)} aria-current={isActive(link.href, link.exact) ? 'page' : undefined}
                      className={`block min-h-12 rounded-xl px-4 py-3 font-semibold ${focusStyle} ${isActive(link.href, link.exact) ? 'bg-primary text-white' : 'text-primary hover:bg-white'}`}>
                      {link.label}
                    </Link>
                  ))}
                  <p className="px-4 pb-1 pt-5 text-xs font-bold uppercase tracking-[0.16em] text-terracotta">Axes du projet</p>
                  {services.map((service) => (
                    <Link key={service.href} href={service.href} onClick={() => setMenuOpen(false)}
                      className={`block min-h-11 rounded-xl px-4 py-3 text-sm font-medium ${focusStyle} ${isActive(service.href) ? 'bg-primary text-white' : 'text-primary/75 hover:bg-white hover:text-primary'}`}>
                      {service.label}
                    </Link>
                  ))}
                  <Link href={`/${locale}/contact`} onClick={() => setMenuOpen(false)} className={`mt-5 flex min-h-12 items-center justify-center rounded-full bg-terracotta px-5 py-3 font-semibold text-white hover:bg-[#a94730] ${focusStyle}`}>
                    Nous contacter
                  </Link>
                </div>
              </nav>
            )}
          </div>
        </div>
      </Container>
    </header>
  );
}
