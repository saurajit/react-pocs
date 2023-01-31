import { TShirt } from '../../models/tshirt';
import { CATALOG_FETCHING, CATALOG_FETCH_ERROR, CATALOG_FETCH_SUCCCESS, CATALOG_FILTER, CATALOG_RESET, CATALOG_SEARCH } from '../actions/catalog';

export interface ICatalog<T, F> {
  products: T[];
  isPending: boolean;
  hasError: boolean;
  errorMessage: string | null;
  filter: F,
  searchTerm: string;
  searchApplied: boolean;
}

export interface IProductFilter {
  colour: string[];
  gender: string[];
  price: string[];
  type: string[]
}

const initialState: ICatalog<TShirt, IProductFilter> = {
  products: [],
  isPending: false,
  hasError: false,
  errorMessage: null,
  filter: {} as IProductFilter,
  searchTerm: '',
  searchApplied: false
}

export const catalogReducer = (state = initialState, { type, payload }: { type: string, payload: any }) => {
  switch (type) {
    case CATALOG_FETCHING:
      state = { ...state, ...{ isPending: payload } };
      return state;
    case CATALOG_FETCH_ERROR:
      state = { ...state, ...{ products: [], hasError: true, errorMessage: payload, isPending: false } };
      return state;
    case CATALOG_FETCH_SUCCCESS:
      state = { ...state, ...{ products: payload || [], hasError: false, errorMessage: null, isPending: false } };
      return state;
    case CATALOG_FILTER:
      state = { ...state, ...{ filter: payload} };
      return state;
    case CATALOG_SEARCH:
      state = { ...state, ...{searchTerm: payload, searchApplied: payload.length > 0} };
      return state;
    case CATALOG_RESET:
      state = { ...state };
      return state;
    default:
      return state;
  }
}
