import { jsonFetch } from '~/lib/utils';
import type { Pokemon } from './types';

export default async function getSingle(id: Pokemon['id']) {
  const url = new URL(`${process.env.POKEAPI_URL}/pokemon/${id}`);

  const response = await jsonFetch<Pokemon>(url.toString());

  return response;
}
