import { XIcon as XIconSolid } from '@heroicons/react/solid';
import { CurrencyHelpers } from "helpers/CurrencyHelpers";
import { StringHelpers } from "helpers/StringHelpers";
import { Cart } from "../../../../types/cart/Cart";

interface Props {
    readonly cart: Cart,
    readonly editItemQuantity: (lineItemId: string, newQuantity: number) => void,
    readonly goToProductPage: (_url: string) => void,
    readonly removeItem: (lineItemId: string) => void
}

const ItemList = ({ cart, editItemQuantity, goToProductPage, removeItem }: Props) => {
    return <section aria-labelledby="cart-heading" className="lg:col-span-7">
        <h2 id="cart-heading" className="sr-only">
            Items in your shopping cart
        </h2>

        <ul role="list" className="border-b border-gray-200 divide-y divide-gray-200">
            {cart.lineItems.map((lineItem, i) => (
                <li key={i} className="flex py-6 sm:py-10">
                    <div className="flex-shrink-0">
                        <img
                            src={lineItem.variant.images[0]}
                            alt={lineItem.name}
                            className="w-24 h-24 rounded-md object-center object-cover sm:w-48 sm:h-48 cursor-pointer"
                            onClick={() => goToProductPage(lineItem._url)}
                        />
                    </div>

                    <div className="ml-4 flex-1 flex flex-col justify-between sm:ml-6">
                        <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                            <div>
                                <div className="flex justify-between">
                                    <h3 className="text-sm">
                                        <p
                                            className="font-medium text-gray-700 hover:text-gray-800 cursor-pointer"
                                            onClick={() => goToProductPage(lineItem._url)}
                                        >
                                            {lineItem.name}
                                        </p>
                                    </h3>
                                </div>
                                <div className="mt-1 flex text-sm">
                                    {lineItem.variant.attributes?.color
                                        && <p className="text-gray-500">
                                            {StringHelpers.capitaliseFirstLetter(lineItem.variant.attributes.color.label)}
                                        </p>}
                                    {lineItem.variant.attributes?.size &&
                                        <p className="ml-4 pl-4 border-l border-gray-200 text-gray-500">
                                            {StringHelpers.isNumeric(lineItem.variant.attributes.size)
                                                ? lineItem.variant.attributes.size
                                                : StringHelpers.capitaliseFirstLetter(lineItem.variant.attributes.size)}
                                        </p>
                                    }
                                </div>
                                <p className="mt-1 text-sm font-medium text-gray-900">{CurrencyHelpers.formatForCurrency(lineItem.price)}</p>
                            </div>

                            <div className="mt-4 sm:mt-0 sm:pr-9">
                                <label htmlFor={`quantity-${i}`} className="sr-only">
                                    Quantity, {lineItem.name}
                                </label>
                                <select
                                    id={`quantity-${i}`}
                                    name={`quantity-${i}`}
                                    onChange={(e) => editItemQuantity(lineItem.lineItemId, parseInt(e.target.value, 10))}
                                    value={lineItem.count}
                                    className="max-w-full rounded-md border border-gray-300 py-1.5 text-base leading-5 font-medium text-gray-700 text-left shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                >
                                    <option value={1}>1</option>
                                    <option value={2}>2</option>
                                    <option value={3}>3</option>
                                    <option value={4}>4</option>
                                    <option value={5}>5</option>
                                    <option value={6}>6</option>
                                    <option value={7}>7</option>
                                    <option value={8}>8</option>
                                </select>

                                <div className="absolute top-0 right-0">
                                    <button type="button" onClick={() => removeItem(lineItem.lineItemId)} className="-m-2 p-2 inline-flex text-gray-400 hover:text-gray-500">
                                        <span className="sr-only">Remove</span>
                                        <XIconSolid className="h-5 w-5" aria-hidden="true" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    </section>
}

export default ItemList