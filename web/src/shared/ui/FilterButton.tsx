import clsx from "clsx";
import useThemeStore from "../store/useThemeStore";
import useTranslation from "../translation/useTranslation";

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
  const { alt } = useTranslation();
  const theme = useThemeStore((state) => state.theme);

  return (
    <button
      onClick={onClick}
      className={clsx(
        "flex items-center p-2 hover:bg-hover transition-colors",
        className
      )}
    >
      <div className="w-5">
        {active &&
          (theme.isDark ? (
            <img
              src="/icons/dark/checkmark_outline_dark.svg"
              alt={alt.filterActive}
            ></img>
          ) : (
            <img
              src="/icons/light/checkmark_outline.svg"
              alt={alt.filterActive}
            ></img>
          ))}
      </div>
      {children}
    </button>
  );
}
