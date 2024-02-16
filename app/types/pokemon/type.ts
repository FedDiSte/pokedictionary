export type Type = {
  id: number;
  name:
    | 'normal'
    | 'fighting'
    | 'flying'
    | 'poison'
    | 'ground'
    | 'rock'
    | 'bug'
    | 'ghost'
    | 'steel'
    | 'fire'
    | 'water'
    | 'grass'
    | 'electric'
    | 'psychic'
    | 'ice'
    | 'dragon'
    | 'dark'
    | 'fairy'
    | 'unknown'
    | 'shadow';
};

export type TypeSlot = {
  slot: number;
  type: Type;
};

export type Sprite = {
  versions: {
    other: {
      home: {
        front_shiny: string | null;
        front_female: string | null;
        front_default: string | null;
        front_shiny_female: string | null;
      };
      showdown: {
        back_shiny: string | null;
        back_female: string | null;
        front_shiny: string | null;
        back_default: string | null;
        front_female: string | null;
        front_default: string | null;
        back_shiny_female: string | null;
        front_shiny_female: string | null;
      };
      dream_world: {
        front_female: string | null;
        front_default: string | null;
      };
      'official-artwork': {
        front_shiny: string | null;
        front_default: string | null;
      };
    };
    versions: {
      'generation-i': {
        yellow: {
          back_gray: string | null;
          front_gray: string | null;
          back_default: string | null;
          front_default: string | null;
          back_transparent: string | null;
          front_transparent: string | null;
        };
        'red-blue': {
          back_gray: string | null;
          front_gray: string | null;
          back_default: string | null;
          front_default: string | null;
          back_transparent: string | null;
          front_transparent: string | null;
        };
      };
      'generation-v': {
        'black-white': {
          animated: {
            back_shiny: string | null;
            back_female: string | null;
            front_shiny: string | null;
            back_default: string | null;
            front_female: string | null;
            front_default: string | null;
            back_shiny_female: string | null;
            front_shiny_female: string | null;
          };
          back_shiny: string | null;
          back_female: string | null;
          front_shiny: string | null;
          back_default: string | null;
          front_female: string | null;
          front_default: string | null;
          back_shiny_female: string | null;
          front_shiny_female: string | null;
        };
      };
      'generation-ii': {
        gold: {
          back_shiny: string | null;
          front_shiny: string | null;
          back_default: string | null;
          front_default: string | null;
          front_transparent: string | null;
        };
        silver: {
          back_shiny: string | null;
          front_shiny: string | null;
          back_default: string | null;
          front_default: string | null;
          front_transparent: string | null;
        };
        crystal: {
          back_shiny: string | null;
          front_shiny: string | null;
          back_default: string | null;
          front_default: string | null;
          back_transparent: string | null;
          front_transparent: string | null;
          back_shiny_transparent: string | null;
          front_shiny_transparent: string | null;
        };
      };
      'generation-iv': {
        platinum: {
          back_shiny: string | null;
          back_female: string | null;
          front_shiny: string | null;
          back_default: string | null;
          front_female: string | null;
          front_default: string | null;
          back_shiny_female: string | null;
          front_shiny_female: string | null;
        };
        'diamond-pearl': {
          back_shiny: string | null;
          back_female: string | null;
          front_shiny: string | null;
          back_default: string | null;
          front_female: string | null;
          front_default: string | null;
          back_shiny_female: string | null;
          front_shiny_female: string | null;
        };
        'heartgold-soulsilver': {
          back_shiny: string | null;
          back_female: string | null;
          front_shiny: string | null;
          back_default: string | null;
          front_female: string | null;
          front_default: string | null;
          back_shiny_female: string | null;
          front_shiny_female: string | null;
        };
      };
      'generation-vi': {
        'x-y': {
          front_shiny: string | null;
          front_female: string | null;
          front_default: string | null;
          front_shiny_female: string | null;
        };
        'omegaruby-alphasapphire': {
          front_shiny: string | null;
          front_female: string | null;
          front_default: string | null;
          front_shiny_female: string | null;
        };
      };
      'generation-iii': {
        emerald: {
          front_shiny: string | null;
          front_default: string | null;
        };
        'ruby-sapphire': {
          back_shiny: string | null;
          front_shiny: string | null;
          back_default: string | null;
          front_default: string | null;
        };
        'firered-leafgreen': {
          back_shiny: string | null;
          front_shiny: string | null;
          back_default: string | null;
          front_default: string | null;
        };
      };
      'generation-vii': {
        icons: {
          front_female: string | null;
          front_default: string | null;
        };
        'ultra-sun-ultra-moon': {
          front_shiny: string | null;
          front_female: string | null;
          front_default: string | null;
          front_shiny_female: string | null;
        };
      };
      'generation-viii': {
        icons: {
          front_female: string | null;
          front_default: string | null;
        };
      };
    };
    back_shiny: string | null;
    back_female: string | null;
    front_shiny: string | null;
    back_default: string | null;
    front_female: string | null;
    front_default: string | null;
    back_shiny_female: string | null;
    front_shiny_female: string | null;
  };
};
