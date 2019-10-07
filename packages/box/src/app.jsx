import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MomentUtils from '@date-io/moment';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import Container from '@material-ui/core/Container';

import { MacroEconomic } from './pages/macro-economic';
import { WebChat } from './pages/web-chat';
import { Home } from './pages/home';
import { Header } from './components/header/header';

import './app.scss';

const AppUI = () => (
  <Container maxWidth="xl" className="px-3">
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <Header />
      <main>
        {/* sidebar */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/macro-economic" component={MacroEconomic} />
          <Route path="/web-chat" component={WebChat} />
        </Switch>
        {/* <footer /> */}
      </main>
    </MuiPickersUtilsProvider>
  </Container>
);

export const App = AppUI;
