import PokeApi from '..';
import type { Pagination } from '../common/paginated';

export default async function getPaginatedList(pagination?: Pagination) {
  const { count, results, next, previous } = await PokeApi.common.getPaginatedList('pokemon', pagination);

  const pokemonsWithData = [];

  for (const result of results) {
    // TODO search for singlePokemon
  }
}
