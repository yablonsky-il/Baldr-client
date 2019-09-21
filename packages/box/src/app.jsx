import React, { memo, useEffect } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import Container from '@material-ui/core/Container';

// import { cookieAuth as cookieAuthAction } from './actions/cookie-auth';
import { MacroEconomic } from '../../box/src/pages/macro-economic';
// import { WebChat } from '../../box/src/pages/web-chat';
// import { Header } from './components/header/header';
// import { ErrorBoundary } from './components/error-boundary/error-boundary';
// import { Test } from './components/test';

import './app.scss';

const AppUI = (props) => {
  // useEffect(() => { cookieAuth(); }, []);

  // return (
  //   <Container maxWidth="xl" className="px-3">
  //     {/* <Header /> */}
  //     {/* <ErrorBoundary>
  //       {null}
  //     </ErrorBoundary> */}
  //     <main>
  //       <Switch>
  //         {/* <Route exact path="/" component={Test} /> */}
  //         <Route path="/macro-economic" component={MacroEconomic} />
  //         {/* <Route path="/web-chat" component={WebChat} /> */}
  //       </Switch>
  //     </main>
  //     {/* <footer /> */}
  //   </Container>
  // );

  return (
    <main>
      <MacroEconomic />
    </main>
  );

  // return (
  //   <div>Hello WORLD</div>
  // )
};

// const mapDispatchToProps = {
//   cookieAuth: cookieAuthAction,
// };

// export const App = memo(connect(
//   null,
//   // mapDispatchToProps,
// )(AppUI), (prevProps, nextProps) => {
//   console.log(prevProps, 'prevProps from App');
//   console.log(nextProps, 'nextProps from App');

//   return true;
// });

export const App = AppUI;
