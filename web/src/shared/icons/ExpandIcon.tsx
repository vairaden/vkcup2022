export default function ExpandIcon({ className }: { className?: string }) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 240 240"
      className={className}
      stroke="#000000"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M220 86.6667V20L153.333 20"
        stroke="inherit"
        strokeWidth="40"
        strokeLinecap="round"
      />
      <path
        d="M20 153.333V220H86.6667"
        stroke="inherit"
        strokeWidth="40"
        strokeLinecap="round"
      />
    </svg>
  );
}
