import type { StorybookConfig } from '@storybook/react-vite';
import { mergeConfig } from 'vite';

import tsconfigPaths from 'vite-tsconfig-paths';

const config: StorybookConfig = {
  stories: ['../app/**/*.mdx', '../app/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
    'storybook-dark-mode',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  async viteFinal(config) {
    // return the customized config
    return mergeConfig(config, {
      // customize the Vite config here
      plugins: [tsconfigPaths()],
    });
  },
};
export default config;
