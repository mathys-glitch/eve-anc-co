export default function ProductCard({
  name,
  description,
  features,
  color = "bg-beige",
}: {
  name: string;
  description: string;
  features: string[];
  color?: string;
}) {
  return (
    <div className="bg-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group">
      {/* Placeholder image */}
      <div className={`aspect-[4/3] ${color} flex items-center justify-center`}>
        <span className="text-accent/40 text-sm tracking-widest uppercase">
          Photo produit
        </span>
      </div>
      <div className="p-6 lg:p-8">
        <h3 className="text-xl font-light text-charcoal mb-2">{name}</h3>
        <p className="text-text-light font-light text-sm leading-relaxed mb-4">
          {description}
        </p>
        <ul className="space-y-2">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-text-light">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="text-accent mt-0.5 shrink-0"
              >
                <path
                  d="M4 8l3 3 5-5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
