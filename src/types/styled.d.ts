import {
  ChillUITheme
} from "./themes";

declare module "styled-components" {
  export interface DefaultTheme {
    chillUI: ChillUITheme
  }
}
