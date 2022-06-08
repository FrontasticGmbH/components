import { Disclosure } from '@headlessui/react';
import { ExclamationCircleIcon } from '@heroicons/react/outline';
import { Cart } from '@Types/cart/Cart';
import { ShippingMethod } from '@Types/cart/ShippingMethod';
import { CurrencyHelpers } from 'helpers/currencyHelpers';
import { useFormat } from 'helpers/hooks/useFormat';
import { StringHelpers } from 'helpers/stringHelpers';
import Image from 'frontastic/lib/image';

export interface Props {
  readonly cart: Cart;
  readonly editCartItem: () => void;
  readonly goToProductPage: (_url: string) => void;
  readonly removeCartItem: (lineItemId: string) => void;
  readonly selectedShipping: ShippingMethod;
  readonly someOutOfStock: boolean;
}

const MobileOrderSummary = ({
  cart,
  editCartItem,
  goToProductPage,
  removeCartItem,
  selectedShipping,
  someOutOfStock,
}: Props) => {
  //i18n messages
  const { formatMessage: formatCartMessage } = useFormat({ name: 'cart' });
  const { formatMessage: formatCheckoutMessage } = useFormat({ name: 'checkout' });
  const { formatMessage } = useFormat({ name: 'common' });

  return (
    <section aria-labelledby="order-heading" className="bg-gray-50 py-6 px-4 sm:px-6 lg:hidden">
      <Disclosure>
        {({ open }) => (
          <div className="mx-auto max-w-lg">
            <div>
              <div className="flex items-center justify-between gap-4">
                <h2 id="order-heading" className="text-lg font-medium text-gray-900">
                  {formatCheckoutMessage({ id: 'yourOrder', defaultMessage: 'Your Order' })}
                </h2>
                <Disclosure.Button className="font-medium text-accent-400 hover:text-accent-500">
                  {open ? (
                    <span>
                      {formatCheckoutMessage({ id: 'fullsummary.hide', defaultMessage: 'Hide full summary' })}
                    </span>
                  ) : (
                    <span>
                      {formatCheckoutMessage({ id: 'fullsummary.show', defaultMessage: 'Show full summary' })}
                    </span>
                  )}
                </Disclosure.Button>
              </div>

              <Disclosure.Panel>
                <ul role="list" className="divide-y divide-gray-200 border-b border-gray-200">
                  {cart.lineItems.map((lineItem, i) => (
                    <li key={i} className="flex space-x-6 py-6">
                      <Image
                        src={lineItem.variant.images[0]}
                        alt={lineItem.name}
                        className="h-40 w-40 flex-none cursor-pointer rounded-md bg-gray-200 object-cover object-center"
                        onClick={() => goToProductPage(lineItem._url)}
                      />
                      <div className="flex flex-col items-start justify-between space-y-4">
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
                        <div className="flex w-full flex-col items-start space-y-2">
                          <button
                            type="button"
                            onClick={editCartItem}
                            className="text-sm font-medium text-accent-400 hover:text-accent-500"
                          >
                            {formatMessage({ id: 'edit', defaultMessage: 'Edit' })}
                          </button>
                          <div className="flex border-l border-gray-300 pl-4">
                            <button
                              type="button"
                              onClick={(e) => removeCartItem(lineItem.lineItemId)}
                              className="text-sm font-medium text-accent-400 hover:text-accent-500"
                            >
                              {formatMessage({ id: 'remove', defaultMessage: 'Remove' })}
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                  {someOutOfStock && (
                    <p className="flex items-center gap-1 py-6 text-xs text-red-500">
                      <span style={{ marginBottom: '1px' }}>
                        <ExclamationCircleIcon width={15} />
                      </span>
                      <span>
                        {formatCheckoutMessage({ id: 'outOfStock', defaultMessage: 'Some products are out of stock' })}
                      </span>
                    </p>
                  )}
                </ul>

                <dl className="mt-10 space-y-6 text-sm font-medium text-gray-500">
                  <div className="flex justify-between">
                    <dt>{formatCheckoutMessage({ id: 'subtotal', defaultMessage: 'Subtotal' })}</dt>
                    <dd className="text-gray-900">
                      {CurrencyHelpers.formatForCurrency(
                        cart.lineItems.reduce(
                          (prev, current) =>
                            CurrencyHelpers.addCurrency(
                              prev,
                              CurrencyHelpers.multiplyCurrency(current.price, current.count),
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
                      {CurrencyHelpers.formatForCurrency(selectedShipping?.rates?.[0]?.price || {})}
                    </dd>
                  </div>
                </dl>
              </Disclosure.Panel>

              <p className="mt-6 flex items-center justify-between border-t border-gray-200 pt-6 text-sm font-medium text-gray-900">
                <span className="text-base">{formatCheckoutMessage({ id: 'total', defaultMessage: 'Total' })}</span>
                <span className="text-base">
                  {CurrencyHelpers.formatForCurrency(
                    CurrencyHelpers.addCurrency(cart.sum, selectedShipping?.rates?.[0]?.price || {}),
                  )}
                </span>
              </p>
            </div>
          </div>
        )}
      </Disclosure>
    </section>
  );
};

export default MobileOrderSummary;
