import useTranslation from "../hooks/useTranslation";

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
  const { alt } = useTranslation();

  return (
    <button onClick={onClick} className={`flex items-center p-2 ${className}`}>
      <div className="w-5">
        {active && (
          <img
            src="/icons/light/checkmark_outline.svg"
            alt={alt.filterActive}
          ></img>
        )}
      </div>
      {children}
    </button>
  );
}
