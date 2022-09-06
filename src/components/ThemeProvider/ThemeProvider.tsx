import React, { PropsWithChildren } from "react";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "../../themes";
import { ChillUITheme } from "../../types/themes";

export interface ThemeProviderProps {
  theme?: ChillUITheme;
}

const ChillUIThemeProvider: React.FC<PropsWithChildren<ThemeProviderProps>> = (
  props
) => {
  const { children, theme: themeOverride } = props;
  const theme = {
    chillUI: { ...defaultTheme, ...themeOverride }
  };

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default ChillUIThemeProvider;
