import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Parlons-en | eve&co",
  description: "Demandez un devis gratuit pour equiper votre entreprise. Reponse en 48h, zero prise de tete.",
};

export default function Contact() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute top-20 right-20 w-32 h-32 bg-sunny/30 rounded-full float" />
        <div className="absolute bottom-10 left-10 w-20 h-20 bg-sage/30 rounded-full float-delay" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl">
            <span className="hero-animate inline-block bg-coral/10 text-coral text-sm font-bold px-4 py-2 rounded-full mb-6">
              Parlons-en
            </span>
            <h1 className="hero-animate hero-animate-delay-1 text-4xl md:text-5xl lg:text-6xl font-bold text-navy leading-[1.1] tracking-tight">
              Votre devis gratuit en{" "}
              <span className="text-coral">48h</span>
            </h1>
            <p className="hero-animate hero-animate-delay-2 mt-6 text-lg text-text-light leading-relaxed">
              Pas de commercial insistant, pas de 15 relances. Juste une proposition claire et honnete.
            </p>
          </div>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            <div className="lg:col-span-2">
              <ScrollReveal animation="fadeUp">
                <ContactForm />
              </ScrollReveal>
            </div>

            <div>
              <ScrollReveal animation="slideRight">
                <div className="space-y-6">
                  {[
                    { emoji: "⚡", title: "Reponse en 48h", desc: "On est rapides. Et on tient nos promesses.", color: "bg-sunny/20" },
                    { emoji: "🎁", title: "Devis 100% gratuit", desc: "Sans engagement, sans petites lignes. Si ca matche pas, pas de souci.", color: "bg-sage/20" },
                    { emoji: "🧪", title: "Echantillons offerts", desc: "On vous envoie des culottes de test pour que vos equipes valident avant de s'engager.", color: "bg-lavender/30" },
                    { emoji: "🤝", title: "Interlocuteur dedie", desc: "Un humain, pas un chatbot. Qui repond vraiment a vos questions.", color: "bg-peach/30" },
                  ].map((item, i) => (
                    <div key={i} className={`${item.color} rounded-2xl p-6 flex gap-4 items-start`}>
                      <span className="text-2xl shrink-0">{item.emoji}</span>
                      <div>
                        <h4 className="font-bold text-navy text-sm">{item.title}</h4>
                        <p className="mt-1 text-xs text-text-light leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}

                  <div className="bg-soft-gray rounded-2xl p-6 mt-6">
                    <h4 className="font-bold text-navy text-sm mb-4">Contact direct</h4>
                    <div className="space-y-2 text-sm text-text-light">
                      <p>📧 hello@eveandco.fr</p>
                      <p>📞 +33 1 23 45 67 89</p>
                      <p>📍 Paris, France</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
