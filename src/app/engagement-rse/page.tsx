import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import StatCard from "@/components/StatCard";
import Button from "@/components/Button";
import BCorpBadge from "@/components/BCorpBadge";

export const metadata: Metadata = {
  title: "Engagement RSE & B Corp | EVE & CO",
  description:
    "Decouvrez notre engagement RSE et notre certification B Corp. EVE & CO s'engage pour un impact positif sur l'environnement et le bien-etre au travail.",
};

export default function EngagementRSE() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 lg:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="hero-animate text-4xl md:text-5xl lg:text-6xl font-extralight text-charcoal leading-[1.1] tracking-tight">
              Notre Engagement{" "}
              <span className="text-accent">RSE & B Corp</span>
            </h1>
            <p className="hero-animate hero-animate-delay-1 mt-6 text-lg text-text-light font-light leading-relaxed">
              Chaque action compte. Decouvrez comment EVE & CO transforme le quotidien des entreprises tout en protegeant la planete.
            </p>
          </div>
        </div>
      </section>

      {/* Le probleme */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal animation="slideLeft">
              <div>
                <SectionHeading
                  title="Le probleme des protections jetables"
                  centered={false}
                />
                <div className="mt-8 space-y-6 text-text-light font-light leading-relaxed">
                  <p>
                    Chaque annee, des milliards de protections hygieniques jetables finissent dans nos oceans et decharges. Une seule serviette met jusqu&apos;a 500 ans a se decomposer.
                  </p>
                  <p>
                    Au-dela de l&apos;impact environnemental, ces produits contiennent souvent des substances chimiques controversees. La precarite menstruelle touche encore des millions de personnes en France.
                  </p>
                  <p>
                    Les entreprises ont un role majeur a jouer. En proposant une alternative durable a leurs collaboratrices, elles agissent concretement sur ces trois enjeux.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="slideRight">
              <div className="bg-beige p-10 lg:p-14">
                <div className="space-y-8">
                  <div>
                    <div className="text-4xl font-extralight text-charcoal">500 ans</div>
                    <p className="mt-1 text-sm text-text-light">pour decomposer une seule serviette jetable</p>
                  </div>
                  <div className="w-full h-px bg-accent/20" />
                  <div>
                    <div className="text-4xl font-extralight text-charcoal">200+</div>
                    <p className="mt-1 text-sm text-text-light">substances chimiques dans les protections classiques</p>
                  </div>
                  <div className="w-full h-px bg-accent/20" />
                  <div>
                    <div className="text-4xl font-extralight text-charcoal">2 millions</div>
                    <p className="mt-1 text-sm text-text-light">de personnes en precarite menstruelle en France</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* B Corp */}
      <section className="py-20 lg:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <ScrollReveal>
            <BCorpBadge className="mb-8" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extralight text-charcoal leading-tight max-w-3xl mx-auto">
              Certifie B Corp : l&apos;exigence au service de l&apos;impact
            </h2>
            <p className="mt-6 text-text-light font-light text-lg max-w-2xl mx-auto leading-relaxed">
              La certification B Corp garantit que notre entreprise repond aux normes les plus elevees en matiere de performance sociale et environnementale, de transparence et de responsabilite.
            </p>
          </ScrollReveal>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Gouvernance",
                desc: "Transparence totale sur nos pratiques, notre chaine d'approvisionnement et nos impacts.",
              },
              {
                title: "Environnement",
                desc: "Materiaux biologiques, production locale, emballages recyclables et bilan carbone compense.",
              },
              {
                title: "Communaute",
                desc: "Salaires equitables, conditions de travail exemplaires et soutien aux associations.",
              },
            ].map((item, i) => (
              <ScrollReveal key={i} animation="scaleIn" delay={i * 150}>
                <div className="bg-white p-8 lg:p-10">
                  <h3 className="text-xl font-light text-charcoal mb-3">
                    {item.title}
                  </h3>
                  <p className="text-text-light font-light leading-relaxed text-sm">
                    {item.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Impact chiffre */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              title="Notre impact en chiffres"
              subtitle="Chaque culotte EVE & CO fait la difference"
            />
          </ScrollReveal>

          <div className="mt-16">
            <ScrollReveal>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                <StatCard value={150000} suffix="" label="protections jetables evitees" />
                <StatCard value={12} suffix=" T" label="de dechets en moins" />
                <StatCard value={85} suffix="%" label="de reduction d'empreinte carbone" />
                <StatCard value={100} suffix="%" label="coton biologique certifie" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Guide integration RSE */}
      <section className="py-20 lg:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              title="Integrez EVE & CO dans votre demarche RSE"
              subtitle="Un deploiement simple en 4 etapes"
            />
          </ScrollReveal>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                step: "01",
                title: "Diagnostic initial",
                desc: "Nous evaluons ensemble les besoins de votre entreprise et de vos collaboratrices pour definir la meilleure approche.",
              },
              {
                step: "02",
                title: "Communication interne",
                desc: "Nous fournissons des supports de communication pour sensibiliser vos equipes et valoriser votre initiative.",
              },
              {
                step: "03",
                title: "Deploiement",
                desc: "Distribution personnalisee avec choix de modeles et tailles. Chaque collaboratrice reçoit son kit de maniere discrete.",
              },
              {
                step: "04",
                title: "Mesure d'impact",
                desc: "Nous vous fournissons un rapport d'impact RSE chiffre que vous pouvez integrer a votre reporting annuel.",
              },
            ].map((item, i) => (
              <ScrollReveal key={i} animation="fadeUp" delay={i * 100}>
                <div className="bg-white p-8 lg:p-10 flex gap-6">
                  <div className="text-3xl font-extralight text-accent shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-lg font-light text-charcoal mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-text-light font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-charcoal">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extralight text-white leading-tight">
              Faites de votre entreprise
              <br />
              <span className="text-accent">un acteur du changement</span>
            </h2>
            <p className="mt-6 text-white/60 font-light text-lg max-w-xl mx-auto">
              Rejoignez le mouvement des entreprises engagees pour un avenir plus durable.
            </p>
            <div className="mt-10">
              <Button
                href="/contact"
                className="!bg-accent !text-white hover:!bg-accent-dark"
              >
                Nous contacter
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
