"use client";

import ScrollReveal from "./ScrollReveal";

export default function ProductShowcase() {
  const products = [
    {
      id: "culotte",
      name: "La culotte menstruelle",
      absorption: "Flux abondant",
      tagline: "La protection au quotidien",
      desc: "La culotte de base, confortable et discrète. Parfaite pour le bureau, les réunions, la routine. Protection fiable et durable pour les flux abondants.",
      features: ["Coton bio certifié GOTS", "XXS au 5XL", "12H de protection"],
      image: "/images/La culotte menstruelle.webp",
    },
    {
      id: "shorty",
      name: "Le shorty menstruel",
      absorption: "Flux abondant",
      tagline: "Pour plus de maintien",
      desc: "Coupe plus cintrée avec maintien renforcé. Idéal pour les réunions, les déplacements, le sport léger. Même protection fiable en flux abondant, avec plus de légèreté.",
      features: ["Coton bio certifié GOTS", "XXS au 5XL", "12H de protection"],
      image: "/images/Le shorty menstruel.webp",
    },
    {
      id: "tanga",
      name: "Le tanga menstruel",
      absorption: "Flux modéré",
      tagline: "Discrétion et confort",
      desc: "Le minimaliste à porter sous n'importe quoi. Idéal pour les flux modérés, les journées légères. Tellement discret qu'on oublie qu'on le porte.",
      features: ["Coton bio certifié GOTS", "XXS au 5XL", "12H de protection"],
      image: "/images/Le tanga menstruel.webp",
    },
  ];

  return (
    <section id="produits" className="py-16 lg:py-20 bg-cream/40">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <ScrollReveal>
          <div className="text-center mb-20">
            <span className="text-sm font-bold text-terra uppercase tracking-widest">Notre gamme</span>
            <h2 className="mt-4 text-4xl md:text-4xl font-bold text-deep leading-tight">
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

                  {/* Color badge */}
                  <div className="inline-block bg-deep/10 text-deep text-xs font-bold px-3 py-1.5 rounded-full">
                    100% Noir
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
