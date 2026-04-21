export default function Footer() {
  return (
    <footer className="bg-[#F4F1EE]">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
        <div className="py-16">
          {/* Top Section: 3 columns */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_1.2fr] gap-16 mb-14">
            {/* Navigation */}
            <div>
              <h3 className="text-base font-bold text-deep mb-6">Navigation</h3>
              <div className="space-y-3">
                <a href="#impact" className="block text-sm text-text-light hover:text-deep transition-colors">Impact</a>
                <a href="#quotidien" className="block text-sm text-text-light hover:text-deep transition-colors">Au quotidien</a>
                <a href="#preuves" className="block text-sm text-text-light hover:text-deep transition-colors">Arguments CODIR</a>
                <a href="#devis" className="block text-sm text-text-light hover:text-deep transition-colors">Devis</a>
              </div>
            </div>

            {/* Pour les curieux */}
            <div>
              <h3 className="text-base font-bold text-deep mb-6">Pour les curieux</h3>
              <div className="space-y-3">
                <a href="https://eve-and-co.com/pages/manifeste" target="_blank" rel="noopener noreferrer" className="block text-sm text-text-light hover:text-deep transition-colors">Manifeste</a>
                <a href="https://eve-and-co.com/pages/cgv" target="_blank" rel="noopener noreferrer" className="block text-sm text-text-light hover:text-deep transition-colors">CGV / Mentions légales</a>
                <a href="https://eve-and-co.com/pages/presse" target="_blank" rel="noopener noreferrer" className="block text-sm text-text-light hover:text-deep transition-colors">Presse / Kit média</a>
                <a href="https://eve-and-co.com/pages/nos-actions" target="_blank" rel="noopener noreferrer" className="block text-sm text-text-light hover:text-deep transition-colors">Nos actions</a>
                <a href="mailto:mathys@eve-and-co.com" className="block text-sm text-text-light hover:text-deep transition-colors">Nous contacter</a>
              </div>
            </div>

            {/* Entreprise */}
            <div>
              <h3 className="text-xs font-semibold text-deep uppercase tracking-wider mb-5">Entreprise</h3>
              <div className="flex items-start gap-4 mb-8">
                <img src="/images/logo-bcorp.png" alt="B Corp Certifiée" className="w-16 h-auto flex-shrink-0" />
                <p className="text-sm text-deep leading-relaxed">
                  EVE AND CO est <a href="https://eve-and-co.com/pages/nos-actions" target="_blank" rel="noopener noreferrer" className="underline hover:text-terra transition-colors">certifiée B Corp</a>.<br />
                  Nous respectons des normes sociales et environnementales élevées.
                </p>
              </div>

              {/* Separator */}
              <div className="border-t border-warm-gray mb-6" />

              {/* Social Icons */}
              <div className="flex items-center gap-5">
                {/* Facebook */}
                <a href="https://www.facebook.com/EveandcoFrance" target="_blank" rel="noopener noreferrer" className="text-deep hover:text-terra transition-colors">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
                </a>
                {/* Instagram */}
                <a href="https://www.instagram.com/EveandcoFrance/" target="_blank" rel="noopener noreferrer" className="text-deep hover:text-terra transition-colors">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                </a>
                {/* X (Twitter) */}
                <a href="https://twitter.com/EveandcoFrance" target="_blank" rel="noopener noreferrer" className="text-deep hover:text-terra transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
                {/* Pinterest */}
                <a href="https://www.pinterest.fr/eveandcoFrance/" target="_blank" rel="noopener noreferrer" className="text-deep hover:text-terra transition-colors">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/></svg>
                </a>
                {/* TikTok */}
                <a href="https://www.tiktok.com/@eveandcofr" target="_blank" rel="noopener noreferrer" className="text-deep hover:text-terra transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.3a6.34 6.34 0 0010.86 4.48V13.4a8.27 8.27 0 005.58 2.17V12.1a4.83 4.83 0 01-3.77-1.64V6.69h3.77z"/></svg>
                </a>
                {/* YouTube */}
                <a href="https://www.youtube.com/@eveandcofrance" target="_blank" rel="noopener noreferrer" className="text-deep hover:text-terra transition-colors">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end pt-8">
            {/* Left: Payment + Contact */}
            <div>
              {/* Payment Icons */}
              <div className="flex items-center gap-1.5 mb-4">
                {/* AMEX */}
                <svg width="38" height="24" viewBox="0 0 38 24" fill="none" className="rounded">
                  <rect width="38" height="24" rx="3" fill="#016FD0"/>
                  <text x="19" y="15" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold" fontFamily="Arial">AMEX</text>
                </svg>
                {/* Apple Pay */}
                <svg width="38" height="24" viewBox="0 0 38 24" fill="none" className="rounded">
                  <rect width="38" height="24" rx="3" fill="#000"/>
                  <text x="10" y="15" fill="white" fontSize="7.5" fontWeight="600" fontFamily="Arial">&#xF8FF; Pay</text>
                  <path d="M10.5 7.3c.4-.5.7-1.2.6-1.9-.6 0-1.3.4-1.8.9-.4.5-.7 1.2-.6 1.9.6 0 1.3-.4 1.8-.9z" fill="white"/>
                  <path d="M11.1 8.3c-1 0-1.8.5-2.3.5s-1.2-.5-2-.5c-1 0-2 .6-2.5 1.5-1.1 1.9-.3 4.6.8 6.2.5.7 1.1 1.6 1.9 1.5.8 0 1.1-.5 2-.5s1.2.5 2 .5 1.4-.8 1.9-1.5c.6-.9.8-1.7.8-1.7-1.7-.7-2-3.3-.3-4.3-.6-.8-1.5-1.2-2.3-1.2z" fill="white" transform="translate(12, 1) scale(0.55)"/>
                  <text x="22" y="15.5" fill="white" fontSize="8" fontWeight="500" fontFamily="Arial">Pay</text>
                </svg>
                {/* Google Pay */}
                <svg width="38" height="24" viewBox="0 0 38 24" fill="none" className="rounded border border-gray-200">
                  <rect width="38" height="24" rx="3" fill="#fff"/>
                  <text x="8" y="15.5" fill="#5F6368" fontSize="8" fontWeight="500" fontFamily="Arial">G Pay</text>
                  <circle cx="10" cy="12" r="3.5" fill="none" stroke="#4285F4" strokeWidth="1.2"/>
                  <path d="M10 8.5v3.5h3.5" fill="none" stroke="#EA4335" strokeWidth="1"/>
                </svg>
                {/* Mastercard */}
                <svg width="38" height="24" viewBox="0 0 38 24" fill="none" className="rounded border border-gray-200">
                  <rect width="38" height="24" rx="3" fill="#fff"/>
                  <circle cx="15" cy="12" r="7" fill="#EB001B"/>
                  <circle cx="23" cy="12" r="7" fill="#F79E1B"/>
                  <path d="M19 6.5a7 7 0 000 11 7 7 0 000-11z" fill="#FF5F00"/>
                </svg>
                {/* Bancontact */}
                <svg width="38" height="24" viewBox="0 0 38 24" fill="none" className="rounded">
                  <rect width="38" height="24" rx="3" fill="#005B82"/>
                  <text x="19" y="14.5" textAnchor="middle" fill="white" fontSize="5.5" fontWeight="600" fontFamily="Arial">bancontact</text>
                </svg>
                {/* PayPal */}
                <svg width="38" height="24" viewBox="0 0 38 24" fill="none" className="rounded border border-gray-200">
                  <rect width="38" height="24" rx="3" fill="#fff"/>
                  <text x="7" y="15.5" fill="#003087" fontSize="8" fontWeight="bold" fontFamily="Arial">Pay</text>
                  <text x="22" y="15.5" fill="#009CDE" fontSize="8" fontWeight="bold" fontFamily="Arial">Pal</text>
                </svg>
                {/* VISA */}
                <svg width="38" height="24" viewBox="0 0 38 24" fill="none" className="rounded border border-gray-200">
                  <rect width="38" height="24" rx="3" fill="#fff"/>
                  <text x="19" y="15.5" textAnchor="middle" fill="#1A1F71" fontSize="10" fontWeight="bold" fontFamily="Arial" fontStyle="italic">VISA</text>
                </svg>
              </div>
              <p className="text-sm text-deep">24h/24 7j/7 : mathys@eve-and-co.com</p>
            </div>

            {/* Center: Big Logo */}
            <div className="text-center">
              <img
                src="/images/logo-black.png"
                alt="EVE AND CO"
                className="h-12 md:h-16 w-auto mx-auto opacity-[0.08]"
              />
            </div>

            {/* Right: Copyright */}
            <div className="text-right">
              <p className="text-sm text-deep">🇫🇷 Marque française – Tous droits réservés</p>
              <p className="text-sm text-deep">© 2026, EVE AND CO.</p>
            </div>
          </div>

          {/* Language */}
          <div className="flex justify-end mt-6">
            <span className="text-xs text-text-light">🌐 FR – Français</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
