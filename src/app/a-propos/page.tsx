import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Notre Histoire | eve&co",
  description: "Comment une frustration est devenue une mission. L'histoire d'eve&co, la culotte menstruelle qui change la donne en entreprise.",
};

export default function APropos() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute top-10 right-20 w-32 h-32 bg-peach/30 rounded-full float" />
        <div className="absolute bottom-20 left-10 w-20 h-20 bg-lavender/40 rounded-full float-delay" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="hero-animate inline-block bg-lavender/30 text-lavender-deep text-sm font-bold px-4 py-2 rounded-full mb-6">
              Notre histoire
            </span>
            <h1 className="hero-animate hero-animate-delay-1 text-4xl md:text-5xl lg:text-7xl font-bold text-navy leading-[1.05] tracking-tight">
              On en avait marre.
              <br />
              Alors on a <span className="text-coral">agi</span>.
            </h1>
            <p className="hero-animate hero-animate-delay-2 mt-8 text-xl text-text-light leading-relaxed max-w-2xl">
              Marre des protections jetables pleines de chimie. Marre du tabou autour des regles au bureau. Marre d&apos;attendre que ca change tout seul.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="space-y-12">
            {[
              {
                year: "2021",
                title: "Le declic",
                desc: "Claire, consultante RSE, realise qu'aucune entreprise ne propose de solution menstruelle durable a ses equipes. Le projet nait dans un cafe parisien.",
                color: "bg-lavender/30",
              },
              {
                year: "2022",
                title: "2 ans de R&D",
                desc: "On teste 47 prototypes. On refuse tout compromis : coton bio, zero substance controverse, absorption au top, confort 12h. On y arrive.",
                color: "bg-sage/20",
              },
              {
                year: "2023",
                title: "Lancement B2B",
                desc: "Premiere entreprise equipee : 50 collaboratrices. Taux d'adoption : 94%. Le bouche-a-oreille fait le reste.",
                color: "bg-peach/30",
              },
              {
                year: "2024",
                title: "Certification B Corp",
                desc: "On passe l'audit avec brio. Production locale, salaires equitables, impact mesure. La totale.",
                color: "bg-sunny/30",
              },
              {
                year: "2025",
                title: "Et maintenant ?",
                desc: "200+ entreprises equipees, 15 000 collaboratrices conquises. Et on ne fait que commencer.",
                color: "bg-coral/10",
              },
            ].map((item, i) => (
              <ScrollReveal key={i} animation="fadeUp" delay={i * 80}>
                <div className={`${item.color} rounded-3xl p-8 lg:p-10 flex flex-col md:flex-row gap-6 items-start`}>
                  <span className="text-4xl font-bold text-coral shrink-0">{item.year}</span>
                  <div>
                    <h3 className="text-xl font-bold text-navy mb-2">{item.title}</h3>
                    <p className="text-text-light leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 lg:py-28 bg-navy rounded-[3rem] mx-4 lg:mx-8">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <ScrollReveal animation="fadeUp">
            <span className="text-coral font-bold text-sm uppercase tracking-wider">Notre mission</span>
            <blockquote className="mt-6 text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-relaxed">
              &laquo; Faire du confort menstruel au travail quelque chose d&apos;aussi normal que la pause cafe. &raquo;
            </blockquote>
            <div className="mt-8 flex justify-center gap-3">
              <span className="bg-coral/20 text-coral text-xs font-bold px-3 py-1 rounded-full">Engagees</span>
              <span className="bg-sage/20 text-sage text-xs font-bold px-3 py-1 rounded-full">Concretes</span>
              <span className="bg-lavender/20 text-lavender-deep text-xs font-bold px-3 py-1 rounded-full">Sans compromis</span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Valeurs */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-navy">Ce en quoi on croit</h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { emoji: "🔍", title: "Transparence radicale", desc: "Composition, prix, marge — on dit tout. Si on peut pas le dire, on le fait pas." },
              { emoji: "♾️", title: "Durabilite reelle", desc: "5 ans minimum. Parce que le vrai ecolo, c'est ce qui dure." },
              { emoji: "🤗", title: "Inclusivite", desc: "Du XS au 3XL. Le confort menstruel n'est pas un privilege de taille." },
              { emoji: "🚀", title: "Innovation constante", desc: "On investit en R&D chaque mois. Nos culottes de demain seront encore meilleures." },
            ].map((value, i) => (
              <ScrollReveal key={i} animation="scaleIn" delay={i * 100}>
                <div className="bg-soft-gray rounded-3xl p-8 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2 h-full">
                  <span className="text-4xl mb-4 block">{value.emoji}</span>
                  <h3 className="text-lg font-bold text-navy mb-3">{value.title}</h3>
                  <p className="text-sm text-text-light leading-relaxed">{value.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 lg:py-28 bg-soft-gray rounded-[3rem] mx-4 lg:mx-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-navy">Les humains derriere la culotte</h2>
              <p className="mt-4 text-text-light text-lg">Une equipe passionnee (et un peu obstinee)</p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { name: "Claire Moreau", role: "Fondatrice & CEO", emoji: "👩‍💼", desc: "Ex-consultante RSE qui en avait marre des slides PowerPoint. A decide de passer a l'action." },
              { name: "Amina Khelifi", role: "Directrice Produit", emoji: "👩‍🔬", desc: "Ingenieure textile. A teste les 47 prototypes. Obsedee par le confort et la qualite." },
              { name: "Lucas Bernard", role: "Partenariats B2B", emoji: "🤝", desc: "Convainc les entreprises une par une. 100% de ses clients recommandent EVE&CO." },
            ].map((member, i) => (
              <ScrollReveal key={i} animation="fadeUp" delay={i * 150}>
                <div className="bg-white rounded-3xl p-8 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <span className="text-5xl mb-4 block">{member.emoji}</span>
                  <h3 className="text-lg font-bold text-navy">{member.name}</h3>
                  <p className="text-coral text-xs font-bold uppercase tracking-wider mt-1">{member.role}</p>
                  <p className="mt-4 text-sm text-text-light leading-relaxed">{member.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-navy">
              Envie de faire partie de l&apos;histoire ?
            </h2>
            <p className="mt-4 text-text-light text-lg max-w-lg mx-auto">
              Chaque entreprise qui rejoint le mouvement rend le monde un peu meilleur. Sans exagerer.
            </p>
            <div className="mt-8">
              <Button href="/contact">Rejoindre le mouvement →</Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
