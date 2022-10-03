import React from "react";
import { TextButtonContainer } from "./styles";
import { ButtonProps } from "../common/types";

const TextButton: React.FC<ButtonProps> = ({
  children,
  onClick,
  ...styleProps
}) => {
  return (
    <TextButtonContainer onClick={onClick} {...styleProps}>
      {children}
    </TextButtonContainer>
  );
};

TextButton.defaultProps = {
  backgroundColor: "background",
  color: "primary",
  padding: "s",
  preset: 'button'
};

export default TextButton;
