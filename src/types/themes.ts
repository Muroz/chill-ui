import "styled-components";

export interface IThemeColors {
  [index: string]: string;
  primary: string;
  secondary: string;
  error: string;
  warning: string;
  info: string;
  success: string;

  background: string;
  headline: string;
  paragraph: string;
  buttonText: string;
  tertiary: string;
}

interface TypographyEntry {
  color?: string;
  fontFamily?: string;
  fontSize?: string;
  fontStyle?: string;
  fontWeight?: string | number;
  lineHeight?: string;
  letterSpacing?: string;
}

export interface IThemeTypography {
  [index: string]: string | TypographyEntry;
  fontFamily: string;
  h1: TypographyEntry;
  h2: TypographyEntry;
  body: TypographyEntry;
  subtitle: TypographyEntry;
  button: TypographyEntry;
}

export interface IThemeSpace {
  [index: string]: string | number;
}

export interface IThemeShape {
  borderRadius: string | number;
}

export enum ThemeCategories {
  colors,
  typography,
  space,
  shape
}

export type ThemeCategoryKeys = keyof typeof ThemeCategories;
export type ThemeCategoryFields = {
  [key in ThemeCategoryKeys]: any
};
