import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { composeWithDevTools } from 'redux-devtools-extension';
import { ajax } from 'rxjs/ajax';

import { rootReducer } from '../reducers';

export const configureStore = (wrappedEpic, initialState = {}) => {
  const epicMiddleware = createEpicMiddleware({
    dependencies: { ajax },
  });

  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(
      applyMiddleware(epicMiddleware)
    ),
  );

  epicMiddleware.run(wrappedEpic);

  return store;
};
