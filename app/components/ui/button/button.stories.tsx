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

export const Secondary: Story = {
  args: {
    children: 'Button',
    variant: 'secondary'
  }
};

export const Ghost: Story = {
  args: {
    children: 'Button',
    variant: 'ghost'
  }
};

export const Outline: Story = {
  args: {
    children: 'Button',
    variant: 'outline'
  }
};