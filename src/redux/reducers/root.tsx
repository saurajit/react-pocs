import { combineReducers} from 'redux';
import { cartReducer } from './cart';
import { catalogReducer } from './catalog';

const reducers = {catalogReducer, cartReducer};

export const rootReducer = combineReducers(reducers);

export type AppState = ReturnType<typeof rootReducer>;