interface Props {
  name?: string;
  className?: string;
  size?: "sm" | "md";
}

export function TutelaWordmark({ name = "Tutela", className = "", size = "md" }: Props) {
  const textSize = size === "sm" ? "text-xl" : "text-2xl";
  return (
    <span className={`font-display ${textSize} font-semibold italic leading-none ${className}`}>
      {name}
    </span>
  );
}
