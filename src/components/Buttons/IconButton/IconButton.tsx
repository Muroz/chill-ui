import React from "react";
import { IconButtonContainer } from "./styles";
import { ButtonProps } from "../common/types";

const IconButton: React.FC<ButtonProps> = ({
  onClick,
  children,
  ...styleProps
}) => {
  return (
    <IconButtonContainer onClick={onClick} {...styleProps}>
      {children}
    </IconButtonContainer>
  );
};

IconButton.defaultProps = {
  bg: "primary",
  color: "buttonText",
  padding: "2xs",
};

export default IconButton;
