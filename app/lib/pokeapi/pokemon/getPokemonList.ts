import { gql } from 'graphql-request';

export const getPokemonList = gql`
  query PokemonList {
    pokemonList: pokemon_v2_pokemon(limit: 1) {
      id
      name
      sprites: pokemon_v2_pokemonsprites {
        id
        sprites
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
