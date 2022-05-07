import React from "react";

export interface ButtonProps {
  label: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const PrimaryButton = ({
  onClick,
  label,
}: ButtonProps) => {
  return (
    <button 
      style={{ backgroundColor: 'red'}}
      onClick={onClick}
    >
      asdf
      {label}
    </button>
  );
};


