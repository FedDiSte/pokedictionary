import type { Meta, StoryObj } from '@storybook/react';
import { Header } from './header';

type Story = StoryObj<typeof Header>;

const meta: Meta<typeof Header> = {
  title: 'Molecules/Header',
  component: Header,
};

export default meta;

export const Default: Story = {};
