export type EndpointResource = 'pokemon' | 'ability';
export type APIResource = { url: string };
export type NamedAPIResource = APIResource & { name: string };

export type NamedAPIResourceList = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Array<NamedAPIResource>;
};

export type NamedAPIListResponse = Omit<NamedAPIResourceList, 'previous' | 'next'> & {
  next?: Pagination;
  previous?: Pagination;
};

export type Pagination = {
  offset: number;
  limit: number;
};

export type Name = {
  name: string;
  language: NamedAPIResource;
};

export type VersionGameIndex = {
  game_index: number;
  version: NamedAPIResource;
};
