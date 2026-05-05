"use client";

type DayItem = { time: string; event: string; comfort: number; focus: number };

const WITHOUT: DayItem[] = [
  { time: "07:30", event: "Trajet domicile-bureau : check anxieux du sac", comfort: 2, focus: 2 },
  { time: "09:00", event: "Première réunion, esprit ailleurs", comfort: 2, focus: 1 },
  { time: "11:00", event: "Stand-up d'équipe : pause toilettes obligatoire", comfort: 1, focus: 2 },
  { time: "13:00", event: "Pause déj écourtée, détour pharmacie", comfort: 1, focus: 1 },
  { time: "15:00", event: "Présentation client à 16h, focus à 30%", comfort: 2, focus: 1 },
  { time: "17:00", event: "Fin de journée, épuisement mental", comfort: 1, focus: 1 },
];

const WITH: DayItem[] = [
  { time: "07:30", event: "On enfile sa culotte. Point. Et c'est parti.", comfort: 5, focus: 5 },
  { time: "09:00", event: "Au bureau, on oublie totalement", comfort: 5, focus: 5 },
  { time: "11:00", event: "Confort max, coton bio qui respire, zéro irritation", comfort: 5, focus: 5 },
  { time: "13:00", event: "Pause déj tranquille, rien à prévoir, zéro stress", comfort: 5, focus: 5 },
  { time: "15:00", event: "Concentration totale, zéro distraction, 100% présente", comfort: 5, focus: 5 },
  { time: "17:00", event: "Machine ce soir, prête pour 300 utilisations de plus", comfort: 5, focus: 5 },
];

const CORAL = "#D97757";

function Gauge({ label, value, barClass }: { label: string; value: number; barClass: string }) {
  return (
    <div className="flex items-center gap-2 min-w-0 flex-1">
      <span className="text-[10px] uppercase tracking-wider text-text-light font-semibold shrink-0">{label}</span>
      <div className="flex-1 h-1.5 bg-black/5 rounded-full overflow-hidden">
        <div className={`h-full rounded-full ${barClass}`} style={{ width: `${(value / 5) * 100}%` }} />
      </div>
    </div>
  );
}

function AlertIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="8" x2="12" y2="12" />
      <line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

export default function DayComparison() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* SANS */}
      <div className="bg-[#FBF6F2] rounded-xl p-6 lg:p-8 border border-[#D97757]/15">
        <div className="flex items-center gap-3 mb-8">
          <span
            className="w-9 h-9 rounded-full flex items-center justify-center"
            style={{ backgroundColor: "rgba(217,119,87,0.12)", color: CORAL }}
          >
            <AlertIcon />
          </span>
          <h3 className="text-base lg:text-lg font-bold text-deep">Une journée au bureau, sans EVE AND CO</h3>
        </div>

        <div className="border-l border-dashed border-[#E5E5E5] pl-5 space-y-6">
          {WITHOUT.map((item, i) => (
            <div key={i}>
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-xs font-mono font-bold shrink-0 w-12" style={{ color: CORAL }}>
                  {item.time}
                </span>
                <p className="text-sm text-deep leading-relaxed font-medium flex-1 min-w-0">{item.event}</p>
              </div>
              <div className="flex items-center gap-4 pl-[60px]">
                <Gauge label="Confort" value={item.comfort} barClass="bg-[#D97757]" />
                <Gauge label="Focus pro" value={item.focus} barClass="bg-[#D97757]" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 pt-5 border-t border-[#D97757]/15">
          <p className="text-sm font-semibold leading-relaxed" style={{ color: CORAL }}>
            📉 Bilan : -38% de productivité ressentie · 1 collaboratrice à effectif partiel · ~40 déchets/an
          </p>
        </div>
      </div>

      {/* AVEC */}
      <div className="bg-[#F4F8F4] rounded-xl p-6 lg:p-8 border border-sage/20">
        <div className="flex items-center gap-3 mb-8">
          <span className="w-9 h-9 rounded-full bg-sage/10 flex items-center justify-center text-sage">
            <CheckIcon />
          </span>
          <h3 className="text-base lg:text-lg font-bold text-deep">Une journée au bureau, avec EVE AND CO</h3>
        </div>

        <div className="border-l border-dashed border-[#D8E4D8] pl-5 space-y-6">
          {WITH.map((item, i) => (
            <div key={i}>
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-xs font-mono font-bold text-sage shrink-0 w-12">{item.time}</span>
                <p className="text-sm text-deep leading-relaxed font-medium flex-1 min-w-0">{item.event}</p>
              </div>
              <div className="flex items-center gap-4 pl-[60px]">
                <Gauge label="Confort" value={item.comfort} barClass="bg-sage" />
                <Gauge label="Focus pro" value={item.focus} barClass="bg-sage" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 pt-5 border-t border-sage/20">
          <p className="text-sm font-semibold text-sage leading-relaxed">
            ✨ Bilan : 100% concentrée · 0 déchet · 1 message RSE incarné
          </p>
        </div>
      </div>
    </div>
  );
}
