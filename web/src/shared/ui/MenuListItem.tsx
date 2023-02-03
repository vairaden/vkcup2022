import clsx from "clsx";
import { MouseEventHandler } from "react";

export default function MenuListItem({
  children,
  onClick,
  className,
}: {
  children: React.ReactNode;
  onClick: MouseEventHandler<HTMLDivElement>;
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
