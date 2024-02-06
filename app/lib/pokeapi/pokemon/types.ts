import type { NamedAPIResource, VersionGameIndex } from '../common/types';

export type Pokemon = {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  is_default: boolean;
  order: number;
  weight: number;
  abilities: Array<PokemonAbility>;
  forms: Array<NamedAPIResource>;
  game_indices: Array<VersionGameIndex>;
  held_items: Array<PokemonHeldItem>;
  location_area_encounters: string;
  moves: Array<PokemonMove>;
  past_types: Array<PokemonTypePast>;
  sprites: PokemonSprites;
  species: NamedAPIResource;
  stats: Array<PokemonStat>;
  types: Array<PokemonType>;
};

export type PokemonAbility = {
  is_hidden: boolean;
  slot: number;
  ability: NamedAPIResource;
};

export type PokemonHeldItem = {
  version: NamedAPIResource;
  rarity: number;
};

export type PokemonMove = {
  move: NamedAPIResource;
  version_group_details: PokemonMoveVersion;
};

export type PokemonMoveVersion = {
  move_learn_method: NamedAPIResource;
  version_group: NamedAPIResource;
  level_learned_at: number;
};

export type PokemonTypePast = {
  generation: NamedAPIResource;
  types: PokemonType;
};

export type PokemonSprites = {
  front_default: string;
  front_shiny: string;
  front_female: string;
  front_shiny_female: string;
  back_default: string;
  back_shiny: string;
  back_female: string;
  back_shiny_female: string;
};

export type PokemonStat = {
  stat: NamedAPIResource;
  effort: number;
  base_stat: number;
};

export type PokemonType = {
  slot: number;
  type: NamedAPIResource;
};
