import clsx from "clsx";

export default function FilterButton({
  children,
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
      className={clsx(
        "flex items-center p-2 hover:bg-hover transition-colors",
        className
      )}
    >
      {children}
    </button>
  );
}
