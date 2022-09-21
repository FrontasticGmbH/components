import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useFormat } from 'helpers/hooks/useFormat';
import CableCut from 'public/images/cable-cut.png';

const Error404 = () => {
  const { formatMessage } = useFormat({ name: 'common' });
  const { formatMessage: formatCheckoutMessage } = useFormat({ name: 'checkout' });

  return (
    <div className="relative h-screen p-6">
      <div className="absolute top-1/2 left-1/2 flex w-full -translate-x-1/2 -translate-y-1/2 flex-col items-center p-6">
        <Image src={CableCut} loader={(options) => options.src} alt="Cable cut" />
        <div className="mt-5 text-center">
          <h1 className="text-3xl font-bold">
            {formatMessage({ id: 'page.notFound', defaultMessage: 'Page not found' })}
          </h1>
          <p className="mt-3">
            {formatMessage({
              id: 'page.notFound.desc',
              defaultMessage:
                "The page you were looking for couldn't be found. It may have been deleted, renamed, or doesn't exist.",
            })}
          </p>
          <Link href="/">
            <a className="mt-1 block text-blue-500 underline transition-colors duration-150 ease-out hover:text-blue-400">
              {formatCheckoutMessage({ id: 'continueShopping', defaultMessage: 'Continue shopping' })}
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error404;
