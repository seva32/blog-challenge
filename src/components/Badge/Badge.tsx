import React from "react";

type Props = {
  children: React.ReactNode;
};

type BgColors = {
  [key: string]: string;
};

function Badge({ children }: Props) {
  const bgColors = {
    gray: "bg-gray-500",
    red: "bg-red-600",
    yellow: "bg-yellow-400",
    lime: "bg-lime-400",
    sky: "bg-sky-500",
  } as BgColors;
  const color =
    Object.keys(bgColors)[
      Math.floor(Math.random() * Object.keys(bgColors).length)
    ];
  console.log(bgColors[color]);

  return (
    <div
      className={`rounded-full tracking-widest px-20p py-0.5 sm:py-1 md:py-2 width-full ${bgColors[color]}`}
    >
      {children}
    </div>
  );
}

export { Badge };
