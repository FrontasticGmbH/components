import { QuestionMarkCircleIcon } from '@heroicons/react/solid';
import { CurrencyHelpers } from 'helpers/currencyHelpers';
import { useFormat } from 'helpers/hooks/useFormat';
import { Cart } from '../../../../types/cart/Cart';
import { ShippingMethod } from '../../../../types/cart/ShippingMethod';

interface Props {
  readonly cart: Cart;
  readonly shippingMethod: ShippingMethod;
  readonly onCheckout: () => void;
}

const OrderSummary = ({ cart, shippingMethod, onCheckout }: Props) => {
  //i18n messages
  const { formatMessage: formatCartMessage } = useFormat({ name: 'cart' });

  return (
    <section
      aria-labelledby="summary-heading"
      className="mt-16 rounded-lg bg-gray-50 py-6 px-4 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8"
    >
      <h2 id="summary-heading" className="text-lg font-medium text-gray-900">
        {formatCartMessage({ id: 'order.summary', defaultMessage: 'Order Summary' })}
      </h2>

      <dl className="mt-6 space-y-4">
        <div className="flex items-center justify-between">
          <dt className="text-sm text-gray-600">{formatCartMessage({ id: 'subtotal', defaultMessage: 'Subtotal' })}</dt>
          <dd className="text-sm font-medium text-gray-900">
            {CurrencyHelpers.formatForCurrency(
              cart.lineItems.reduce(
                (prev, current) =>
                  CurrencyHelpers.addCurrency(prev, CurrencyHelpers.multiplyCurrency(current.price, current.count)),
                {
                  fractionDigits: cart.lineItems[0].price.fractionDigits,
                  centAmount: 0,
                  currencyCode: cart.lineItems[0].price.currencyCode,
                },
              ),
            )}
          </dd>
        </div>
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <dt className="flex items-center text-sm text-gray-600">
            <span>{formatCartMessage({ id: 'shipping.estimate', defaultMessage: 'Shipping estimate' })}</span>
            <a href="#" className="ml-2 shrink-0 text-gray-400 hover:text-gray-500">
              <span className="sr-only">
                {formatCartMessage({
                  id: 'shipping.calculation.learnMore',
                  defaultMessage: 'Learn more about how shipping is calculated',
                })}
              </span>
              <QuestionMarkCircleIcon className="h-5 w-5" aria-hidden="true" />
            </a>
          </dt>
          <dd className="text-sm font-medium text-gray-900">
            {CurrencyHelpers.formatForCurrency(shippingMethod?.rates?.[0].price || {})}
          </dd>
        </div>

        {/*<div className="border-t border-gray-200 pt-4 flex items-center justify-between">
                <dt className="flex text-sm text-gray-600">
                    <span>Tax estimate</span>
                    <a href="#" className="ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500">
                        <span className="sr-only">Learn more about how tax is calculated</span>
                        <QuestionMarkCircleIcon className="h-5 w-5" aria-hidden="true" />
                    </a>
                </dt>
                <dd className="text-sm font-medium text-gray-900">{'//TODO'}</dd>
                </div>*/}

        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <dt className="flex text-sm text-gray-600">
            <span>{formatCartMessage({ id: 'discounts', defaultMessage: 'Discounts' })}</span>
            <a href="#" className="ml-2 shrink-0 text-gray-400 hover:text-gray-500">
              <span className="sr-only">
                {formatCartMessage({
                  id: 'discounts.calculation.learnMore',
                  defaultMessage: 'Learn more about how shipping is calculated',
                })}
              </span>
              <QuestionMarkCircleIcon className="h-5 w-5" aria-hidden="true" />
            </a>
          </dt>
          <dd className="text-sm font-medium text-gray-900">
            {CurrencyHelpers.formatForCurrency(
              cart.lineItems.reduce(
                (prev, current) =>
                  CurrencyHelpers.addCurrency(
                    prev,
                    CurrencyHelpers.subtractCurrency(
                      current.totalPrice,
                      CurrencyHelpers.multiplyCurrency(current.price, current.count),
                    ),
                  ),
                {
                  fractionDigits: cart.lineItems[0].price.fractionDigits,
                  centAmount: 0,
                  currencyCode: cart.lineItems[0].price.currencyCode,
                },
              ),
            )}
          </dd>
        </div>
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <dt className="text-base font-medium text-gray-900">
            {formatCartMessage({ id: 'orderTotal', defaultMessage: 'Order total' })}
          </dt>
          <dd className="text-base font-medium text-gray-900">
            {CurrencyHelpers.formatForCurrency(
              CurrencyHelpers.addCurrency(cart.sum, shippingMethod?.rates?.[0].price || {}),
            )}
          </dd>
        </div>
      </dl>

      <div className="mt-6">
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            onCheckout();
          }}
          className="w-full rounded-md border border-transparent bg-accent-400 py-3 px-4 text-base font-medium text-white shadow-sm hover:bg-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2 focus:ring-offset-gray-50"
        >
          {formatCartMessage({ id: 'checkout', defaultMessage: 'Checkout' })}
        </button>
      </div>
    </section>
  );
};

export default OrderSummary;
