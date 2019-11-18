import React from 'react';
import { hydrate } from 'react-dom';
import { applyMiddleware, compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import { createEpicMiddleware } from 'redux-observable';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { loadableReady } from '@loadable/component';
import { ajax } from 'rxjs/ajax';

import { isDevelopmentEnv } from '../constants';
import { rootReducer } from '../reducers';
import { rootEpic } from '../epics';
import { logError } from '../helpers/error-logger';

export const initClient = (routes) => {
  // Grab the state from a global variable injected into the server-generated HTML
  /* eslint-disable-next-line no-underscore-dangle */
  const preloadedState = window.__PRELOADED_STATE__;
  // Allow the passed state to be garbage-collected
  /* eslint-disable-next-line no-underscore-dangle */
  delete window.__PRELOADED_STATE__;

  const epicMiddleware = createEpicMiddleware({
    dependencies: { ajax },
  });

  const reduxCompose = [
    applyMiddleware(
      epicMiddleware,
    ),
  ];

  if (isDevelopmentEnv) {
    // eslint-disable-next-line no-underscore-dangle
    reduxCompose.push(window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f);
  }

  const store = createStore(
    rootReducer,
    preloadedState,
    compose(...reduxCompose),
  );

  // Rxjs 6 style epic middleware kickstart
  epicMiddleware.run(rootEpic);

  const renderClient = () => hydrate(
    <Provider store={store}>
      <BrowserRouter>
        {renderRoutes(routes)}
      </BrowserRouter>
    </Provider>,
    document.getElementById('root'),
  );

  loadableReady()
    .then(renderClient)
    .catch((e) => {
      logError(e);

      return renderClient();
    });
};
