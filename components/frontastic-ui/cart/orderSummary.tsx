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
      className="py-6 px-4 mt-16 bg-gray-50 rounded-lg sm:p-6 lg:col-span-5 lg:p-8 lg:mt-0"
    >
      <h2 id="summary-heading" className="text-lg font-medium text-gray-900">
        {formatCartMessage({ id: 'order.summary', defaultMessage: 'Order Summary' })}
      </h2>

      <dl className="mt-6 space-y-4">
        <div className="flex justify-between items-center">
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
        <div className="flex justify-between items-center pt-4 border-t border-gray-200">
          <dt className="flex items-center text-sm text-gray-600">
            <span>{formatCartMessage({ id: 'shipping.estimate', defaultMessage: 'Shipping estimate' })}</span>
            <a href="#" className="shrink-0 ml-2 text-gray-400 hover:text-gray-500">
              <span className="sr-only">
                {formatCartMessage({
                  id: 'shipping.calculation.learnMore',
                  defaultMessage: 'Learn more about how shipping is calculated',
                })}
              </span>
              <QuestionMarkCircleIcon className="w-5 h-5" aria-hidden="true" />
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

        <div className="flex justify-between items-center pt-4 border-t border-gray-200">
          <dt className="flex text-sm text-gray-600">
            <span>{formatCartMessage({ id: 'discounts', defaultMessage: 'Discounts' })}</span>
            <a href="#" className="shrink-0 ml-2 text-gray-400 hover:text-gray-500">
              <span className="sr-only">
                {formatCartMessage({
                  id: 'discounts.calculation.learnMore',
                  defaultMessage: 'Learn more about how shipping is calculated',
                })}
              </span>
              <QuestionMarkCircleIcon className="w-5 h-5" aria-hidden="true" />
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
        <div className="flex justify-between items-center pt-4 border-t border-gray-200">
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
          className="py-3 px-4 w-full text-base font-medium text-white bg-accent-400 hover:bg-accent-500 rounded-md border border-transparent focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2 focus:ring-offset-gray-50 shadow-sm"
        >
          {formatCartMessage({ id: 'checkout', defaultMessage: 'Checkout' })}
        </button>
      </div>
    </section>
  );
};

export default OrderSummary;
