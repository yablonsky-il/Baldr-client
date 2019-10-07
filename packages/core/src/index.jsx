import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { configureStore } from './store/store';
import { App as AppCore } from './app';

const store = configureStore();

export const initApp = AppUI => render(
  <Provider store={store}>
    <BrowserRouter>
      <AppCore>
        <AppUI />
      </AppCore>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
