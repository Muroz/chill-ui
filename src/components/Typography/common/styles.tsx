import styled from "styled-components";
import { color, typography, space } from "../../../utils/styles/helpers";
import { ColorProps, TypographyProps, SpaceProps } from "../../../types/styles";

export interface TypographyStyleProps
  extends ColorProps,
    TypographyProps,
    SpaceProps {}

export const TypographyContainer = styled.div<TypographyStyleProps>`
  ${color};
  ${typography};
  ${space};
`;
