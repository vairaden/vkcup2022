import React from "react";
import { Link } from "react-router-dom";

export default function LinkButton({
  to,
  children,
  selected,
}: {
  to: string;
  children: React.ReactNode;
  selected?: boolean;
}) {
  return (
    <Link to={to}>
      <div
        className={
          "flex content-center justify-center w-[200px] h-9 rounded-lg" +
          selected
            ? "bg-green-100"
            : "bg-blue"
        }
      >
        {children}
      </div>
    </Link>
  );
}
