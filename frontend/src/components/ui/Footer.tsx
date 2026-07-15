import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-green-900 text-white pt-14 pb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12">

          {/* Col 1 — Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src="/images/Logo.png" alt="Bilik Farm" className="h-10 w-auto brightness-0 invert" />
              <span className="text-xl font-bold">Bilik Farm</span>
            </div>
            <p className="text-green-200 text-sm leading-relaxed mb-5">
              Bilik Farm développe progressivement un projet agricole intégré dans la région du Centre au Cameroun.
            </p>
          </div>

          {/* Col 2 — Navigation */}
          <div>
            <h4 className="font-semibold text-white mb-4">Navigation</h4>
            <ul className="space-y-2.5 text-sm text-green-200">
              {[
                { href: '/fr', label: 'Accueil' },
                { href: '/fr/about', label: 'À propos' },
                { href: '/fr/products', label: 'Nos Produits' },
                { href: '/fr/contact', label: 'Contactez-nous' },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-white transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Services */}
          <div>
            <h4 className="font-semibold text-white mb-4">Axes du projet</h4>
            <ul className="space-y-2.5 text-sm text-green-200">
              {[
                { href: '/fr/services/feedmill', label: 'Provenderie prévue' },
                { href: '/fr/services/animals', label: "Élevage en développement" },
                { href: '/fr/services/fresh-produce', label: 'Cultures ciblées' },
                { href: '/fr/services/hatchery', label: 'Écloserie prévue' },
                { href: '/fr/services/advisory', label: 'Accompagnement futur' },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-white transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-green-200">
              <li className="flex items-start gap-2">
                <i className="fas fa-map-marker-alt mt-0.5 text-green-400 shrink-0"></i>
                Région du Centre, Cameroun
              </li>
              <li>
                <Link href="/fr/contact" className="hover:text-white transition-colors">Page contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-green-800 py-5 text-center text-sm text-green-300">
        © {new Date().getFullYear()} Bilik Farm. Tous droits réservés.
      </div>
    </footer>
  );
}
