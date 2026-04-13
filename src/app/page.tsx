import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";
import BCorpBadge from "@/components/BCorpBadge";
import StatCard from "@/components/StatCard";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[95vh] flex items-center overflow-hidden">
        {/* Floating shapes */}
        <div className="absolute top-20 right-10 w-32 h-32 bg-lavender rounded-full opacity-60 float" />
        <div className="absolute bottom-20 right-1/4 w-20 h-20 bg-peach rounded-full opacity-50 float-delay" />
        <div className="absolute top-1/3 left-10 w-16 h-16 bg-sage rounded-full opacity-40 float" />
        <div className="absolute bottom-1/3 right-10 w-24 h-24 bg-sunny rounded-full opacity-30 float-delay" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32 relative z-10">
          <div className="max-w-4xl">
            <div className="hero-animate hero-animate-delay-1 flex gap-3 mb-8">
              <BCorpBadge />
              <span className="inline-flex items-center bg-lavender/50 text-lavender-deep text-xs font-bold px-4 py-2 rounded-full">
                Made in France
              </span>
            </div>

            <h1 className="hero-animate hero-animate-delay-2 text-5xl md:text-6xl lg:text-8xl font-bold text-navy leading-[1.05] tracking-tight">
              La culotte qui change{" "}
              <span className="relative inline-block">
                <span className="relative z-10">tout</span>
                <span className="absolute bottom-2 left-0 w-full h-4 bg-sunny/60 -z-0 rounded" />
              </span>
              <br />
              au bureau.
            </h1>

            <p className="hero-animate hero-animate-delay-3 mt-8 text-xl md:text-2xl text-text-light leading-relaxed max-w-2xl">
              Vos collaboratrices meritent mieux que des protections jetables pleines de chimie. Offrez-leur du confort, de la liberte, et un vrai geste RSE.
            </p>

            <div className="hero-animate hero-animate-delay-4 mt-10 flex flex-col sm:flex-row gap-4 items-start">
              <Button href="/contact">
                On en parle ? →
              </Button>
              <Button href="/notre-offre" variant="secondary">
                Voir les produits
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee band */}
      <section className="py-5 bg-coral text-white overflow-hidden">
        <div className="marquee whitespace-nowrap">
          <span className="inline-block text-sm font-bold tracking-wider mx-8">CONFORT &bull; DURABILITE &bull; RSE &bull; B CORP &bull; MADE IN FRANCE &bull; ZERO DECHET &bull; BIEN-ETRE &bull; EGALITE &bull; CONFORT &bull; DURABILITE &bull; RSE &bull; B CORP &bull; MADE IN FRANCE &bull; ZERO DECHET &bull; BIEN-ETRE &bull; EGALITE &bull;</span>
          <span className="inline-block text-sm font-bold tracking-wider mx-8">CONFORT &bull; DURABILITE &bull; RSE &bull; B CORP &bull; MADE IN FRANCE &bull; ZERO DECHET &bull; BIEN-ETRE &bull; EGALITE &bull; CONFORT &bull; DURABILITE &bull; RSE &bull; B CORP &bull; MADE IN FRANCE &bull; ZERO DECHET &bull; BIEN-ETRE &bull; EGALITE &bull;</span>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
              <StatCard value={45} suffix=" Mrd" label="protections jetees / an dans le monde" color="bg-lavender/30" />
              <StatCard value={5} suffix=" ans" label="de duree de vie minimum" color="bg-sage/30" />
              <StatCard value={300} suffix="€" label="d'economie par personne sur 5 ans" color="bg-peach/50" />
              <StatCard value={92} suffix="%" label="de collaboratrices satisfaites" color="bg-sunny/30" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Le pitch */}
      <section className="py-20 lg:py-28 bg-soft-gray rounded-[3rem] mx-4 lg:mx-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-coral font-bold text-sm uppercase tracking-wider">Pourquoi EVE&CO ?</span>
              <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-navy leading-tight">
                3 raisons de ne plus jamais revenir en arriere
              </h2>
            </div>
          </ScrollReveal>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            <ScrollReveal animation="fadeUp" delay={0}>
              <div className="bg-white rounded-3xl p-8 lg:p-10 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <div className="w-14 h-14 bg-lavender rounded-2xl flex items-center justify-center mb-6 text-2xl">
                  🌍
                </div>
                <h3 className="text-xl font-bold text-navy mb-3">
                  Impact ecolo reel
                </h3>
                <p className="text-text-light leading-relaxed">
                  1 culotte = 200 protections jetables evitees. Faites le calcul pour toute votre equipe. C&apos;est vertigineux.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fadeUp" delay={150}>
              <div className="bg-white rounded-3xl p-8 lg:p-10 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <div className="w-14 h-14 bg-sage/30 rounded-2xl flex items-center justify-center mb-6 text-2xl">
                  💰
                </div>
                <h3 className="text-xl font-bold text-navy mb-3">
                  Rentable des le 1er mois
                </h3>
                <p className="text-text-light leading-relaxed">
                  Fini les distributeurs, les commandes recurrentes, la logistique. Un investissement unique qui se rentabilise tres vite.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fadeUp" delay={300}>
              <div className="bg-white rounded-3xl p-8 lg:p-10 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <div className="w-14 h-14 bg-peach/50 rounded-2xl flex items-center justify-center mb-6 text-2xl">
                  💜
                </div>
                <h3 className="text-xl font-bold text-navy mb-3">
                  Equipes qui vous remercient
                </h3>
                <p className="text-text-light leading-relaxed">
                  Le confort menstruel au travail, c&apos;est pas un luxe. C&apos;est un signal fort que vous prenez soin de tout le monde.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Temoignages */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              title="Elles l'ont fait. Elles recommenceraient."
              subtitle="Ce que disent les entreprises qui nous font confiance"
            />
          </ScrollReveal>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote: "On a deploye EVE&CO pour 120 collaboratrices. La reaction ? Des sourires, des mercis, et un taux d'adoption de 97%. Incroyable.",
                name: "Marie Dupont",
                role: "DRH",
                company: "NaturaCorp",
                color: "bg-lavender/20",
              },
              {
                quote: "Notre rapport RSE n'avait jamais ete aussi concret. Des chiffres d'impact reels, pas du greenwashing. On adore.",
                name: "Pierre Martin",
                role: "Directeur RSE",
                company: "GreenTech Solutions",
                color: "bg-sage/20",
              },
              {
                quote: "L'equipe EVE&CO nous a guide de A a Z. Deploiement ultra simple, communication clee en main. Pourquoi on a attendu ?",
                name: "Sophie Laurent",
                role: "Office Manager",
                company: "Studio Creatif Nantes",
                color: "bg-peach/30",
              },
            ].map((testimonial, i) => (
              <ScrollReveal key={i} animation="scaleIn" delay={i * 150}>
                <div className={`${testimonial.color} rounded-3xl p-8 lg:p-10 h-full flex flex-col`}>
                  <div className="text-coral text-4xl mb-4">&ldquo;</div>
                  <p className="text-navy leading-relaxed mb-6 flex-1">
                    {testimonial.quote}
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-sm font-bold text-coral">
                      {testimonial.name[0]}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-navy">
                        {testimonial.name}
                      </p>
                      <p className="text-xs text-text-light">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Big CTA */}
      <section className="py-20 lg:py-28 mx-4 lg:mx-8">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="bg-coral rounded-[3rem] p-12 lg:p-20 text-center relative overflow-hidden">
              {/* Decorative circles */}
              <div className="absolute top-10 left-10 w-24 h-24 bg-white/10 rounded-full" />
              <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/10 rounded-full" />
              <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-white/5 rounded-full" />

              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                  Pret a rejoindre le mouvement ?
                </h2>
                <p className="mt-6 text-white/80 text-lg max-w-xl mx-auto">
                  Devis gratuit, reponse en 48h, zero prise de tete. On s&apos;occupe de tout.
                </p>
                <div className="mt-10">
                  <Button
                    href="/contact"
                    className="!bg-white !text-coral hover:!bg-navy hover:!text-white"
                  >
                    Demander mon devis gratuit →
                  </Button>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
