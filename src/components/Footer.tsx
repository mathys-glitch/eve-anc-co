export default function Footer() {
  return (
    <footer className="bg-deep text-white">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <span className="text-xl font-bold">EVE <span className="text-terra">AND</span> CO</span>
            <p className="mt-3 text-white/50 text-sm leading-relaxed">Marque N°1 en France de culottes menstruelles. Certifiée B Corp. 🇫🇷</p>
          </div>
          <div className="space-y-4">
            <p className="text-xs text-white/40 font-bold uppercase tracking-widest">Contact</p>
            <div className="space-y-2 text-sm text-white/60">
              <p>hello@eveandco.fr</p>
              <p>+33 1 23 45 67 89</p>
            </div>
          </div>
          <div className="space-y-4">
            <p className="text-xs text-white/40 font-bold uppercase tracking-widest">Mentions légales</p>
            <div className="space-y-2 text-sm text-white/60">
              <p>Conditions d'utilisation</p>
              <p>Politique de confidentialité</p>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-white/10 text-xs text-white/30 text-center">
          &copy; {new Date().getFullYear()} EVE AND CO — Tous droits réservés
        </div>
      </div>
    </footer>
  );
}
