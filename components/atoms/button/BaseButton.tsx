import React from "react";
import styled from "@emotion/styled";

type ButtonStyleType = "primary" | "secondary" | "success" | "error";

type BaseButtonProps = {
  children: string;
  onClick: () => void;
  buttonStyle: ButtonStyleType;
};

type StyledBaseButtonProps = {
  buttonStyle: ButtonStyleType;
};

const BaseButton = ({ children, onClick, buttonStyle }: BaseButtonProps) => {
  return (
    <StyledBaseButton buttonStyle={buttonStyle} onClick={onClick}>
      {children}
    </StyledBaseButton>
  );
};

const StyledBaseButton = styled.button`
  background-color: ${({ buttonStyle }: StyledBaseButtonProps) =>
    getBaseButtonBackgroundColor(buttonStyle)};
  color: ${({ buttonStyle }: StyledBaseButtonProps) =>
    getBaseButtonColor(buttonStyle)};
  font-weight: 500;
  min-width: 4rem;
  padding: 0.375rem 1rem;
  border-radius: 0.25rem;
  font-size: 0.875rem;
  outline: 0;
  border: 0;
  margin: 0;
  box-sizing: border-box;
  &:active {
    opacity: 0.85;
  }
`;

function getBaseButtonBackgroundColor(buttonStyle: ButtonStyleType) {
  switch (buttonStyle) {
    case "primary":
      return "#1976d2";
    case "secondary":
      return "#9c27b0";
    case "success":
      return "#2e7d32";
    case "error":
      return "#d32f2f";
  }
}

function getBaseButtonColor(buttonStyle: ButtonStyleType) {
  switch (buttonStyle) {
    case "primary":
      return "#fff";
    case "secondary":
      return "#fff";
    case "success":
      return "#fff";
    case "error":
      return "#fff";
  }
}

export default BaseButton;
