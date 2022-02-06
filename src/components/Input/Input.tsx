import React from "react";

type Props = {
  value: string | number | undefined;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  className?: string;
};

function Input({ value, onChange, className }: Props) {
  return (
    <input
      value={value}
      onChange={onChange}
      className={`outline-none font-normal ${className}`}
    />
  );
}

export { Input };
