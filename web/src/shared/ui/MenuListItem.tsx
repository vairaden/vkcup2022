import clsx from "clsx";

export default function MenuListItem({
  children,
  onClick,
  className,
}: {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
}) {
  return (
    <div
      onClick={onClick}
      className={clsx(
        "flex w-full items-center p-2 hover:bg-hover transition-colors cursor-pointer",
        className
      )}
    >
      {children}
    </div>
  );
}
