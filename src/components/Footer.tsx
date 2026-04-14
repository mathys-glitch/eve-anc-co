export default function Footer() {
  return (
    <footer className="bg-[#F4F1EE] border-t border-warm-gray">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        {/* Main Footer Content */}
        <div className="py-20">
          {/* Three Column Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-20 mb-16">
            {/* Navigation */}
            <div>
              <h3 className="text-sm font-bold text-deep uppercase tracking-widest mb-8">Navigation</h3>
              <div className="space-y-4">
                <a href="#produits" className="block text-sm text-text-light hover:text-terra transition-colors">Produits</a>
                <a href="#impact" className="block text-sm text-text-light hover:text-terra transition-colors">Impact</a>
                <a href="#quotidien" className="block text-sm text-text-light hover:text-terra transition-colors">Au quotidien</a>
                <a href="#preuves" className="block text-sm text-text-light hover:text-terra transition-colors">Arguments CODIR</a>
                <a href="#devis" className="block text-sm text-text-light hover:text-terra transition-colors">Devis</a>
              </div>
            </div>

            {/* Pour les curieux */}
            <div>
              <h3 className="text-sm font-bold text-deep uppercase tracking-widest mb-8">Pour les curieux</h3>
              <div className="space-y-4">
                <a href="https://eve-and-co.com/pages/manifeste" target="_blank" rel="noopener noreferrer" className="block text-sm text-text-light hover:text-terra transition-colors">À propos</a>
                <a href="https://eve-and-co.com/pages/nos-actions" target="_blank" rel="noopener noreferrer" className="block text-sm text-text-light hover:text-terra transition-colors">Engagement RSE</a>
                <a href="#" className="block text-sm text-text-light hover:text-terra transition-colors">Certifications & Audits</a>
                <a href="https://eve-and-co.com/pages/presse" target="_blank" rel="noopener noreferrer" className="block text-sm text-text-light hover:text-terra transition-colors">Presse & Média</a>
                <a href="mailto:mathys@eve-and-co.com" className="block text-sm text-text-light hover:text-terra transition-colors">Nous contacter</a>
              </div>
            </div>

            {/* Entreprise */}
            <div>
              <h3 className="text-sm font-bold text-deep uppercase tracking-widest mb-8">Entreprise</h3>
              <div className="flex items-start gap-4 mb-8">
                <div className="flex-shrink-0 w-20 h-20 flex items-center justify-center">
                  <img src="/images/logo-bcorp.png" alt="B Corp Certified" className="w-full h-full object-contain" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-deep mb-2">
                    EVE AND CO est <a href="#" className="underline hover:text-terra transition-colors">certifiée B Corp</a>.
                  </p>
                  <p className="text-xs text-text-light leading-relaxed">
                    Nous respectons des normes sociales et environnementales élevées.
                  </p>
                </div>
              </div>

              {/* Social Icons */}
              <div className="flex gap-4">
                <a href="https://www.facebook.com/EveandcoFrance" target="_blank" rel="noopener noreferrer" className="text-text-light hover:text-terra transition-colors text-lg">f</a>
                <a href="https://www.instagram.com/EveandcoFrance/" target="_blank" rel="noopener noreferrer" className="text-text-light hover:text-terra transition-colors text-lg">@</a>
                <a href="https://www.linkedin.com/company/eve-and-co/" target="_blank" rel="noopener noreferrer" className="text-text-light hover:text-terra transition-colors text-lg">in</a>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-warm-gray my-12"></div>

          {/* Bottom Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center mb-12">
            {/* Contact */}
            <div className="text-left">
              <p className="text-xs text-text-light mb-2">Contactez-nous</p>
              <p className="text-sm font-semibold text-deep">24h/24 7j/7 • mathys@eve-and-co.com</p>
            </div>

            {/* Logo */}
            <div className="text-center">
              <p className="text-4xl font-bold" style={{ color: '#EEE8E3' }}>EVE AND CO</p>
            </div>

            {/* Copyright */}
            <div className="text-right">
              <p className="text-xs text-text-light">🇫🇷 Marque française • Tous droits réservés</p>
              <p className="text-xs font-semibold text-deep mt-1">© 2026 EVE AND CO.</p>
            </div>
          </div>

          {/* Legal Links */}
          <div className="border-t border-warm-gray/30 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-text-light">
              <div className="flex gap-6">
                <a href="https://eve-and-co.com/pages/mentions-legales" target="_blank" rel="noopener noreferrer" className="hover:text-terra transition-colors">Mentions légales</a>
                <a href="https://eve-and-co.com/pages/cgv" target="_blank" rel="noopener noreferrer" className="hover:text-terra transition-colors">CGV / Mentions légales</a>
                <a href="#" className="hover:text-terra transition-colors">Politique de confidentialité</a>
              </div>
              <p className="text-xs text-text-light">FR – Français</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
