import useThemeStore from "../hooks/useThemeStore";
import useTranslation from "../hooks/useTranslation";

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
    <button onClick={onClick} className={`flex items-center p-2 ${className}`}>
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
