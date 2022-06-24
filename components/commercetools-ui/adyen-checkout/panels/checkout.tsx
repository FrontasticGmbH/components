import { useEffect, useState } from 'react';
import AdyenCheckout from '@adyen/adyen-web';
import { useCart, useAdyen } from 'frontastic';
import '@adyen/adyen-web/dist/adyen.css';

type Session = {
  id: string;
  sessionData: string;
};

type SessionConfig = {
  environment: string;
  clientKey: string;
  session: Session;
};

const Checkout = () => {
  const { data: cartList } = useCart();
  const { createSession } = useAdyen();
  const [session, setSession] = useState<Session>();

  const initializeSession = async (sessionConfiguration: SessionConfig) => {
    const checkout = await AdyenCheckout(sessionConfiguration);
    checkout.create('dropin').mount('#dropin-container');
  };

  useEffect(() => {
    const host = typeof window !== 'undefined' ? window.location.origin : '';

    createSession(
      {
        value: cartList.sum.centAmount,
        currency: cartList.sum.currencyCode,
      },
      `${host}/thank-you`,
    ).then((res) => {
      const { id, sessionData } = res;

      setSession({ id, sessionData });
    });

    console.log('Payment env:', process.env.NODE_ENV);
  }, [cartList, createSession]);

  useEffect(() => {
    if (session) {
      const sessionConfiguration = {
        environment: process.env.NODE_ENV === 'production' ? 'live' : 'test',
        clientKey: 'test_VDRCU3ALS5GMDC45GLZGUF6ANM3P75ZK',
        session,
      };

      initializeSession(sessionConfiguration);
    }
  }, [session]);

  return (
    <section
      id="dropin-container"
      aria-labelledby="cart-heading"
      className="bg-white md:rounded md:shadow-md lg:col-span-7"
    ></section>
  );
};

export default Checkout;
