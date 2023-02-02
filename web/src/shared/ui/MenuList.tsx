import clsx from "clsx";
import { ReactNode } from "react";

export default function MenuList({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <ul
      className={clsx(
        "flex flex-col py-2 bg-elementBg text-primaryText shadow-md rounded-xl",
        className
      )}
    >
      {children}
    </ul>
  );
}
