import {
  ThemeCategoryFields,
  IThemeColors,
  IThemeTypography,
  IThemeSpace
} from "./themes";

declare module "styled-components" {
  export interface DefaultTheme extends ThemeCategoryFields {
    colors: IThemeColors;
    typography: IThemeTypography;
    space: IThemeSpace;
  }
}
