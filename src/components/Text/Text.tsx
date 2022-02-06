import React, { ReactNode } from "react";

type Props = {
  type?: "tab" | "label" | "title" | undefined;
  size?: "sm" | "md" | "lg" | undefined;
  className?: string;
  children: ReactNode;
};

export function Text({ type, size = "md", className, children }: Props) {
  const classname = [
    type === "tab" || type === "label" || type === "title"
      ? "font-black"
      : "font-normal",
    size === "md" ? "text-base" : size === "lg" ? "text-lg" : "text-sm",
    className,
  ]
    .filter((c) => !!c)
    .join(" ");
  return <div className={classname}>{children}</div>;
}
