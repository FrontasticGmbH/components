import { QuestionMarkCircleIcon } from '@heroicons/react/solid';
import { CurrencyHelpers } from 'helpers/CurrencyHelpers';
import { Cart } from '../../../../types/cart/Cart';
import { ShippingMethod } from '../../../../types/cart/ShippingMethod';

interface Props {
  readonly cart: Cart;
  readonly shippingMethod: ShippingMethod;
  readonly onCheckout: () => void;
}

const OrderSummary = ({ cart, shippingMethod, onCheckout }: Props) => {
  return (
    <section
      aria-labelledby="summary-heading"
      className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8"
    >
      <h2 id="summary-heading" className="text-lg font-medium text-gray-900">
        Order summary
      </h2>

      <dl className="mt-6 space-y-4">
        <div className="flex items-center justify-between">
          <dt className="text-sm text-gray-600">Subtotal</dt>
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
            <span>Shipping estimate</span>
            <a href="#" className="ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500">
              <span className="sr-only">Learn more about how shipping is calculated</span>
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
            <span>Discounts</span>
            <a href="#" className="ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500">
              <span className="sr-only">Learn more about how discounts are calculated</span>
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
          <dt className="text-base font-medium text-gray-900">Order total</dt>
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
          className="w-full rounded-md border border-transparent bg-[#ce3e72] py-3 px-4 text-base font-medium text-white shadow-sm hover:bg-[#b22c5d] focus:outline-none focus:ring-2 focus:ring-[#b22c5d] focus:ring-offset-2 focus:ring-offset-gray-50"
        >
          Checkout
        </button>
      </div>
    </section>
  );
};

export default OrderSummary;
