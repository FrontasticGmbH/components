import { CurrencyHelpers } from 'helpers/CurrencyHelpers';
import { useFormat } from 'helpers/hooks/useFormat';
import { StringHelpers } from 'helpers/StringHelpers';
import { Cart } from '../../../../types/cart/Cart';
import { ShippingMethod } from '../../../../types/cart/ShippingMethod';

interface Props {
  readonly cart: Cart;
  readonly editCartItem: () => void;
  readonly goToProductPage: (_url: string) => void;
  readonly removeCartItem: (lineItemId: string) => void;
  readonly selectedShipping: ShippingMethod;
}

const DesktopOrderSummary = ({ cart, editCartItem, goToProductPage, removeCartItem, selectedShipping }: Props) => {
  //i18n messages
  const { formatMessage: formatCartMessage } = useFormat({ name: 'cart' });
  const { formatMessage: formatCheckoutMessage } = useFormat({ name: 'checkout' });
  const { formatMessage } = useFormat({ name: 'common' });

  return (
    <section aria-labelledby="summary-heading" className="hidden w-full max-w-md flex-col bg-gray-50 lg:flex">
      <h2 id="summary-heading" className="sr-only">
        {formatCartMessage({ id: 'order.summary', defaultMessage: 'Order summary' })}
      </h2>

      <ul role="list" className="flex-auto divide-y divide-gray-200 overflow-y-auto px-6">
        {cart.lineItems.map((lineItem, i) => (
          <li key={i} className="flex space-x-6 py-6">
            <img
              src={lineItem.variant.images[0]}
              alt={lineItem.name}
              className="h-40 w-40 flex-none cursor-pointer rounded-md bg-gray-200 object-cover object-center"
              onClick={() => goToProductPage(lineItem._url)}
            />
            <div className="flex flex-col justify-between space-y-4">
              <div className="space-y-1 text-sm font-medium">
                <h3 className="cursor-pointer text-gray-900" onClick={() => goToProductPage(lineItem._url)}>
                  {lineItem.name}
                </h3>
                <div className="flex space-x-4">
                  <p className="text-gray-900">{CurrencyHelpers.formatForCurrency(lineItem.price)}</p>
                  {lineItem.count && <p className="text-gray-900">{`x${lineItem.count}`}</p>}
                </div>
                {lineItem.variant.attributes?.color && (
                  <p className="text-gray-500">
                    {StringHelpers.capitaliseFirstLetter(lineItem.variant.attributes.color.label)}
                  </p>
                )}
                {lineItem.variant.attributes?.size && (
                  <p className="text-gray-500">
                    {StringHelpers.isNumeric(lineItem.variant.attributes.size)
                      ? lineItem.variant.attributes.size
                      : StringHelpers.capitaliseFirstLetter(lineItem.variant.attributes.size)}
                  </p>
                )}
              </div>
              <div className="flex space-x-4">
                <button
                  type="button"
                  onClick={editCartItem}
                  className="text-sm font-medium text-[#CE3E72] hover:text-[#B22C5D]"
                >
                  {formatMessage({ id: 'edit', defaultMessage: 'Edit' })}
                </button>
                <div className="flex border-l border-gray-300 pl-4">
                  <button
                    type="button"
                    onClick={(e) => removeCartItem(lineItem.lineItemId)}
                    className="text-sm font-medium text-[#CE3E72] hover:text-[#B22C5D]"
                  >
                    {formatMessage({ id: 'remove', defaultMessage: 'Remove' })}
                  </button>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <div className="sticky bottom-0 flex-none border-t border-gray-200 bg-gray-50 p-6">
        {/*<form>
                <label htmlFor="discount-code" className="block text-sm font-medium text-gray-700">
                    Discount code
                </label>
                <div className="flex space-x-4 mt-1">
                    <input
                        type="text"
                        id="discount-code"
                        name="discount-code"
                        className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                    <button
                        type="submit"
                        className="bg-gray-200 text-sm font-medium text-gray-600 rounded-md px-4 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
                    >
                        Apply
                    </button>
                </div>
            </form>*/}

        <dl className="mt-8 space-y-6 text-sm font-medium text-gray-500">
          <div className="flex justify-between">
            <dt>{formatCheckoutMessage({ id: 'subtotal', defaultMessage: 'Subtotal' })}</dt>
            <dd className="text-gray-900">
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
          <div className="flex justify-between">
            <dt className="flex">
              {formatCartMessage({ id: 'discounts', defaultMessage: 'Discounts' })}
              {/*<span className="ml-2 rounded-full bg-gray-200 text-xs text-gray-600 py-0.5 px-2 tracking-wide">
                            {discount.code}
                    </span>*/}
            </dt>
            <dd className="text-gray-900">
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
          {/*<div className="flex justify-between">
                    <dt>Taxes</dt>
                    <dd className="text-gray-900">{taxes}</dd>
                </div>*/}
          <div className="flex justify-between">
            <dt>{formatCheckoutMessage({ id: 'shipping', defaultMessage: 'Shipping' })}</dt>
            <dd className="text-gray-900">
              {CurrencyHelpers.formatForCurrency(selectedShipping?.rates?.[0].price || {})}
            </dd>
          </div>
          <div className="flex items-center justify-between border-t border-gray-200 pt-6 text-gray-900">
            <dt className="text-base">{formatCheckoutMessage({ id: 'total', defaultMessage: 'Total' })}</dt>
            <dd className="text-base">
              {CurrencyHelpers.formatForCurrency(
                CurrencyHelpers.addCurrency(cart.sum, selectedShipping?.rates?.[0].price || {}),
              )}
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
};

export default DesktopOrderSummary;
