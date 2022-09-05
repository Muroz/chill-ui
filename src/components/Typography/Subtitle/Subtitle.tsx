import React, { PropsWithChildren } from "react";
import { TypographyContainer } from "../common/styles";
import { TypographyProps } from "../common/types";

const Subtitle: React.FC<PropsWithChildren<TypographyProps>> = ({
  children,
  ...styleProps
}) => {
  return <TypographyContainer {...styleProps}>{children}</TypographyContainer>;
};

Subtitle.defaultProps = {
  preset: "subtitle",
  bg: "white",
  color: "paragraph",
  fontFamily: "sans-serif"
};

export default Subtitle;
