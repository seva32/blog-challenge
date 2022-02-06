import React from "react";

type Props = {
  src: string;
  className?: string;
};

function Avatar({ src, className }: Props) {
  return <img src={src} className={`rounded-full max-w-full ${className}`} />;
}

export { Avatar };
