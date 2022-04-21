import PropTypes from 'prop-types';
import Head from 'next/head';
import ThemeProvider from '../src/theme';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import createEmotionCache from '../src/createEmotionCache';

import AuthManager from '../src/containers/Auth';
import { Provider } from 'react-redux'
import store from '../src/store/store'

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {

  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;


  return (
    <Provider store={store}>
      <CacheProvider value={emotionCache}>
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <ThemeProvider>
          <CssBaseline />
          <AuthManager >
            <Component {...pageProps} />
          </AuthManager>
        </ThemeProvider>
      </CacheProvider>
    </Provider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
