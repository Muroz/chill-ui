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
  backgroundColor: "background",
  color: "primary",
  border: "1px solid",
  borderColor: "primary",
  borderRadius: "5px",
  padding: "s",
  preset: "button",
};

export default OutlineButton;
