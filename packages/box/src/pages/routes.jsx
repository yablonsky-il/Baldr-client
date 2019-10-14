import React from 'react';
import loadable from '@loadable/component';

const preloader = {
  fallback: <div>Loading...</div>, // TODO:
};

export const LoadableHome = loadable(() =>
  import(/* webpackChunkName: "home" */ './home/home'), preloader);

export const LoadableWebMessenger = loadable(() =>
  import(/* webpackChunkName: "web-messenger" */ './web-messenger/web-messenger'), preloader);

export const LoadableMacroEconomic = loadable(() =>
  import(/* webpackChunkName: "macro-economic" */ './macro-economic/macro-economic'), preloader);
