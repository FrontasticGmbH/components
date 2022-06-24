import React, { ChangeEvent, useState, useEffect } from 'react';
import { ShippingMethod } from '@Types/cart/ShippingMethod';
import { ProjectSettings } from '@Types/ProjectSettings';
import { countryOptions, CountryOption } from 'helpers/countryOptions';
import { useFormat } from 'helpers/hooks/useFormat';
import { getTaxedCountries } from 'helpers/utils/getTaxedCountries';
import { useCart } from 'frontastic/provider';
import { FormData } from '..';

type AddressProps = {
  data: FormData;
  updateData: (data: FormData) => void;
  billingIsSameAsShipping: boolean;
  toggleBillingAddressOption: () => void;
};

const Address: React.FC<AddressProps> = ({ data, updateData, billingIsSameAsShipping, toggleBillingAddressOption }) => {
  const [projectSettingsCountries, setProjectSettingsCountries] = useState<ProjectSettings>(null);
  const [shippingMethodsData, setShippingMethodsData] = useState<ShippingMethod[]>(null);
  const [availableCountryOptions, setAvailableCountryOptions] = useState<CountryOption[]>(null);
  const { getProjectSettings, shippingMethods } = useCart();
  const { formatMessage } = useFormat({ name: 'checkout' });
  const { formatMessage: formatCommonMessage } = useFormat({ name: 'common' });

  useEffect(() => {
    getProjectSettings().then((data) => {
      setProjectSettingsCountries(data);
      setShippingMethodsData(shippingMethods.data);
    });
  }, []);

  useEffect(() => {
    if (!shippingMethods.data || !projectSettingsCountries) {
      const showMessageInDropdown = {
        data: '',
        display: `${formatMessage({
          id: 'no.countries.available.for.shipping',
          defaultMessage: 'Currently there are no countries available for shipping',
        })}`,
      };
      setAvailableCountryOptions([showMessageInDropdown]);
    } else {
      const totalCountries = getTaxedCountries(shippingMethods?.data, projectSettingsCountries?.countries);

      setAvailableCountryOptions(totalCountries);
    }
  }, [shippingMethods, projectSettingsCountries, shippingMethodsData]);

  const handleChange = (e: ChangeEvent) => {
    const updatedData = {
      ...data,
      [(e.target as HTMLInputElement)?.name]: (e.target as HTMLInputElement)?.value,
    };
    updateData(updatedData);
  };

  return (
    <section aria-labelledby="cart-heading" className="bg-white md:rounded md:shadow-md lg:col-span-7">
      <form className="border-t-4 border-neutral-100 bg-white px-4 py-5 md:border-t-0 md:px-6">
        <div className="mb-4 text-xs font-bold uppercase leading-tight text-neutral-600">
          <span>{formatMessage({ id: 'shippingTo', defaultMessage: 'Shipping to' })}</span>
        </div>

        <div className="mb-4">
          <label className="mb-2 block text-sm text-neutral-700" htmlFor="firstName">
            <span>{formatCommonMessage({ id: 'firstName', defaultMessage: 'First name' })}</span> *
          </label>
          <input
            className=" w-full appearance-none rounded border border-gray-300 py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
            id="firstName"
            name="firstName"
            type="text"
            onChange={handleChange}
            value={data.firstName}
            required
          />
        </div>

        <div className="mb-4">
          <label className="mb-2 block text-sm text-neutral-700" htmlFor="lastName">
            <span>{formatCommonMessage({ id: 'lastName', defaultMessage: 'Last name' })}</span> *
          </label>
          <input
            className=" w-full appearance-none rounded border border-gray-300 py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
            id="lastName"
            name="lastName"
            type="text"
            onChange={handleChange}
            value={data.lastName}
          />
        </div>

        <div className="mb-4">
          <label className="mb-2 block text-sm text-neutral-700" htmlFor="phone">
            {formatCommonMessage({ id: 'phone', defaultMessage: 'Phone number' })}
          </label>
          <input
            className=" w-full appearance-none rounded border border-gray-300 py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
            id="phone"
            name="phone"
            type="text"
            onChange={handleChange}
            value={data.phone}
          />
        </div>

        <div className="mb-4">
          <label className="mb-2 block text-sm text-neutral-700" htmlFor="email">
            <span>{formatCommonMessage({ id: 'email', defaultMessage: 'Email' })}</span> *
          </label>
          <input
            className=" w-full appearance-none rounded border border-gray-300 py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
            id="email"
            name="email"
            type="email"
            onChange={handleChange}
            value={data.email}
          />
        </div>

        <div className="mb-4 text-xs font-bold uppercase leading-tight text-neutral-600">
          <span>{formatMessage({ id: 'shippingAddress', defaultMessage: 'Shipping address' })}</span>
        </div>

        <div className="mb-4">
          <label className="mb-2 block text-sm text-neutral-700" htmlFor="address">
            <span>{formatCommonMessage({ id: 'street.name', defaultMessage: 'Street name' })}</span> *
          </label>
          <input
            className=" w-full appearance-none rounded border border-gray-300 py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
            id="shipping-street-name"
            name="shippingStreetName"
            type="text"
            onChange={handleChange}
            value={data.shippingStreetName}
            required
          />
        </div>

        <div className="mb-4">
          <label className="mb-2 block text-sm text-neutral-700" htmlFor="city">
            <span>{formatCommonMessage({ id: 'city', defaultMessage: 'City' })}</span> *
          </label>
          <input
            className=" w-full appearance-none rounded border border-gray-300 py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
            id="shipping-city"
            name="shippingCity"
            type="text"
            onChange={handleChange}
            value={data.shippingCity}
            required
          />
        </div>

        <div className="mb-4">
          <label className="mb-2 block text-sm text-neutral-700" htmlFor="zip">
            <span>{formatCommonMessage({ id: 'zipCode', defaultMessage: 'Postal code' })}</span> *
          </label>
          <input
            className=" w-full appearance-none rounded border border-gray-300 py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
            id="shipping-postalCode"
            name="shippingPostalCode"
            type="text"
            onChange={handleChange}
            value={data.shippingPostalCode}
            required
          />
        </div>

        <div>
          <label className="text-sm leading-tight text-neutral-700" htmlFor="shipping-country">
            <span>{formatCommonMessage({ id: 'country', defaultMessage: 'Country' })}</span> *
          </label>
          <select
            id="shipping-country"
            name="shippingCountry"
            className=" w-full appearance-none rounded border border-gray-300 py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
            onChange={handleChange}
            value={data.shippingCountry}
          >
            {availableCountryOptions?.map(({ display, data }, index) => (
              <option key={index} value={data}>
                {formatCommonMessage({ id: `country.${data}`, defaultMessage: display })}
              </option>
            ))}
          </select>
          <div></div>
        </div>

        <label className="mt-4 flex items-center rounded bg-neutral-200 p-4 text-sm">
          <input
            id="billing-same-as-shipping"
            type="checkbox"
            className="mr-2 text-xl"
            checked={billingIsSameAsShipping}
            onChange={toggleBillingAddressOption}
          />
          {formatMessage({
            id: 'billingDetailsLabel',
            defaultMessage: 'Billing address is the same as shipping address',
          })}
        </label>

        {!billingIsSameAsShipping && (
          <>
            <div className="my-4 text-xs font-bold uppercase leading-tight text-neutral-600">
              <span>{formatMessage({ id: 'billingInformation', defaultMessage: 'Billing information' })}</span>
            </div>
            <div className="mb-4">
              <label className="mb-2 block text-sm text-neutral-700" htmlFor="address">
                <span>{formatCommonMessage({ id: 'street.name', defaultMessage: 'Street name' })}</span> *
              </label>
              <input
                className="w-full appearance-none rounded border border-gray-300 py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
                id="billing-street-name"
                name="billingStreetName"
                type="text"
                onChange={handleChange}
                value={data.billingStreetName}
                required
              />
            </div>

            <div className="mb-4">
              <label className="mb-2 block text-sm text-neutral-700" htmlFor="city">
                <span>{formatCommonMessage({ id: 'city', defaultMessage: 'City' })}</span> *
              </label>
              <input
                className="w-full appearance-none rounded border border-gray-300 py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
                id="billing-city"
                name="billingCity"
                type="text"
                onChange={handleChange}
                value={data.billingCity}
                required
              />
            </div>

            <div className="mb-4">
              <label className="mb-2 block text-sm text-neutral-700" htmlFor="zip">
                <span>{formatCommonMessage({ id: 'zipCode', defaultMessage: 'Postal code' })}</span> *
              </label>
              <input
                className="w-full appearance-none rounded border border-gray-300 py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
                id="billing-postalCode"
                name="billingPostalCode"
                type="text"
                onChange={handleChange}
                value={data.billingPostalCode}
                required
              />
            </div>

            <div>
              <label className="text-sm leading-tight text-neutral-700" htmlFor="billing-country">
                <span>{formatCommonMessage({ id: 'country', defaultMessage: 'Country' })}</span> *
              </label>
              <select
                id="billing-country"
                name="billingCountry"
                className="w-full appearance-none rounded border border-gray-300 py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
                onChange={handleChange}
                value={data.billingCountry}
              >
                <option value=""></option>
                {countryOptions.map(({ display, data }, index) => (
                  <option key={index} value={data}>
                    {formatCommonMessage({ id: `country.${data}`, defaultMessage: display })}
                  </option>
                ))}
              </select>
            </div>
          </>
        )}
      </form>
    </section>
  );
};

export default Address;
