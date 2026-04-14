"use client";

const WITHOUT = [
  { time: "07:30", event: "Stress : est-ce que j'ai assez de protections ?", mood: 1 },
  { time: "09:00", event: "Angoisse discrète aux toilettes", mood: 2 },
  { time: "11:00", event: "Inconfort et irritations, faut changer", mood: 1 },
  { time: "13:00", event: "Pharmacie d'urgence pendant la pause déjeuner", mood: 2 },
  { time: "15:00", event: "Impossible de se concentrer, distraction permanente", mood: 1 },
  { time: "17:00", event: "4 protections à la poubelle — culpabilité", mood: 1 },
];

const WITH = [
  { time: "07:30", event: "On enfile sa culotte. Point. Et c'est parti.", mood: 5 },
  { time: "09:00", event: "Au bureau, on oublie totalement", mood: 5 },
  { time: "11:00", event: "Confort max, coton bio qui respire, zéro irritation", mood: 5 },
  { time: "13:00", event: "Pause déj tranquille, rien à prévoir, zéro stress", mood: 5 },
  { time: "15:00", event: "Concentration totale, zéro distraction, 100% présente", mood: 5 },
  { time: "17:00", event: "Machine ce soir, prête pour 300 utilisations de plus", mood: 5 },
];

function MoodBar({ mood }: { mood: number }) {
  const width = `${(mood / 5) * 100}%`;
  const color = mood <= 2 ? "bg-terra" : "bg-sage";
  return (
    <div className="flex-1 h-2 bg-warm-gray rounded-full overflow-hidden">
      <div className={`h-full ${color} transition-all duration-500 rounded-full`} style={{ width }} />
    </div>
  );
}

export default function DayComparison() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* SANS */}
      <div className="bg-terra/5 rounded-3xl p-10 border border-terra/20 hover:border-terra/40 transition-colors duration-300">
        <div className="flex items-center gap-3 mb-10">
          <span className="text-2xl">😰</span>
          <h3 className="text-xl font-bold text-deep">Sans EVE & CO</h3>
        </div>
        <div className="space-y-8">
          {WITHOUT.map((item, i) => (
            <div key={i} className="flex gap-4">
              <span className="text-xs font-mono font-bold text-terra shrink-0 w-12">{item.time}</span>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-deep leading-relaxed font-medium">{item.event}</p>
                <div className="mt-3 flex items-center gap-3">
                  <span className="text-xs text-text-light font-semibold">Confort</span>
                  <MoodBar mood={item.mood} />
                  <span className="text-xs font-bold text-terra w-4">{item.mood}/5</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 pt-6 border-t border-terra/20">
          <p className="text-sm font-semibold text-terra">
            📊 Bilan : stress, inconfort, ~5€ dépensés, 4 déchets jetés
          </p>
        </div>
      </div>

      {/* AVEC */}
      <div className="bg-sage/5 rounded-3xl p-10 border border-sage/20 hover:border-sage/40 transition-colors duration-300">
        <div className="flex items-center gap-3 mb-10">
          <span className="text-2xl">😌</span>
          <h3 className="text-xl font-bold text-deep">Avec EVE & CO</h3>
        </div>
        <div className="space-y-8">
          {WITH.map((item, i) => (
            <div key={i} className="flex gap-4">
              <span className="text-xs font-mono font-bold text-sage shrink-0 w-12">{item.time}</span>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-deep leading-relaxed font-medium">{item.event}</p>
                <div className="mt-3 flex items-center gap-3">
                  <span className="text-xs text-text-light font-semibold">Confort</span>
                  <MoodBar mood={item.mood} />
                  <span className="text-xs font-bold text-sage w-4">{item.mood}/5</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 pt-6 border-t border-sage/20">
          <p className="text-sm font-semibold text-sage">
            ✨ Bilan : sérénité totale, 0€ dépensé, 0 déchet produit
          </p>
        </div>
      </div>
    </div>
  );
}
