import React from 'react';
import { ShippingMethod } from '@Types/cart/ShippingMethod';
import { CurrencyHelpers } from 'helpers/currencyHelpers';
import { useFormat } from 'helpers/hooks/useFormat';
import { useCart } from 'frontastic';
import CartItems from './cart-items';

type OverviewProps = {
  shippingMethods: ShippingMethod[];
  currentShippingMethod: ShippingMethod;
  onSelectShippingMethod: (shippingMethodId: ShippingMethod) => void;
};

const Overview: React.FC<OverviewProps> = ({ shippingMethods, currentShippingMethod, onSelectShippingMethod }) => {
  const { data } = useCart();

  const { formatMessage } = useFormat({ name: 'checkout' });

  return (
    <>
      <section aria-labelledby="cart-heading" className="bg-white md:rounded md:shadow-md lg:col-span-7">
        <div className="border-b-4 border-neutral-100 px-4 py-5 md:px-6 lg:px-0">
          <form>
            <div className="mb-4 text-xs font-bold uppercase leading-tight text-neutral-600">
              <span>{formatMessage({ id: 'shippingMethods', defaultMessage: 'Shipping methods' })}</span>
            </div>

            {shippingMethods?.map(({ shippingMethodId, name, description, rates }, index) => (
              <label
                htmlFor={name}
                key={index}
                className={`flex h-16 cursor-pointer items-center rounded border border-neutral-400 px-4 py-3 ${
                  index > 0 && 'mt-2'
                }`}
              >
                <input
                  type="radio"
                  aria-label="Shipping method"
                  name="shippingMethodId"
                  id={name}
                  className="mr-2"
                  checked={currentShippingMethod?.shippingMethodId === shippingMethodId}
                  value={shippingMethodId}
                  onChange={() => onSelectShippingMethod(shippingMethods[index])}
                />
                <div className="flex w-full flex-col">
                  <div className="text-base capitalize leading-tight">{name}</div>
                  <span className="text-xs text-neutral-600">{description}</span>
                </div>
                <span className="ml-auto text-base font-bold">
                  <span className=" ">{CurrencyHelpers.formatForCurrency(rates?.[0]?.price)}</span>
                </span>
              </label>
            ))}
          </form>
        </div>
        <div className="py-5">
          <div className="px-8 text-xs font-bold uppercase leading-tight text-neutral-600">
            <span>{formatMessage({ id: 'overview.order', defaultMessage: 'YOUR ORDER' })}</span>
          </div>

          <CartItems cart={data} />
        </div>
      </section>
    </>
  );
};

export default Overview;
