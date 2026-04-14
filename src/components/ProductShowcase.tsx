"use client";

import ScrollReveal from "./ScrollReveal";

export default function ProductShowcase() {
  const products = [
    {
      id: "quotidienne",
      name: "La Quotidienne",
      absorption: "3 tampons • 8h",
      tagline: "L'incontournable du quotidien",
      desc: "Bureau, réunions, routine. Le classique parfait pour les flux légers à modérés. Discrète et confortable toute la journée.",
      features: ["Coton bio GOTS", "XS au 3XL", "300+ lavages", "Sechage rapide"],
      colors: ["rose", "noir", "beige"],
      image: "/images/La culotte menstruelle.webp",
    },
    {
      id: "active",
      name: "L'Active",
      absorption: "4 tampons • 10h",
      tagline: "Pour les femmes actives",
      desc: "Réunion, escaliers, vélo-taf, sport. Maintien sportif renforcé et séchage ultra-rapide. Flux modérés sans compromis.",
      features: ["Tissu respirant", "Maintien sportif", "Anti-fuites", "Sechage express"],
      colors: ["rose", "bleu", "noir"],
      image: "/images/Le shorty menstruel.webp",
    },
    {
      id: "serenite",
      name: "La Sérénité",
      absorption: "5 tampons • 12h",
      tagline: "La protection maximale",
      desc: "Flux abondants, longues journées, nuits tranquilles. La tranquillité absolue du matin au soir. Ultra-douce et ultra-protégée.",
      features: ["Absorption max", "Anti-fuites garanties", "Ultra-douce", "Nuit tranquille"],
      colors: ["rose", "noir", "prune"],
      image: "/images/Le tanga menstruel.webp",
    },
  ];

  const colorMap: { [key: string]: string } = {
    rose: "#FF6B9D",
    noir: "#1F2937",
    beige: "#F5EDE3",
    bleu: "#00B4D8",
    prune: "#8B5CF6",
  };

  return (
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
          {products.map((product, i) => (
            <ScrollReveal key={i} animation="fadeUp" delay={i * 120}>
              <div className="bg-card rounded-3xl overflow-hidden border border-warm-gray hover:border-terra hover:shadow-2xl transition-all duration-300">
                {/* Image */}
                <div className="w-full h-72 bg-gradient-to-br from-cream to-warm-gray flex items-center justify-center relative overflow-hidden group">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
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
                        style={{ backgroundColor: colorMap[color] || "#E5E7EB" }}
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
  );
}
