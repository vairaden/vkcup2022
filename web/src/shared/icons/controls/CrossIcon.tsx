export default function CrossIcon({ className }: { className?: string }) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 250 250"
      className={className}
      stroke="#000000"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M25 25L225 225"
        stroke="inherit"
        strokeWidth="50"
        strokeLinecap="round"
      />
      <path
        d="M25 225L225 25"
        stroke="inherit"
        strokeWidth="50"
        strokeLinecap="round"
      />
    </svg>
  );
}
