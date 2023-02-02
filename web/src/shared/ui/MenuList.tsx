import clsx from "clsx";
import { ReactNode } from "react";

export default function MenuList({
  className,
  children,
  onClick,
}: {
  className?: string;
  children: ReactNode;
  onClick?: (e: React.MouseEvent<HTMLUListElement, MouseEvent>) => void;
}) {
  return (
    <ul
      onClick={onClick}
      className={clsx(
        "flex flex-col py-2 bg-elementBg text-primaryText shadow-md rounded-xl",
        className
      )}
    >
      {children}
    </ul>
  );
}
