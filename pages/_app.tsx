import React from 'react';
import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import { FrontasticProvider } from 'frontastic';

import 'tailwindcss/tailwind.css';

import '../styles/app.css';
import '../styles/components/slider.css';
import Toaster from 'components/Toaster';

function FrontasticStarter({ Component, pageProps }: AppProps) {
  return (
    <FrontasticProvider>
      <Component {...pageProps} />
      <Toaster />
    </FrontasticProvider>
  );
}

export default appWithTranslation(FrontasticStarter);
