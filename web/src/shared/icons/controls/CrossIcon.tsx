export default function CrossIcon({
  className,
  width = 12,
  hight = 12,
}: {
  className?: string;
  width?: number;
  hight?: number;
}) {
  return (
    <svg
      width={width}
      height={hight}
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
