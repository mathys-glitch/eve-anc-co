export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 bg-forest rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">E</span>
              </div>
              <span className="text-lg font-bold tracking-tight">EVE & CO</span>
            </div>
            <p className="text-white/40 text-sm max-w-xs leading-relaxed">
              Culottes menstruelles certifiees B Corp pour entreprises engagees.
            </p>
          </div>

          <div className="flex gap-16">
            <div>
              <h4 className="text-xs font-bold text-white/30 uppercase tracking-wider mb-4">Contact</h4>
              <div className="space-y-2 text-sm text-white/50">
                <p>hello@eveandco.fr</p>
                <p>+33 1 23 45 67 89</p>
                <p>Paris, France</p>
              </div>
            </div>
            <div>
              <h4 className="text-xs font-bold text-white/30 uppercase tracking-wider mb-4">Legal</h4>
              <div className="space-y-2 text-sm text-white/50">
                <p>Mentions legales</p>
                <p>Confidentialite</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-xs text-white/30">&copy; {new Date().getFullYear()} EVE & CO — Certifie B Corp — Made in France</p>
        </div>
      </div>
    </footer>
  );
}
