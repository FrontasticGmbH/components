import React, { useEffect, useState } from 'react';
import { FlattenedShippingMethod } from '@Types/cart/FlattenedShippingMethod';
import { CurrencyHelpers } from 'helpers/currencyHelpers';
import { useFormat } from 'helpers/hooks/useFormat';
import { flattenShippingMethod } from 'helpers/utils/flattenShippingMethod';
import { useCart } from 'frontastic';

type OverviewProps = {
  country: string;
  chosenShipmentMethod: FlattenedShippingMethod;
  updateChosenShipmentMethod: (FlattenedShippingMethod) => void;
};

const Overview: React.FC<OverviewProps> = ({ country, chosenShipmentMethod, updateChosenShipmentMethod }) => {
  const { shippingMethods } = useCart();
  const [countryShippingMethods, setCountryShippingMethods] = useState<FlattenedShippingMethod[]>();

  const { formatMessage } = useFormat({ name: 'checkout' });

  useEffect(() => {
    console.log(countryShippingMethods);

    let currentShippingMethods: FlattenedShippingMethod[] = shippingMethods.data?.map((method) =>
      flattenShippingMethod(method, country),
    );

    setCountryShippingMethods(currentShippingMethods);
    updateChosenShipmentMethod(currentShippingMethods[0]);
  }, []);

  return (
    <section aria-labelledby="cart-heading" className="bg-white md:rounded md:shadow-md lg:col-span-7">
      <div className="border-b-4 border-neutral-100 px-4 py-5 md:px-6">
        <form>
          <div className="mb-4 text-xs font-bold uppercase leading-tight text-neutral-600">
            <span>{formatMessage({ id: 'shippingMethods', defaultMessage: 'Shipping methods' })}</span>
          </div>

          {countryShippingMethods?.map(({ shippingMethodId, name, description, price }, index) => (
            <div
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
                checked={chosenShipmentMethod.shippingMethodId === shippingMethodId}
                value={shippingMethodId}
                onChange={() => updateChosenShipmentMethod(countryShippingMethods[index])}
              />
              <div className="flex w-full flex-col">
                <div className="text-md capitalize leading-tight">{name}</div>
                <span className="text-xs text-neutral-600">{description}</span>
              </div>
              <span className="text-md ml-auto font-bold">
                <span className=" ">{CurrencyHelpers.formatForCurrency(price)}</span>
              </span>
            </div>
          ))}
        </form>
      </div>
    </section>
  );
};

export default Overview;
