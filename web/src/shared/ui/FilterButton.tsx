import clsx from "clsx";
import CheckmarkIcon from "../icons/CheckmarkIcon";

export default function FilterButton({
  children,
  active,
  onClick,
  className,
}: {
  children: React.ReactNode;
  active: boolean;
  onClick: () => void;
  className?: string;
}) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "flex items-center p-2 hover:bg-hover transition-colors",
        className
      )}
    >
      <div className="w-5">
        {active && <CheckmarkIcon className="fill-primaryText" />}
      </div>
      {children}
    </button>
  );
}
