import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { composeWithDevTools } from 'redux-devtools-extension';
import { ajax } from 'rxjs/ajax';

import { rootReducer } from '../reducers/index';
import { rootEpic } from '../epics/index';

export const configureStore = () => {
  const epicMiddleware = createEpicMiddleware({
    dependencies: { ajax },
  });

  const store = createStore(
    rootReducer,
    composeWithDevTools(
      applyMiddleware(epicMiddleware)
    ),
  );

  epicMiddleware.run(rootEpic);

  return store;
};
