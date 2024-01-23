import type { Preview, StoryFn } from '@storybook/react';
import { themes } from '@storybook/theming';
import { createRemixStub } from '@remix-run/testing';

import '../app/tailwind.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    darkMode: {
      stylePreview: true,
      classTarget: 'html',
      darkClass: ['dark', 'bg-background'],
      lightClass: ['bg-background'],
      // Override the default dark theme
      dark: { ...themes.dark },
      // Override the default light theme
      light: { ...themes.normal },
    },
  },
  decorators: [
    (Story: StoryFn) => {
      const RemixStub = createRemixStub([
        {
          path: '/*',
          action: () => ({ redirect: '/' }),
          loader: () => ({ redirect: '/' }),
          Component() {
            // <-- here
            return <Story />;
          },
        },
      ]);

      return <RemixStub />;
    },
  ],
};

export default preview;
