import { useEffect, useState } from 'react';
import { useFormat } from 'helpers/hooks/useFormat';
import FormButton from './fields/formButton';
import FormCheckbox from './fields/formCheckbox';
import FormInput from './fields/formInput';
import FormRadioGroup from './fields/formRadioGroup';
import FormSelect from './fields/formSelect';
import { ShippingCountryItem } from './index';

interface Props {
  readonly submitText: string;
  readonly updateFormInput: (propName: string, newValue: string) => void;
  readonly submitForm: () => void;
  readonly data: { [inputName: string]: string };
  readonly isFormValid: boolean;
  readonly shippingCountryOptions: ShippingCountryItem[];
}

const CheckoutForm = ({
  submitText,
  updateFormInput,
  submitForm,
  data,
  isFormValid,
  shippingCountryOptions,
}: Props) => {
  //i18n messages
  const { formatMessage } = useFormat({ name: 'common' });
  const { formatMessage: formatCheckoutMessage } = useFormat({ name: 'checkout' });

  //available payment methods
  const paymentMethods = [
    {
      id: 'invoice',
      label: formatCheckoutMessage({ id: 'invoice', defaultMessage: 'Invoice' }),
      value: 'invoice',
      default: true,
    },
  ];

  //use billing address as shipping address
  const [billingSameAsShipping, setBillingSameAsShipping] = useState(true);

  useEffect(() => {
    if (billingSameAsShipping) updateFormInput('shippingAddress', data.billingAddress);
    else updateFormInput('shippingAddress', '');
  }, [billingSameAsShipping, data.billingAddress]);

  //active payment method
  const [activePaymentMethod, setActivePaymentMethod] = useState('invoice');

  //change active payment method
  useEffect(() => {
    updateFormInput('pay', activePaymentMethod);
  }, [activePaymentMethod]);

  return (
    <form className="mt-6">
      <div className="grid grid-cols-12 gap-x-4 gap-y-6">
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
        <div className="col-span-full pt-8">
          <label className="text-base font-medium text-gray-900 dark:text-light-100">
            {formatCheckoutMessage({ id: 'billingAddress', defaultMessage: 'Billing address' })}
          </label>
        </div>
        <FormInput
          name="streetName"
          inputAutoComplete="given-name"
          label={formatMessage({ id: 'street.name', defaultMessage: 'Street Name' })}
          value={data.streetName}
          onChange={updateFormInput}
          containerClassNames="col-span-full sm:col-span-9"
        />
        <FormInput
          name="streetNumber"
          label={formatMessage({ id: 'street.number', defaultMessage: 'Street No.' })}
          value={data.streetNumber}
          onChange={updateFormInput}
          containerClassNames="col-span-full sm:col-span-3"
        />
        <FormInput
          name="city"
          inputAutoComplete="address-level2"
          label={formatMessage({ id: 'city', defaultMessage: ' City' })}
          value={data.city}
          onChange={updateFormInput}
          containerClassNames="col-span-full sm:col-span-4"
        />
        <FormInput
          name="postalCode"
          inputAutoComplete="postal-code"
          label={formatMessage({ id: 'zipCode', defaultMessage: 'Postal code' })}
          value={data.postalCode}
          onChange={updateFormInput}
          containerClassNames="col-span-full sm:col-span-4"
        />
        <FormSelect
          name="country"
          label={formatMessage({ id: 'country', defaultMessage: 'Country' })}
          options={shippingCountryOptions}
          selectedOptionValue={(data.country as string) || undefined}
          onChange={updateFormInput}
          containerClassName="col-span-full sm:col-span-4"
        />
        {!billingSameAsShipping && (
          <>
            <div className="col-span-full pt-6">
              <label className="text-base font-medium text-gray-900 dark:text-light-100">
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
              label={formatMessage({ id: 'country', defaultMessage: 'Country' })}
              options={shippingCountryOptions}
              selectedOptionValue={(data.shippingCountry as string) || undefined}
              onChange={updateFormInput}
              containerClassName="col-span-full sm:col-span-4"
            />
          </>
        )}
        <FormCheckbox
          checked={billingSameAsShipping}
          onChange={(checked) => setBillingSameAsShipping(checked)}
          name="sameAsShipping"
          label={formatCheckoutMessage({
            id: 'billingAddressSameAsShipping',
            defaultMessage: 'Billing address is the same as shipping address',
          })}
          inverseLabel
          containerClassNames="flex items-center gap-4 col-span-full"
        />
        <FormRadioGroup
          headline={formatCheckoutMessage({ id: 'payment', defaultMessage: 'Payment' })}
          subline={formatCheckoutMessage({
            id: 'askPaymentPreference',
            defaultMessage: 'What do you prefer to pay with?',
          })}
          options={paymentMethods}
          className="col-span-full pt-6"
          onChange={(val) => setActivePaymentMethod(val)}
        />
        <FormInput
          name="invoiceId"
          label={formatCheckoutMessage({ id: 'invoice', defaultMessage: 'Invoice' }) + ' ID'}
          value={data.invoice}
          onChange={updateFormInput}
        />
      </div>
      <FormButton buttonText={submitText} onClick={submitForm} isDisabled={!isFormValid} />
    </form>
  );
};

export default CheckoutForm;
