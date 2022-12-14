export default function Button({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <button className={"w-[200px] h-9 rounded-lg bg-red-400 " + className}>
      {children}
    </button>
  );
}
