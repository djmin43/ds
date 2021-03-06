module.exports = {
  stories: [
    "../src/**/*.stories.tsx",
    "../src/**/**/*.stories.tsx",
    "../src/**/**/**/*.stories.tsx",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/react",

};
