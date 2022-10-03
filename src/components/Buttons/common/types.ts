import { PropsWithChildren, ComponentPropsWithRef } from "react";
import { ButtonStyleProps } from "./styles";

export interface ButtonProps
  extends PropsWithChildren<ButtonStyleProps>,
    ComponentPropsWithRef<"button"> {}
