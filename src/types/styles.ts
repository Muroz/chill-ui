import { DefaultTheme } from "styled-components";

import { ThemeCategoryKeys } from "../types/styled";

export type valueEntry = [
  ThemeCategoryKeys,
  string,
  string | number | undefined,
  string?
];

export interface BaseThemeProps {
  /**
   * Theme object
   */
  theme?: DefaultTheme;
}

export interface TypographyProps extends BaseThemeProps {
  /**
   * Text font family
   */
  fontFamily?: string;
  /**
   * Text size
   */
  fontSize?: string | number;
  /**
   * Text style
   */
  fontStyle?: string;
  /**
   * Text font weight
   */
  fontWeight?: string | number;
  /**
   * Text letter spacing
   */
  letterSpacing?: string | number;
  /**
   * Text line height
   */
  lineHeight?: string | number;
  /**
   * Text alignment
   */
  textAlign?: string;
  /**
   * Preset
   */
  preset?: string;
}

export interface ColorProps extends BaseThemeProps {
  /**
   * Background color
   */
  backgroundColor?: string;
  /**
   * Simplied version of backgroundColor, takes precedence if they are both defined
   */
  bg?: string;
  /**
   * Text color
   */
  color?: string;
}

export interface SpaceProps extends BaseThemeProps {
  /**
   * Margin modifier
   */
  margin?: string | number;
  /**
   * Simplified version of margin, takes precedence if they are both defined
   */
  m?: string | number;

  /**
   * Top margin modifier
   */
  marginTop?: string | number;
  /**
   * Simplified version of marginTop, takes precedence if they are both defined
   */
  mt?: string | number;

  /**
   * Right margin modifier
   */
  marginRight?: string | number;
  /**
   * Simplified version of marginRight, takes precedence if they are both defined
   */
  mr?: string | number;

  /**
   * Bottom margin modifier
   */
  marginBottom?: string | number;
  /**
   * Simplified version of marginBottom, takes precedence if they are both defined
   */
  mb?: string | number;

  /**
   * Left margin modifier
   */
  marginLeft?: string | number;
  /**
   * Simplified version of marginLeft, takes precedence if they are both defined
   */
  ml?: string | number;

  /**
   * X axis margin modifier
   */
  marginX?: string | number;
  /**
   * Simplified version of marginX, takes precedence if they are both defined
   */
  mx?: string | number;

  /**
   * Y axis margin modifier
   */
  marginY?: string | number;
  /**
   * Simplified version of marginY, takes precedence if they are both defined
   */
  my?: string | number;

  /**
   * Padding modifier
   */
  padding?: string | number;
  /**
   * Simplified version of padding, takes precedence if they are both defined
   */
  p?: string | number;

  /**
   * Top padding modifier
   */
  paddingTop?: string | number;
  /**
   * Simplified version of paddingTop, takes precedence if they are both defined
   */
  pt?: string | number;

  /**
   * Right padding modifier
   */
  paddingRight?: string | number;
  /**
   * Simplified version of paddingRight, takes precedence if they are both defined
   */
  pr?: string | number;

  /**
   * Bottom padding modifier
   */
  paddingBottom?: string | number;
  /**
   * Simplified version of paddingBottom, takes precedence if they are both defined
   */
  pb?: string | number;

  /**
   * Left padding modifier
   */
  paddingLeft?: string | number;
  /**
   * Simplified version of paddingLeft, takes precedence if they are both defined
   */
  pl?: string | number;

  /**
   * X axis padding modifier
   */
  paddingX?: string | number;
  /**
   * Simplified version of paddingX, takes precedence if they are both defined
   */
  px?: string | number;

  /**
   * Y axis padding modifier
   */
  paddingY?: string | number;
  /**
   * Simplified version of paddingY, takes precedence if they are both defined
   */
  py?: string | number;
}

export interface BorderProps extends BaseThemeProps {
  /**
   * Border modifier
   */
  border?: string;
  /**
   * Border radius modifier
   */
  borderRadius?: string | number;
}

export interface LayoutProps extends BaseThemeProps {
  /**
   * Component width modifier
   */
  width?: string | number;
  /**
   * Component height modifier
   */
  height?: string | number;
  /**
   * Component display modifier
   */
  display?: string;
  /**
   * Component minWidth modifier
   */
  minWidth?: string | number;
  /**
   * Component minHeight modifier
   */
  minHeight?: string | number;
  /**
   * Component maxWidth modifier
   */
  maxWidth?: string | number;
  /**
   * Component maxHeight modifier
   */
  maxHeight?: string | number;
}
