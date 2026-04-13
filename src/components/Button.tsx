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
    "inline-flex items-center justify-center font-semibold transition-all duration-300 cursor-pointer";

  const variants: Record<Variant, string> = {
    primary:
      "bg-coral text-white px-8 py-4 text-sm rounded-full hover:bg-accent-dark hover:shadow-xl hover:shadow-coral/20 hover:-translate-y-0.5",
    secondary:
      "border-2 border-navy text-navy px-8 py-4 text-sm rounded-full hover:bg-navy hover:text-white hover:-translate-y-0.5",
    ghost:
      "text-coral text-sm font-bold hover:text-accent-dark underline underline-offset-4 decoration-2",
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
