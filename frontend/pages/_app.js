import React from 'react';
import PropTypes from 'prop-types';
import { configure } from 'mobx';
import { observer } from 'mobx-react';

import Head from 'next/head';
import ReactDOM from 'react-dom';
import AxeCore from 'axe-core';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';

import theme from 'theme';
import Nav from 'components/Nav';

import GlobalContextProvider, { store } from 'global-context';

configure({ enforceActions: 'never' });

const isSsr = typeof window === 'undefined';

/**
 * Accessibility tool - outputs to devtools console on dev only and client-side only.
 * @see https://github.com/dequelabs/react-axe
 * For full list of a11y rules:
 * @see https://github.com/dequelabs/axe-core/blob/develop/doc/rule-descriptions.md
 */
if (process.env.NODE_ENV !== 'production' && !isSsr) {
  import('react-axe').then(axe => {
    const config = {
      rules: AxeCore.getRules(['wcag21aa', 'wcag2aa', 'wcag2a']).map(rule => ({
        ...rule,
        id: rule.ruleId,
        enabled: true,
      })),
      disableOtherRules: true,
    };

    axe.default(React, ReactDOM, 1000, config);
  });
}

const App = ({ Component, pageProps }) => (
  <GlobalContextProvider>
    <Head>
      <title>{store.app.title}</title>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
      />

      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
    </Head>

    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Nav />
      <Component {...pageProps} />
    </ThemeProvider>
  </GlobalContextProvider>
);

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object,
};

App.defaultProps = {
  pageProps: {},
};

export default observer(App);
