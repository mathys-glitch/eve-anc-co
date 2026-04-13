import ScrollReveal from "@/components/ScrollReveal";
import WasteCalculator from "@/components/WasteCalculator";
import DayComparison from "@/components/DayComparison";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <>
      {/* ═══════════════ HERO ═══════════════ */}
      <section className="relative min-h-[95vh] flex items-center overflow-hidden">
        {/* Soft gradient bg */}
        <div className="absolute inset-0 bg-gradient-to-br from-soft-white via-sand-light to-blush-light/30 -z-10" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
          <div className="max-w-4xl">
            <div className="hero-animate hero-animate-delay-1 flex gap-3 flex-wrap mb-8">
              <span className="inline-flex items-center gap-1.5 bg-forest/10 text-forest text-xs font-bold px-4 py-2 rounded-full">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="2"/><path d="M5 8l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                Certifie B Corp
              </span>
              <span className="inline-flex items-center bg-clay/15 text-clay text-xs font-bold px-4 py-2 rounded-full">
                Made in France
              </span>
            </div>

            <h1 className="hero-animate hero-animate-delay-2 text-4xl md:text-6xl lg:text-7xl font-bold text-navy leading-[1.08] tracking-tight">
              Vos collaboratrices meritent mieux que du{" "}
              <span className="relative inline-block">
                <span className="relative z-10">jetable</span>
                <span className="absolute bottom-1 left-0 w-full h-3 bg-blush/60 -z-0 rounded-sm" />
              </span>
            </h1>

            <p className="hero-animate hero-animate-delay-3 mt-8 text-lg md:text-xl text-text-light leading-relaxed max-w-2xl">
              EVE & CO equipe votre entreprise en culottes menstruelles durables. Un vrai geste RSE, des economies concretes, et des equipes qui disent merci.
            </p>

            <div className="hero-animate hero-animate-delay-4 mt-10 flex flex-col sm:flex-row gap-4 items-start">
              <a href="#devis" className="bg-forest text-white font-semibold px-8 py-4 rounded-full hover:bg-forest-light hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 text-sm">
                Demander un devis gratuit →
              </a>
              <a href="#calculateur" className="border-2 border-navy text-navy font-semibold px-8 py-4 rounded-full hover:bg-navy hover:text-white hover:-translate-y-0.5 transition-all duration-300 text-sm">
                Calculer mon impact
              </a>
            </div>

            {/* Trust bar */}
            <div className="hero-animate hero-animate-delay-4 mt-14 flex items-center gap-8 text-sm text-text-light">
              <div className="flex items-center gap-2">
                <span className="text-forest font-bold text-lg">200+</span> entreprises equipees
              </div>
              <div className="w-px h-5 bg-sand" />
              <div className="flex items-center gap-2">
                <span className="text-forest font-bold text-lg">15K</span> collaboratrices
              </div>
              <div className="hidden sm:block w-px h-5 bg-sand" />
              <div className="hidden sm:flex items-center gap-2">
                <span className="text-forest font-bold text-lg">4.9/5</span> satisfaction
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ PRODUITS ═══════════════ */}
      <section id="produits" className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-forest font-bold text-sm uppercase tracking-wider">Nos produits</span>
              <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-navy leading-tight">
                3 modeles, 0 compromis
              </h2>
              <p className="mt-4 text-text-light text-lg">
                Coton bio, zero substance controverse, confort 12h. Vos collaboratrices choisissent leur modele.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "La Quotidienne",
                tagline: "Le basique parfait",
                absorption: "3 tampons",
                color: "bg-sand-light",
                accent: "bg-clay/15 text-clay",
                features: ["Coton bio GOTS", "Du XS au 3XL", "300+ lavages", "Confort toute la journee"],
                best: false,
              },
              {
                name: "L'Active",
                tagline: "Pour celles qui bougent",
                absorption: "4 tampons",
                color: "bg-forest/5",
                accent: "bg-forest/10 text-forest",
                features: ["Tissu technique respirant", "Maintien sportif", "Sechage rapide", "Anti-odeur naturel"],
                best: true,
              },
              {
                name: "La Serenite",
                tagline: "Tranquillite absolue",
                absorption: "5 tampons",
                color: "bg-blush-light/40",
                accent: "bg-blush text-navy",
                features: ["Absorption maximale", "Technologie anti-fuites", "Coupe enveloppante", "Ultra-douce"],
                best: false,
              },
            ].map((product, i) => (
              <ScrollReveal key={i} animation="fadeUp" delay={i * 120}>
                <div className={`relative bg-card-bg rounded-3xl overflow-hidden border border-sand transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${product.best ? "ring-2 ring-forest" : ""}`}>
                  {product.best && (
                    <div className="bg-forest text-white text-xs font-bold text-center py-1.5 tracking-wider uppercase">
                      Le plus populaire
                    </div>
                  )}
                  <div className={`${product.color} aspect-[4/3] flex flex-col items-center justify-center p-6`}>
                    <span className={`text-xs font-bold px-3 py-1 rounded-full mb-3 ${product.accent}`}>
                      Absorption : {product.absorption}
                    </span>
                    <span className="text-6xl mb-2">🩲</span>
                  </div>
                  <div className="p-6 lg:p-8">
                    <h3 className="text-xl font-bold text-navy">{product.name}</h3>
                    <p className="text-text-light text-sm mt-1 mb-5">{product.tagline}</p>
                    <ul className="space-y-2.5">
                      {product.features.map((f, j) => (
                        <li key={j} className="flex items-center gap-2.5 text-sm text-navy">
                          <span className="w-5 h-5 bg-forest/10 rounded-full flex items-center justify-center shrink-0">
                            <svg width="10" height="10" viewBox="0 0 16 16" fill="none"><path d="M4 8l3 3 5-5" stroke="#2D5A3D" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                          </span>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ CALCULATEUR ═══════════════ */}
      <section id="calculateur" className="py-20 lg:py-28 bg-sand-light">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="text-forest font-bold text-sm uppercase tracking-wider">Calculateur d&apos;impact</span>
              <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-navy leading-tight">
                Combien de dechets votre entreprise peut eviter ?
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="scaleIn">
            <WasteCalculator />
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════ COMPARATIF ═══════════════ */}
      <section id="comparatif" className="py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="text-forest font-bold text-sm uppercase tracking-wider">Comparatif</span>
              <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-navy leading-tight">
                Une journee type au bureau
              </h2>
              <p className="mt-4 text-text-light text-lg max-w-xl mx-auto">
                Cliquez pour comparer la journee d&apos;une collaboratrice avec et sans EVE & CO
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fadeUp">
            <DayComparison />
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════ ARGUMENTS ═══════════════ */}
      <section id="arguments" className="py-20 lg:py-28 bg-navy text-white rounded-[2rem] mx-4 lg:mx-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-blush font-bold text-sm uppercase tracking-wider">Les arguments qui comptent</span>
              <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Convainquez votre direction en 5 points
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                number: "01",
                title: "RSE mesurable et verifiable",
                desc: "Chaque kit deploye genere des donnees d'impact (dechets evites, CO2 economise). Integrable directement dans votre rapport RSE annuel.",
                accent: "text-blush",
              },
              {
                number: "02",
                title: "ROI positif des le 1er semestre",
                desc: "Le cout d'un kit EVE & CO est amorti en 6-8 mois vs. les protections jetables. Sur 5 ans, l'economie est de 300€ par collaboratrice.",
                accent: "text-blush",
              },
              {
                number: "03",
                title: "Reduction de l'absenteisme",
                desc: "28% des femmes disent avoir deja manque le travail a cause de leurs regles. Le confort menstruel reduit ce chiffre concretement.",
                accent: "text-blush",
              },
              {
                number: "04",
                title: "Marque employeur renforcee",
                desc: "73% des candidats preferent une entreprise engagee socialement. EVE & CO est un avantage concret a mettre en avant en entretien.",
                accent: "text-blush",
              },
              {
                number: "05",
                title: "Certification B Corp",
                desc: "Nos produits sont audites par un organisme independant. Gouvernance, environnement, impact social — tout est verifie et certifie.",
                accent: "text-blush",
              },
              {
                number: "06",
                title: "Zero charge logistique",
                desc: "On gere tout : plateforme de commande individuelle, livraison discrete, supports de communication interne. Vous n'avez rien a faire.",
                accent: "text-blush",
              },
            ].map((arg, i) => (
              <ScrollReveal key={i} animation="fadeUp" delay={i * 80}>
                <div className="bg-white/5 backdrop-blur rounded-2xl p-8 h-full border border-white/10 transition-all duration-300 hover:bg-white/10">
                  <span className={`text-3xl font-bold ${arg.accent}`}>{arg.number}</span>
                  <h3 className="text-lg font-bold text-white mt-3 mb-2">{arg.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{arg.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ TEMOIGNAGES ═══════════════ */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-forest font-bold text-sm uppercase tracking-wider">Temoignages</span>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold text-navy">
                Ce que disent nos clients
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote: "Le deploiement a pris 2 semaines. Le taux d'adoption a atteint 97% en un mois. Notre meilleure initiative bien-etre, de loin.",
                name: "Marie Dupont",
                role: "DRH — NaturaCorp (120 salariees)",
                bg: "bg-sand-light",
              },
              {
                quote: "On cherchait un levier RSE concret, pas du greenwashing. EVE & CO nous fournit un rapport d'impact chiffre qu'on met directement dans notre bilan.",
                name: "Pierre Martin",
                role: "Directeur RSE — GreenTech (450 salariees)",
                bg: "bg-forest/5",
              },
              {
                quote: "Nos collaboratrices nous remercient. C'est rare pour une decision RH. Ca change l'ambiance et ca montre qu'on prend soin de tout le monde.",
                name: "Sophie Laurent",
                role: "Office Manager — Studio Nantes (35 salariees)",
                bg: "bg-blush-light/40",
              },
            ].map((t, i) => (
              <ScrollReveal key={i} animation="scaleIn" delay={i * 120}>
                <div className={`${t.bg} rounded-3xl p-8 lg:p-10 h-full flex flex-col`}>
                  <svg width="32" height="24" viewBox="0 0 32 24" fill="none" className="text-forest/20 mb-4 shrink-0">
                    <path d="M0 24V14.4C0 6.08 4.48 1.28 13.44 0l1.28 4.16C9.28 5.44 7.04 8.64 6.72 12H12.8V24H0zm18.56 0V14.4c0-8.32 4.48-13.12 13.44-14.4l1.28 4.16C27.84 5.44 25.6 8.64 25.28 12h6.08V24H18.56z" fill="currentColor"/>
                  </svg>
                  <p className="text-navy leading-relaxed mb-6 flex-1">{t.quote}</p>
                  <div>
                    <p className="font-bold text-navy text-sm">{t.name}</p>
                    <p className="text-text-light text-xs mt-0.5">{t.role}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ DEVIS ═══════════════ */}
      <section id="devis" className="py-20 lg:py-28 bg-sand-light">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="text-forest font-bold text-sm uppercase tracking-wider">Devis gratuit</span>
              <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-navy leading-tight">
                Pret a equiper vos equipes ?
              </h2>
              <p className="mt-4 text-text-light text-lg max-w-xl mx-auto">
                Remplissez ce formulaire et recevez un devis personnalise en moins de 48h. Sans engagement.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fadeUp">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2 bg-card-bg rounded-3xl p-8 lg:p-10 border border-sand">
                <ContactForm />
              </div>

              <div className="space-y-4">
                {[
                  { icon: "⚡", title: "Reponse en 48h", desc: "On est rapides et on tient nos delais." },
                  { icon: "🎁", title: "Echantillons gratuits", desc: "Testez avant de vous engager." },
                  { icon: "📊", title: "Rapport d'impact", desc: "Donnees RSE clef en main." },
                  { icon: "🤝", title: "Interlocuteur dedie", desc: "Un humain, pas un bot." },
                ].map((item, i) => (
                  <div key={i} className="bg-card-bg rounded-2xl p-5 flex gap-4 items-start border border-sand">
                    <span className="text-xl shrink-0">{item.icon}</span>
                    <div>
                      <h4 className="font-bold text-navy text-sm">{item.title}</h4>
                      <p className="text-xs text-text-light mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
