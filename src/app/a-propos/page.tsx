import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "A propos | EVE & CO",
  description:
    "Decouvrez l'histoire d'EVE & CO, notre mission et les valeurs qui guident notre engagement pour le confort menstruel durable en entreprise.",
};

export default function APropos() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 lg:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="hero-animate text-4xl md:text-5xl lg:text-6xl font-extralight text-charcoal leading-[1.1] tracking-tight">
              A propos d&apos;
              <span className="text-accent">EVE & CO</span>
            </h1>
            <p className="hero-animate hero-animate-delay-1 mt-6 text-lg text-text-light font-light leading-relaxed">
              Nee d&apos;une conviction : le confort menstruel ne devrait jamais etre un compromis, ni pour les femmes, ni pour la planete.
            </p>
          </div>
        </div>
      </section>

      {/* Notre Histoire */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal animation="slideLeft">
              <div className="aspect-[4/5] bg-beige flex items-center justify-center">
                <span className="text-accent/40 text-sm tracking-widest uppercase">
                  Photo fondatrice
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="slideRight">
              <div>
                <SectionHeading title="Notre Histoire" centered={false} />
                <div className="mt-8 space-y-6 text-text-light font-light leading-relaxed">
                  <p>
                    Tout a commence par un constat simple : chaque mois, des millions de femmes utilisent des protections jetables polluantes, inconfortables et souvent chargees en produits chimiques.
                  </p>
                  <p>
                    EVE & CO est nee de la volonte de proposer une alternative a la hauteur des enjeux actuels. Nous avons passe deux ans a developper une culotte menstruelle qui allie performance, confort et respect de l&apos;environnement.
                  </p>
                  <p>
                    En 2023, nous avons elargi notre mission au monde de l&apos;entreprise. Pourquoi ? Parce que le bien-etre menstruel au travail est encore un tabou, et les entreprises ont le pouvoir de changer les choses.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 lg:py-28 bg-cream">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <ScrollReveal animation="fadeUp">
            <p className="text-xs tracking-[0.3em] uppercase text-accent mb-8">
              Notre Mission
            </p>
            <blockquote className="text-2xl md:text-3xl lg:text-4xl font-extralight text-charcoal leading-relaxed">
              &laquo; Rendre le confort menstruel accessible a toutes, dans tous les environnements, tout en preservant notre planete. &raquo;
            </blockquote>
            <div className="mt-8 w-16 h-px bg-accent mx-auto" />
          </ScrollReveal>
        </div>
      </section>

      {/* Valeurs */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              title="Nos Valeurs"
              subtitle="Les principes qui guident chacune de nos decisions"
            />
          </ScrollReveal>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Transparence",
                desc: "Composition, fabrication, prix : nous n'avons rien a cacher. Chaque information est accessible et verifiable.",
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-accent">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                ),
              },
              {
                title: "Durabilite",
                desc: "Nos produits sont conçus pour durer 5 ans minimum. Chaque choix de materiau vise a minimiser notre empreinte.",
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-accent">
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                    <path d="M12 6v6l4 2" strokeLinecap="round" />
                  </svg>
                ),
              },
              {
                title: "Inclusivite",
                desc: "Nos culottes sont disponibles du XS au 3XL. Le confort menstruel est un droit, pas un privilege.",
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-accent">
                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
                  </svg>
                ),
              },
              {
                title: "Innovation",
                desc: "Nous investissons continuellement dans la R&D pour offrir des produits toujours plus performants et confortables.",
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-accent">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                ),
              },
            ].map((value, i) => (
              <ScrollReveal key={i} animation="fadeUp" delay={i * 100}>
                <div className="p-8 bg-cream transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                  <div className="w-12 h-12 bg-white flex items-center justify-center mb-6">
                    {value.icon}
                  </div>
                  <h3 className="text-lg font-light text-charcoal mb-3">
                    {value.title}
                  </h3>
                  <p className="text-sm text-text-light font-light leading-relaxed">
                    {value.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Equipe */}
      <section className="py-20 lg:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              title="L'equipe"
              subtitle="Des passionnees au service de votre bien-etre"
            />
          </ScrollReveal>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                name: "Claire Moreau",
                role: "Fondatrice & CEO",
                bio: "Ancienne consultante RSE, Claire a fonde EVE & CO pour concilier impact social et entrepreneuriat.",
              },
              {
                name: "Amina Khelifi",
                role: "Directrice Produit",
                bio: "Ingenieure textile, Amina supervise le developpement de nos produits et l'innovation materiau.",
              },
              {
                name: "Lucas Bernard",
                role: "Responsable Partenariats B2B",
                bio: "Expert en relations entreprises, Lucas accompagne nos clients dans leur demarche RSE.",
              },
            ].map((member, i) => (
              <ScrollReveal key={i} animation="scaleIn" delay={i * 150}>
                <div className="text-center">
                  <div className="w-32 h-32 bg-beige rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-accent/40 text-xs tracking-widest uppercase">
                      Photo
                    </span>
                  </div>
                  <h3 className="text-lg font-light text-charcoal">
                    {member.name}
                  </h3>
                  <p className="text-xs text-accent tracking-widest uppercase mt-1">
                    {member.role}
                  </p>
                  <p className="mt-3 text-sm text-text-light font-light leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-extralight text-charcoal">
              Envie d&apos;en savoir plus ?
            </h2>
            <p className="mt-4 text-text-light font-light text-lg max-w-lg mx-auto">
              Echangeons sur votre projet et decouvrez comment EVE & CO peut accompagner votre entreprise.
            </p>
            <div className="mt-8">
              <Button href="/contact">Nous contacter</Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
