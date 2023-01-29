import clsx from "clsx";

export default function Button({
  children,
  onClick,
  className,
}: {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
}) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "w-[200px] h-9 rounded-lg border-[1px] border-[#C9C9C9]",
        className
      )}
    >
      {children}
    </button>
  );
}
