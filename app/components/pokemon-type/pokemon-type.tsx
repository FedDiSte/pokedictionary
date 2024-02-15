import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '~/lib/utils';
import type { Type } from '~/types/pokemon/type';

type PokemonTypeProps = {
  type: Type['name'];
} & VariantProps<typeof typeVariants>;

const typeVariants = cva(
  'inline-flex h-8 w-24 items-center justify-center rounded-sm px-1.5 py-2 text-sm font-medium',
  {
    variants: {
      variant: {
        normal: 'bg-normal',
        fighting: 'bg-fighting',
        flying: 'bg-flying',
        poison: 'bg-poison',
        ground: 'bg-ground',
        rock: 'bg-rock',
        bug: 'bg-bug',
        ghost: 'bg-ghost',
        steel: 'bg-steel',
        fire: 'bg-fire',
        water: 'bg-water',
        grass: 'bg-grass',
        electric: 'bg-electric',
        psychic: 'bg-psychic',
        ice: 'bg-ice',
        dragon: 'bg-dragon',
        dark: 'bg-dark',
        fairy: 'bg-fairy',
        unknown: 'bg-unknown',
        shadow: 'bg-shadow',
      },
      size: {
        small: 'h-6 w-16 text-xs',
        default: 'h-8 w-24 text-sm',
      },
    },
    defaultVariants: {
      variant: 'fire',
      size: 'default',
    },
  }
);

export function PokemonType({ type, size }: PokemonTypeProps) {
  return <label className={cn(typeVariants({ variant: type, size }))}>{type.toUpperCase()}</label>;
}
