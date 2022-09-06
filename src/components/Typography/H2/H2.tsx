import React, { PropsWithChildren } from "react";
import { TypographyContainer } from "../common/styles";
import { TypographyProps } from "../common/types";

const H2: React.FC<PropsWithChildren<TypographyProps>> = ({
  children,
  ...styleProps
}) => {
  return <TypographyContainer {...styleProps}>{children}</TypographyContainer>;
};

H2.defaultProps = {
  preset: "h2",
  bg: "white",
  color: "headline",
  fontFamily: "sans-serif"
};

export default H2;
