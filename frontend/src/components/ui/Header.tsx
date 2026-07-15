'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

interface HeaderProps {
  locale: string;
}

export function Header({ locale }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const navLinks = [
    { href: `/${locale}`, label: 'Accueil' },
    { href: `/${locale}/about`, label: 'À propos' },
    { href: `/${locale}/products`, label: 'Filières ciblées' },
  ];

  const services = [
    { href: `/${locale}/services/feedmill`, icon: 'fas fa-box-open', label: 'Provenderie prévue' },
    { href: `/${locale}/services/animals`, icon: 'fas fa-paw', label: "Élevage en développement" },
    { href: `/${locale}/services/fresh-produce`, icon: 'fas fa-seedling', label: 'Cultures ciblées' },
    { href: `/${locale}/services/hatchery`, icon: 'fas fa-egg', label: 'Écloserie prévue' },
    { href: `/${locale}/services/advisory`, icon: 'fas fa-lightbulb', label: 'Accompagnement futur' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-white/95 backdrop-blur py-3'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">

          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center gap-2 shrink-0">
            <img src="/images/Logo.png" alt="Bilik Farm" className="h-10 w-auto" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
            <span className="text-xl font-bold text-green-700">Bilik Farm</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}
                className="px-4 py-2 text-gray-600 font-medium hover:text-green-700 hover:bg-green-50 rounded-lg transition-colors">
                {link.label}
              </Link>
            ))}

            {/* Services dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center gap-1 px-4 py-2 text-gray-600 font-medium hover:text-green-700 hover:bg-green-50 rounded-lg transition-colors">
                Axes du projet
                <i className={`fas fa-chevron-down text-xs transition-transform ${servicesOpen ? 'rotate-180' : ''}`}></i>
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50">
                  {services.map((s) => (
                    <Link key={s.href} href={s.href}
                      onClick={() => setServicesOpen(false)}
                      className="flex items-center gap-3 px-4 py-2.5 text-gray-600 hover:text-green-700 hover:bg-green-50 transition-colors">
                      <i className={`${s.icon} w-4 text-green-500`}></i>
                      {s.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href={`/${locale}/contact`}
              className="px-4 py-2 text-gray-600 font-medium hover:text-green-700 hover:bg-green-50 rounded-lg transition-colors">
              Contactez-nous
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu">
            <span className={`block w-6 h-0.5 bg-gray-700 transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-gray-700 transition-all ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-gray-700 transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="lg:hidden border-t border-gray-100 py-4">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block px-2 py-3 text-gray-600 font-medium hover:text-green-700 border-b border-gray-50">
                {link.label}
              </Link>
            ))}
            <div className="px-2 py-3 border-b border-gray-50">
              <p className="font-medium text-gray-700 mb-2">Axes du projet</p>
              {services.map((s) => (
                <Link key={s.href} href={s.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-2 py-2 pl-4 text-sm text-gray-500 hover:text-green-700">
                  <i className={`${s.icon} w-4 text-green-500`}></i>
                  {s.label}
                </Link>
              ))}
            </div>
            <Link href={`/${locale}/contact`}
              onClick={() => setMenuOpen(false)}
              className="block px-2 py-3 text-gray-600 font-medium hover:text-green-700">
              Contactez-nous
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
