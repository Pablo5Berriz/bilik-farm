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
              Bilik Farm s'engage à promouvoir l'agriculture durable et l'agroécologie au cœur du Cameroun.
            </p>
            <div className="flex gap-3">
              {[
                { href: 'https://www.facebook.com/bilikfarm', icon: 'fab fa-facebook-f', label: 'Facebook' },
                { href: 'https://www.instagram.com/bilikfarm', icon: 'fab fa-instagram', label: 'Instagram' },
                { href: '#', icon: 'fab fa-youtube', label: 'YouTube' },
                { href: '#', icon: 'fab fa-whatsapp', label: 'WhatsApp' },
              ].map((s) => (
                <a key={s.label} href={s.href} aria-label={s.label}
                  className="w-9 h-9 rounded-full bg-green-800 hover:bg-green-600 flex items-center justify-center transition-colors">
                  <i className={s.icon}></i>
                </a>
              ))}
            </div>
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
            <h4 className="font-semibold text-white mb-4">Nos Services</h4>
            <ul className="space-y-2.5 text-sm text-green-200">
              {[
                { href: '/fr/services/feedmill', label: 'Provenderie' },
                { href: '/fr/services/animals', label: "Vente d'animaux" },
                { href: '/fr/services/fresh-produce', label: 'Vente de vivres frais' },
                { href: '/fr/services/hatchery', label: 'Écloserie' },
                { href: '/fr/services/advisory', label: 'Conseils agricoles' },
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
                Bilik, Akono, Région Centre, Cameroun
              </li>
              <li className="flex items-center gap-2">
                <i className="fas fa-phone text-green-400 shrink-0"></i>
                +237 XXX XXX XXX
              </li>
              <li className="flex items-center gap-2">
                <i className="fas fa-envelope text-green-400 shrink-0"></i>
                <a href="mailto:info@bilikfarm.com" className="hover:text-white transition-colors">info@bilikfarm.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-green-800 py-5 text-center text-sm text-green-300">
        © 2025 Bilik Farm. Tous droits réservés.
      </div>
    </footer>
  );
}
