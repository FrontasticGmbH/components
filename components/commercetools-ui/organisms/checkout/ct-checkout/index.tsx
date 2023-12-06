import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useParams } from 'next/navigation';
import { checkout, init } from '@commercetools/checkout-browser-sdk';
import { useCart, useProjectSettings, useCheckoutToken } from 'frontastic';
import { CheckoutWrappedProps } from '..';
import Header from '../components/header';

const CommercetoolsCheckout = ({ logo, ...emptyState }: CheckoutWrappedProps) => {
  const initiatedCheckout = useRef(false);

  const [isLoading, setIsLoading] = useState(true);

  const { data: cart } = useCart();

  const { data: projectSettings } = useProjectSettings();

  const { locale } = useParams();

  const { projectKey } = projectSettings ?? {};

  const accessToken = useCheckoutToken();

  const applicationId = useMemo(() => {
    return locale === 'en'
      ? process.env.NEXT_PUBLIC_COMMERCETOOLS_CHECKOUT_APPLICATION_ID_EN
      : process.env.NEXT_PUBLIC_COMMERCETOOLS_CHECKOUT_APPLICATION_ID_DE;
  }, [locale]);

  useEffect(() => {
    if (initiatedCheckout.current || !projectKey || !cart || !accessToken) return;

    initiatedCheckout.current = true;

    const host = typeof window !== 'undefined' ? window.location.origin : '';

    init({
      checkoutConfig: {},
      onInfo: (message) => {
        if (message.code === 'checkout_loaded') setIsLoading(false);
      },
    });

    checkout({
      host: process.env.NEXT_PUBLIC_COMMERCETOOLS_CHECKOUT_HOST,
      sellerId: projectKey,
      applicationId,
      callbackUrl: `${host}/${process.env.NEXT_PUBLIC_COMMERCETOOLS_CHECKOUT_CALLBACK_URL}`,
      cartId: cart.cartId,
      accessToken,
      locale,
    });
  }, [projectKey, cart, locale, accessToken, applicationId]);

  const handleGoingBack = useCallback(() => {
    const checkoutIframe = document.getElementById('ctc-wrapper');

    if (checkoutIframe) checkoutIframe.remove();

    window.onpopstate = null;
  }, []);

  useEffect(() => {
    window.onpopstate = handleGoingBack;
  }, [handleGoingBack]);

  return (
    <div className="min-h-screen lg:bg-neutral-200">
      <Header logo={logo} {...emptyState} />
      <div className="relative">
        {/* eslint-disable-next-line tailwindcss/no-custom-classname*/}
        <div data-ctc className="checkout-Container" />
      </div>
      {isLoading && (
        <div className="flex h-[80vh] items-center justify-center">
          <div className="loading-full-screen" />
        </div>
      )}
    </div>
  );
};

export default CommercetoolsCheckout;
