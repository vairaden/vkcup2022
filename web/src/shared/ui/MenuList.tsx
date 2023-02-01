import { ReactNode } from "react";

export default function MenuList({ children }: { children: ReactNode }) {
  return (
    <ul className="flex flex-col fixed top-12 right-6 w-60 py-2 bg-elementBg text-primaryText shadow-md rounded-xl">
      {children}
    </ul>
  );
}
