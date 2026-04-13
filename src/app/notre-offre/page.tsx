import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";
import ProductCard from "@/components/ProductCard";

export const metadata: Metadata = {
  title: "Nos Culottes | eve&co",
  description: "Decouvrez nos culottes menstruelles pour entreprises. Confort, durabilite et style — pensees pour le quotidien au travail.",
};

export default function NotreOffre() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute top-10 right-20 w-40 h-40 bg-lavender/30 rounded-full float" />
        <div className="absolute bottom-10 left-10 w-20 h-20 bg-peach/40 rounded-full float-delay" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl">
            <span className="hero-animate inline-block bg-coral/10 text-coral text-sm font-bold px-4 py-2 rounded-full mb-6">
              Nos produits
            </span>
            <h1 className="hero-animate hero-animate-delay-1 text-4xl md:text-5xl lg:text-6xl font-bold text-navy leading-[1.1] tracking-tight">
              Des culottes conçues pour{" "}
              <span className="text-coral">la vraie vie</span> au bureau
            </h1>
            <p className="hero-animate hero-animate-delay-2 mt-6 text-lg text-text-light leading-relaxed">
              Coton bio, zero produit chimique, confort toute la journee. Vos collaboratrices vont les adorer.
            </p>
          </div>
        </div>
      </section>

      {/* Produits */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ScrollReveal animation="fadeUp" delay={0}>
              <ProductCard
                name="La Quotidienne"
                emoji="🌸"
                description="Le basique parfait. Absorption ideale pour une journee de travail sereine."
                features={[
                  "Absorption : 3 tampons",
                  "Coton bio certifie GOTS",
                  "Du XS au 3XL",
                  "Lavable 300+ fois",
                ]}
                color="bg-lavender/30"
              />
            </ScrollReveal>

            <ScrollReveal animation="fadeUp" delay={150}>
              <ProductCard
                name="L'Active"
                emoji="⚡"
                description="Pour celles qui bougent. Reunion, escaliers, velo — elle suit le rythme."
                features={[
                  "Absorption : 4 tampons",
                  "Tissu technique respirant",
                  "Maintien sportif",
                  "Sechage ultra-rapide",
                ]}
                color="bg-sage/20"
              />
            </ScrollReveal>

            <ScrollReveal animation="fadeUp" delay={300}>
              <ProductCard
                name="La Serenite"
                emoji="☁️"
                description="Flux abondants ? Zero stress. Notre plus haute absorption pour une tranquillite totale."
                features={[
                  "Absorption : 5 tampons",
                  "Technologie anti-fuites",
                  "Coupe enveloppante",
                  "Ultra-douce toute la journee",
                ]}
                color="bg-peach/30"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Le truc en plus */}
      <section className="py-20 lg:py-28 bg-soft-gray rounded-[3rem] mx-4 lg:mx-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              title="Ce que ca change pour votre entreprise"
              subtitle="Spoiler : beaucoup plus que vous ne pensez"
            />
          </ScrollReveal>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { emoji: "📊", title: "RSE mesurable", desc: "Des chiffres concrets pour votre rapport annuel. Pas du storytelling, des faits." },
              { emoji: "😊", title: "Marque employeur boostee", desc: "Les talents veulent des entreprises qui agissent. C'est un signal fort en entretien." },
              { emoji: "📉", title: "Absenteisme en baisse", desc: "Le confort menstruel reduit les arrets et le mal-etre. C'est documente." },
              { emoji: "♻️", title: "Zero dechet au bureau", desc: "Plus de poubelles pleines de protections jetables. Vos equipes nettoyage vous remercient." },
              { emoji: "🤝", title: "Egalite reelle", desc: "Prendre en charge le confort menstruel, c'est un pas concret vers l'egalite au travail." },
              { emoji: "💶", title: "Deductible fiscalement", desc: "Les depenses RSE et bien-etre au travail offrent des avantages fiscaux. On vous guide." },
            ].map((item, i) => (
              <ScrollReveal key={i} animation="fadeUp" delay={i * 80}>
                <div className="bg-white rounded-2xl p-6 flex gap-5 items-start transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <span className="text-3xl shrink-0">{item.emoji}</span>
                  <div>
                    <h3 className="font-bold text-navy mb-1">{item.title}</h3>
                    <p className="text-sm text-text-light leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              title="Simple comme 1, 2, 3, 4"
              subtitle="De votre premier message a la livraison, on gere tout"
            />
          </ScrollReveal>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Vous nous ecrivez", desc: "Un email, un formulaire. On repond en 48h max.", color: "bg-lavender/30" },
              { step: "2", title: "On chiffre ensemble", desc: "Devis gratuit personnalise selon la taille de votre equipe.", color: "bg-sage/20" },
              { step: "3", title: "Vos equipes choisissent", desc: "Chaque collaboratrice selectionne son modele et sa taille en ligne.", color: "bg-peach/30" },
              { step: "4", title: "Livraison discrete", desc: "Kits individuels livres au bureau. Accompagnement inclus.", color: "bg-sunny/30" },
            ].map((item, i) => (
              <ScrollReveal key={i} animation="fadeUp" delay={i * 120}>
                <div className={`${item.color} rounded-3xl p-8 text-center h-full`}>
                  <div className="text-5xl font-bold text-coral mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-bold text-navy mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-text-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 mx-4 lg:mx-8">
        <ScrollReveal>
          <div className="bg-navy rounded-[3rem] p-12 lg:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Envie de voir ca en vrai ?
            </h2>
            <p className="mt-4 text-white/50 text-lg max-w-lg mx-auto">
              On peut vous envoyer des echantillons gratuits pour que vos equipes testent.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" className="!bg-coral !text-white hover:!bg-accent-dark">
                Commander des echantillons →
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
