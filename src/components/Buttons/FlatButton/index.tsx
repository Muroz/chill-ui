import React from "react";
import { FlatButtonContainer } from "./styles";
import { ButtonProps } from "../common/types";

const FlatButton: React.FC<ButtonProps> = ({
  label,
  onClick,
  ...styleProps
}) => {
  return (
    <FlatButtonContainer onClick={onClick} {...styleProps}>
      {label}
    </FlatButtonContainer>
  );
};

FlatButton.defaultProps = {
  backgroundColor: "#87ceeb",
  color: "white",
  padding: "1rem",
  fontWeight: "bold",
  fontSize: "1rem"
};

export default FlatButton;
