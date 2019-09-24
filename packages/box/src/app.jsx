import React, { memo, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MomentUtils from '@date-io/moment';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import Container from '@material-ui/core/Container';

// import { cookieAuth as cookieAuthAction } from './actions/cookie-auth';
import { MacroEconomic } from '../../box/src/pages/macro-economic';
import { WebChat } from '../../box/src/pages/web-chat';
import { Header } from './components/header/header';
import { ErrorBoundary } from './components/error-boundary/error-boundary';
import { Test } from './components/test';

import './app.scss';

const AppUI = (props) => {
  // useEffect(() => { cookieAuth(); }, []);

  return (
    <Container maxWidth="xl" className="px-3">
      <BrowserRouter>
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <main>
            <Header />
            <ErrorBoundary>
              {null}
            </ErrorBoundary>
            <Switch>
              <Route exact path="/" component={Test} />
              <Route path="/macro-economic" component={MacroEconomic} />
              <Route path="/web-chat" component={WebChat} />
            </Switch>
            {/* <footer /> */}
          </main>
        </MuiPickersUtilsProvider>
      </BrowserRouter>
    </Container>
  );
};

export const App = AppUI;
