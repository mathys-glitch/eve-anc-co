import ScrollReveal from "@/components/ScrollReveal";
import WasteCalculator from "@/components/WasteCalculator";
import DayComparison from "@/components/DayComparison";
import ContactForm from "@/components/ContactForm";
import ProductShowcase from "@/components/ProductShowcase";

export default function Home() {
  return (
    <>
      {/* ═══════ HERO CONVAINCANT ═══════ */}
      <section className="min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cream via-white to-white" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-terra/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-sage/5 rounded-full blur-3xl" />

        <div className="max-w-6xl mx-auto px-6 lg:px-10 py-32 relative z-10 w-full">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="hero-animate hero-animate-delay-1 inline-flex items-center gap-2 mb-8 px-4 py-2 bg-cream rounded-full border border-warm-gray">
              <span className="text-sm">🏅</span>
              <span className="text-xs font-semibold text-text-light">B Corp Certifiée • Fabriquée en France</span>
            </div>

            {/* Headline */}
            <h1 className="hero-animate hero-animate-delay-2 text-5xl md:text-6xl lg:text-7xl font-bold text-deep leading-tight tracking-tight mb-8">
              Le confort menstruel<br />
              n&apos;est pas un luxe.<br />
              C&apos;est un <span className="text-terra">droit.</span>
            </h1>

            {/* Subheading */}
            <p className="hero-animate hero-animate-delay-3 text-xl text-text-light leading-relaxed max-w-2xl mb-12">
              Pour chaque femme de votre entreprise : une protection durable, confortable et respectueuse. Un geste RSE fort qui crée de vrais impacts économiques et environnementaux.
            </p>

            {/* CTA */}
            <div className="hero-animate hero-animate-delay-4 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <a href="#devis" className="group relative px-8 py-4 bg-terra text-white font-semibold rounded-lg hover:bg-terra-dark transition-all duration-300 hover:shadow-2xl overflow-hidden">
                <span className="relative z-10">Demander un devis →</span>
                <div className="absolute inset-0 bg-terra-dark translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
              </a>
              <a href="#impact" className="px-8 py-4 text-terra font-semibold border-2 border-terra rounded-lg hover:bg-terra hover:text-white transition-all duration-300">
                Voir l&apos;impact chiffré
              </a>
            </div>

            {/* Trust indicators */}
            <div className="hero-animate hero-animate-delay-4 grid grid-cols-3 gap-8 mt-20 pt-20 border-t border-warm-gray">
              {[
                { stat: "200+", label: "Entreprises satisfaites" },
                { stat: "15K+", label: "Femmes équipées" },
                { stat: "97%", label: "Taux d'adoption" },
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <div className="text-3xl font-bold text-terra mb-2">{item.stat}</div>
                  <p className="text-sm text-text-light">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ LE PROBLÈME ═══════ */}
      <section className="py-24 lg:py-32 bg-cream">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-xs font-bold text-terra uppercase tracking-widest">Le contexte</span>
                <h2 className="mt-4 text-4xl font-bold text-deep leading-tight">
                  45 milliards de protections jetées par an
                </h2>
                <p className="mt-6 text-lg text-text-light leading-relaxed">
                  500 ans pour se décomposer. Des matériaux toxiques pour la santé. Et pour vos collaboratrices : stress, inconfort, absentéisme.
                </p>
                <ul className="mt-8 space-y-4">
                  {[
                    "28% des femmes manquent le travail à cause de douleurs menstruelles",
                    "Les protections jetables coûtent 300€ par personne sur 5 ans",
                    "73% des talents préfèrent une entreprise socialement engagée",
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4 items-start">
                      <span className="text-terra font-bold text-lg mt-0.5">✓</span>
                      <span className="text-text-light">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-2xl p-12 shadow-lg border border-warm-gray">
                <p className="text-5xl font-bold text-terra mb-4">45B</p>
                <p className="text-2xl font-bold text-deep mb-4">protections</p>
                <p className="text-lg text-text-light leading-relaxed">
                  jetées chaque année. Des déchets qui polluent pendant 5 siècles. Il est temps d'agir.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════ LA SOLUTION ═══════ */}
      <section className="py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <div className="text-center mb-20">
              <span className="text-xs font-bold text-terra uppercase tracking-widest">La réponse EVE & CO</span>
              <h2 className="mt-4 text-4xl md:text-5xl font-bold text-deep leading-tight">
                Une vraie action RSE, des vrais résultats
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "♻️",
                title: "300+ utilisations",
                desc: "Chaque culotte = 300 protections jetées évitées. Coton bio certifié GOTS, zéro substance controversée.",
              },
              {
                icon: "💰",
                title: "150€ d'économies par personne",
                desc: "Sur 5 ans. Calculé vs protections jetables (300€). L'investissement se rentabilise.",
              },
              {
                icon: "📊",
                title: "Rapport d'impact chiffré",
                desc: "Tonnes de déchets évités. CO2 économisé. Intégrable directement dans votre DPEF.",
              },
            ].map((item, i) => (
              <ScrollReveal key={i} animation="fadeUp" delay={i * 100}>
                <div className="bg-cream rounded-2xl p-10 border-2 border-warm-gray hover:border-terra transition-colors duration-300">
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <h3 className="text-2xl font-bold text-deep mb-3">{item.title}</h3>
                  <p className="text-text-light leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ CALCULATEUR ═══════ */}
      <section id="impact" className="py-24 lg:py-32 bg-terra/5">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-xs font-bold text-terra uppercase tracking-widest">Impact mesurable</span>
              <h2 className="mt-4 text-4xl md:text-5xl font-bold text-deep leading-tight">
                Voir votre impact en 5 ans
              </h2>
              <p className="mt-6 text-lg text-text-light">
                Calculez les économies, les déchets évités et l'impact CO2 pour votre structure.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fadeUp">
            <div className="bg-white rounded-2xl p-12 border-2 border-warm-gray shadow-lg">
              <WasteCalculator />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════ PRODUITS ═══════ */}
      <ProductShowcase />

      {/* ═══════ COMPARAISON QUOTIDIENNE ═══════ */}
      <section id="quotidien" className="py-24 lg:py-32 bg-cream">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-xs font-bold text-terra uppercase tracking-widest">Le quotidien</span>
              <h2 className="mt-4 text-4xl md:text-5xl font-bold text-deep leading-tight">
                Une journée, deux expériences
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fadeUp">
            <DayComparison />
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════ 6 ARGUMENTS CODIR ═══════ */}
      <section id="preuves" className="py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <div className="text-center mb-20">
              <span className="text-xs font-bold text-terra uppercase tracking-widest">Arguments décisifs</span>
              <h2 className="mt-4 text-4xl md:text-5xl font-bold text-deep leading-tight">
                6 bonnes raisons de dire oui au CODIR
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                num: "1",
                title: "RSE quantifiable",
                desc: "Rapport d'impact chiffré. Tonnes de déchets évités, CO2 économisé. Intégrable dans votre DPEF.",
              },
              {
                num: "2",
                title: "ROI en 6 mois",
                desc: "150€/personne sur 5 ans vs 300€ en jetables. Le calcul parle de lui-même.",
              },
              {
                num: "3",
                title: "-28% d'absentéisme",
                desc: "28% des femmes manquent le travail à cause de règles. Le confort, c'est la solution.",
              },
              {
                num: "4",
                title: "Attractivité employeur",
                desc: "73% des talents choisissent une entreprise engagée. C'est une vraie différence.",
              },
              {
                num: "5",
                title: "B Corp auditée",
                desc: "Pas d'auto-déclaration. Vérification indépendante de notre gouvernance et impact.",
              },
              {
                num: "6",
                title: "Zéro logistique",
                desc: "Commande en ligne, livraison discrète, supports de com fournis. Votre effort : dire oui.",
              },
            ].map((arg, i) => (
              <ScrollReveal key={i} animation="fadeUp" delay={i * 80}>
                <div className="bg-white rounded-2xl p-10 border-2 border-warm-gray hover:border-terra transition-colors duration-300">
                  <div className="w-12 h-12 bg-terra/10 rounded-full flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-terra">{arg.num}</span>
                  </div>
                  <h3 className="text-xl font-bold text-deep mb-3">{arg.title}</h3>
                  <p className="text-text-light leading-relaxed">{arg.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ TESTIMONIALS ═══════ */}
      <section className="py-24 lg:py-32 bg-cream">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-xs font-bold text-terra uppercase tracking-widest">Ils l'ont fait</span>
              <h2 className="mt-4 text-4xl md:text-5xl font-bold text-deep">Elles racontent</h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "97% d'adoption en un mois. Notre meilleure initiative bien-être.",
                name: "Marie Dupont",
                title: "DRH",
                company: "NaturaCorp • 120 collaboratrices",
              },
              {
                quote: "Un levier RSE concret avec des chiffres réels. Exactement ce qu'on cherchait.",
                name: "Pierre Martin",
                title: "Directeur RSE",
                company: "GreenTech • 450 collaboratrices",
              },
              {
                quote: "10 jours de déploiement. Des mails de remerciement qu'on n'attendait pas.",
                name: "Sophie Laurent",
                title: "Office Manager",
                company: "Studio Nantes • 35 collaboratrices",
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
      <section id="devis" className="py-24 lg:py-32 bg-terra">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="text-white">
                <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-8">
                  Prêt à faire une vraie différence ?
                </h2>
                <p className="text-xl text-white/80 leading-relaxed mb-12">
                  Remplissez le formulaire. Notre équipe vous contacte en 48h avec un devis adapté à votre structure. Zéro engagement, des échantillons gratuits.
                </p>

                <div className="space-y-5">
                  {[
                    "✓ Réponse garantie en 48h",
                    "✓ Échantillons offerts",
                    "✓ Zéro engagement",
                    "✓ Accompagnement complet",
                  ].map((item, i) => (
                    <p key={i} className="text-white/90 font-semibold">
                      {item}
                    </p>
                  ))}
                </div>

                <div className="mt-12 pt-8 border-t border-white/30">
                  <p className="text-white/70 text-sm mb-4">Contact direct</p>
                  <p className="text-white font-semibold text-lg">hello@eveandco.fr</p>
                  <p className="text-white font-semibold text-lg">+33 1 23 45 67 89</p>
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
