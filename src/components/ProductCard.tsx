export default function ProductCard({
  name,
  description,
  features,
  color = "bg-lavender",
  emoji = "🩲",
}: {
  name: string;
  description: string;
  features: string[];
  color?: string;
  emoji?: string;
}) {
  return (
    <div className="bg-white rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-soft-gray group">
      <div className={`${color} aspect-square flex items-center justify-center`}>
        <span className="text-7xl group-hover:scale-110 transition-transform duration-300">
          {emoji}
        </span>
      </div>
      <div className="p-6 lg:p-8">
        <h3 className="text-xl font-bold text-navy mb-2">{name}</h3>
        <p className="text-text-light text-sm leading-relaxed mb-5">
          {description}
        </p>
        <ul className="space-y-2">
          {features.map((feature, i) => (
            <li key={i} className="flex items-center gap-2 text-sm text-navy">
              <span className="w-5 h-5 bg-sage/30 rounded-full flex items-center justify-center shrink-0">
                <svg width="10" height="10" viewBox="0 0 16 16" fill="none">
                  <path d="M4 8l3 3 5-5" stroke="#7BC4A0" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
