import type { Type } from '~/types/pokemon/type';
import { PokemonType } from '../pokemon-type/pokemon-type';

const pokemon: { [key: string]: any } & { types: Array<{ slot: number; type: Type }> } = {
  id: 643,
  name: 'reshiram',
  sprites: [
    {
      sprites: {
        other: {
          home: {
            front_shiny:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/643.png',
            front_female: null,
            front_default:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/643.png',
            front_shiny_female: null,
          },
          showdown: {
            back_shiny:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/back/shiny/643.gif',
            back_female: null,
            front_shiny:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/643.gif',
            back_default:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/back/643.gif',
            front_female: null,
            front_default:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/643.gif',
            back_shiny_female: null,
            front_shiny_female: null,
          },
          dream_world: {
            front_female: null,
            front_default:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/643.svg',
          },
          'official-artwork': {
            front_shiny:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/643.png',
            front_default:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/643.png',
          },
        },
        versions: {
          'generation-i': {
            yellow: {
              back_gray: null,
              front_gray: null,
              back_default: null,
              front_default: null,
              back_transparent: null,
              front_transparent: null,
            },
            'red-blue': {
              back_gray: null,
              front_gray: null,
              back_default: null,
              front_default: null,
              back_transparent: null,
              front_transparent: null,
            },
          },
          'generation-v': {
            'black-white': {
              animated: {
                back_shiny:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/shiny/643.gif',
                back_female: null,
                front_shiny:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/643.gif',
                back_default:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/643.gif',
                front_female: null,
                front_default:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/643.gif',
                back_shiny_female: null,
                front_shiny_female: null,
              },
              back_shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/shiny/643.png',
              back_female: null,
              front_shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/shiny/643.png',
              back_default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/643.png',
              front_female: null,
              front_default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/643.png',
              back_shiny_female: null,
              front_shiny_female: null,
            },
          },
          'generation-ii': {
            gold: {
              back_shiny: null,
              front_shiny: null,
              back_default: null,
              front_default: null,
              front_transparent: null,
            },
            silver: {
              back_shiny: null,
              front_shiny: null,
              back_default: null,
              front_default: null,
              front_transparent: null,
            },
            crystal: {
              back_shiny: null,
              front_shiny: null,
              back_default: null,
              front_default: null,
              back_transparent: null,
              front_transparent: null,
              back_shiny_transparent: null,
              front_shiny_transparent: null,
            },
          },
          'generation-iv': {
            platinum: {
              back_shiny: null,
              back_female: null,
              front_shiny: null,
              back_default: null,
              front_female: null,
              front_default: null,
              back_shiny_female: null,
              front_shiny_female: null,
            },
            'diamond-pearl': {
              back_shiny: null,
              back_female: null,
              front_shiny: null,
              back_default: null,
              front_female: null,
              front_default: null,
              back_shiny_female: null,
              front_shiny_female: null,
            },
            'heartgold-soulsilver': {
              back_shiny: null,
              back_female: null,
              front_shiny: null,
              back_default: null,
              front_female: null,
              front_default: null,
              back_shiny_female: null,
              front_shiny_female: null,
            },
          },
          'generation-vi': {
            'x-y': {
              front_shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/shiny/643.png',
              front_female: null,
              front_default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/643.png',
              front_shiny_female: null,
            },
            'omegaruby-alphasapphire': {
              front_shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/shiny/643.png',
              front_female: null,
              front_default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/643.png',
              front_shiny_female: null,
            },
          },
          'generation-iii': {
            emerald: {
              front_shiny: null,
              front_default: null,
            },
            'ruby-sapphire': {
              back_shiny: null,
              front_shiny: null,
              back_default: null,
              front_default: null,
            },
            'firered-leafgreen': {
              back_shiny: null,
              front_shiny: null,
              back_default: null,
              front_default: null,
            },
          },
          'generation-vii': {
            icons: {
              front_female: null,
              front_default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/643.png',
            },
            'ultra-sun-ultra-moon': {
              front_shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/shiny/643.png',
              front_female: null,
              front_default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/643.png',
              front_shiny_female: null,
            },
          },
          'generation-viii': {
            icons: {
              front_female: null,
              front_default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/icons/643.png',
            },
          },
        },
        back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/643.png',
        back_female: null,
        front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/643.png',
        back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/643.png',
        front_female: null,
        front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/643.png',
        back_shiny_female: null,
        front_shiny_female: null,
      },
    },
  ],
  types: [
    {
      slot: 1,
      type: {
        id: 16,
        name: 'dragon',
      },
    },
    {
      slot: 2,
      type: {
        id: 10,
        name: 'fire',
      },
    },
  ],
};

export function PokemonCard() {
  return (
    <div className="flex w-40 flex-col items-center rounded-xl border bg-card p-2">
      <img
        className="-mb-10 w-2/3 -translate-y-12"
        src={pokemon.sprites[0].sprites.versions['generation-v']['black-white'].animated.front_default}
        alt={pokemon.name}
      />
      <div className="flex flex-col items-center gap-2">
        <p className="text-sm text-card-foreground">
          {pokemon.name} - #{pokemon.id}
        </p>
        <div className="flex flex-row gap-2">
          {pokemon.types.map((type) => (
            <PokemonType key={`${pokemon.name}-${type.slot}-${type.type.name}`} type={type.type.name} size={'small'} />
          ))}
        </div>
      </div>
    </div>
  );
}
