import ScrollReveal from "@/components/ScrollReveal";
import WasteCalculator from "@/components/WasteCalculator";
import DayComparison from "@/components/DayComparison";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <>
      {/* ═══════ HERO ═══════ */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Fullscreen photo background */}
        <img
          src="/images/hero-photo.jpg"
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
                Elles méritent mieux que des <span className="text-lime italic">tampons.</span>
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
                <a href="#impact" className="inline-flex items-center justify-center px-7 py-3.5 text-white font-semibold border border-white/40 bg-white/5 backdrop-blur-md rounded-full hover:bg-white/15 transition-all duration-300 text-sm">
                  Calculer mon impact
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
              {/* Badge lime - mid top right */}
              <div className="hero-animate hero-animate-delay-3 absolute top-[25%] right-[15%] bg-lime text-sage-dark rounded-full px-4 py-2 text-xs font-bold shadow-lg">
                97% ADOPTION
              </div>
              {/* Badge - mid right */}
              <div className="hero-animate hero-animate-delay-4 absolute top-[45%] right-[-2%] bg-white/15 backdrop-blur-md border border-white/25 rounded-full px-4 py-2 text-white text-xs font-semibold shadow-lg">
                1.2T DÉCHETS ÉVITÉS
              </div>
              {/* Badge - mid left on woman */}
              <div className="hero-animate hero-animate-delay-3 absolute top-[38%] left-[5%] bg-white/15 backdrop-blur-md border border-white/25 rounded-full px-4 py-2 text-white text-xs font-semibold shadow-lg">
                100% COTON BIO
              </div>
              {/* Badge - bottom mid */}
              <div className="hero-animate hero-animate-delay-4 absolute top-[65%] right-[8%] bg-white/15 backdrop-blur-md border border-white/25 rounded-full px-4 py-2 text-white text-xs font-semibold shadow-lg">
                300+ UTILISATIONS
              </div>
              {/* Badge - bottom left on woman */}
              <div className="hero-animate hero-animate-delay-4 absolute top-[78%] left-[10%] bg-white/15 backdrop-blur-md border border-white/25 rounded-full px-4 py-2 text-white text-xs font-semibold shadow-lg">
                CERTIFIÉ B CORP
              </div>
            </div>
          </div>

          {/* Trust indicators at bottom */}
          <div className="hero-animate hero-animate-delay-4 grid grid-cols-3 gap-8 pt-10 mt-auto border-t border-white/15">
            {[
              { stat: "Certifié", label: "B Corp" },
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

      {/* ═══════ COMPARAISON DES COÛTS ═══════ */}
      <section className="py-16 lg:py-20 bg-cream">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-xs font-bold text-terra uppercase tracking-widest">Le vrai comparatif</span>
              <h2 className="mt-4 text-4xl md:text-4xl font-bold text-deep leading-tight font-poppins">
                Mettez vos initiatives CSE côte à côte
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
                    <tr className="bg-terra/5">
                      <td className="px-6 py-5 text-sm font-bold text-terra">EVE AND CO</td>
                      <td className="px-6 py-5 text-sm font-bold text-terra">39 €*</td>
                      <td className="px-6 py-5 text-sm"><span className="text-sage font-semibold">Une seule fois</span></td>
                      <td className="px-6 py-5 text-sm"><span className="text-sage font-bold">97% ✓</span></td>
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

      {/* ═══════ RÉSULTATS CONCRETS ═══════ */}
      <section className="py-16 lg:py-20 bg-[#F9F5F0]">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 bg-terra/10 text-terra text-xs font-bold uppercase tracking-widest rounded-full mb-4">Résultats concrets</span>
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
                  <p className="text-xs text-text-light">par collaboratrice en 5 ans</p>
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

      {/* ═══════ CALCULATEUR ═══════ */}
      <section id="impact" className="py-14 lg:py-16 bg-terra/5">
        <div className="max-w-2xl mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <div className="text-center mb-10">
              <span className="text-xs font-bold text-terra uppercase tracking-widest">Simulateur</span>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold text-deep leading-tight font-poppins">
                Calculez votre impact
              </h2>
              <p className="mt-4 text-sm text-text-light max-w-lg mx-auto">
                Choisissez la taille de votre entreprise. On fait le reste.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fadeUp">
            <div className="bg-white rounded-2xl p-8 border border-warm-gray shadow-sm">
              <WasteCalculator />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════ COMPARAISON QUOTIDIENNE ═══════ */}
      <section id="quotidien" className="py-16 lg:py-20 bg-cream">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-xs font-bold text-terra uppercase tracking-widest">Avant / Après</span>
              <h2 className="mt-4 text-4xl md:text-4xl font-bold text-deep leading-tight font-poppins">
                Ce que ça change, concrètement
              </h2>
              <p className="mt-6 text-lg text-text-light max-w-2xl mx-auto">
                Chaque mois, 28% des femmes adaptent leur journée à cause de leurs règles. Inconfort, stress, absence. Voici à quoi ressemble une journée quand le problème est résolu.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fadeUp">
            <DayComparison />
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════ 6 ARGUMENTS CODIR ═══════ */}
      <section id="preuves" className="py-20 lg:py-28 bg-[#F4F1EE]">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <div className="text-center mb-20">
              <span className="text-xs font-semibold text-terra uppercase tracking-[0.2em]">Pour convaincre en interne</span>
              <h2 className="mt-5 text-4xl md:text-5xl font-bold text-deep leading-tight font-poppins">
                6 raisons de dire oui au CODIR
              </h2>
            </div>
          </ScrollReveal>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Card 1 — Large */}
            <ScrollReveal animation="fadeUp" delay={0}>
              <div className="md:col-span-1 relative overflow-hidden rounded-3xl bg-gradient-to-br from-terra to-terra-dark p-10 h-full min-h-[280px] flex flex-col justify-between group">
                <div className="absolute top-4 right-6 text-[120px] font-black text-white/10 leading-none select-none">01</div>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-white mb-3 font-poppins">Des chiffres, pas des mots</h3>
                  <p className="text-sm text-white/75 leading-relaxed">Déchets évités, CO2 économisé, absentéisme réduit : chaque donnée est traçable et intégrable à votre DPEF. Vos équipes RSE vont adorer.</p>
                </div>
                <div className="relative z-10 mt-6">
                  <span className="text-xs font-semibold text-white/50 uppercase tracking-wider">Impact vérifiable</span>
                </div>
              </div>
            </ScrollReveal>

            {/* Card 2 + 3 stacked */}
            <div className="md:col-span-2 grid grid-rows-2 gap-4">
              <ScrollReveal animation="fadeUp" delay={80}>
                <div className="relative overflow-hidden rounded-3xl bg-white p-8 group hover:shadow-lg transition-all duration-300 border border-warm-gray">
                  <div className="absolute top-2 right-6 text-[80px] font-black text-terra/5 leading-none select-none">02</div>
                  <div className="relative z-10 flex items-start gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-terra/10 flex items-center justify-center">
                      <span className="text-terra text-xl font-bold">€</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-deep mb-2 font-poppins">Rentable dès le premier jour</h3>
                      <p className="text-sm text-text-light leading-relaxed">Un seul investissement contre un coût récurrent chaque année. Pas de renouvellement, pas de surprise. Le budget est maîtrisé dès le départ.</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal animation="fadeUp" delay={160}>
                <div className="relative overflow-hidden rounded-3xl bg-white p-8 group hover:shadow-lg transition-all duration-300 border border-warm-gray">
                  <div className="absolute top-2 right-6 text-[80px] font-black text-sage/5 leading-none select-none">03</div>
                  <div className="relative z-10 flex items-start gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-sage/10 flex items-center justify-center">
                      <span className="text-sage text-xl font-bold">↓</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-deep mb-2 font-poppins">Moins d&apos;absences, plus de présence</h3>
                      <p className="text-sm text-text-light leading-relaxed">28% des femmes s&apos;absentent chaque mois à cause de leurs règles. Une solution adaptée change la donne. Résultat : des équipes plus stables et plus sereines.</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Card 4 + 5 stacked */}
            <div className="md:col-span-2 grid grid-rows-2 gap-4">
              <ScrollReveal animation="fadeUp" delay={240}>
                <div className="relative overflow-hidden rounded-3xl bg-white p-8 group hover:shadow-lg transition-all duration-300 border border-warm-gray">
                  <div className="absolute top-2 right-6 text-[80px] font-black text-terra/5 leading-none select-none">04</div>
                  <div className="relative z-10 flex items-start gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-terra/10 flex items-center justify-center">
                      <span className="text-terra text-xl font-bold">★</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-deep mb-2 font-poppins">Ce que les talents regardent vraiment</h3>
                      <p className="text-sm text-text-light leading-relaxed">73% des candidats choisissent une entreprise pour ses engagements concrets. Pas pour un baby-foot. Une initiative comme celle-ci se remarque dès l&apos;entretien.</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal animation="fadeUp" delay={320}>
                <div className="relative overflow-hidden rounded-3xl bg-white p-8 group hover:shadow-lg transition-all duration-300 border border-warm-gray">
                  <div className="absolute top-2 right-6 text-[80px] font-black text-sage/5 leading-none select-none">05</div>
                  <div className="relative z-10 flex items-start gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-sage/10 flex items-center justify-center">
                      <span className="text-sage text-xl font-bold">✓</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-deep mb-2 font-poppins">Vérifié par des tiers, pas par nous</h3>
                      <p className="text-sm text-text-light leading-relaxed">La certification B Corp, c&apos;est un audit indépendant chaque année. Salaires, gouvernance, impact environnemental : tout est public. Zéro greenwashing.</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Card 6 — Large */}
            <ScrollReveal animation="fadeUp" delay={400}>
              <div className="md:col-span-1 relative overflow-hidden rounded-3xl bg-gradient-to-br from-sage to-sage/70 p-10 h-full min-h-[280px] flex flex-col justify-between group">
                <div className="absolute top-4 right-6 text-[120px] font-black text-white/10 leading-none select-none">06</div>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-white mb-3 font-poppins">On s&apos;occupe de tout</h3>
                  <p className="text-sm text-white/75 leading-relaxed">Logistique, distribution, communication interne : on prend tout en charge. Vous validez le projet, on déploie. Votre seul effort : envoyer un mail.</p>
                </div>
                <div className="relative z-10 mt-6">
                  <span className="text-xs font-semibold text-white/50 uppercase tracking-wider">Clé en main</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════ TESTIMONIALS ═══════ */}
      <section className="py-16 lg:py-20 bg-cream">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-xs font-bold text-terra uppercase tracking-widest">Témoignages</span>
              <h2 className="mt-4 text-4xl md:text-4xl font-bold text-deep font-poppins">Ils ont dit oui. Voici ce qui s&apos;est passé.</h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "97% d'adoption en un mois. On n'a jamais eu un taux pareil sur une initiative bien-être. Les femmes en parlent entre elles, et les candidats posent la question en entretien.",
                name: "Marie Dupont",
                title: "Responsable RH",
                company: "NaturaCorp, 120 collaboratrices",
                avatar: "/images/avatar-marie.jpg",
              },
              {
                quote: "Pour notre DPEF, on avait besoin de données solides. Déchets évités, CO2, taux d'adoption : tout est documenté. C'est la première initiative RSE qu'on peut vraiment chiffrer.",
                name: "Pierre Martin",
                title: "Directeur Développement Durable",
                company: "GreenTech Solutions, 450 collaboratrices",
                avatar: "/images/avatar-pierre.jpg",
              },
              {
                quote: "Déployé en 10 jours. Depuis, on reçoit des mails de remerciement spontanés. Des femmes qui disent que c'est la première fois qu'elles se sentent vraiment considérées au travail.",
                name: "Sophie Laurent",
                title: "Responsable Admin et RH",
                company: "Studio Créatif Nantes, 35 personnes",
                avatar: "/images/avatar-sophie.jpg",
              },
            ].map((t, i) => (
              <ScrollReveal key={i} animation="fadeUp" delay={i * 100}>
                <div className="bg-white rounded-2xl p-10 border-2 border-warm-gray h-full flex flex-col">
                  <p className="text-lg text-deep leading-relaxed italic mb-8 text-center flex-grow">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="flex flex-col items-center text-center">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-14 h-14 rounded-full object-cover grayscale mb-3"
                    />
                    <p className="font-bold text-deep">{t.name}</p>
                    <p className="text-sm text-text-light mt-1">{t.title}</p>
                    <p className="text-xs text-terra font-semibold mt-2">{t.company}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ CTA FINAL ═══════ */}
      <section id="devis" className="py-16 lg:py-20 bg-terra">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
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
