import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';

import { configureStore } from './store/store';

const store = configureStore();

export const initApp = AppComponent => render(
  <Provider store={store}>
    <BrowserRouter>
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <AppComponent />
      </MuiPickersUtilsProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
