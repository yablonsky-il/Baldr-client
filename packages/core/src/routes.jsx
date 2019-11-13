import React from 'react';
import loadable from '@loadable/component';

import App from './app';

const preloader = {
  fallback: <div>Loading...</div>, // TODO:
};

export const routes = [{
  component: App,
  routes: [
    {
      path: '/macro-economic',
      exact: true,
      component: loadable(() => import(/* webpackChunkName: "macro-economic" */ './pages/macro-economic'), preloader),
    },
    {
      path: '/web-messenger',
      exact: true,
      component: loadable(() => import(/* webpackChunkName: "web-messenger" */ './pages/web-messenger'), preloader),
    },
  ],
}];
