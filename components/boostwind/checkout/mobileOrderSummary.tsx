import { Disclosure } from "@headlessui/react"
import { CurrencyHelpers } from "helpers/CurrencyHelpers"
import { StringHelpers } from "helpers/StringHelpers"
import { Cart } from "../../../../types/cart/Cart"
import { LineItem } from "../../../../types/cart/LineItem"
import { ShippingMethod } from "../../../../types/cart/ShippingMethod"


interface Props {
  readonly cart: Cart,
  readonly editCartItem: () => void,
  readonly goToProductPage: (_url: string) => void,
  readonly removeCartItem: (lineItemId: string) => void,
  readonly selectedShipping: ShippingMethod
}

const MobileOrderSummary = ({ cart, editCartItem, goToProductPage, removeCartItem, selectedShipping }: Props) => {
  return <section aria-labelledby="order-heading" className="bg-gray-50 px-4 py-6 sm:px-6 lg:hidden">
    <Disclosure>
      <div className="max-w-lg mx-auto">
        {({ open }) => (
          <>
            <div className="flex items-center justify-between">
              <h2 id="order-heading" className="text-lg font-medium text-gray-900">
                Your Order
              </h2>
              <Disclosure.Button className="font-medium text-indigo-600 hover:text-indigo-500">
                {open ? <span>Hide full summary</span> : <span>Show full summary</span>}
              </Disclosure.Button>
            </div>

            <Disclosure.Panel>
              <ul role="list" className="divide-y divide-gray-200 border-b border-gray-200">
                {cart.lineItems.map((lineItem, i) => (
                  <li key={i} className="flex py-6 space-x-6">
                    <img
                      src={lineItem.variant.images[0]}
                      alt={lineItem.name}
                      className="flex-none w-40 h-40 object-center object-cover bg-gray-200 rounded-md cursor-pointer"
                      onClick={() => goToProductPage(lineItem._url)}
                    />
                    <div className="flex flex-col justify-between space-y-4">
                      <div className="text-sm font-medium space-y-1">
                        <h3
                          className="text-gray-900 cursor-pointer"
                          onClick={() => goToProductPage(lineItem._url)}>
                          {lineItem.name}
                        </h3>
                        <div className="flex space-x-4">
                          <p className="text-gray-900">{CurrencyHelpers.formatForCurrency(lineItem.price)}</p>
                          {lineItem.count && <p className="text-gray-900">{`x${lineItem.count}`}</p>}
                        </div>
                        {lineItem.variant.attributes?.color
                        && <p className="text-gray-500">{StringHelpers.capitaliseFirstLetter(lineItem.variant.attributes.color.label)}</p>}
                        {lineItem.variant.attributes?.size
                        && <p className="text-gray-500">
                          {StringHelpers.isNumeric(lineItem.variant.attributes.size)
                            ? lineItem.variant.attributes.size
                            : StringHelpers.capitaliseFirstLetter(lineItem.variant.attributes.size)}
                        </p>}
                      </div>
                      <div className="flex space-x-4">
                        <button
                          type="button"
                          onClick={editCartItem}
                          className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                        >
                          Edit
                        </button>
                        <div className="flex border-l border-gray-300 pl-4">
                          <button
                            type="button"
                            onClick={(e) => removeCartItem(lineItem.lineItemId)}
                            className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              {/*<form className="mt-10">
                                <label htmlFor="discount-code-mobile" className="block text-sm font-medium text-gray-700">
                                    Discount code
                                </label>
                                <div className="flex space-x-4 mt-1">
                                    <input
                                        type="text"
                                        id="discount-code-mobile"
                                        name="discount-code-mobile"
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

              <dl className="text-sm font-medium text-gray-500 mt-10 space-y-6">
                <div className="flex justify-between">
                  <dt>Subtotal</dt>
                  <dd className="text-gray-900">{CurrencyHelpers.formatForCurrency(cart.lineItems.reduce((prev, current) =>
                    CurrencyHelpers.addCurrency(prev, CurrencyHelpers.multiplyCurrency(current.price, current.count)), {
                    fractionDigits: cart.lineItems[0].price.fractionDigits,
                    centAmount: 0,
                    currencyCode: cart.lineItems[0].price.currencyCode
                  }))}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="flex">
                    Discounts
                    {/*<span className="ml-2 rounded-full bg-gray-200 text-xs text-gray-600 py-0.5 px-2 tracking-wide">
                                            {discount.code}
                                                    </span>*/}
                  </dt>
                  <dd className="text-gray-900">{CurrencyHelpers.formatForCurrency(cart.lineItems.reduce((prev, current) =>
                    CurrencyHelpers.addCurrency(prev, CurrencyHelpers.subtractCurrency(current.totalPrice, CurrencyHelpers.multiplyCurrency(current.price, current.count))), {
                    fractionDigits: cart.lineItems[0].price.fractionDigits,
                    centAmount: 0,
                    currencyCode: cart.lineItems[0].price.currencyCode
                  }))}</dd>
                </div>
                {/*<div className="flex justify-between">
                                    <dt>Taxes</dt>
                                    <dd className="text-gray-900">{taxes}</dd>
                                                    </div>*/}
                <div className="flex justify-between">
                  <dt>Shipping</dt>
                  <dd className="text-gray-900">{CurrencyHelpers.formatForCurrency(selectedShipping?.rates?.[0].price || {})}</dd>
                </div>
              </dl>
            </Disclosure.Panel>

            <p className="flex items-center justify-between text-sm font-medium text-gray-900 border-t border-gray-200 pt-6 mt-6">
              <span className="text-base">Total</span>
              <span className="text-base">{CurrencyHelpers.formatForCurrency(CurrencyHelpers.addCurrency(cart.sum, selectedShipping?.rates?.[0].price || {}))}</span>
            </p>
          </>
        )}
      </div>
    </Disclosure>
  </section>
}

export default MobileOrderSummary;
