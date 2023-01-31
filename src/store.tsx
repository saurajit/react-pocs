import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './redux/reducers/root'

export default function configureStore() {
  const middleWareEnhancer = applyMiddleware(thunk);

  const store = createStore(
      rootReducer,
      compose(
          middleWareEnhancer
      ),
  );

  return store;
}
