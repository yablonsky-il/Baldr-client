import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { cookieAuth as cookieAuthAction } from './actions/cookie-auth';

export const AppCore = ({ cookieAuth, children }) => {
  useEffect(() => { cookieAuth(); }, []);

  // return children;
  return <div>PUPA</div>;
};

const mapDispatchToProps = {
  cookieAuth: cookieAuthAction,
};

// export const App = connect(
//   null,
//   mapDispatchToProps,
// )(AppCore);

export default connect(
  null,
  mapDispatchToProps,
)(AppCore);
