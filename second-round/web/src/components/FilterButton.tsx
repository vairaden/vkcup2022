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
    <button onClick={onClick} className={`flex items-center p-2 ${className}`}>
      <div className="w-5">
        {active && (
          <img
            src="/icons/light/checkmark_outline.svg"
            alt="Filter active"
          ></img>
        )}
      </div>
      {children}
    </button>
  );
}
