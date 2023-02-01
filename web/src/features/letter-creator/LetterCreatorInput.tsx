import { ChangeEvent, ReactNode } from "react";

export default function LetterCreatorInput({
  children,
  label,
  value,
  onChange,
}: {
  children: ReactNode;
  label: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className="flex h-12 py-3 px-5 border-b-[1px] border-separator">
      <label className="flex w-full items-center">
        <span className="text-xs text-textGray">{label}</span>
        <input
          type="text"
          className="w-full mx-3 outline-none bg-elementBg text-primaryText"
          value={value}
          onChange={onChange}
        />
      </label>
      {children}
    </div>
  );
}
