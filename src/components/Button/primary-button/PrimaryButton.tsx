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
      style={{   
      width: '210px',
      height: '68px',
      backgroundColor: '#007AFF',
      color: '#FFFFFF',
      border: 'none',
      fontSize: '1.5rem'
    }}
      onClick={onClick}
    >
      {label}
    </button>
  );
};


