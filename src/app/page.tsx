import ScrollReveal from "@/components/ScrollReveal";
import DayComparison from "@/components/DayComparison";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <>
      {/* ═══════ HERO ═══════ */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Fullscreen photo background */}
        <img
          src="/images/superphoto.png"
          alt="EVE AND CO - Culotte menstruelle bio"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        {/* Gradient overlay from left to right for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-sage-dark/95 via-sage-dark/60 to-sage-dark/20" />
        <div className="absolute inset-0 bg-gradient-to-b from-sage-dark/30 via-transparent to-sage-dark/40" />

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 pt-32 lg:pt-40 pb-16 min-h-screen flex flex-col">
          <div className="grid lg:grid-cols-2 gap-10 items-center flex-grow">
            {/* Left Column: Text */}
            <div className="max-w-xl">
              {/* Headline — 2 lines max */}
              <h1 className="hero-animate hero-animate-delay-2 font-poppins text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.05] tracking-tight mb-6">
                Vos collaboratrices méritent mieux que des <span className="text-lime italic">tampons.</span>
              </h1>

              {/* Subheading */}
              <p className="hero-animate hero-animate-delay-3 text-base lg:text-lg text-white/85 leading-relaxed mb-10 max-w-lg">
                Culottes menstruelles bio, certifiées B Corp. Un investissement unique qui réduit l&apos;absentéisme de 28% et affiche 97% d&apos;adoption. L&apos;initiative CSE dont tout le monde parle.
              </p>

              {/* CTAs */}
              <div className="hero-animate hero-animate-delay-4 flex flex-col sm:flex-row gap-3 mb-10">
                <a href="#devis" className="inline-flex items-center justify-center px-7 py-3.5 bg-lime text-sage-dark font-bold rounded-full hover:bg-lime-dark transition-all duration-300 text-sm">
                  Recevoir un devis gratuit →
                </a>
              </div>

              {/* Bottom Card — B Corp testimonial style */}
              <div className="hero-animate hero-animate-delay-4 mt-12 lg:mt-16 max-w-sm bg-white/10 backdrop-blur-lg border border-white/15 rounded-2xl p-4 flex items-center gap-4">
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center overflow-hidden p-2">
                  <img src="/images/logo-bcorp.png" alt="B Corp" className="w-full h-full object-contain brightness-0 invert opacity-90" />
                </div>
                <div className="flex-grow">
                  <p className="text-[11px] text-white/70 uppercase tracking-wider mb-1 font-semibold">Certifiée B Corp</p>
                  <p className="text-xs text-white/90 leading-snug">Entreprise à impact. Audit tiers indépendant.</p>
                </div>
                <a href="#preuves" className="flex-shrink-0 px-3 py-1.5 bg-lime text-sage-dark text-[11px] font-bold rounded-full hover:bg-lime-dark transition-all">
                  En savoir +
                </a>
              </div>
            </div>

            {/* Right Column: Floating badges around the woman */}
            <div className="relative hidden lg:block h-full min-h-[600px]">
              {/* Badge - top right */}
              <div className="hero-animate hero-animate-delay-3 absolute top-[8%] right-[2%] bg-white/15 backdrop-blur-md border border-white/25 rounded-full px-4 py-2 text-white text-xs font-semibold shadow-lg">
                -28% ABSENTÉISME
              </div>
              {/* Badge lime - mid top right (ACTION CONCRÈTE) */}
              <div className="hero-animate hero-animate-delay-3 absolute top-[25%] right-[15%] bg-lime text-sage-dark rounded-full px-4 py-2 text-xs font-bold shadow-lg">
                ACTION CONCRÈTE
              </div>
              {/* Badge - mid right */}
              <div className="hero-animate hero-animate-delay-4 absolute top-[45%] right-[-2%] bg-white/15 backdrop-blur-md border border-white/25 rounded-full px-4 py-2 text-white text-xs font-semibold shadow-lg">
                −90% D&apos;EMPREINTE CARBONE
              </div>
              {/* Badge - mid left on woman */}
              <div className="hero-animate hero-animate-delay-3 absolute top-[38%] left-[5%] bg-white/15 backdrop-blur-md border border-white/25 rounded-full px-4 py-2 text-white text-xs font-semibold shadow-lg">
                DÉDUCTIBLE À 100%
              </div>
              {/* Badge - bottom mid */}
              <div className="hero-animate hero-animate-delay-4 absolute top-[65%] right-[8%] bg-white/15 backdrop-blur-md border border-white/25 rounded-full px-4 py-2 text-white text-xs font-semibold shadow-lg">
                INDEX ÉGAPRO BOOSTÉ
              </div>
            </div>
          </div>

          {/* Trust indicators at bottom */}
          <div className="hero-animate hero-animate-delay-4 grid grid-cols-3 gap-8 pt-10 mt-auto">
            {[
              { stat: "N°1", label: "En France" },
              { stat: "300K+", label: "Utilisatrices" },
              { stat: "4.5/5", label: "Trustpilot" },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl md:text-3xl font-extrabold text-lime mb-1 font-poppins">{item.stat}</div>
                <p className="text-sm text-white/70">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ RÉSULTATS CONCRETS ═══════ */}
      <section id="impact" className="py-16 lg:py-20 bg-[#F9F5F0]">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 bg-terra/10 text-terra text-xs font-bold uppercase tracking-widest rounded-full mb-4">Impact mesuré</span>
              <h2 className="text-4xl md:text-4xl font-bold text-deep leading-tight font-poppins">
                Des chiffres, pas des promesses
              </h2>
              <p className="mt-6 text-lg text-text-light max-w-2xl mx-auto">
                Chaque culotte menstruelle EVE AND CO remplace 5 ans de protections jetables. Voici ce que ça change concrètement pour votre entreprise.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Déchets évités */}
            <ScrollReveal animation="fadeUp" delay={0}>
              <div className="relative bg-white rounded-3xl p-8 text-center overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-terra/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="w-14 h-14 mx-auto mb-5 rounded-2xl bg-terra/10 flex items-center justify-center">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#5D7A5A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 20h10"/><path d="M10 20c5.5-2.5 0.8-6.4 3-10"/><path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z"/><path d="M14.1 6a7 7 0 00-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z"/></svg>
                  </div>
                  <div className="text-4xl lg:text-5xl font-extrabold text-terra mb-2 font-poppins">1.2T</div>
                  <h3 className="text-sm font-bold text-deep mb-1">Déchets évités</h3>
                  <p className="text-xs text-text-light">pour 100 collaboratrices équipées</p>
                </div>
              </div>
            </ScrollReveal>

            {/* Absentéisme */}
            <ScrollReveal animation="fadeUp" delay={100}>
              <div className="relative bg-white rounded-3xl p-8 text-center overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-sage/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="w-14 h-14 mx-auto mb-5 rounded-2xl bg-sage/10 flex items-center justify-center">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#8B9A7F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20V10"/><path d="M18 20V4"/><path d="M6 20v-4"/></svg>
                  </div>
                  <div className="text-4xl lg:text-5xl font-extrabold text-sage mb-2 font-poppins">-28%</div>
                  <h3 className="text-sm font-bold text-deep mb-1">d&apos;absentéisme</h3>
                  <p className="text-xs text-text-light">lié aux règles</p>
                </div>
              </div>
            </ScrollReveal>

            {/* Utilisations */}
            <ScrollReveal animation="fadeUp" delay={200}>
              <div className="relative bg-white rounded-3xl p-8 text-center overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-terra/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="w-14 h-14 mx-auto mb-5 rounded-2xl bg-terra/10 flex items-center justify-center">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#5D7A5A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.66 0 3-4.03 3-9s-1.34-9-3-9m0 18c-1.66 0-3-4.03-3-9s1.34-9 3-9m-9 9a9 9 0 019-9"/></svg>
                  </div>
                  <div className="text-4xl lg:text-5xl font-extrabold text-terra mb-2 font-poppins">300+</div>
                  <h3 className="text-sm font-bold text-deep mb-1">utilisations</h3>
                  <p className="text-xs text-text-light">par culotte menstruelle</p>
                </div>
              </div>
            </ScrollReveal>

            {/* Adoption */}
            <ScrollReveal animation="fadeUp" delay={300}>
              <div className="relative bg-white rounded-3xl p-8 text-center overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-sage/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="w-14 h-14 mx-auto mb-5 rounded-2xl bg-sage/10 flex items-center justify-center">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#8B9A7F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                  </div>
                  <div className="text-4xl lg:text-5xl font-extrabold text-sage mb-2 font-poppins">97%</div>
                  <h3 className="text-sm font-bold text-deep mb-1">d&apos;adoption</h3>
                  <p className="text-xs text-text-light">dès le premier mois</p>
                </div>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </section>

      {/* ═══════ COMPARAISON QUOTIDIENNE ═══════ */}
      <section id="quotidien" className="py-16 lg:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-xs font-bold text-terra uppercase tracking-widest">Avant / Après</span>
              <h2 className="mt-4 text-4xl md:text-4xl font-bold text-deep leading-tight font-poppins">
                Ce que ça change, concrètement
              </h2>
              <p className="mt-6 text-lg text-text-light max-w-2xl mx-auto">
                53% des collaboratrices subissent l&apos;impact de leurs règles au travail. 9 jours de productivité perdus par an, en moyenne. Voici à quoi ressemble ce coût invisible — et comment il disparaît.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fadeUp">
            <DayComparison />
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════ 6 ARGUMENTS CODIR ═══════ */}
      <section id="preuves" className="py-12 lg:py-16 bg-[#EDE6D7]">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <div className="text-center mb-8 lg:mb-10">
              <span className="text-xs font-semibold text-sage uppercase tracking-[0.2em]">Pour convaincre en interne</span>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold text-deep leading-tight font-poppins">
                6 raisons de dire oui au CODIR
              </h2>
              <p className="mt-3 text-base text-text-light max-w-2xl mx-auto">
                Une réponse pour chaque décideur autour de la table.
              </p>
            </div>
          </ScrollReveal>

          {/* Apple-style bento — stats as hero */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 auto-rows-fr">
            {/* 01 — DAF (wide light) */}
            <ScrollReveal animation="fadeUp" delay={0} className="md:col-span-2">
              <div className="group h-full rounded-2xl p-6 lg:p-7 bg-gradient-to-br from-white via-white to-[#EEF3EC] border border-warm-gray transition-all duration-500 hover:-translate-y-0.5 hover:shadow-[0_18px_36px_-18px_rgba(31,61,46,0.22)] relative overflow-hidden">
                <div className="absolute -top-20 -right-20 w-52 h-52 rounded-full bg-sage/10 blur-3xl pointer-events-none transition-all duration-700 group-hover:bg-sage/[0.18] group-hover:scale-110" />
                <div className="relative h-full flex flex-col">
                  <div className="text-[10px] font-bold text-sage uppercase tracking-[0.2em] mb-4">01 · Pour la DAF</div>
                  <div className="flex items-baseline gap-2.5 mb-3">
                    <span className="font-poppins text-[52px] lg:text-[60px] font-bold text-sage leading-none tracking-tight transition-transform duration-500 group-hover:scale-105 origin-left">
                      39€
                    </span>
                    <span className="text-sm italic text-text-light">une fois</span>
                  </div>
                  <p className="text-[13px] text-text-light leading-snug max-w-md mt-auto">
                    Un investissement, pas un abonnement. <span className="text-deep font-medium">9× moins qu&apos;une salle de sport.</span>
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* 02 — DRH (narrow coral) */}
            <ScrollReveal animation="fadeUp" delay={100}>
              <div className="group h-full rounded-2xl p-6 bg-[#FBF6F2] border border-[#D97757]/15 transition-all duration-500 hover:-translate-y-0.5 hover:shadow-[0_18px_36px_-18px_rgba(217,119,87,0.28)] relative overflow-hidden">
                <div className="absolute -top-12 -right-12 w-36 h-36 rounded-full bg-[#D97757]/10 blur-3xl pointer-events-none transition-all duration-700 group-hover:bg-[#D97757]/[0.22] group-hover:scale-110" />
                <div className="relative h-full flex flex-col">
                  <div className="text-[10px] font-bold uppercase tracking-[0.2em] mb-4" style={{ color: "#D97757" }}>02 · Pour la DRH</div>
                  <div className="mb-1">
                    <span className="font-poppins text-[48px] lg:text-[54px] font-bold leading-none tracking-tight transition-transform duration-500 group-hover:scale-105 origin-left inline-block" style={{ color: "#D97757" }}>
                      −28%
                    </span>
                  </div>
                  <div className="text-sm italic text-text-light mb-3">d&apos;absentéisme</div>
                  <p className="text-[13px] text-text-light leading-snug mt-auto">
                    <span className="text-deep font-medium">Moins d&apos;absences,</span> plus de présence.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* 03 — Marque employeur (narrow lime) */}
            <ScrollReveal animation="fadeUp" delay={200}>
              <div className="group h-full rounded-2xl p-6 bg-[#F4F9EC] border border-[#98CC5E]/25 transition-all duration-500 hover:-translate-y-0.5 hover:shadow-[0_18px_36px_-18px_rgba(152,204,94,0.32)] relative overflow-hidden">
                <div className="absolute -bottom-12 -right-12 w-36 h-36 rounded-full bg-[#98CC5E]/15 blur-3xl pointer-events-none transition-all duration-700 group-hover:bg-[#98CC5E]/30 group-hover:scale-110" />
                <div className="relative h-full flex flex-col">
                  <div className="text-[10px] font-bold text-sage-dark uppercase tracking-[0.2em] mb-4">03 · Marque employeur</div>
                  <div className="mb-1">
                    <span className="font-poppins text-[48px] lg:text-[54px] font-bold text-sage-dark leading-none tracking-tight transition-transform duration-500 group-hover:scale-105 origin-left inline-block">
                      73%
                    </span>
                  </div>
                  <div className="text-sm italic text-text-light mb-3">des candidats</div>
                  <p className="text-[13px] text-text-light leading-snug mt-auto">
                    <span className="text-deep font-medium">Ce que les talents regardent</span> — pas un baby-foot.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* 04 — RSE (wide DARK) */}
            <ScrollReveal animation="fadeUp" delay={300} className="md:col-span-2">
              <div className="group h-full rounded-2xl p-6 lg:p-7 bg-gradient-to-br from-sage-dark via-[#1F3D2E] to-[#142A1F] transition-all duration-500 hover:-translate-y-0.5 hover:shadow-[0_18px_36px_-18px_rgba(31,61,46,0.55)] relative overflow-hidden">
                <div className="absolute -bottom-20 -left-20 w-56 h-56 rounded-full bg-lime/[0.12] blur-3xl pointer-events-none transition-all duration-700 group-hover:bg-lime/[0.22] group-hover:scale-110" />
                <div className="relative h-full flex flex-col">
                  <div className="text-[10px] font-bold text-lime uppercase tracking-[0.2em] mb-4">04 · Pour la RSE</div>
                  <div className="flex items-baseline gap-2.5 mb-3">
                    <span className="font-poppins text-[52px] lg:text-[60px] font-bold text-white leading-none tracking-tight transition-transform duration-500 group-hover:scale-105 origin-left">
                      1,2T
                    </span>
                    <span className="text-sm italic text-white/60">de déchets évités · pour 100 collab.</span>
                  </div>
                  <p className="text-[13px] text-white/70 leading-snug max-w-md mt-auto">
                    <span className="text-white font-medium">Des chiffres traçables,</span> intégrables au DPEF, audités par tiers indépendant.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* 05 — Direction Générale (wide cream) */}
            <ScrollReveal animation="fadeUp" delay={400} className="md:col-span-2">
              <div className="group h-full rounded-2xl p-6 lg:p-7 bg-gradient-to-br from-[#FAF6EE] via-[#F4F0E7] to-[#EBE5D7] border border-warm-gray transition-all duration-500 hover:-translate-y-0.5 hover:shadow-[0_18px_36px_-18px_rgba(31,61,46,0.22)] relative overflow-hidden">
                <div className="absolute -top-16 -left-16 w-48 h-48 rounded-full bg-sage/10 blur-3xl pointer-events-none transition-all duration-700 group-hover:bg-sage/[0.18] group-hover:scale-110" />
                <div className="relative h-full flex flex-col">
                  <div className="text-[10px] font-bold uppercase tracking-[0.2em] mb-4" style={{ color: "#3E5A4A" }}>05 · Direction Générale</div>
                  <div className="flex items-baseline gap-2.5 mb-3">
                    <span className="font-poppins text-[44px] lg:text-[52px] font-bold text-sage-dark leading-none tracking-tight transition-transform duration-500 group-hover:scale-105 origin-left">
                      B Corp
                    </span>
                    <span className="text-sm italic text-text-light">certifiée</span>
                  </div>
                  <p className="text-[13px] text-text-light leading-snug max-w-md mt-auto">
                    <span className="text-deep font-medium">Audité par des tiers, pas par nous.</span> Tout est public, zéro greenwashing.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* 06 — Vos employées (narrow sage) */}
            <ScrollReveal animation="fadeUp" delay={500}>
              <div className="group h-full rounded-2xl p-6 bg-[#EEF3EC] border border-sage/20 transition-all duration-500 hover:-translate-y-0.5 hover:shadow-[0_18px_36px_-18px_rgba(31,61,46,0.22)] relative overflow-hidden">
                <div className="absolute -bottom-12 -right-12 w-36 h-36 rounded-full bg-sage/15 blur-3xl pointer-events-none transition-all duration-700 group-hover:bg-sage/30 group-hover:scale-110" />
                <div className="relative h-full flex flex-col">
                  <div className="text-[10px] font-bold text-sage-dark uppercase tracking-[0.2em] mb-4">06 · Vos employées</div>
                  <div className="mb-1">
                    <span className="font-poppins text-[48px] lg:text-[54px] font-bold text-sage leading-none tracking-tight transition-transform duration-500 group-hover:scale-105 origin-left inline-block">
                      12H
                    </span>
                  </div>
                  <div className="text-sm italic text-text-light mb-3">de protection</div>
                  <p className="text-[13px] text-text-light leading-snug mt-auto">
                    <span className="text-deep font-medium">Protégées toute la journée,</span> sans y penser.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════ TESTIMONIALS ═══════ */}
      {/* TODO: Réintégrer la section Témoignages quand les premiers avis clients B2B seront disponibles.
          Structure prête: 3 cartes avec avatar en noir & blanc, citation en italique, nom, poste, entreprise.
          Images d'avatars déjà présentes dans /public/images/avatar-*.jpg.
          Voir l'historique Git pour retrouver le code complet (commit précédent). */}

      {/* ═══════ COMPARAISON DES COÛTS ═══════ */}
      <section className="py-16 lg:py-20 bg-cream">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-xs font-bold text-terra uppercase tracking-widest">Le vrai comparatif</span>
              <h2 className="mt-4 text-4xl md:text-4xl font-bold text-deep leading-tight font-poppins">
                39€. Une fois. Pour toujours.
              </h2>
              <p className="mt-6 text-lg text-text-light max-w-2xl mx-auto">
                Le résultat parle de lui-même.
              </p>
            </div>
          </ScrollReveal>

          {/* Comparison Table */}
          <ScrollReveal animation="fadeUp">
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-warm-gray">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-warm-gray bg-cream/50">
                      <th className="px-6 py-4 text-left text-xs font-bold text-text-light uppercase tracking-wider">INITIATIVE</th>
                      <th className="px-6 py-4 text-left text-xs font-bold text-text-light uppercase tracking-wider">COÛT / PERSONNE / AN</th>
                      <th className="px-6 py-4 text-left text-xs font-bold text-text-light uppercase tracking-wider">DURÉE</th>
                      <th className="px-6 py-4 text-left text-xs font-bold text-text-light uppercase tracking-wider">ADOPTION</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-warm-gray">
                      <td className="px-6 py-5 text-sm text-deep font-medium">Salle de sport</td>
                      <td className="px-6 py-5 text-sm text-deep font-medium">360 €</td>
                      <td className="px-6 py-5 text-sm"><span className="text-terra font-semibold">Chaque année</span></td>
                      <td className="px-6 py-5 text-sm text-text-light">~40 %</td>
                    </tr>
                    <tr className="border-b border-warm-gray">
                      <td className="px-6 py-5 text-sm text-deep font-medium">Team building</td>
                      <td className="px-6 py-5 text-sm text-deep font-medium">80 €</td>
                      <td className="px-6 py-5 text-sm"><span className="text-terra font-semibold">Chaque année</span></td>
                      <td className="px-6 py-5 text-sm text-text-light">~55 %</td>
                    </tr>
                    <tr className="border-b border-warm-gray">
                      <td className="px-6 py-5 text-sm text-deep font-medium">Bons Noël</td>
                      <td className="px-6 py-5 text-sm text-deep font-medium">50 €</td>
                      <td className="px-6 py-5 text-sm"><span className="text-terra font-semibold">Chaque année</span></td>
                      <td className="px-6 py-5 text-sm text-text-light">~60 %</td>
                    </tr>
                    <tr style={{ backgroundColor: '#3E5A4A' }}>
                      <td className="px-6 py-5 text-sm font-bold text-white">
                        <img src="/images/logo-white.png" alt="EVE AND CO" className="h-[14px] w-auto" />
                      </td>
                      <td className="px-6 py-5 text-sm font-bold text-lime">39 €*</td>
                      <td className="px-6 py-5">
                        <span className="inline-flex items-center gap-1.5 bg-lime text-sage-dark text-xs font-extrabold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-md">
                          ✓ Une seule fois
                        </span>
                      </td>
                      <td className="px-6 py-5 text-sm"><span className="text-lime font-bold">97% ✓</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="px-6 py-4 bg-warm-gray/30 text-xs text-text-light">
                * Investissement unique par personne, amorti sur 5 ans. Éligible CSE. Exonéré URSSAF.
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════ CTA FINAL ═══════ */}
      <section id="devis" className="relative py-20 lg:py-28 bg-sage-dark overflow-hidden">
        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="text-white">
                <h2 className="text-4xl md:text-4xl font-bold leading-tight mb-8 font-poppins">
                  Et si c&apos;était le moment ?
                </h2>
                <p className="text-xl text-white/80 leading-relaxed mb-12">
                  Un devis sur-mesure, vos chiffres d&apos;impact personnalisés, et des échantillons gratuits pour votre comité. Aucun engagement. Juste les données pour décider.
                </p>

                <div className="space-y-5">
                  {[
                    "✓ Réponse sous 48h, vraiment",
                    "✓ Échantillons gratuits pour tester",
                    "✓ Zéro engagement, zéro pression",
                    "✓ Rapport d'impact personnalisé inclus",
                  ].map((item, i) => (
                    <p key={i} className="text-white/90 font-semibold">
                      {item}
                    </p>
                  ))}
                </div>

                <div className="mt-12 pt-8 border-t border-white/30">
                  <p className="text-white/70 text-sm mb-4">Contact direct</p>
                  <p className="text-white font-semibold text-lg">mathys@eve-and-co.com</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-12 shadow-2xl">
                <ContactForm />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
