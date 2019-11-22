import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import Container from '@material-ui/core/Container';

import { Header } from './components/header/header';
import {
  LoadableHome,
  LoadableMacroEconomic,
  LoadableWebMessenger,
} from './pages/routes';

import './app.scss';

const AppUI = () => (
  <Container maxWidth="xl" className="vh-100 px-1 px-sm-2 px-md-3">
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <Header />
      <main>
        {/* sidebar */}
        <Switch>
          <Route exact path="/" component={LoadableHome} />
          <Route path="/macro-economic" component={LoadableMacroEconomic} />
          <Route path="/web-messenger" component={LoadableWebMessenger} />
        </Switch>
        {/* <footer /> */}
      </main>
    </MuiPickersUtilsProvider>
  </Container>
);

export const App = AppUI;
