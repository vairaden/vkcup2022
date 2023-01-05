export default function FilterButton({
  children,
  active,
  onClick,
  className,
}: {
  children: React.ReactNode;
  active: boolean;
  onClick: () => void;
  className?: string;
}) {
  return (
    <button onClick={onClick} className={`flex items-center ${className}`}>
      {active && <img src="/checkmark_outline.svg" alt="Filter active"></img>}
      {children}
    </button>
  );
}
