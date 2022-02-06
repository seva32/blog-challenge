import React from "react";

interface Props {
  size?: string;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
  children?: React.ReactNode;
  variant?: "naked" | undefined;
  selected?: boolean;
  className?: string;
}

function Button({
  size = "md",
  onClick,
  children = null,
  type,
  variant,
  selected,
  className,
}: Props) {
  const classname = [
    size === "md" ? "h-4 p-4" : size === "lg" ? "h-6 p-6" : "h-3 p-3",
    variant !== "naked" && "bg-blue-600 rounded",
    variant === "naked" && !selected && "text-gray-500 hover:text-gray-700",
    selected && "text-darkblue",
    "flex",
    "justify-center",
    "items-center",
    className,
  ]
    .filter((c) => !!c)
    .join(" ");
  return (
    <button onClick={onClick} className={classname} type={type}>
      {children}
    </button>
  );
}

export { Button };
