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
    <button
      onClick={onClick}
      className={`flex items-center px-6 py-2 ${className}`}
    >
      {active && (
        <img src="/icons/light/checkmark_outline.svg" alt="Filter active"></img>
      )}
      {children}
    </button>
  );
}
