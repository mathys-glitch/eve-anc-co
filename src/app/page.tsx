import ScrollReveal from "@/components/ScrollReveal";
import WasteCalculator from "@/components/WasteCalculator";
import DayComparison from "@/components/DayComparison";
import ContactForm from "@/components/ContactForm";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* ═══════ HERO ═══════ */}
      <section className="min-h-[100vh] flex items-center relative overflow-hidden pt-32">
        <div className="absolute top-20 -right-32 w-96 h-96 bg-cream rounded-full opacity-40 blur-3xl" />
        <div className="absolute bottom-0 -left-32 w-72 h-72 bg-sage/10 rounded-full opacity-60 blur-3xl" />

        <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-20 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="hero-animate hero-animate-delay-1 flex items-center gap-3 mb-8 flex-wrap">
                <span className="text-xs font-bold uppercase tracking-widest text-terra bg-cream px-4 py-2 rounded-full">✨ B Corp Certifiée</span>
                <span className="text-xs font-semibold text-text-light">Fabriquée en France</span>
              </div>

              <h1 className="hero-animate hero-animate-delay-2 text-4xl md:text-5xl lg:text-6xl font-bold text-deep leading-tight tracking-tight">
                Le confort menstruel,<br />
                <span className="text-terra">enfin normal.</span>
              </h1>

              <p className="hero-animate hero-animate-delay-3 mt-6 text-lg text-text-light leading-relaxed max-w-lg">
                Dotez votre équipe de culottes menstruelles durables. Une vraie action RSE, des économies concrètes, et un confort sans compromis.
              </p>

              <div className="hero-animate hero-animate-delay-4 mt-10 flex gap-4 flex-wrap">
                <a href="#devis" className="bg-terra text-white font-semibold px-8 py-4 rounded-full hover:bg-terra-light transition-all duration-300 hover:shadow-xl">
                  Obtenir un devis gratuit
                </a>
                <a href="#produits" className="text-terra font-semibold px-8 py-4 rounded-full border-2 border-terra hover:bg-terra/5 transition-all duration-300">
                  Voir les produits →
                </a>
              </div>
            </div>

            {/* Right side — animated stat */}
            <div className="hero-animate hero-animate-delay-4 hidden lg:flex items-center justify-center">
              <div className="bg-cream rounded-3xl p-12 text-center">
                <div className="text-7xl font-bold text-terra mb-2">45</div>
                <p className="text-2xl font-bold text-deep mb-4">milliards</p>
                <p className="text-text-light leading-relaxed">
                  de protections jetées chaque année. Nous, on dit stop. 🛑
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ STATS BAR ═══════ */}
      <section className="py-12 bg-cream">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: "200+", label: "entreprises" },
              { number: "15K+", label: "collaboratrices équipées" },
              { number: "97%", label: "taux d'adoption" },
              { number: "4.9/5", label: "satisfaction" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-terra">{stat.number}</div>
                <p className="text-xs text-text-light mt-2 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ POURQUOI EVE & CO ═══════ */}
      <section className="py-24 lg:py-32">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <div className="text-center mb-20">
              <span className="text-sm font-bold text-terra uppercase tracking-widest">Pourquoi EVE & CO</span>
              <h2 className="mt-4 text-4xl md:text-5xl font-bold text-deep leading-tight">
                Trois raisons <span className="text-terra">évidentes</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                emoji: "🌱",
                title: "Durable par nature",
                desc: "Coton bio certifié GOTS, zéro substance controversée, fabriquées en France. 300+ lavages garantis.",
              },
              {
                emoji: "💚",
                title: "ROI visible",
                desc: "150€ par personne sur 5 ans vs 300€ en jetables. Le confort profitable, c'est possible.",
              },
              {
                emoji: "🎯",
                title: "RSE mesurable",
                desc: "Rapports d'impact chiffrés. Intégrable dans votre DPEF. Vrai impact, vraies chiffres.",
              },
            ].map((item, i) => (
              <ScrollReveal key={i} animation="fadeUp" delay={i * 100}>
                <div className="bg-card rounded-3xl p-10 border border-warm-gray hover:border-terra transition-colors duration-300">
                  <div className="text-6xl mb-4">{item.emoji}</div>
                  <h3 className="text-2xl font-bold text-deep mb-3">{item.title}</h3>
                  <p className="text-text-light leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ PRODUITS SHOWCASE ═══════ */}
      <section id="produits" className="py-24 lg:py-32 bg-cream/40">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <div className="text-center mb-20">
              <span className="text-sm font-bold text-terra uppercase tracking-widest">Notre gamme</span>
              <h2 className="mt-4 text-4xl md:text-5xl font-bold text-deep leading-tight">
                Trois modèles, un seul objectif : ton confort
              </h2>
              <p className="mt-6 text-lg text-text-light max-w-2xl mx-auto">
                Coton bio certifié GOTS, zéro substance controversée, fabriquées en France. Chaque modèle est conçu pour un type de flux et un style de vie.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {[
              {
                id: "quotidienne",
                name: "La Quotidienne",
                absorption: "3 tampons • 8h",
                tagline: "L'incontournable du quotidien",
                desc: "Bureau, réunions, routine. Le classique parfait pour les flux légers à modérés. Discrète et confortable toute la journée.",
                features: ["Coton bio GOTS", "XS au 3XL", "300+ lavages", "Sechage rapide"],
                colors: ["rose", "noir", "beige"],
                image: "/images/products/quotidienne.webp",
              },
              {
                id: "active",
                name: "L'Active",
                absorption: "4 tampons • 10h",
                tagline: "Pour les femmes actives",
                desc: "Réunion, escaliers, vélo-taf, sport. Maintien sportif renforcé et séchage ultra-rapide. Flux modérés sans compromis.",
                features: ["Tissu respirant", "Maintien sportif", "Anti-fuites", "Sechage express"],
                colors: ["rose", "bleu", "noir"],
                image: "/images/products/active.webp",
              },
              {
                id: "serenite",
                name: "La Sérénité",
                absorption: "5 tampons • 12h",
                tagline: "La protection maximale",
                desc: "Flux abondants, longues journées, nuits tranquilles. La tranquillité absolue du matin au soir. Ultra-douce et ultra-protégée.",
                features: ["Absorption max", "Anti-fuites garanties", "Ultra-douce", "Nuit tranquille"],
                colors: ["rose", "noir", "prune"],
                image: "/images/products/serenite.webp",
              },
            ].map((product, i) => (
              <ScrollReveal key={i} animation="fadeUp" delay={i * 120}>
                <div className="bg-card rounded-3xl overflow-hidden border border-warm-gray hover:border-terra hover:shadow-2xl transition-all duration-300">
                  {/* Image placeholder */}
                  <div className="w-full h-72 bg-gradient-to-br from-cream to-warm-gray flex items-center justify-center relative overflow-hidden group">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        e.currentTarget.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%23f3f4f8' width='400' height='300'/%3E%3Ctext x='50%25' y='50%25' font-size='24' fill='%239ca3af' text-anchor='middle' dy='.3em'%3E${product.name}%3C/text%3E%3C/svg%3E`;
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-deep mb-1">{product.name}</h3>
                    <p className="text-sm font-semibold text-terra mb-4">{product.tagline}</p>

                    <span className="inline-block text-xs font-bold text-terra bg-cream px-3 py-1.5 rounded-full mb-6">
                      {product.absorption}
                    </span>

                    <p className="text-text-light leading-relaxed mb-6">{product.desc}</p>

                    {/* Features */}
                    <div className="mb-6 space-y-3">
                      {product.features.map((feature, j) => (
                        <div key={j} className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-terra rounded-full" />
                          <span className="text-sm text-deep">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Colors */}
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-text-light font-semibold">Coloris :</span>
                      {product.colors.map((color, j) => (
                        <div
                          key={j}
                          className="w-6 h-6 rounded-full border-2 border-warm-gray hover:border-terra transition-colors cursor-pointer"
                          style={{
                            backgroundColor:
                              color === "rose" ? "#FF6B9D" :
                              color === "noir" ? "#1F2937" :
                              color === "beige" ? "#F5EDE3" :
                              color === "bleu" ? "#00B4D8" :
                              color === "prune" ? "#8B5CF6" :
                              "#E5E7EB"
                          }}
                          title={color}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal animation="fadeUp">
            <div className="mt-16 bg-gradient-to-r from-terra/10 to-sage/10 rounded-3xl p-10 text-center border border-warm-gray">
              <h3 className="text-2xl font-bold text-deep mb-3">Besoin d'aide pour choisir ?</h3>
              <p className="text-text-light mb-6 max-w-xl mx-auto">
                Tous nos modèles sont testés et approuvés. Tu peux en demander des échantillons gratuitement pour trouver ton préféré.
              </p>
              <a href="#devis" className="inline-block bg-terra text-white font-semibold px-8 py-3 rounded-full hover:bg-terra-light transition-all duration-300">
                Demander des échantillons
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════ CALCULATEUR ═══════ */}
      <section id="impact" className="py-24 lg:py-32">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-sm font-bold text-terra uppercase tracking-widest">Calculez votre impact</span>
              <h2 className="mt-4 text-4xl md:text-5xl font-bold text-deep leading-tight">
                Votre entreprise, quel impact en 5 ans ?
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fadeUp">
            <div className="bg-card rounded-3xl p-12 border border-warm-gray">
              <WasteCalculator />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════ COMPARATIF JOURNEE ═══════ */}
      <section id="quotidien" className="py-24 lg:py-32 bg-cream/40">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-sm font-bold text-terra uppercase tracking-widest">Le quotidien</span>
              <h2 className="mt-4 text-4xl md:text-5xl font-bold text-deep leading-tight">
                Une journée, deux réalités
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fadeUp">
            <DayComparison />
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════ 6 ARGUMENTS ═══════ */}
      <section id="preuves" className="py-24 lg:py-32">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-sm font-bold text-terra uppercase tracking-widest">Les preuves</span>
              <h2 className="mt-4 text-4xl md:text-5xl font-bold text-deep leading-tight">
                6 arguments pour convaincre votre CODIR
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                num: "01",
                title: "RSE quantifiable",
                desc: "Rapport d'impact chiffré. Tonnes de déchets évités, CO2 économisé. Intégrable dans votre DPEF.",
              },
              {
                num: "02",
                title: "ROI en 6 mois",
                desc: "150€/personne sur 5 ans vs 300€ en jetables. Le calcul parle de lui-même.",
              },
              {
                num: "03",
                title: "-28% d'absentéisme",
                desc: "28% des femmes manquent le travail à cause de règles. Le confort, c'est la solution.",
              },
              {
                num: "04",
                title: "Attractivité employeur",
                desc: "73% des talents choisissent une entreprise engagée. C'est une vraie différence.",
              },
              {
                num: "05",
                title: "B Corp auditée",
                desc: "Pas d'auto-déclaration. Vérification indépendante de notre gouvernance et impact social.",
              },
              {
                num: "06",
                title: "Zéro logistique",
                desc: "Commande en ligne, livraison discrète, supports de com fournis. Votre seul effort : dire oui.",
              },
            ].map((arg, i) => (
              <ScrollReveal key={i} animation="fadeUp" delay={i * 80}>
                <div className="bg-card rounded-3xl p-10 border border-warm-gray hover:border-terra transition-colors duration-300">
                  <div className="text-5xl font-bold text-terra/30 mb-2">{arg.num}</div>
                  <h3 className="text-xl font-bold text-deep mb-3">{arg.title}</h3>
                  <p className="text-text-light leading-relaxed">{arg.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ TEMOIGNAGES ═══════ */}
      <section className="py-24 lg:py-32 bg-cream/40">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-sm font-bold text-terra uppercase tracking-widest">Témoignages</span>
              <h2 className="mt-4 text-4xl md:text-5xl font-bold text-deep">Elles l'ont fait. 💪</h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "97% d'adoption en un mois. Notre meilleure initiative bien-être, de très loin.",
                name: "Marie Dupont",
                title: "DRH",
                company: "NaturaCorp (120 collab.)",
              },
              {
                quote: "Un levier RSE concret avec des chiffres réels. Exactement ce qu'on cherchait.",
                name: "Pierre Martin",
                title: "Directeur RSE",
                company: "GreenTech (450 collab.)",
              },
              {
                quote: "10 jours de déploiement. Des mails de remerciement qu'on n'attendait pas.",
                name: "Sophie Laurent",
                title: "Office Manager",
                company: "Studio Nantes (35 collab.)",
              },
            ].map((t, i) => (
              <ScrollReveal key={i} animation="fadeUp" delay={i * 100}>
                <div className="bg-card rounded-3xl p-10 border border-warm-gray">
                  <p className="text-deep text-lg leading-relaxed italic mb-6">
                    "{t.quote}"
                  </p>
                  <div>
                    <p className="font-bold text-deep text-sm">{t.name}</p>
                    <p className="text-text-light text-xs mt-1">{t.title}</p>
                    <p className="text-terra text-xs font-bold mt-2">{t.company}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ CTA DEVIS ═══════ */}
      <section id="devis" className="py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-terra/5 via-transparent to-sage/5" />

        <div className="max-w-[1200px] mx-auto px-6 lg:px-10 relative z-10">
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left — copy */}
              <div>
                <span className="text-sm font-bold text-terra uppercase tracking-widest">Devis gratuit</span>
                <h2 className="mt-4 text-4xl md:text-5xl font-bold text-deep leading-tight">
                  On y va ?
                </h2>
                <p className="mt-6 text-lg text-text-light leading-relaxed">
                  Remplissez le formulaire. Notre équipe vous contacte dans les 48h avec un devis adapté à votre structure.
                </p>

                <div className="mt-12 space-y-5">
                  {[
                    { icon: "✓", label: "Réponse en 48h", desc: "Garantie." },
                    { icon: "✓", label: "Échantillons offerts", desc: "Testez avant de décider." },
                    { icon: "✓", label: "Zéro engagement", desc: "Si ça matche pas, pas de souci." },
                    { icon: "✓", label: "Accompagnement total", desc: "On gère tout." },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 items-start">
                      <span className="text-terra font-bold text-lg mt-0.5">{item.icon}</span>
                      <div>
                        <p className="font-bold text-deep">{item.label}</p>
                        <p className="text-text-light text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-12 pt-8 border-t border-warm-gray">
                  <p className="text-xs text-text-light uppercase tracking-widest font-bold mb-4">Contact direct</p>
                  <p className="text-base font-semibold text-deep mb-2">hello@eveandco.fr</p>
                  <p className="text-base font-semibold text-deep">+33 1 23 45 67 89</p>
                </div>
              </div>

              {/* Right — form */}
              <div className="bg-card rounded-3xl p-12 border border-warm-gray">
                <ContactForm />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
