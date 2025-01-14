module.exports = {
  "stories": [
    "../stories/*.stories.tsx",
  ],

  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@chromatic-com/storybook"
  ],

  "framework": {
    name: "@storybook/react-vite",
    options: {}
  },

  "features": {},

  async viteFinal(config) {
    return Object.assign({}, config, {
      base: '/split-pane-react/'
    });
  },

  docs: {},

  typescript: {
    reactDocgen: "react-docgen-typescript"
  }
}