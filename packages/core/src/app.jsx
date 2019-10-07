import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { cookieAuth as cookieAuthAction } from './actions/cookie-auth';

export const AppCore = ({ cookieAuth, children }) => {
  useEffect(() => { cookieAuth(); }, []);

  return children;
};

const mapDispatchToProps = {
  cookieAuth: cookieAuthAction,
};

export const App = connect(
  null,
  mapDispatchToProps,
)(AppCore);
