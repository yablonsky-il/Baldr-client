import React from 'react';
import { hydrate } from 'react-dom';
import { renderRoutes } from 'react-router-config';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { loadableReady } from '@loadable/component';

import { routes } from './routes';
import { configureStore } from './store/store';
// import { App as AppCore } from './app';

const store = configureStore();

export const initApp = () => loadableReady(() => hydrate(
  <Provider store={store}>
    <BrowserRouter>
      {renderRoutes(routes)}
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
));
