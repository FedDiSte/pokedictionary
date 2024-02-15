import type { StoryObj, Meta } from '@storybook/react';
import type { Type } from '~/types/pokemon/type';
import { PokemonType } from './pokemon-type';

type Story = StoryObj<typeof PokemonType>;

const meta: Meta<typeof PokemonType> = {
  component: PokemonType,
  title: 'Atoms/Pokemon Type',
};

export default meta;

export const Default: Story = {
  args: {
    type: 'fire',
  },
  decorators: [
    (Story) => {
      return (
        <div className="flex flex-col gap-2">
          <div className="grid w-screen grid-flow-row grid-cols-5 items-center justify-center gap-y-2">
            {[
              'normal',
              'fighting',
              'flying',
              'poison',
              'ground',
              'rock',
              'bug',
              'ghost',
              'steel',
              'fire',
              'water',
              'grass',
              'electric',
              'psychic',
              'ice',
              'dragon',
              'dark',
              'fairy',
              'unknown',
              'shadow',
            ].map((type) => (
              <div key={type} className="col-span-1">
                <PokemonType type={type as Type['name']} />
              </div>
            ))}
            {[
              'normal',
              'fighting',
              'flying',
              'poison',
              'ground',
              'rock',
              'bug',
              'ghost',
              'steel',
              'fire',
              'water',
              'grass',
              'electric',
              'psychic',
              'ice',
              'dragon',
              'dark',
              'fairy',
              'unknown',
              'shadow',
            ].map((type) => (
              <div key={type} className="col-span-1">
                <PokemonType type={type as Type['name']} size={'small'} />
              </div>
            ))}
          </div>
        </div>
      );
    },
  ],
};
