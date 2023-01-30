import clsx from "clsx";

export default function Button({
  children,
  onClick,
  className,
  type,
}: {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
  type?: "button" | "submit" | "reset" | undefined;
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx(
        "h-9 rounded-lg border-[1px] border-[#C9C9C9]",
        className
      )}
    >
      {children}
    </button>
  );
}
