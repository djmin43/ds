import React from "react";

export interface ButtonProps {
  label: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const BaseButton = ({
  onClick,
  label,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
    >
      {label}
    </button>
  );
};
