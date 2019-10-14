import React from 'react';
import loadable from '@loadable/component';

const preloader = {
  fallback: <div>Loading...</div>, // TODO:
};

export const LoadableHome = loadable(() =>
  import(/* webpackChunkName: "home" */ './home/home'), preloader);

export const LoadableWebChat = loadable(() =>
  import(/* webpackChunkName: "web-chat" */ './web-chat/web-chat'), preloader);

export const LoadableMacroEconomic = loadable(() =>
  import(/* webpackChunkName: "macro-economic" */ './macro-economic/macro-economic'), preloader);
