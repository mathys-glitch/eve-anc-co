export default function Footer() {
  return (
    <footer className="bg-white border-t border-warm-gray">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        {/* Main Footer Content */}
        <div className="py-24">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
            {/* Navigation */}
            <div>
              <p className="text-xs font-bold text-terra uppercase tracking-widest mb-8">Navigation</p>
              <div className="space-y-4">
                <a href="#produits" className="block text-sm text-text-light hover:text-terra transition-colors">Produits</a>
                <a href="#impact" className="block text-sm text-text-light hover:text-terra transition-colors">Impact mesurable</a>
                <a href="#quotidien" className="block text-sm text-text-light hover:text-terra transition-colors">Au quotidien</a>
                <a href="#preuves" className="block text-sm text-text-light hover:text-terra transition-colors">Arguments CODIR</a>
                <a href="#devis" className="block text-sm text-text-light hover:text-terra transition-colors">Demander un devis</a>
              </div>
            </div>

            {/* Pour les curieux */}
            <div>
              <p className="text-xs font-bold text-terra uppercase tracking-widest mb-8">Pour les curieux</p>
              <div className="space-y-4">
                <a href="#" className="block text-sm text-text-light hover:text-terra transition-colors">À propos d'EVE AND CO</a>
                <a href="#" className="block text-sm text-text-light hover:text-terra transition-colors">Notre engagement RSE</a>
                <a href="#" className="block text-sm text-text-light hover:text-terra transition-colors">Certifications & Audits</a>
                <a href="#" className="block text-sm text-text-light hover:text-terra transition-colors">Presse & Média</a>
                <a href="#" className="block text-sm text-text-light hover:text-terra transition-colors">Contact</a>
              </div>
            </div>

            {/* Entreprise */}
            <div>
              <p className="text-xs font-bold text-terra uppercase tracking-widest mb-8">Entreprise</p>
              <div className="bg-warm-gray/20 rounded-2xl p-8 space-y-6">
                <img src="/images/bcrop-logo.webp" alt="B Corp Certified" className="w-24 h-24 mx-auto" />
                <div className="text-center">
                  <p className="text-sm font-bold text-deep mb-1">Certifiée B Corp</p>
                  <p className="text-xs text-text-light mb-4">Audit externe annuel</p>
                  <p className="text-xs text-text-light leading-relaxed">
                    EVE AND CO respecte des normes sociales et environnementales élevées, vérifiées par audit indépendant chaque année.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact & Socials */}
            <div>
              <p className="text-xs font-bold text-terra uppercase tracking-widest mb-8">Nous rejoindre</p>
              <div className="space-y-6">
                <div>
                  <p className="text-xs text-text-light mb-2">Email</p>
                  <a href="mailto:hello@eveandco.fr" className="text-sm font-semibold text-deep hover:text-terra transition-colors">hello@eveandco.fr</a>
                </div>
                <div>
                  <p className="text-xs text-text-light mb-3">Réseaux</p>
                  <div className="flex gap-4">
                    <a href="#" className="text-text-light hover:text-terra transition-colors">
                      <span className="text-lg">f</span>
                    </a>
                    <a href="#" className="text-text-light hover:text-terra transition-colors">
                      <span className="text-lg">@</span>
                    </a>
                    <a href="#" className="text-text-light hover:text-terra transition-colors">
                      <span className="text-lg">in</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Logo & Bottom */}
          <div className="border-t border-warm-gray pt-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div>
                <p className="text-2xl font-bold text-deep">EVE AND CO</p>
                <p className="text-xs text-text-light mt-2">Marque N°1 en France<br/>Certifiée B Corp 🇫🇷</p>
              </div>

              <div className="text-center">
                <p className="text-xs text-text-light mb-4">Moyens de contact</p>
                <p className="text-sm font-semibold text-deep">24h/24 7j/7 • hello@eveandco.fr</p>
              </div>

              <div className="text-right">
                <p className="text-xs text-text-light mb-2">Marque française</p>
                <p className="text-xs font-bold text-terra">© 2026 EVE AND CO<br/>Tous droits réservés</p>
              </div>
            </div>

            {/* Legal Links */}
            <div className="mt-8 pt-8 border-t border-warm-gray/50">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-text-light">
                <div className="flex gap-6">
                  <a href="#" className="hover:text-terra transition-colors">Mentions légales</a>
                  <a href="#" className="hover:text-terra transition-colors">Conditions générales</a>
                  <a href="#" className="hover:text-terra transition-colors">Politique de confidentialité</a>
                </div>
                <p>Marque française • Tous droits réservés</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
