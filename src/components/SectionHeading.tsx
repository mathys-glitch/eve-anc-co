export default function SectionHeading({
  title,
  subtitle,
  centered = true,
  light = false,
}: {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}) {
  return (
    <div className={centered ? "text-center" : ""}>
      <h2
        className={`text-3xl md:text-4xl lg:text-5xl font-light tracking-tight ${
          light ? "text-white" : "text-charcoal"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-lg md:text-xl max-w-2xl font-light ${
            centered ? "mx-auto" : ""
          } ${light ? "text-white/70" : "text-text-light"}`}
        >
          {subtitle}
        </p>
      )}
      <div
        className={`mt-6 w-16 h-px bg-accent ${
          centered ? "mx-auto" : ""
        }`}
      />
    </div>
  );
}
