import { MouseEvent } from 'react';
import { Cart } from '@Types/cart/Cart';
import { LineItem } from '@Types/cart/LineItem';
import { useTranslation, Trans } from 'react-i18next';
import { CurrencyHelpers } from 'helpers/currencyHelpers';
import { useFormat } from 'helpers/hooks/useFormat';
import { Reference, ReferenceLink } from 'helpers/reference';
import DiscountForm from '../discount-form';
import Price from '../price';

interface Props {
  readonly cart: Cart;
  readonly onSubmit?: (e: MouseEvent) => void;
  readonly submitButtonLabel?: string;
  readonly disableSubmitButton?: boolean;
  readonly showSubmitButton?: boolean;
  readonly showDiscountsForm?: boolean;

  termsLink?: Reference;
  cancellationLink?: Reference;
  privacyLink?: Reference;
}

const OrderSummary = ({
  cart,
  onSubmit,
  showSubmitButton = true,
  showDiscountsForm = true,
  submitButtonLabel,
  disableSubmitButton,
  termsLink,
  cancellationLink,
  privacyLink,
}: Props) => {
  //i18n messages
  const { formatMessage: formatCartMessage } = useFormat({ name: 'cart' });
  const { t } = useTranslation(['checkout']);

  const submitButtonClassName = `${disableSubmitButton ? 'opacity-75 pointer-events-none' : ''} ${
    !showDiscountsForm ? 'mt-7' : ''
  } w-full rounded-sm border border-transparent py-3 px-4 text-base shadow-sm font-medium text-white bg-accent-400 hover:bg-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2 focus:ring-offset-gray-50`;

  const interpolatedComponents = [
    <ReferenceLink key={0} className="cursor-pointer font-medium text-accent-500 hover:underline" target={termsLink} />,
    <ReferenceLink
      key={1}
      className="cursor-pointer font-medium text-accent-500 hover:underline"
      target={cancellationLink}
    />,
    <ReferenceLink
      key={2}
      className="cursor-pointer font-medium text-accent-500 hover:underline"
      target={privacyLink}
    />,
  ];

  const totalTaxes = cart?.taxed?.taxPortions?.reduce((a, b) => a + b.amount.centAmount, 0);

  const productPrice = cart?.lineItems?.reduce((a, b: LineItem) => {
    if (b.discountedPrice) {
      return a + b.discountedPrice.centAmount * b.count;
    } else {
      return a + b.price.centAmount * b.count;
    }
  }, 0);

  const discountPrice = cart?.lineItems?.reduce((a, b) => {
    return (
      a +
      b.count *
        b.discounts.reduce((x, y) => {
          return x + y.discountedAmount.centAmount;
        }, 0)
    );
  }, 0);

  return (
    <section
      aria-labelledby="summary-heading"
      className="rounded-sm bg-gray-50 py-6 px-8 dark:bg-primary-200 sm:col-span-8 sm:p-6 lg:col-span-5 lg:mt-0 lg:px-10 lg:pt-3 lg:pb-8"
    >
      <dl className="mt-6 space-y-4">
        <div className="flex items-center justify-between">
          <dt className="text-sm text-gray-600 dark:text-light-100">
            {formatCartMessage({ id: 'subtotal', defaultMessage: 'Subtotal' })}
          </dt>
          <dd>
            <Price
              price={{
                centAmount: productPrice,
                currencyCode: cart?.sum.currencyCode,
              }}
              className="text-sm font-medium text-gray-900 dark:text-light-100"
            />
          </dd>
        </div>

        {cart?.shippingInfo && (
          <div className="flex items-center justify-between border-t border-gray-200 pt-4">
            <dt className="flex items-center text-sm text-gray-600 dark:text-light-100">
              <span>{formatCartMessage({ id: 'shipping.estimate', defaultMessage: 'Shipping estimate' })}</span>
            </dt>
            <dd>
              <Price
                price={cart?.shippingInfo?.price || {}}
                className="text-sm font-medium text-gray-900 dark:text-light-100"
              />
            </dd>
          </div>
        )}

        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <dt className="flex text-sm text-gray-600 dark:text-light-100">
            <span>{formatCartMessage({ id: 'discounts', defaultMessage: 'Discounts' })}</span>
          </dt>
          <dd>
            <Price
              price={{ fractionDigits: 0, centAmount: -discountPrice, currencyCode: cart?.sum.currencyCode } || {}}
              className="text-sm font-medium text-gray-900 dark:text-light-100"
            />
          </dd>
        </div>

        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <dt className="text-base font-medium text-gray-900 dark:text-light-100">
            {formatCartMessage({ id: 'orderTotal', defaultMessage: 'Order total' })}
          </dt>
          <dd>
            <Price price={cart?.sum || {}} className="text-base font-medium text-gray-900 dark:text-light-100" />
          </dd>
        </div>

        {cart?.taxed && (
          <div className="text-xs text-gray-500 dark:text-light-100">
            (
            {formatCartMessage({
              id: 'includedVat',
              defaultMessage: 'Tax included',
              values: { amount: CurrencyHelpers.formatForCurrency(totalTaxes || {}) },
            })}
            )
          </div>
        )}
      </dl>
      {showDiscountsForm && <DiscountForm cart={cart} className="py-10" />}
      {showSubmitButton && (
        <div>
          <button type="submit" onClick={onSubmit} className={submitButtonClassName}>
            {submitButtonLabel || formatCartMessage({ id: 'checkout.go', defaultMessage: 'Go to checkout' })}
          </button>

          {submitButtonLabel === formatCartMessage({ id: 'ContinueAndPay', defaultMessage: 'Continue and pay' }) && (
            <p className="px-1 py-5 text-center text-xs">
              <Trans i18nKey="disclaimer" t={t} components={interpolatedComponents} />
            </p>
          )}
        </div>
      )}
    </section>
  );
};

export default OrderSummary;
