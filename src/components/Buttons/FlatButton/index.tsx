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
  backgroundColor: "primary",
  color: "buttonText",
  padding: "s",
  preset: "button"
};

export default FlatButton;
