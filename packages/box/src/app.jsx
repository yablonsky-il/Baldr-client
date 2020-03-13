import React from 'react';
import { matchRoutes } from 'react-router-config';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { SnackbarProvider } from 'notistack';
import MomentUtils from '@date-io/moment';
import Container from '@material-ui/core/Container';

import { withCore } from 'core/hocs/with-core-component';
import { App as AppCore } from 'core/app';

import { Header } from './components/header/header';

import './app.scss';

const AppUI = (props) => {
  const {
    route: { routes },
    renderRoutes,
    history,
  } = props;
  // const [routeInfo] = matchRoutes(routes, history.location.pathname);

  return (
    <Container maxWidth="xl" className="vh-100 px-1 px-sm-2 px-md-3">
      <SnackbarProvider maxSnack={3}>
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <Header />
          <main>
            {/* sidebar */}
            {renderRoutes(routes)}
            {/* <footer /> */}
          </main>
        </MuiPickersUtilsProvider>
      </SnackbarProvider>
    </Container>
  );
};

export default withCore(AppCore, AppUI);
