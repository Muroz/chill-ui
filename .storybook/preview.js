import { addDecorator } from "@storybook/react";
import { withThemesProvider } from "storybook-addon-styled-component-theme";
import { ThemeProvider } from "styled-components";

import { defaultTheme } from "../src/themes/index";

export const argTypes = Object.assign({});

export const args = {};

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    expanded: true,
    matchers: {
      color: /(bg|background|color)$/i,
      date: /Date$/
    },
    exclude: ["theme"]
  },
  backgrounds: {
    values: [
      { name: "red", value: "#f00" },
      { name: "green", value: "#0f0" },
      { name: "blue", value: "#00f" }
    ]
  }
};

const themes = [{ chillUI: defaultTheme, name: "Default" }];

addDecorator(withThemesProvider(themes), ThemeProvider);