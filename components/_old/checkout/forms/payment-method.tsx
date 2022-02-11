import React from 'react';
import classnames from 'classnames';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'next-i18next';

type Props = {
  paymentMethods: any;
  onSubmit: (v: any) => void;
};

const PaymentMethod: React.FC<Props> = ({ paymentMethods, onSubmit }: Props) => {
  const { register, getValues } = useForm({
    mode: 'onChange',
    /* defaultValues: {
        payment: defaultValues ? defaultValues.paymentMethod : null,
    }, */
  });

  const { t } = useTranslation('checkout');

  const onChange = () => {
    onSubmit(getValues());
  };

  return (
    <form onChange={onChange}>
      <div className="mb-4 text-xs text-neutral-600 font-bold leading-tight uppercase">{t('paymentMethod')}</div>

      {paymentMethods?.map((pm, i: number) => {
        return (
          <div
            key={i}
            className={classnames('px-4 py-3 border border-neutral-400 rounded flex items-center h-12 cursor-pointer', {
              'mt-2': i > 0,
            })}
            onClick={() => {
              //setValue('type', pm.type)

              onChange();
            }}
          >
            <input
              id={`payment-method-${i}`}
              type="radio"
              name="type"
              className="mr-3"
              value={pm.type}
              {...register(`payment-method-${i}`)}
            />
            {pm.name}
          </div>
        );
      })}
    </form>
  );
};

export default PaymentMethod;
