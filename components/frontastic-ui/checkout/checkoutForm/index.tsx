import FormButton from './fields/formButton';
import FormInput from './fields/formInput';
import FormSelect from './fields/formSelect';
import { useFormat } from 'helpers/hooks/useFormat';

interface Props {
  readonly submitText: string;
  readonly updateFormInput: (propName: string, newValue: string) => void;
  readonly submitForm: () => void;
  readonly data: { [inputName: string]: string };
  readonly isFormValid: boolean;
  readonly cardPayments?: boolean;
}

const CheckoutForm = ({ submitText, updateFormInput, submitForm, data, isFormValid, cardPayments }: Props) => {
  const { formatMessage } = useFormat({ name: 'common' });
  return (
    <form className="mt-6">
      <div className="grid grid-cols-12 gap-y-6 gap-x-4">
        <FormInput
          name='firstName'
          inputAutoComplete='given-name'
          label={formatMessage({ id: 'firstName', defaultMessage: 'First Name' })}
          value={data.firstName}
          onChange={updateFormInput}
          containerClassNames='col-span-6 sm:col-span-6'
        />
        <FormInput
          name='lastName'
          inputAutoComplete='family-name'
          label={formatMessage({ id: 'lastName', defaultMessage: 'Last Name' })}
          value={data.lastName}
          onChange={updateFormInput}
          containerClassNames='col-span-6 sm:col-span-6'
        />
        <FormInput
          name='emailAddress'
          inputAutoComplete='email'
          label={formatMessage({ id: 'emailAddress', defaultMessage: 'Email Address' })}
          value={data.email}
          onChange={updateFormInput}
        />
        {cardPayments && <>
          <FormInput
            name='nameOnCard'
            inputAutoComplete='cc-name'
            label={formatMessage({ id: 'street.nameOnCard', defaultMessage: 'Name on Card' })}
            value={data.nameOnCard}
            onChange={updateFormInput}
          />
          <FormInput
            name='cardNumber'
            inputAutoComplete='cc-number'
            label={formatMessage({ id: 'street.cardNumber', defaultMessage: 'Card Number' })}
            value={data.cardNumber}
            onChange={updateFormInput}
          />
          <FormInput
            name='expirationDate'
            inputAutoComplete='cc-exp'
            label={formatMessage({ id: 'street.expirationDate', defaultMessage: 'Expiration date (MM/YY)' })}
            value={data.expirationDate}
            onChange={updateFormInput}
            containerClassNames='col-span-8 sm:col-span-9'
          />
          <FormInput
            name='cvc'
            inputAutoComplete='csc'
            label={formatMessage({ id: 'street.cvc', defaultMessage: 'CVC' })}
            value={data.nameOnCard}
            onChange={updateFormInput}
            containerClassNames='col-span-4 sm:col-span-3'
          />
        </>}
        <FormInput
          name='streetName'
          inputAutoComplete='given-name'
          label={formatMessage({ id: 'street.name', defaultMessage: 'Street Name' })}
          value={data.streetName}
          onChange={updateFormInput}
          containerClassNames='col-span-full sm:col-span-9'
        />
        <FormInput
          name='streetNumber'
          label={formatMessage({ id: 'street.number', defaultMessage: 'Street No.' })}
          value={data.streetNumber}
          onChange={updateFormInput}
          containerClassNames='col-span-full sm:col-span-3'
        />
        <FormInput
          name='city'
          inputAutoComplete='address-level2'
          label={formatMessage({ id: 'city', defaultMessage: ' City' })}
          value={data.city}
          onChange={updateFormInput}
          containerClassNames='col-span-full sm:col-span-4'
        />
        <FormInput
          name='postalCode'
          inputAutoComplete='postal-code'
          label={formatMessage({ id: 'zipCode', defaultMessage: 'Postal code' })}
          value={data.postalCode}
          onChange={updateFormInput}
          containerClassNames='col-span-full sm:col-span-4'
        />
        <FormSelect
          name="country"
          label="Country"
          options={[
            { display: 'Germany', data: 'DE' },
            { display: 'United States', data: 'US' },
            { display: 'Canada', data: 'CA' },
          ]}
          selectedOptionValue={(data['country'] as string) || undefined}
          onChange={updateFormInput}
          containerClassName="col-span-full sm:col-span-4"
        />
      </div>
      {/*<FormCheckbox
            checked={data["sameAsShipping"] as boolean}
            onChange={updateFormCheckbox}
            name="sameAsShipping"
            label="Billing address is the same as shipping address"
            inverseLabel={true}
        />*/}
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
