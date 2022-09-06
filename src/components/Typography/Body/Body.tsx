import React, { PropsWithChildren } from "react";
import { TypographyContainer } from "../common/styles";
import { TypographyProps } from "../common/types";

const Body: React.FC<PropsWithChildren<TypographyProps>> = ({
  children,
  ...styleProps
}) => {
  return <TypographyContainer {...styleProps}>{children}</TypographyContainer>;
};

Body.defaultProps = {
  preset: "body",
  bg: "white",
  color: "paragraph",
  fontFamily: "sans-serif"
};

export default Body;
