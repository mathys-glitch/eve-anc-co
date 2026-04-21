import ScrollReveal from "@/components/ScrollReveal";
import WasteCalculator from "@/components/WasteCalculator";
import DayComparison from "@/components/DayComparison";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <>
      {/* ═══════ HERO CONVAINCANT ═══════ */}
      <section className="py-24 lg:py-32 flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cream via-white to-white" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-terra/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-sage/5 rounded-full blur-3xl" />

        <div className="max-w-4xl mx-auto px-6 lg:px-10 relative z-10 w-full">
          <div className="text-center">
            {/* Badge */}
            <div className="hero-animate hero-animate-delay-1 inline-flex items-center gap-2 mb-8 px-4 py-2 bg-cream rounded-full border border-warm-gray">
              <span className="text-sm">👑</span>
              <span className="text-xs font-semibold text-text-light">Marque N°1 en France • Certifiée B Corp</span>
            </div>

            {/* Headline */}
            <h1 className="hero-animate hero-animate-delay-2 font-poppins text-4xl md:text-5xl lg:text-6xl font-extrabold text-deep leading-tight tracking-tight mb-8">
              Vos collaboratrices méritent mieux que des <span className="text-terra">tampons.</span>
            </h1>

            {/* Subheading */}
            <p className="hero-animate hero-animate-delay-3 text-xl text-text-light leading-relaxed mx-auto mb-12 font-poppins">
              Offrez des culottes menstruelles bio certifiées B Corp à vos équipes. 15€ par personne, investissement unique. Confortables, durables, zéro déchet. -28% d'absentéisme et 97% d'adoption garantie.
            </p>

            {/* CTA */}
            <div className="hero-animate hero-animate-delay-4 flex flex-col sm:flex-row gap-4 items-center justify-center mb-16">
              <a href="#devis" className="group relative px-8 py-4 bg-terra text-white font-semibold rounded-lg hover:bg-terra-dark transition-all duration-300 hover:shadow-2xl overflow-hidden">
                <span className="relative z-10">Demander un devis →</span>
                <div className="absolute inset-0 bg-terra-dark translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
              </a>
              <a href="#impact" className="px-8 py-4 text-terra font-semibold border-2 border-terra rounded-lg hover:bg-terra hover:text-white transition-all duration-300">
                Voir l&apos;impact chiffré
              </a>
            </div>

            {/* Trust indicators */}
            <div className="hero-animate hero-animate-delay-4 grid grid-cols-3 gap-8 pt-16 border-t border-warm-gray">
              {[
                { stat: "Certifié", label: "B Corp" },
                { stat: "300K+", label: "Utilisatrices" },
                { stat: "4.5/5", label: "Trustpilot" },
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <div className="text-2xl font-bold text-terra mb-1">{item.stat}</div>
                  <p className="text-sm text-text-light">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ LE CONTEXTE ═══════ */}
      <section className="py-16 lg:py-20 bg-cream">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-xs font-bold text-terra uppercase tracking-widest">Comparaison par utilisateur</span>
              <h2 className="mt-4 text-4xl md:text-4xl font-bold text-deep leading-tight font-poppins">
                Comparez vraiment : coût par collaboratrice
              </h2>
              <p className="mt-6 text-lg text-text-light max-w-2xl mx-auto">
                Toutes les initiatives bien-être ne se valent pas. Voici les vrais chiffres, par personne, pour votre prise de décision.
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
                      <td className="px-6 py-5 text-sm font-bold text-terra">15 €*</td>
                      <td className="px-6 py-5 text-sm"><span className="text-sage font-semibold">Une seule fois</span></td>
                      <td className="px-6 py-5 text-sm"><span className="text-sage font-bold">97% ✓</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="px-6 py-4 bg-warm-gray/30 text-xs text-text-light">
                * 15 € par personne investissement unique. Amorti sur 5 ans = 3€/personne/an. Éligible CSE. Exonéré URSSAF.
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════ LA RÉPONSE EVE AND CO ═══════ */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-terra/5 to-sage/5">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 bg-terra/10 text-terra text-xs font-bold uppercase tracking-widest rounded-full mb-4">LA RÉPONSE EVE AND CO</span>
              <h2 className="text-4xl md:text-4xl font-bold text-deep leading-tight">
                Une vraie action RSE avec des vrais résultats mesurables
              </h2>
              <p className="mt-6 text-lg text-text-light max-w-2xl mx-auto">
                1 investissement, 5 ans d'impact. Zéro déchets plastiques. Zéro absentéisme lié au confort menstruel. Des collaboratrices qui se sentent vraiment entendues.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "🌱",
                stat: "1.2T",
                label: "Déchets évités",
                sublabel: "par femme en 5 ans",
              },
              {
                icon: "💚",
                stat: "-28%",
                label: "Moins d'absentéisme",
                sublabel: "lié aux règles",
              },
              {
                icon: "💰",
                stat: "150€",
                label: "Économies",
                sublabel: "par personne / 5 ans",
              },
              {
                icon: "⭐",
                stat: "97%",
                label: "Taux d'adoption",
                sublabel: "300K+ utilisatrices",
              },
            ].map((item, i) => (
              <ScrollReveal key={i} animation="fadeUp" delay={i * 100}>
                <div className="text-center p-8 bg-white rounded-2xl border-2 border-warm-gray hover:border-terra hover:shadow-lg transition-all duration-300">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <div className="text-3xl lg:text-4xl font-bold text-terra mb-2">{item.stat}</div>
                  <h3 className="text-sm font-bold text-deep mb-1">{item.label}</h3>
                  <p className="text-xs text-text-light">{item.sublabel}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

      {/* ═══════ CALCULATEUR ═══════ */}
      <section id="impact" className="py-14 lg:py-16 bg-terra/5">
        <div className="max-w-2xl mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <div className="text-center mb-10">
              <span className="text-xs font-bold text-terra uppercase tracking-widest">Impact mesurable</span>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold text-deep leading-tight font-poppins">
                Votre impact en un coup d&apos;oeil
              </h2>
              <p className="mt-4 text-sm text-text-light max-w-lg mx-auto">
                Sélectionnez la taille de votre entreprise et découvrez votre impact sur 5 ans.
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
              <span className="text-xs font-bold text-terra uppercase tracking-widest">Le quotidien</span>
              <h2 className="mt-4 text-4xl md:text-4xl font-bold text-deep leading-tight">
                La vraie différence au quotidien
              </h2>
              <p className="mt-6 text-lg text-text-light max-w-2xl mx-auto">
                28% des femmes s'absentent du travail pour cause de règles. EVE AND CO change ça. Voyez ce que devient une journée quand vos collaboratrices se sentent soutenues.
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
              <span className="text-xs font-semibold text-terra uppercase tracking-[0.2em]">Arguments décisifs</span>
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
                  <h3 className="text-xl font-bold text-white mb-3 font-poppins">RSE quantifiable, vérifiable</h3>
                  <p className="text-sm text-white/75 leading-relaxed">Rapport d&apos;impact chiffré chaque année. Déchets évités, CO2 économisé, absentéisme réduit. Directement intégrable à votre DPEF.</p>
                </div>
                <div className="relative z-10 mt-6">
                  <span className="text-xs font-semibold text-white/50 uppercase tracking-wider">Impact mesurable</span>
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
                      <h3 className="text-lg font-bold text-deep mb-2 font-poppins">ROI positif dès 6 mois</h3>
                      <p className="text-sm text-text-light leading-relaxed">15€ par personne, une seule fois. Contre 300€ par personne par an en protections jetables. C&apos;est 50% moins cher sur 5 ans.</p>
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
                      <h3 className="text-lg font-bold text-deep mb-2 font-poppins">-28% d&apos;absentéisme lié aux règles</h3>
                      <p className="text-sm text-text-light leading-relaxed">28% des femmes s&apos;absentent à cause de leurs règles. EVE AND CO réduit ça drastiquement. Plus de jours présents, plus de productivité.</p>
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
                      <h3 className="text-lg font-bold text-deep mb-2 font-poppins">Attirer et retenir les talents</h3>
                      <p className="text-sm text-text-light leading-relaxed">73% des talents préfèrent une entreprise engagée. Une initiative concrète pour les femmes, ça fait la différence dans le recrutement.</p>
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
                      <h3 className="text-lg font-bold text-deep mb-2 font-poppins">Certifié B Corp, audité chaque année</h3>
                      <p className="text-sm text-text-light leading-relaxed">Pas d&apos;autopromotion. Un audit tiers indépendant chaque année. Salaires, gouvernance, impact : tout est vérifié publiquement.</p>
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
                  <h3 className="text-xl font-bold text-white mb-3 font-poppins">Zéro charge pour vous</h3>
                  <p className="text-sm text-white/75 leading-relaxed">On gère tout : logistique, communication, déploiement. Vous envoyez l&apos;annonce, c&apos;est tout. Votre seule action : dire oui.</p>
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
              <span className="text-xs font-bold text-terra uppercase tracking-widest">Ils l'ont fait</span>
              <h2 className="mt-4 text-4xl md:text-4xl font-bold text-deep">Ce que nos clients disent vraiment</h2>
              <p className="mt-6 text-lg text-text-light max-w-2xl mx-auto">
                Des entreprises qui ont pris la décision. Des résultats qui parlent d'eux-mêmes.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "97% d'adoption en un mois. C'est nos meilleure initiative bien-être. Et c'est devenu un critère d'attractivité pour les talents.",
                name: "Marie Dupont",
                title: "Responsable RH",
                company: "NaturaCorp • 120 collaboratrices",
              },
              {
                quote: "Enfin une initiative RSE avec des vrais chiffres. 1.2T de déchets évités, CO2 calculé, données mesurables pour notre DPEF. C'est exactement ça qu'on cherchait.",
                name: "Pierre Martin",
                title: "Directeur Développement Durable",
                company: "GreenTech Solutions • 450 collaboratrices",
              },
              {
                quote: "10 jours pour déployer. Et depuis, on reçoit des mails de merci des femmes. Honnêtement on ne s'attendait pas à ça comme impact.",
                name: "Sophie Laurent",
                title: "Responsable Admin/RH",
                company: "Studio Créatif Nantes • 35 personnes",
              },
            ].map((t, i) => (
              <ScrollReveal key={i} animation="fadeUp" delay={i * 100}>
                <div className="bg-white rounded-2xl p-10 border-2 border-warm-gray">
                  <p className="text-lg text-deep leading-relaxed italic mb-8 text-center">
                    "{t.quote}"
                  </p>
                  <div className="text-center">
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
                <h2 className="text-4xl md:text-4xl font-bold leading-tight mb-8">
                  Prêt à offrir à vos collaboratrices ce qu'elles méritent vraiment ?
                </h2>
                <p className="text-xl text-white/80 leading-relaxed mb-12">
                  Remplissez le formulaire. Notre équipe revient sous 48h avec un devis sur-mesure, vos chiffres d'impact personnalisés, et des échantillons pour que votre comité en profite. Aucun engagement, juste les données.
                </p>

                <div className="space-y-5">
                  {[
                    "✓ Réponse garantie en 48h (vraiment)",
                    "✓ Échantillons à tester gratuitement",
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
