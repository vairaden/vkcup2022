import { ReactNode } from "react";

export default function LetterCreationInput({
  children,
  label,
}: {
  children: ReactNode;
  label: string;
}) {
  return (
    <div className="flex h-12 py-3 px-5 border-b-[1px] border-separator">
      <label className="flex w-full items-center">
        <span className="text-xs text-textGray">{label}</span>
        <input type="text" className="w-full mx-3 outline-none" />
      </label>
      {children}
    </div>
  );
}
