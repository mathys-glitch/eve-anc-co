import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact & Devis | EVE & CO",
  description:
    "Demandez un devis gratuit et sans engagement pour equiper votre entreprise en culottes menstruelles EVE & CO.",
};

export default function Contact() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 lg:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="hero-animate text-4xl md:text-5xl lg:text-6xl font-extralight text-charcoal leading-[1.1] tracking-tight">
              Demande de <span className="text-accent">Devis</span>
            </h1>
            <p className="hero-animate hero-animate-delay-1 mt-6 text-lg text-text-light font-light leading-relaxed">
              Parlez-nous de votre projet. Notre equipe vous repondra sous 48 heures avec une proposition personnalisee.
            </p>
          </div>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Form */}
            <div className="lg:col-span-2">
              <ScrollReveal animation="fadeUp">
                <ContactForm />
              </ScrollReveal>
            </div>

            {/* Info */}
            <div>
              <ScrollReveal animation="slideRight">
                <div className="bg-cream p-8 lg:p-10">
                  <h3 className="text-lg font-light text-charcoal mb-8">
                    Pourquoi nous contacter
                  </h3>

                  <div className="space-y-6">
                    {[
                      {
                        icon: (
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-accent">
                            <circle cx="12" cy="12" r="10" />
                            <path d="M12 6v6l4 2" strokeLinecap="round" />
                          </svg>
                        ),
                        title: "Reponse sous 48h",
                        desc: "Notre equipe s'engage a vous repondre dans les meilleurs delais.",
                      },
                      {
                        icon: (
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-accent">
                            <path d="M12 2v20M17 5H9.5a3.5 3.5 0 100 7h5a3.5 3.5 0 110 7H6" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        ),
                        title: "Devis gratuit",
                        desc: "Recevez une proposition detaillee et sans engagement.",
                      },
                      {
                        icon: (
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-accent">
                            <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                          </svg>
                        ),
                        title: "Accompagnement personnalise",
                        desc: "Un interlocuteur dedie vous accompagne tout au long du projet.",
                      },
                    ].map((item, i) => (
                      <div key={i} className="flex gap-4">
                        <div className="w-10 h-10 bg-white flex items-center justify-center shrink-0">
                          {item.icon}
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-charcoal">
                            {item.title}
                          </h4>
                          <p className="mt-1 text-xs text-text-light font-light leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-10 pt-8 border-t border-beige">
                    <h4 className="text-xs tracking-widest uppercase text-text-light mb-4">
                      Nous contacter directement
                    </h4>
                    <div className="space-y-2 text-sm text-text-light font-light">
                      <p>contact@eveandco.fr</p>
                      <p>+33 1 23 45 67 89</p>
                      <p>Paris, France</p>
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
