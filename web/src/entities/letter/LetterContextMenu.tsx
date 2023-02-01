import { ReactNode, useState } from "react";

export function LetterContextMenu({
  children,
  className,
  x,
  y,
}: {
  children: ReactNode;
  className?: string;
  x: number;
  y: number;
}) {
  const [coords, setCoords] = useState(() => {
    return {
      x,
      y,
    };
  });

  return (
    <div className="absolute top-0 left-0 w-full h-full z-50">{children}</div>
  );
}
