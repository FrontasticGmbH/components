import { LockClosedIcon } from "@heroicons/react/solid";
import { Props as FormInputProps } from "./fields/formInput";
import FormButton from "./fields/formButton";
import FormInput from "./fields/formInput";
import FormCheckbox from "./fields/formCheckbox";


interface Props {
    readonly formInputData: Omit<Omit<FormInputProps, "value">, "onChange">[],
    readonly submitText: string,
    readonly updateFormInput: (propName: string, newValue: string) => void,
    readonly updateFormCheckbox: (propName: string, newValue: boolean) => void,
    readonly submitForm: () => void,
    readonly data: { [inputName: string]: string | boolean }
}

const Form = ({ formInputData, submitText, updateFormInput, updateFormCheckbox, submitForm, data }: Props) => {

    return <form className="mt-6">
        <div className="grid grid-cols-12 gap-y-6 gap-x-4">
            {formInputData.map((inputData, i) => <FormInput
                key={i}
                {...inputData}
                value={data[inputData.name] as string}
                onChange={updateFormInput}
            />)}
        </div>
        {/*TODO: refactor below for reuse */}
        <FormCheckbox
            checked={data["sameAsShipping"] as boolean}
            onChange={updateFormCheckbox}
            name="sameAsShipping"
            label="Billing address is the same as shipping address"
            inverseLabel={true}
        />
        <FormButton buttonText={submitText} onClick={submitForm} />

        <p className="flex justify-center text-sm font-medium text-gray-500 mt-6">
            <LockClosedIcon className="w-5 h-5 text-gray-400 mr-1.5" aria-hidden="true" />
            Payment details stored in plain text
        </p>
    </form>
}

export default Form;
