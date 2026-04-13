import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";
import ProductCard from "@/components/ProductCard";

export const metadata: Metadata = {
  title: "Notre Offre | EVE & CO",
  description:
    "Decouvrez notre gamme de culottes menstruelles pour entreprises. Des solutions adaptees a chaque besoin, pour un bien-etre durable au travail.",
};

export default function NotreOffre() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 lg:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="hero-animate text-4xl md:text-5xl lg:text-6xl font-extralight text-charcoal leading-[1.1] tracking-tight">
              Notre Offre
            </h1>
            <p className="hero-animate hero-animate-delay-1 mt-6 text-lg text-text-light font-light leading-relaxed">
              Des culottes menstruelles pensees pour le monde de l&apos;entreprise. Confort, qualite et durabilite au service de vos equipes.
            </p>
          </div>
        </div>
      </section>

      {/* Catalogue */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              title="Nos Produits"
              subtitle="Trois modeles conçus pour repondre a tous les besoins"
            />
          </ScrollReveal>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollReveal animation="fadeUp" delay={0}>
              <ProductCard
                name="Le Classique"
                description="Notre modele iconique, ideal pour le quotidien au bureau. Absorption moyenne, confort optimal."
                features={[
                  "Absorption : 3 tampons",
                  "Coton bio certifie GOTS",
                  "Du XS au 3XL",
                  "Lavable 300+ fois",
                ]}
                color="bg-beige"
              />
            </ScrollReveal>

            <ScrollReveal animation="fadeUp" delay={150}>
              <ProductCard
                name="Le Sport"
                description="Pour les collaboratrices actives. Maintien renforce et absorption superieure."
                features={[
                  "Absorption : 4 tampons",
                  "Tissu technique respirant",
                  "Maintien ergonomique",
                  "Sechage rapide",
                ]}
                color="bg-cream"
              />
            </ScrollReveal>

            <ScrollReveal animation="fadeUp" delay={300}>
              <ProductCard
                name="Le Confort+"
                description="Notre modele haute absorption pour les flux importants. Serenite absolue toute la journee."
                features={[
                  "Absorption : 5 tampons",
                  "Technologie anti-fuites",
                  "Coupe enveloppante",
                  "Tissu ultra-doux",
                ]}
                color="bg-beige"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Avantages entreprises */}
      <section className="py-20 lg:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal animation="slideLeft">
              <div>
                <SectionHeading
                  title="Les avantages pour votre entreprise"
                  centered={false}
                />
                <ul className="mt-10 space-y-6">
                  {[
                    {
                      title: "Impact RSE mesurable",
                      desc: "Chaque kit deploye represente des centaines de protections jetables evitees par an.",
                    },
                    {
                      title: "Bien-etre au travail",
                      desc: "Reduisez l'absenteisme lie a l'inconfort menstruel et ameliorez la qualite de vie.",
                    },
                    {
                      title: "Economies significatives",
                      desc: "Plus besoin de distributeurs de protections jetables. Un investissement unique et durable.",
                    },
                    {
                      title: "Image de marque employeur",
                      desc: "Montrez votre engagement concret pour l'egalite et le bien-etre de vos equipes.",
                    },
                    {
                      title: "Avantage fiscal",
                      desc: "Les depenses RSE peuvent etre deductibles. Nous vous accompagnons dans les demarches.",
                    },
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="text-accent shrink-0 mt-0.5"
                      >
                        <path
                          d="M5 12l5 5L20 7"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <div>
                        <h4 className="font-medium text-charcoal">
                          {item.title}
                        </h4>
                        <p className="mt-1 text-sm text-text-light font-light">
                          {item.desc}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="slideRight">
              <div className="aspect-[4/5] bg-beige flex items-center justify-center">
                <span className="text-accent/40 text-sm tracking-widest uppercase">
                  Photo
                </span>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              title="Comment ca marche"
              subtitle="Un accompagnement simple et personnalise, de A a Z"
            />
          </ScrollReveal>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Prise de contact",
                desc: "Vous nous contactez et nous echangeons sur vos besoins et la taille de votre equipe.",
              },
              {
                step: "02",
                title: "Etude personnalisee",
                desc: "Nous elaborons une proposition adaptee a votre entreprise avec un budget detaille.",
              },
              {
                step: "03",
                title: "Choix des produits",
                desc: "Vos collaboratrices choisissent leurs modeles et tailles via notre plateforme dediee.",
              },
              {
                step: "04",
                title: "Livraison & suivi",
                desc: "Livraison discrete au bureau et accompagnement pour une adoption reussie.",
              },
            ].map((item, i) => (
              <ScrollReveal key={i} animation="fadeUp" delay={i * 150}>
                <div className="text-center">
                  <div className="text-5xl font-extralight text-accent mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-light text-charcoal mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-text-light font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-extralight text-charcoal">
              Pret a equiper vos equipes ?
            </h2>
            <p className="mt-4 text-text-light font-light text-lg max-w-lg mx-auto">
              Recevez un devis personnalise gratuit et sans engagement.
            </p>
            <div className="mt-8">
              <Button href="/contact">Demander un devis personnalise</Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
