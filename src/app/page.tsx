import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";
import BCorpBadge from "@/components/BCorpBadge";
import StatCard from "@/components/StatCard";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center bg-cream overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32 relative z-10">
          <div className="max-w-3xl">
            <div className="hero-animate hero-animate-delay-1">
              <BCorpBadge className="mb-8" />
            </div>
            <h1 className="hero-animate hero-animate-delay-2 text-4xl md:text-5xl lg:text-7xl font-extralight text-charcoal leading-[1.1] tracking-tight">
              Integrez le confort menstruel dans votre{" "}
              <span className="text-accent">politique RSE</span>
            </h1>
            <p className="hero-animate hero-animate-delay-2 mt-8 text-lg md:text-xl text-text-light font-light leading-relaxed max-w-xl">
              Offrez a vos collaboratrices une solution durable, saine et
              confortable. Un geste concret pour le bien-etre au travail et
              l&apos;environnement.
            </p>
            <div className="hero-animate hero-animate-delay-3 mt-10 flex flex-col sm:flex-row gap-4">
              <Button href="/contact">Demander un devis</Button>
              <Button href="/notre-offre" variant="secondary">
                Decouvrir notre offre
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative element */}
        <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-1/3 bg-beige" />
      </section>

      {/* Stats */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
              <StatCard value={45} suffix=" Mrd" label="protections jetees chaque annee dans le monde" />
              <StatCard value={5} suffix=" ans" label="duree de vie d'une culotte EVE & CO" />
              <StatCard value={300} suffix="€" label="d'economie par collaboratrice sur 5 ans" />
              <StatCard value={92} suffix="%" label="de satisfaction collaboratrices" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Pourquoi EVE & CO */}
      <section className="py-20 lg:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              title="Pourquoi choisir EVE & CO"
              subtitle="Une solution complete qui repond aux enjeux de votre entreprise"
            />
          </ScrollReveal>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            <ScrollReveal animation="fadeUp" delay={0}>
              <div className="bg-white p-8 lg:p-10 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="w-12 h-12 bg-beige flex items-center justify-center mb-6">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-accent">
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                    <path d="M8 12l3 3 5-5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="text-xl font-light text-charcoal mb-3">
                  Engagement RSE concret
                </h3>
                <p className="text-text-light font-light leading-relaxed">
                  Integrez une action mesurable dans votre strategie RSE. Chaque culotte menstruelle adoptee, c&apos;est 200 protections jetables en moins.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fadeUp" delay={150}>
              <div className="bg-white p-8 lg:p-10 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="w-12 h-12 bg-beige flex items-center justify-center mb-6">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-accent">
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 100 7h5a3.5 3.5 0 110 7H6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="text-xl font-light text-charcoal mb-3">
                  Economies a long terme
                </h3>
                <p className="text-text-light font-light leading-relaxed">
                  Un investissement initial qui se rentabilise en quelques mois. Fini les distributeurs de protections jetables et leurs couts recurrents.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fadeUp" delay={300}>
              <div className="bg-white p-8 lg:p-10 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="w-12 h-12 bg-beige flex items-center justify-center mb-6">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-accent">
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                  </svg>
                </div>
                <h3 className="text-xl font-light text-charcoal mb-3">
                  Bien-etre des collaboratrices
                </h3>
                <p className="text-text-light font-light leading-relaxed">
                  Montrez que vous prenez soin de toutes vos equipes. Un geste fort pour l&apos;egalite et le confort au quotidien.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Temoignages */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              title="Ils nous font confiance"
              subtitle="Des entreprises engagees temoignent"
            />
          </ScrollReveal>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "Integrer EVE & CO dans notre politique bien-etre a ete une evidence. Nos collaboratrices nous remercient chaque jour.",
                name: "Marie Dupont",
                role: "DRH",
                company: "NaturaCorp",
              },
              {
                quote:
                  "Un impact RSE mesurable, des collaboratrices ravies, et des economies. On se demande pourquoi on ne l'a pas fait plus tot.",
                name: "Pierre Martin",
                role: "Directeur RSE",
                company: "GreenTech Solutions",
              },
              {
                quote:
                  "EVE & CO a su nous accompagner de A a Z. Le deploiement a ete simple et l'adoption immediate.",
                name: "Sophie Laurent",
                role: "Office Manager",
                company: "Studio Creatif Nantes",
              },
            ].map((testimonial, i) => (
              <ScrollReveal key={i} animation="scaleIn" delay={i * 150}>
                <div className="bg-cream p-8 lg:p-10 relative">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-accent/30 mb-4"
                  >
                    <path
                      d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1zm12 0c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"
                      fill="currentColor"
                    />
                  </svg>
                  <p className="text-charcoal font-light leading-relaxed mb-6">
                    {testimonial.quote}
                  </p>
                  <div>
                    <p className="text-sm font-medium text-charcoal">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-text-light mt-0.5">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="py-20 lg:py-28 bg-charcoal">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <ScrollReveal animation="fadeUp">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extralight text-white leading-tight">
              Pret a transformer votre
              <br />
              <span className="text-accent">engagement RSE ?</span>
            </h2>
            <p className="mt-6 text-white/60 font-light text-lg max-w-xl mx-auto">
              Rejoignez les entreprises qui font le choix du confort durable pour leurs equipes.
            </p>
            <div className="mt-10">
              <Button
                href="/contact"
                className="!bg-accent !text-white hover:!bg-accent-dark"
              >
                Demander un devis gratuit
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
