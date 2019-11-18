import path from 'path';
import React from 'react';
import { Provider } from 'react-redux';
import { renderToNodeStream } from 'react-dom/server';
import { ChunkExtractor } from '@loadable/server';
import { renderRoutes } from 'react-router-config';
import { StaticRouter } from 'react-router-dom';

import { PageNotFound } from '../pages/page-not-found';
import { wrapRootEpic } from '../epics/wrap-root-epic';
import { getRenderObservable } from '../epics/render';
import { rootEpic } from '../epics';
import { configureStore } from './store';
import { getStatusCode } from '../helpers/general';
import { HTTP_CODES } from '../constants';

import { renderHeader, renderFooter, renderFooter404 } from './render';

const statsFile = path.resolve('dist/loadable-stats.json');

export const renderApp = routes => async (req, res) => {
  try {
    const wrappedEpic = wrapRootEpic(rootEpic);
    const extractor = new ChunkExtractor({ statsFile });
    const store = configureStore(wrappedEpic);
    const context = {};

    const appWithRouter = () => (
      <Provider store={store}>
        <StaticRouter location={req.url} context={context}>
          {renderRoutes(routes)}
        </StaticRouter>
      </Provider>
    );

    if (context.url) {
      // eslint-disable-next-line no-console
      console.log('Redirecting to...', context.url);
      res.redirect(context.url);

      return;
    }

    // Share loadable components state with client: REQUIRED
    // When all active epics requested by components rendered server-side are completed (emitted actions at the end)
    getRenderObservable(appWithRouter(), wrappedEpic).subscribe(() => {
      const preloadedState = store.getState();
      const { is404, redirectUrl } = preloadedState.system.globalError;

      if (redirectUrl && redirectUrl.length) {
        return res.redirect(HTTP_CODES.MOVED_PERMANENTLY, redirectUrl);
      }

      const jsx = extractor.collectChunks(appWithRouter());

      res.status(getStatusCode({ is404 })).setHeader('Content-Type', 'text/html');

      let htmlSteam;

      if (is404) {
        htmlSteam = renderToNodeStream(( // eslint-disable-line function-paren-newline
          <Provider store={store}>
            <PageNotFound />
          </Provider>
        ));
      } else {
        // Using render as node stream to respond to browser piece-by-piece when another piece is complete
        htmlSteam = renderToNodeStream(jsx);
      }

      // write html
      let body = '';
      htmlSteam
        .on('data', (chunk) => {
          body += chunk;
        })
        .on('end', () => {
          // write Header section
          // const { helmet } = helmetContext;

          res.write(renderHeader(extractor));
          res.write(body);
          // res.write(renderFooter(extractor, preloadedState));
          res.write(is404
            ? renderFooter404()
            : renderFooter(extractor, preloadedState));

          return res.send();
        });

      return true;
    });
  } catch (e) {
    console.log(e); // eslint-disable-line no-console

    // TODO: Add redirect for 500 page
    res.sendStatus(HTTP_CODES.INTERNAL_SERVER_ERROR);
  }
};
