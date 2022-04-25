import React from "react";

import {
  CheckboxContainer,
  HiddenCheckbox,
  StyledCheckbox,
  IconFrame,
  CheckMarkIcon,
  StructureGrid,
  Label,
  CheckboxStyleProps
} from "./styles";

export interface CheckboxProps extends CheckboxStyleProps {
  /**
   * What label to display
   */
  label?: string;
  /**
   * Where to place the label. Default location is "right"
   */
  labelPlacement?: "top" | "bottom" | "left" | "right";
}

const Checkbox: React.FC<CheckboxProps> = ({
  backgroundColor,
  checked,
  color,
  label,
  labelPlacement,
  unCheckedBackgroundColor,
  ...props
}) => {
  return (
    <CheckboxContainer>
      <label>
        <StructureGrid labelPlacement={labelPlacement}>
          <HiddenCheckbox checked={checked} {...props} />
          <StyledCheckbox
            checked={checked}
            color={color}
            backgroundColor={backgroundColor}
            unCheckedBackgroundColor={unCheckedBackgroundColor}
          >
            <IconFrame>
              <CheckMarkIcon />
            </IconFrame>
          </StyledCheckbox>
          {label && <Label>{label}</Label>}
        </StructureGrid>
      </label>
    </CheckboxContainer>
  );
};

export default Checkbox;
