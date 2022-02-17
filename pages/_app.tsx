import React from 'react';
import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import { FrontasticProvider } from 'frontastic';

import 'tailwindcss/tailwind.css';

import './app.css';

function FrontasticStarter({ Component, pageProps }: AppProps) {
  return (
    <FrontasticProvider>
      <Component {...pageProps} />
    </FrontasticProvider>
  );
}

export default appWithTranslation(FrontasticStarter);
