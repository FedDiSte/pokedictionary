import type { LoaderFunctionArgs, MetaFunction } from '@remix-run/node';
import { Header } from '~/components/header/header';

import { request as gqlRequest } from 'graphql-request';
import { getPokemonList } from '~/lib/pokeapi/pokemon/getPokemonList';

export const meta: MetaFunction = () => {
  return [{ title: 'New Remix App' }, { name: 'description', content: 'Welcome to Remix!' }];
};

export async function loader({ request }: LoaderFunctionArgs) {
  const response = await gqlRequest('https://beta.pokeapi.co/graphql/v1beta', getPokemonList);

  console.debug(response);

  return null;
}

export default function Index() {
  return (
    <>
      <Header />
    </>
  );
}
