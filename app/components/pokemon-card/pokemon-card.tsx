import { PokemonType } from '../pokemon-type/pokemon-type';
import type { PokemonListItem } from '~/lib/pokeapi/pokemon/getPokemonList';

export type PokemonCardProps = {
  pokemon: PokemonListItem;
};

export function PokemonCard({ pokemon }: PokemonCardProps) {
  return (
    <div className={`relative flex w-40 flex-col items-center rounded-xl border bg-card p-2`}>
      <p className="absolute left-0 top-0 z-10 px-2 font-extrabold leading-[1.5em] text-card-foreground/25">
        {pokemon.id}
      </p>
      <div className="z-20 flex w-[128px] items-center justify-center object-cover">
        <img className="align-bottom" src={pokemon.sprites[0].versions.front_default ?? undefined} alt={pokemon.name} />
      </div>
      <div className="z-20 flex flex-col items-center gap-2 p-2">
        <p className="text-lg font-semibold text-card-foreground">{pokemon.name}</p>
        <div className="flex flex-row gap-2">
          {pokemon.types.map((type) => (
            <PokemonType key={`${pokemon.name}-${type.slot}-${type.type.name}`} type={type.type.name} size={'small'} />
          ))}
        </div>
      </div>
    </div>
  );
}
