import styled from "styled-components";
import {
  color,
  typography,
  space,
  border,
  layout
} from "../../../utils/styles/helpers";
import {
  ColorProps,
  TypographyProps,
  SpaceProps,
  BorderProps,
  LayoutProps
} from "../../../types/styles";

export interface ButtonStyleProps
  extends ColorProps,
    TypographyProps,
    SpaceProps,
    BorderProps,
    LayoutProps {}

export const ButtonContainer = styled.button<ButtonStyleProps>`
  ${color};
  ${typography};
  ${space}
  ${border}
  ${layout}

  cursor: pointer;
  
  &:hover {
    box-shadow: 0 5px 15px -10px rgb(31 18 53 / 60%);
  }
`;
