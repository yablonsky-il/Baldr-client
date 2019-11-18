import path from 'path';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import { XMLHttpRequest } from 'xmlhttprequest';

import { renderApp } from './app';

export const initServer = (routes) => {
  // By default, rxjs ajax observable doesn't contain any XMLHttpRequest polyfills for node
  global.XMLHttpRequest = XMLHttpRequest;

  const app = express();

  // Assets/public serve
  app.use('/assets', express.static('./dist'));
  app.use(cors());
  app.use(helmet());
  app.use(cookieParser());

  // favicon.ico
  app.get('/favicon.ico', (req, res) => {
    // res.sendFile('favicon.ico', { root: path.join(__dirname, './public/favicon') });
    console.log(__dirname, 'dirname');
    res.sendFile('favicon.ico', { root: path.join(__dirname, './public') });
  });

  app.get('*', renderApp(routes));

  const port = process.env.PORT || 3006;
  app.listen(port, () => console.log(`Listening on port ${port}`)); // eslint-disable-line no-console
};
