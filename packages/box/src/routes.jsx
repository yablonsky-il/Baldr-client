import React from 'react';
import loadable from '@loadable/component';

import App from './app';

const preloader = {
  fallback: <div>Loading...</div>, // TODO:
};

const routes = [{
  component: App,
  routes: [
    {
      path: '/macro-economic/:indicator',
      exact: true,
      component: loadable(() => import(/* webpackChunkName: "macro-economic" */ './pages/macro-economic/macro-economic'), preloader),
    },
    {
      path: '/web-messenger',
      exact: true,
      component: loadable(() => import(/* webpackChunkName: "web-messenger" */ './pages/web-messenger/web-messenger'), preloader),
    },
  ],
}];

export default routes;
