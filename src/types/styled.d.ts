import "styled-components";

export interface IThemeColors {
  [index: string]: string;
  primary: string;
  secondary: string;
  error: string;
  warning: string;
  info: string;
  success: string;
}

export interface IThemeTypography {
  [index: string]: string | number | any;
}

export interface IThemeSpace {
  [index: string]: string | number;
}

export enum ThemeCategories {
  colors,
  typography,
  space,
}

export type ThemeCategoryKeys = keyof typeof ThemeCategories;
type ThemeCategoryFields = { [key in ThemeCategoryKeys]: any };

declare module "styled-components" {
  export interface DefaultTheme extends ThemeCategoryFields {
    colors: IThemeColors;
    typography: IThemeTypography;
    space: IThemeSpace;
  }
}
