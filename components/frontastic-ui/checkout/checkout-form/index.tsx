import FormButton from './fields/formButton';
import FormInput from './fields/formInput';
import FormSelect from './fields/formSelect';
import { useFormat } from 'helpers/hooks/useFormat';
import FormRadioGroup from './fields/formRadioGroup';
import { useEffect, useState } from 'react';
import { useAccount } from 'frontastic';
import FormCheckbox from './fields/formCheckbox';
import { Account } from '../../../../../types/account/Account';

export interface Props {
  readonly submitText: string;
  readonly updateFormInput: (propName: string, newValue: string) => void;
  readonly submitForm: () => void;
  readonly data: { [inputName: string]: string };
  readonly isFormValid: boolean;
  account: Account;
  loggedIn: boolean;
}

const CheckoutForm = ({ submitText, updateFormInput, submitForm, data, isFormValid, account, loggedIn }: Props) => {
  //i18n messages
  const { formatMessage } = useFormat({ name: 'common' });
  const { formatMessage: formatCheckoutMessage } = useFormat({ name: 'checkout' });

  //geust checkout
  const isGuestCheckout = !loggedIn;

  //available payment methods
  const paymentMethods = [
    {
      id: 'cc',
      label: formatCheckoutMessage({ id: 'creditCard', defaultMessage: 'Credit card' }),
      value: 'cc',
      default: true,
    },
    {
      id: 'invoice',
      label: formatCheckoutMessage({ id: 'invoice', defaultMessage: 'Invoice' }),
      value: 'invoice',
      default: false,
    },
  ];

  //available addresses to choose from
  const addresses = (account?.addresses ?? []).map((address) => ({
    display: `${address.city} - ${address.streetName} ${address.streetNumber}`,
    data: address.addressId,
  }));

  //use billing address as shipping address
  const [billingSameAsShipping, setBillingSameAsShipping] = useState(true);

  useEffect(() => {
    if (billingSameAsShipping) updateFormInput('shippingAddress', data.billingAddress);
    else updateFormInput('shippingAddress', '');
  }, [billingSameAsShipping, data.billingAddress]);

  //active payment method
  const [activePaymentMethod, setActivePaymentMethod] = useState('cc');

  useEffect(() => {
    updateFormInput('pay', activePaymentMethod);
  }, [activePaymentMethod]);

  return (
    <form className="mt-6">
      <div className="grid grid-cols-12 gap-y-6 gap-x-4">
        <FormInput
          name="firstName"
          inputAutoComplete="given-name"
          label={formatMessage({ id: 'firstName', defaultMessage: 'First Name' })}
          value={data.firstName}
          onChange={updateFormInput}
          containerClassNames="col-span-6 sm:col-span-6"
        />
        <FormInput
          name="lastName"
          inputAutoComplete="family-name"
          label={formatMessage({ id: 'lastName', defaultMessage: 'Last Name' })}
          value={data.lastName}
          onChange={updateFormInput}
          containerClassNames="col-span-6 sm:col-span-6"
        />
        <FormInput
          name="emailAddress"
          inputAutoComplete="email"
          label={formatMessage({ id: 'emailAddress', defaultMessage: 'Email Address' })}
          value={data.email}
          onChange={updateFormInput}
        />
        <FormSelect
          name="billingAddress"
          label={formatCheckoutMessage({ id: 'billingAddress', defaultMessage: 'Billing address' })}
          options={addresses}
          selectedOptionValue={data.billingAddress}
          onChange={updateFormInput}
          containerClassName="col-span-full"
        />
        {!billingSameAsShipping && (
          <FormSelect
            name="billingAddress"
            label={formatCheckoutMessage({ id: 'billingAddress', defaultMessage: 'Billing address' })}
            options={addresses}
            selectedOptionValue={data.billingAddress}
            onChange={updateFormInput}
            containerClassName="col-span-full"
          />
        )}
        {!billingSameAsShipping &&
          (isGuestCheckout ? (
            <>
              <div className="col-span-full">
                <label className="text-base font-medium text-gray-900">
                  {formatCheckoutMessage({ id: 'shippingAddress', defaultMessage: 'Shipping address' })}
                </label>
              </div>
              <FormInput
                name="shippingStreetName"
                inputAutoComplete="given-name"
                label={formatMessage({ id: 'street.name', defaultMessage: 'Street Name' })}
                value={data.shippingStreetName}
                onChange={updateFormInput}
                containerClassNames="col-span-full sm:col-span-9"
              />
              <FormInput
                name="shippingStreetNumber"
                label={formatMessage({ id: 'street.number', defaultMessage: 'Street No.' })}
                value={data.shippingStreetNumber}
                onChange={updateFormInput}
                containerClassNames="col-span-full sm:col-span-3"
              />
              <FormInput
                name="shippingCity"
                inputAutoComplete="address-level2"
                label={formatMessage({ id: 'city', defaultMessage: ' City' })}
                value={data.shippingCity}
                onChange={updateFormInput}
                containerClassNames="col-span-full sm:col-span-4"
              />
              <FormInput
                name="shippingPostalCode"
                inputAutoComplete="postal-code"
                label={formatMessage({ id: 'zipCode', defaultMessage: 'Postal code' })}
                value={data.shippingPostalCode}
                onChange={updateFormInput}
                containerClassNames="col-span-full sm:col-span-4"
              />
              <FormSelect
                name="shippingCountry"
                label="Country"
                options={[
                  { display: 'Germany', data: 'DE' },
                  { display: 'United States', data: 'US' },
                  { display: 'Canada', data: 'CA' },
                ]}
                selectedOptionValue={(data.shippingCountry as string) || undefined}
                onChange={updateFormInput}
                containerClassName="col-span-full sm:col-span-4"
              />
            </>
          ) : (
            <FormSelect
              name="shippingAddress"
              label={formatCheckoutMessage({ id: 'shippingAddress', defaultMessage: 'Shipping address' })}
              options={addresses}
              selectedOptionValue={data.shippingAddress}
              onChange={updateFormInput}
              containerClassName="col-span-full"
            />
          ))}
        <FormCheckbox
          checked={billingSameAsShipping}
          onChange={(checked) => setBillingSameAsShipping(checked)}
          name="sameAsShipping"
          label="Billing address is the same as shipping address"
          inverseLabel
          containerClassNames="flex items-center gap-4 col-span-full"
        />
        <FormRadioGroup
          headline={formatCheckoutMessage({ id: 'payment', defaultMessage: 'Payment' })}
          subline={formatCheckoutMessage({
            id: 'pay.preference.ask',
            defaultMessage: 'What do you prefer to pay with?',
          })}
          options={paymentMethods}
          className="col-span-full"
          onChange={(val) => setActivePaymentMethod(val)}
        />
        {activePaymentMethod === 'cc' ? (
          <>
            <FormInput
              name="nameOnCard"
              inputAutoComplete="cc-name"
              label={formatMessage({ id: 'street.nameOnCard', defaultMessage: 'Name on Card' })}
              value={data.nameOnCard}
              onChange={updateFormInput}
            />
            <FormInput
              name="cardNumber"
              inputAutoComplete="cc-number"
              label={formatMessage({ id: 'street.cardNumber', defaultMessage: 'Card Number' })}
              value={data.cardNumber}
              onChange={updateFormInput}
            />
            <FormInput
              name="expirationDate"
              inputAutoComplete="cc-exp"
              label={formatMessage({ id: 'street.expirationDate', defaultMessage: 'Expiration date (MM/YY)' })}
              value={data.expirationDate}
              onChange={updateFormInput}
              containerClassNames="col-span-8 sm:col-span-9"
            />
            <FormInput
              name="cvc"
              inputAutoComplete="csc"
              label={formatMessage({ id: 'street.cvc', defaultMessage: 'CVC' })}
              value={data.cvc}
              onChange={updateFormInput}
              containerClassNames="col-span-4 sm:col-span-3"
            />
          </>
        ) : (
          <>
            <FormInput
              name="invoiceId"
              label={formatCheckoutMessage({ id: 'invoice', defaultMessage: 'Invoice' }) + ' ID'}
              value={data.invoice}
              onChange={updateFormInput}
            />
          </>
        )}
      </div>
      <FormButton buttonText={submitText} onClick={submitForm} isDisabled={!isFormValid} />
      {/*
      <p className="mt-6 flex justify-center text-sm font-medium text-gray-500">
        <LockClosedIcon className="mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
        Payment details stored in plain text
      </p> */}
    </form>
  );
};

export default CheckoutForm;
