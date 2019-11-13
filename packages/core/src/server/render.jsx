import React from 'react';
import path from 'path';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { ChunkExtractor } from '@loadable/server';

import { routes } from '../routes';

const statsFile = path.resolve('./', 'dist');

export const renderHtml = (url) => {
  const context = {};
  const extractor = new ChunkExtractor({ statsFile });
  const jsx = extractor.collectChunks(
    <StaticRouter location={url} context={context}>
      {renderRoutes(routes)}
    </StaticRouter>
  );

  const app = renderToString(jsx);
  console.log(url, 'url');

  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel=icon href=favicon.ico type=image/x-icon>
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Project</title>
      </head>
      <body>
        <div id="root">${app}</div>
        ${extractor.getScriptTags()}
      </body>
    </html>
  `;
};
