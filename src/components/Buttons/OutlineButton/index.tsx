import React from "react";
import { OutlineButtonContainer } from "./styles";
import { ButtonProps } from "../common/types";

const OutlineButton: React.FC<ButtonProps> = ({
  label,
  onClick,
  ...styleProps
}) => {
  return (
    <OutlineButtonContainer onClick={onClick} {...styleProps}>
      {label}
    </OutlineButtonContainer>
  );
};

OutlineButton.defaultProps = {
  backgroundColor: "white",
  color: "#87ceeb",
  padding: "1rem",
  fontWeight: "bold",
  fontSize: "1rem",
  borderRadius: "5px",
  border: "1px solid #87ceeb"
};

export default OutlineButton;
