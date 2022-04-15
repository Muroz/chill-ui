import React from "react";

import { ButtonContainer, ButtonStyleProps } from "./styles";

export interface ButtonProps extends ButtonStyleProps {
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  backgroundColor,
  color,
  label,
  onClick,
  size,
  variant
}) => {
  return (
    <ButtonContainer
      backgroundColor={backgroundColor}
      color={color}
      onClick={onClick}
      size={size}
      variant={variant}
    >
      {label}
    </ButtonContainer>
  );
};

export default Button;
