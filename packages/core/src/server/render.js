export const renderHeader = (extractor) => `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, maximum-scale=1">
      <title>Application</title>
      ${extractor.getStyleTags()}
    </head>
    <body>
      <div id="root-alert"></div>
      <div id="root" class="container-min-width root-element">`;

export const renderFooter = (extractor, preloadedState) => `</div>
      <script type="text/javascript">
        // WARNING: See the following for security issues around embedding JSON in HTML:
        // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
        window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c').replace(/\u2028/g, '\\u2028').replace(/\u2029/g, '\\u2029')}
      </script>
      ${extractor.getScriptTags()}
    </body>
  </html>
`;

export const renderFooter404 = () => `</div>
<link rel="stylesheet" href="/assets/public/page-not-found/page-not-found.css" />
 </body></html>`;
