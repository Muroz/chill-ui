import React, { PropsWithChildren } from "react";
import { TypographyContainer } from "../common/styles";
import { TypographyProps } from "../common/types";

const H1: React.FC<PropsWithChildren<TypographyProps>> = ({
  children,
  ...styleProps
}) => {
  return <TypographyContainer {...styleProps}>{children}</TypographyContainer>;
};

H1.defaultProps = {
  preset: "h1",
  bg: "white",
  color: "headline",
  fontFamily: "sans-serif"
};

export default H1;
