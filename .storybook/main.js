module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "storybook-addon-styled-component-theme/dist/preset"
  ],
  framework: "@storybook/react",
  // typescript: {
  //   reactDocgen: "react-docgen-typescript",
  //   reactDocgenTypescriptOptions: { //https://github.com/storybookjs/storybook/issues/12129
  //     compilerOptions: {
  //       allowSyntheticDefaultImports: false,
  //       esModuleInterop: false
  //     }
  //   }
  // }
};