import React, { useEffect } from 'react';
import { renderRoutes } from 'react-router-config';
import { connect } from 'react-redux';

import { cookieAuth as cookieAuthAction } from './actions/cookie-auth';

export const AppCore = ({ cookieAuth, children }) => {
  // useEffect(() => {
  //   cookieAuth();
  // }, []);

  return children({ renderRoutes });
};

const mapDispatchToProps = {
  cookieAuth: cookieAuthAction,
};

export const App = connect(
  null,
  mapDispatchToProps,
)(AppCore);
