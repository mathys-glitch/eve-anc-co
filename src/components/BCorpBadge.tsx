export default function BCorpBadge({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-2 bg-sage/20 text-sage-deep text-xs font-bold tracking-wide px-4 py-2 rounded-full ${className}`}
    >
      <svg
        width="14"
        height="14"
        viewBox="0 0 16 16"
        fill="none"
        className="shrink-0"
      >
        <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="2" />
        <path
          d="M5 8l2 2 4-4"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      Certifie B Corp
    </span>
  );
}
