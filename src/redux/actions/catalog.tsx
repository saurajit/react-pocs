import { TShirt } from "../../models/tshirt";

export const CATALOG_FETCHING = 'catalog.fetching';
export const CATALOG_FETCH_ERROR = 'catalog.fetchError';
export const CATALOG_FETCH_SUCCCESS = 'catalog.fetchSuccess';

export const CATALOG_SEARCH = 'catalog.search';
export const CATALOG_FILTER = 'catalog.filter';
export const CATALOG_RESET = 'catalog.reset';

export const catalogFetching = (isPending: boolean) => ({
  type: CATALOG_FETCHING,
  payload: isPending
});

export const catalogFetchError = (errorMessage: string) => ({
  type: CATALOG_FETCH_ERROR,
  payload: errorMessage
});

export const catalogFetchSucces = (payload: TShirt[]) => ({
  type: CATALOG_FETCH_SUCCCESS,
  payload
});

export const catalogSearch = (searchTerm: string) => ({
  type: CATALOG_SEARCH,
  payload: searchTerm
});

export const catalogFilter = (filter: any) => ({
  type: CATALOG_FILTER,
  payload: filter
});

export const catalogReset = () => ({
  type: CATALOG_RESET
});
