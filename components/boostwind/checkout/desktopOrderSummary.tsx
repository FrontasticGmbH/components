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

const DesktopOrderSummary = ({ cart, editCartItem, goToProductPage, removeCartItem, selectedShipping }: Props) => {
    return <section aria-labelledby="summary-heading" className="hidden bg-gray-50 w-full max-w-md flex-col lg:flex">
        <h2 id="summary-heading" className="sr-only">
            Order summary
        </h2>

        <ul role="list" className="flex-auto overflow-y-auto divide-y divide-gray-200 px-6">
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
                                onClick={() => goToProductPage(lineItem._url)}
                            >
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
                                className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
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

        <div className="sticky bottom-0 flex-none bg-gray-50 border-t border-gray-200 p-6">
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

            <dl className="text-sm font-medium text-gray-500 mt-8 space-y-6">
                <div className="flex justify-between">
                    <dt>Subtotal</dt>
                    <dd className="text-gray-900">{CurrencyHelpers.formatForCurrency(cart.lineItems.reduce((prev, current) =>
                        prev + (current.price * current.count), 0))}</dd>
                </div>
                <div className="flex justify-between">
                    <dt className="flex">
                        Discounts
                        {/*<span className="ml-2 rounded-full bg-gray-200 text-xs text-gray-600 py-0.5 px-2 tracking-wide">
                            {discount.code}
                    </span>*/}
                    </dt>
                    <dd className="text-gray-900">{CurrencyHelpers.formatForCurrency(cart.lineItems.reduce((prev, current) =>
                        prev + (current.totalPrice - (current.price * current.count)), 0))}</dd>
                </div>
                {/*<div className="flex justify-between">
                    <dt>Taxes</dt>
                    <dd className="text-gray-900">{taxes}</dd>
                </div>*/}
                <div className="flex justify-between">
                    <dt>Shipping</dt>
                    <dd className="text-gray-900">{CurrencyHelpers.formatForCurrency(selectedShipping?.rates?.[0].price)}</dd>
                </div>
                <div className="flex items-center justify-between border-t border-gray-200 text-gray-900 pt-6">
                    <dt className="text-base">Total</dt>
                    <dd className="text-base">{CurrencyHelpers.formatForCurrency(cart.sum + selectedShipping?.rates?.[0].price || 0)}</dd>
                </div>
            </dl>
        </div>
    </section>
}

export default DesktopOrderSummary;
