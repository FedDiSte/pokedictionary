import type { Meta, StoryObj } from '@storybook/react';
import { PokemonCard } from './pokemon-card';

type Story = StoryObj<typeof PokemonCard>;

const meta: Meta<typeof PokemonCard> = {
  title: 'Atoms/Pokemon Card',
  component: PokemonCard,
  decorators: [
    (Story) => (
      <div className="p-10">
        <Story />
      </div>
    ),
  ],
};

export default meta;

export const Default: Story = {};
