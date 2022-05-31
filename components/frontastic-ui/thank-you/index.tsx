import { useRouter } from 'next/router';
import { useFormat } from 'helpers/hooks/useFormat';
import Image from 'frontastic/lib/image';

interface Props {}

const ThankYou = ({}: Props) => {
  //i18n messages
  const { formatMessage: formatCheckoutMessage } = useFormat({ name: 'checkout' });

  const router = useRouter();

  return (
    <main className="relative lg:min-h-full">
      <div className="h-80 overflow-hidden lg:absolute lg:h-full lg:w-1/2 lg:pr-4 xl:pr-12">
        <Image
          src="https://tailwindui.com/img/ecommerce-images/confirmation-page-06-hero.jpg"
          alt="TODO"
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div>
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:py-32 lg:px-8 xl:gap-x-24">
          <div className="lg:col-start-2">
            <p className="mt-2 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-light-100 sm:text-5xl">
              {formatCheckoutMessage({ id: 'order.thanks', defaultMessage: 'Thanks for ordering' })}
            </p>
            <p className="mt-2 text-base text-gray-500 dark:text-light-100">
              {formatCheckoutMessage({
                id: 'order.appreciate',
                defaultMessage:
                  ' We appreciate your order, we’re currently processing it. So hang tight and we’ll send you confirmation very soon!',
              })}
            </p>

            <div className="mt-16 border-t border-gray-200 py-6 text-right">
              <p
                className="cursor-pointer text-sm font-medium text-accent-400 hover:text-accent-500"
                onClick={() => router.push('/')}
              >
                {formatCheckoutMessage({ id: 'continueShopping', defaultMessage: 'Continue Shopping' })}
                <span aria-hidden="true"> &rarr;</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ThankYou;
