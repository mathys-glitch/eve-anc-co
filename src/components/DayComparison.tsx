"use client";

import { useState } from "react";

const WITHOUT = [
  { time: "7h30", icon: "😰", title: "Le stress du matin", desc: "Verifier qu'on a des protections dans son sac. En racheter en urgence si le paquet est vide." },
  { time: "9h00", icon: "🏢", title: "Arrivee au bureau", desc: "Cacher discretement une protection dans sa poche pour aller aux toilettes. Esperer que personne ne remarque." },
  { time: "11h00", icon: "⏰", title: "La montre tourne", desc: "S'inquieter de fuites potentielles. Aller se changer toutes les 3-4 heures. Inconfort constant." },
  { time: "13h00", icon: "🚶‍♀️", title: "La pause dej", desc: "Passer a la pharmacie acheter des protections en plus. 5€ de plus dans le budget du mois." },
  { time: "16h00", icon: "😣", title: "L'apres-midi difficile", desc: "Sensation d'humidite, irritations liees aux matieres synthetiques et produits chimiques." },
  { time: "18h00", icon: "🗑️", title: "Fin de journee", desc: "Jeter 4-5 protections a la poubelle. Autant de plastique qui mettra 500 ans a se decomposer." },
];

const WITH = [
  { time: "7h30", icon: "😊", title: "Matin tranquille", desc: "Enfiler sa culotte EVE & CO comme n'importe quel sous-vetement. C'est tout. C'est pret." },
  { time: "9h00", icon: "💼", title: "Arrivee au bureau", desc: "Rien a transporter, rien a cacher. On s'assoit, on travaille, on oublie qu'on a ses regles." },
  { time: "11h00", icon: "✨", title: "Confort continu", desc: "Absorption jusqu'a 12h. Zero fuite, zero odeur. Le coton bio respire, pas d'irritation." },
  { time: "13h00", icon: "🥗", title: "Pause dej sereine", desc: "On profite de sa pause sans penser a rien. Pas d'achat de derniere minute, pas de stress." },
  { time: "16h00", icon: "🚀", title: "L'apres-midi productive", desc: "Concentration maximale. Le confort est total, le tissu reste sec et doux toute la journee." },
  { time: "18h00", icon: "🌱", title: "Fin de journee verte", desc: "Zero dechet produit. La culotte passe en machine ce soir et sera prete pour 300+ utilisations." },
];

export default function DayComparison() {
  const [showWith, setShowWith] = useState(false);
  const data = showWith ? WITH : WITHOUT;

  return (
    <div>
      {/* Toggle */}
      <div className="flex justify-center mb-12">
        <div className="bg-card-bg rounded-full p-1.5 inline-flex border border-sand">
          <button
            onClick={() => setShowWith(false)}
            className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer ${
              !showWith
                ? "bg-navy text-white shadow-lg"
                : "text-text-light hover:text-navy"
            }`}
          >
            Sans EVE & CO
          </button>
          <button
            onClick={() => setShowWith(true)}
            className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer ${
              showWith
                ? "bg-forest text-white shadow-lg"
                : "text-text-light hover:text-navy"
            }`}
          >
            Avec EVE & CO ✨
          </button>
        </div>
      </div>

      {/* Timeline */}
      <div className="max-w-2xl mx-auto">
        <div className="space-y-0">
          {data.map((item, i) => (
            <div
              key={`${showWith}-${i}`}
              className="flex gap-5 group"
              style={{ animation: `fadeUp 0.5s cubic-bezier(0.16,1,0.3,1) ${i * 0.08}s both` }}
            >
              {/* Timeline line */}
              <div className="flex flex-col items-center shrink-0">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xl shrink-0 ${
                  showWith ? "bg-forest/10" : "bg-blush/30"
                }`}>
                  {item.icon}
                </div>
                {i < data.length - 1 && (
                  <div className={`w-px flex-1 min-h-[24px] ${showWith ? "bg-forest/20" : "bg-blush/40"}`} />
                )}
              </div>

              {/* Content */}
              <div className="pb-8">
                <span className={`text-xs font-bold ${showWith ? "text-forest" : "text-blush"}`}>
                  {item.time}
                </span>
                <h4 className="text-lg font-bold text-navy mt-0.5">{item.title}</h4>
                <p className="text-sm text-text-light leading-relaxed mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom summary */}
      <div className={`mt-8 rounded-2xl p-6 text-center ${showWith ? "bg-forest/5" : "bg-blush/10"}`}>
        {showWith ? (
          <p className="text-forest font-semibold">
            Zero stress. Zero dechet. Zero compromis. C&apos;est ca, une journee avec EVE & CO.
          </p>
        ) : (
          <p className="text-navy font-semibold">
            Stress, inconfort, depenses, dechets. Et ca, c&apos;est chaque mois, pour chaque collaboratrice.
          </p>
        )}
      </div>
    </div>
  );
}
