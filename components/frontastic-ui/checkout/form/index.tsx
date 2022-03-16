import { LockClosedIcon } from '@heroicons/react/solid';
import { Props as FormInputProps } from './fields/formInput';
import FormButton from './fields/formButton';
import FormInput from './fields/formInput';
import FormCheckbox from './fields/formCheckbox';
import FormSelect from './fields/formSelect';

interface Props {
  readonly formInputData: Omit<Omit<FormInputProps, 'value'>, 'onChange'>[];
  readonly submitText: string;
  readonly updateFormInput: (propName: string, newValue: string) => void;
  readonly submitForm: () => void;
  readonly data: { [inputName: string]: string | boolean };
  readonly isFormValid: boolean;
}

const Form = ({ formInputData, submitText, updateFormInput, submitForm, data, isFormValid }: Props) => {
  return (
    <form className="mt-6">
      <div className="grid grid-cols-12 gap-y-6 gap-x-4">
        {formInputData.map((inputData, i) => (
          <FormInput key={i} {...inputData} value={data[inputData.name] as string} onChange={updateFormInput} />
        ))}
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
      {/*TODO: refactor below for reuse, add extra fields for billing address on unchecked */}
      {/*<FormCheckbox
            checked={data["sameAsShipping"] as boolean}
            onChange={updateFormCheckbox}
            name="sameAsShipping"
            label="Billing address is the same as shipping address"
            inverseLabel={true}
        />*/}
      <FormButton buttonText={submitText} onClick={submitForm} isDisabled={!isFormValid} />

      <p className="mt-6 flex justify-center text-sm font-medium text-gray-500">
        <LockClosedIcon className="mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
        Payment details stored in plain text
      </p>
    </form>
  );
};

export default Form;
