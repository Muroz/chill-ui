import React from "react";
import { TypographyContainer } from "../common/styles";
import { TypographyProps } from "../common/types";

const Header: React.FC<TypographyProps> = ({ label, ...styleProps }) => {
  return <TypographyContainer {...styleProps}>{label}</TypographyContainer>;
};

Header.defaultProps = {
  preset: "h1",
  bg: 'white',
};

export default Header;
