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
`;
