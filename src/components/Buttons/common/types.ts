import { ButtonStyleProps } from "./styles";

export interface ButtonProps extends ButtonStyleProps {
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}
