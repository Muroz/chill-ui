import React from "react";
import { TextButtonContainer } from "./styles";
import { ButtonProps } from "../common/types";

const TextButton: React.FC<ButtonProps> = ({
  label,
  onClick,
  ...styleProps
}) => {
  return (
    <TextButtonContainer onClick={onClick} {...styleProps}>
      {label}
    </TextButtonContainer>
  );
};

TextButton.defaultProps = {
  backgroundColor: "white",
  color: "#87ceeb",
  padding: "1rem",
  fontWeight: "bold",
  fontSize: "1rem"
};

export default TextButton;
