import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import StatCard from "@/components/StatCard";
import Button from "@/components/Button";
import BCorpBadge from "@/components/BCorpBadge";

export const metadata: Metadata = {
  title: "Notre Impact | eve&co",
  description: "Decouvrez l'impact reel d'EVE & CO : B Corp, zero dechet, made in France. Les chiffres parlent d'eux-memes.",
};

export default function EngagementRSE() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute top-20 right-10 w-48 h-48 bg-sage/20 rounded-full float" />
        <div className="absolute bottom-10 left-20 w-24 h-24 bg-coral/10 rounded-full float-delay" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="hero-animate flex gap-3 mb-6">
              <BCorpBadge />
            </div>
            <h1 className="hero-animate hero-animate-delay-1 text-4xl md:text-5xl lg:text-7xl font-bold text-navy leading-[1.05] tracking-tight">
              On ne fait pas du{" "}
              <span className="line-through text-text-light">greenwashing</span>
              <br />
              On fait la <span className="text-coral">difference</span>
            </h1>
            <p className="hero-animate hero-animate-delay-2 mt-8 text-xl text-text-light leading-relaxed">
              Chaque chiffre est verifiable. Chaque engagement est concret. Voila ce qui nous differencie.
            </p>
          </div>
        </div>
      </section>

      {/* Le constat choc */}
      <section className="py-20 lg:py-28 bg-coral/5 rounded-[3rem] mx-4 lg:mx-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-coral font-bold text-sm uppercase tracking-wider">Le constat</span>
              <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-navy leading-tight">
                Les protections jetables, c&apos;est une catastrophe
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { number: "500", unit: "ans", desc: "pour qu'une serviette jetable se decompose. Oui, cinq cents.", color: "bg-white" },
              { number: "200+", unit: "", desc: "substances chimiques dans une seule protection classique. Perturbateurs endocriniens inclus.", color: "bg-white" },
              { number: "2M", unit: "", desc: "de personnes en precarite menstruelle en France. Ce n'est pas acceptable.", color: "bg-white" },
            ].map((item, i) => (
              <ScrollReveal key={i} animation="scaleIn" delay={i * 150}>
                <div className={`${item.color} rounded-3xl p-10 text-center`}>
                  <div className="text-5xl md:text-6xl font-bold text-coral">
                    {item.number}<span className="text-navy text-2xl">{item.unit}</span>
                  </div>
                  <p className="mt-4 text-text-light leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* B Corp */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal animation="slideLeft">
              <div>
                <span className="inline-block bg-sage/20 text-sage-deep text-sm font-bold px-4 py-2 rounded-full mb-6">B Corp certifie</span>
                <h2 className="text-3xl md:text-4xl font-bold text-navy leading-tight">
                  B Corp, c&apos;est pas un logo. C&apos;est une exigence.
                </h2>
                <div className="mt-8 space-y-6 text-text-light leading-relaxed">
                  <p>
                    Pour obtenir la certification B Corp, on a ete audite sur tout : gouvernance, impact social, environnement, transparence, communaute.
                  </p>
                  <p>
                    Ca veut dire que chaque decision qu&apos;on prend — du choix du coton au salaire de nos equipes — est evaluee et certifiee par un organisme independant.
                  </p>
                  <p>
                    Pas de belles paroles. Des preuves.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="slideRight">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { emoji: "🏛️", title: "Gouvernance", desc: "Transparence totale" },
                  { emoji: "🌱", title: "Environnement", desc: "Coton bio, local" },
                  { emoji: "👥", title: "Communaute", desc: "Salaires equitables" },
                  { emoji: "🎯", title: "Impact", desc: "Mesure et publie" },
                ].map((item, i) => (
                  <div key={i} className="bg-soft-gray rounded-2xl p-6 text-center">
                    <span className="text-3xl mb-3 block">{item.emoji}</span>
                    <h3 className="font-bold text-navy text-sm">{item.title}</h3>
                    <p className="text-xs text-text-light mt-1">{item.desc}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Impact chiffre */}
      <section className="py-20 lg:py-28 bg-soft-gray rounded-[3rem] mx-4 lg:mx-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              title="Notre impact, en vrai"
              subtitle="Des chiffres qu'on peut mettre dans votre rapport RSE"
            />
          </ScrollReveal>

          <div className="mt-16">
            <ScrollReveal>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                <StatCard value={150000} suffix="" label="protections jetables evitees" color="bg-white" />
                <StatCard value={12} suffix=" T" label="de dechets en moins" color="bg-white" />
                <StatCard value={85} suffix="%" label="reduction empreinte carbone" color="bg-white" />
                <StatCard value={100} suffix="%" label="coton bio certifie" color="bg-white" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Comment integrer */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              title="Integrer EVE&CO dans votre RSE"
              subtitle="On rend ca tellement facile que vous n'aurez aucune excuse"
            />
          </ScrollReveal>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { step: "01", title: "On fait le diagnostic", desc: "On evalue vos besoins, la taille de vos equipes, vos objectifs RSE. Gratuit.", color: "border-l-4 border-coral" },
              { step: "02", title: "On vous donne les outils", desc: "Supports de com interne, affiches, mails types. Tout est pret pour embarquer vos equipes.", color: "border-l-4 border-sage" },
              { step: "03", title: "On deploie en silence", desc: "Livraison discrete, kits individuels, respect de l'intimite de chacune.", color: "border-l-4 border-lavender-deep" },
              { step: "04", title: "On mesure avec vous", desc: "Rapport d'impact chiffre pour votre reporting RSE annuel. Clef en main.", color: "border-l-4 border-sunny" },
            ].map((item, i) => (
              <ScrollReveal key={i} animation="fadeUp" delay={i * 100}>
                <div className={`bg-white rounded-2xl p-8 flex gap-6 ${item.color} transition-all duration-300 hover:shadow-lg`}>
                  <div className="text-3xl font-bold text-coral shrink-0">{item.step}</div>
                  <div>
                    <h3 className="font-bold text-navy mb-2">{item.title}</h3>
                    <p className="text-sm text-text-light leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 mx-4 lg:mx-8">
        <ScrollReveal>
          <div className="bg-coral rounded-[3rem] p-12 lg:p-20 text-center relative overflow-hidden">
            <div className="absolute top-10 left-10 w-24 h-24 bg-white/10 rounded-full" />
            <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/10 rounded-full" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                On transforme votre RSE ensemble ?
              </h2>
              <p className="mt-6 text-white/80 text-lg max-w-xl mx-auto">
                Pas de discours. De l&apos;action.
              </p>
              <div className="mt-10">
                <Button href="/contact" className="!bg-white !text-coral hover:!bg-navy hover:!text-white">
                  Passons a l&apos;action →
                </Button>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
