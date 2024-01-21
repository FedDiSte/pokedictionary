import { Button } from './button';
import { Meta, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof Button>;

const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button
};

export default meta;

export const Base: Story = {
  args: {
    children: 'Button',
    variant: 'default'
  }
};