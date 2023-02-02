import clsx from "clsx";
import { ReactNode, useState } from "react";

export function LetterContextMenu({
  children,
  className,
  closeCallback,
  x,
  y,
}: {
  children: ReactNode;
  className?: string;
  closeCallback: () => void;
  x: number;
  y: number;
}) {
  return (
    <div
      onClick={closeCallback}
      className="fixed top-0 left-0 w-full h-full z-50"
    >
      <div
        className={clsx("relative w-fit m-0", className)}
        style={{ top: y, left: x }}
      >
        {children}
      </div>
    </div>
  );
}
