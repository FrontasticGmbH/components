import { MouseEvent } from 'react';
import { Cart } from '@Types/cart/Cart';
import { FlattenedShippingMethod } from '@Types/cart/FlattenedShippingMethod';
import { CurrencyHelpers } from 'helpers/currencyHelpers';
import { useFormat } from 'helpers/hooks/useFormat';
import DiscountForm from '../discount-form';

interface Props {
  readonly cart: Cart;
  readonly shippingMethod: FlattenedShippingMethod;
  readonly onSubmit?: (e: MouseEvent) => void;
  readonly submitButtonLabel?: string;
  readonly disableSubmitButton?: Boolean;
  readonly hideSubmitButton?: Boolean;
}

const OrderSummary = ({
  cart,
  shippingMethod,
  onSubmit,
  submitButtonLabel,
  disableSubmitButton,
  hideSubmitButton,
}: Props) => {
  //i18n messages
  const { formatMessage } = useFormat({ name: 'cart' });

  const submitButtonClassName = `${
    disableSubmitButton && 'opacity-75 pointer-events-none'
  } w-full rounded-md border border-transparent py-3 px-4 text-base shadow-sm font-medium text-white bg-accent-400 hover:bg-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2 focus:ring-offset-gray-50`;

  return (
    <section
      aria-labelledby="summary-heading"
      className="rounded-lg bg-gray-50 py-6 px-4 dark:bg-primary-200 sm:col-span-8 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8"
    >
      <h2 id="summary-heading" className="text-lg font-medium text-gray-900 dark:text-light-100">
        {formatMessage({ id: 'order.summary', defaultMessage: 'Order Summary' })}
      </h2>

      <dl className="mt-6 space-y-4">
        <div className="flex items-center justify-between">
          <dt className="text-sm text-gray-600 dark:text-light-100">
            {formatMessage({ id: 'subtotal', defaultMessage: 'Subtotal' })}
          </dt>
          <dd className="text-sm font-medium text-gray-900 dark:text-light-100">
            {CurrencyHelpers.formatForCurrency(
              cart?.lineItems?.reduce(
                (prev, current) =>
                  CurrencyHelpers.addCurrency(prev, CurrencyHelpers.multiplyCurrency(current.price, current.count)),
                {
                  fractionDigits: cart?.lineItems[0]?.price.fractionDigits,
                  centAmount: 0,
                  currencyCode: cart?.lineItems[0]?.price.currencyCode,
                },
              ),
            )}
          </dd>
        </div>

        {shippingMethod && (
          <div className="flex items-center justify-between border-t border-gray-200 pt-4">
            <dt className="flex items-center text-sm text-gray-600 dark:text-light-100">
              <span>{formatMessage({ id: 'shipping.estimate', defaultMessage: 'Shipping estimate' })}</span>
            </dt>
            <dd className="text-sm font-medium text-gray-900 dark:text-light-100">
              {CurrencyHelpers.formatForCurrency(shippingMethod?.price || {})}
            </dd>
          </div>
        )}

        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <dt className="flex text-sm text-gray-600 dark:text-light-100">
            <span>{formatMessage({ id: 'discounts', defaultMessage: 'Discounts' })}</span>
          </dt>
          <dd className="text-sm font-medium text-gray-900 dark:text-light-100">
            {CurrencyHelpers.formatForCurrency(
              cart?.lineItems?.reduce(
                (prev, current) =>
                  CurrencyHelpers.addCurrency(
                    prev,
                    CurrencyHelpers.subtractCurrency(
                      current.totalPrice,
                      CurrencyHelpers.multiplyCurrency(current.price, current.count),
                    ),
                  ),
                {
                  fractionDigits: cart?.lineItems[0]?.price.fractionDigits,
                  centAmount: 0,
                  currencyCode: cart?.lineItems[0]?.price.currencyCode,
                },
              ),
            )}
          </dd>
        </div>

        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <dt className="text-base font-medium text-gray-900 dark:text-light-100">
            {formatMessage({ id: 'orderTotal', defaultMessage: 'Order total' })}
          </dt>
          <dd className="text-base font-medium text-gray-900 dark:text-light-100">
            {CurrencyHelpers.formatForCurrency(
              CurrencyHelpers.addCurrency(cart?.sum, shippingMethod?.rates?.[0]?.price),
            )}
          </dd>
        </div>

        {cart?.taxed && (
          <div className="flex items-center justify-between border-t border-gray-200 pt-4">
            <dt className="text-xs text-gray-600 dark:text-light-100">
              {formatMessage({ id: 'taxes', defaultMessage: 'Taxes' })}
            </dt>
            <dd className="text-xs font-medium text-gray-900 dark:text-light-100">
              {CurrencyHelpers.formatForCurrency(cart?.taxed?.amount)}
            </dd>
          </div>
        )}
      </dl>
      <DiscountForm cart={cart} className="py-10" />
      {!hideSubmitButton && (
        <div className="mt-6">
          <button type="submit" onClick={onSubmit} className={submitButtonClassName}>
            {submitButtonLabel || formatMessage({ id: 'checkout', defaultMessage: 'Checkout' })}
          </button>
        </div>
      )}
    </section>
  );
};

export default OrderSummary;
