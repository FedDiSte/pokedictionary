import { jsonFetch } from '../../utils';
import type { Pagination, EndpointResource, NamedAPIListResponse, NamedAPIResourceList } from './types';

function parsePaginationFromUrl(paginationString?: string | null): Pagination | undefined {
  if (!paginationString) {
    return undefined;
  }

  const url = new URL(paginationString);

  const { searchParams } = url;

  const offset = Number(searchParams.get('offset')) ?? 0;
  const limit = Number(searchParams.get('limit')) ?? 0;

  return { offset, limit };
}

export default async function getPaginatedList(
  resource: EndpointResource,
  pagination?: Pagination
): Promise<NamedAPIListResponse> {
  const url = new URL(`${process.env.POKEAPI_URL}/${resource}`);

  if (pagination) {
    url.search = new URLSearchParams({
      offset: pagination.offset.toString(),
      limit: pagination.limit.toString(),
    }).toString();
  }

  const response = await jsonFetch<NamedAPIResourceList>(url.toString());

  return {
    count: response?.count ?? 0,
    results: response?.results ?? [],
    previous: parsePaginationFromUrl(response?.previous),
    next: parsePaginationFromUrl(response?.next),
  };
}
