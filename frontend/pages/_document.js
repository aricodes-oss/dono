import React from 'react';
import BaseDocument, { Html, Head, Main, NextScript } from 'next/document';
import { withEmotionCache } from 'tss-react/nextJs';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';

const muiCache = createCache({ key: 'mui', prepend: true });

class Document extends BaseDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
        </Head>
        <body>
          <CacheProvider value={muiCache}>
            <Main />
          </CacheProvider>
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default withEmotionCache({
  Document,
  getCaches: () => [muiCache],
});
