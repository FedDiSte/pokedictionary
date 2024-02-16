import { gql } from 'graphql-request';
import type { Sprite, TypeSlot } from '~/types/pokemon/type';

export type PokemonListItem = {
  id: string;
  name: string;
  sprites: Array<Sprite>;
  types: Array<TypeSlot>;
};

export const getPokemonList = gql`
  query PokemonList {
    pokemonList: pokemon_v2_pokemon(limit: 10) {
      id
      name
      sprites: pokemon_v2_pokemonsprites {
        id
        versions: sprites
      }
      types: pokemon_v2_pokemontypes {
        slot
        type: pokemon_v2_type {
          id
          name
        }
      }
    }
  }
`;
