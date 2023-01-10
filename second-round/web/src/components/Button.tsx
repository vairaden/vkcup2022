export default function Button({
  children,
  onClick,
  className,
}: {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
}) {
  return (
    <button
      className={
        "w-[200px] h-9 rounded-lg bg-white border-[1px] border-[#C9C9C9] " +
        className
      }
    >
      {children}
    </button>
  );
}
