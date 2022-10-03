import React from "react";
import { FlatButtonContainer } from "./styles";
import { ButtonProps } from "../common/types";

const FlatButton: React.FC<ButtonProps> = ({
  children,
  onClick,
  ...styleProps
}) => {
  return (
    <FlatButtonContainer onClick={onClick} {...styleProps}>
      {children}
    </FlatButtonContainer>
  );
};

FlatButton.defaultProps = {
  bg: "primary",
  color: "buttonText",
  padding: "s",
  preset: "button"
};

export default FlatButton;
