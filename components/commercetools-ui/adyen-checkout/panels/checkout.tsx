import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import AdyenCheckout from '@adyen/adyen-web';
import toast from 'react-hot-toast';
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
  const router = useRouter();
  const { data: cartList, checkout } = useCart();
  const { createSession } = useAdyen();
  const [session, setSession] = useState<Session>();
  const [isSessionCreated, setIsSessionCreated] = useState<boolean>(false);

  const initializeSession = async (sessionConfiguration: SessionConfig) => {
    const checkout = await AdyenCheckout(sessionConfiguration);
    checkout.create('dropin').mount('#dropin-container');
  };

  useEffect(() => {
    if (!isSessionCreated) {
      const host = typeof window !== 'undefined' ? window.location.origin : '';

      setIsSessionCreated(true);

      createSession(cartList.sum?.centAmount, cartList.sum?.currencyCode, `${host}/thank-you`).then((res) => {
        const { id, sessionData } = res;

        setSession({ id, sessionData });
      });
    }
  }, [cartList, createSession]);

  useEffect(() => {
    if (session) {
      const sessionConfiguration = {
        environment: 'test', //process.env.NODE_ENV === 'production' ? 'live' : 'test',
        clientKey: 'test_7KZ5EUGTIRGTXP3JVBPKV43YW4MQ7MLZ',
        session,
        onPaymentCompleted: (result) => {
          if (result.resultCode === 'Authorised' || result.resultCode === 'Received') {
            checkout().finally(() => {
              router.push('/thank-you');
            });
          }
        },
        onError: (error: Error) => {
          toast.error(error.message);
        },
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
