import type { LoaderFunctionArgs, MetaFunction } from '@remix-run/node';
import { Header } from '~/components/header/header';

import { request as gqlRequest } from 'graphql-request';
import type { PokemonListItem } from '~/lib/pokeapi/pokemon/getPokemonList';
import { getPokemonList } from '~/lib/pokeapi/pokemon/getPokemonList';
import { useLoaderData } from '@remix-run/react';
import { PokemonCard } from '~/components/pokemon-card/pokemon-card';

export const meta: MetaFunction = () => {
  return [{ title: 'New Remix App' }, { name: 'description', content: 'Welcome to Remix!' }];
};

export async function loader({ request }: LoaderFunctionArgs) {
  const response = await gqlRequest<{ pokemonList: Array<PokemonListItem> }>(
    'https://beta.pokeapi.co/graphql/v1beta',
    getPokemonList
  );

  console.dir(response.pokemonList, { depth: null });

  return response;
}

export default function Index() {
  const data = useLoaderData<typeof loader>();

  return (
    <>
      <Header />
      <div className="flex flex-row flex-wrap gap-2 p-4">
        {data.pokemonList.map((pokemon) => {
          return <PokemonCard key={pokemon.id} pokemon={pokemon} />;
        })}
      </div>
    </>
  );
}
