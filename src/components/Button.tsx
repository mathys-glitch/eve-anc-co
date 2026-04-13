import Link from "next/link";

type Variant = "primary" | "secondary" | "ghost";

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
  type,
}: {
  href?: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  type?: "submit" | "button";
}) {
  const base =
    "inline-flex items-center justify-center font-medium transition-all duration-300 cursor-pointer";

  const variants: Record<Variant, string> = {
    primary:
      "bg-charcoal text-white px-8 py-4 text-sm tracking-widest uppercase hover:bg-accent-dark hover:shadow-lg hover:-translate-y-0.5",
    secondary:
      "border border-charcoal text-charcoal px-8 py-4 text-sm tracking-widest uppercase hover:bg-charcoal hover:text-white hover:-translate-y-0.5",
    ghost:
      "text-charcoal text-sm tracking-widest uppercase border-b border-charcoal pb-1 hover:text-accent-dark hover:border-accent-dark",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type || "button"} className={classes}>
      {children}
    </button>
  );
}
