import React from "react";
import styled from '@emotion/styled'

export interface ButtonProps {
  label: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const PrimaryButton = ({
  onClick,
  label,
}: ButtonProps) => {
  return (
    <StyledPrimaryButton
      onClick={onClick}
    >
      asdf
      {label}
    </StyledPrimaryButton>
  );
};


export const StyledPrimaryButton = styled.button`
  width: '210px';
  height: '68px';
  background-color: '#007AFF';
  color: '#FFFFFF';
`

