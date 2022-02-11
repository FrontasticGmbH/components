import React from 'react';
import classnames from 'classnames';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'next-i18next';

import { Price } from 'components';

type Props = {
  defaultValues: any;
  shippingMethods: any;
  onSubmit: (v: any) => void;
};

const ShippingMethod: React.FC<Props> = ({ defaultValues, shippingMethods, onSubmit }: Props) => {
  const { register, getValues, setValue } = useForm({
    mode: 'onChange',
    defaultValues: {
      shippingMethodId: defaultValues?.shippingMethodId ? defaultValues.shippingMethodId : null,
    },
  });

  const { t } = useTranslation('checkout');

  const onChange = () => {
    onSubmit(getValues());
  };

  const getShippingMethodPrice = (sm) => {
    return sm.rates.reduce((a, b) => a + b.price, 0);
  };

  return (
    <form onChange={onChange}>
      <div className="mb-4 text-xs text-neutral-600 font-bold leading-tight uppercase">{t('shippingMethods')}</div>

      {shippingMethods?.map((sm, i) => {
        return (
          <div
            key={i}
            className={classnames('px-4 py-3 border border-neutral-400 rounded flex items-center h-16 cursor-pointer', {
              'mt-2': i > 0,
            })}
            onClick={() => {
              setValue('shippingMethodId', sm.shippingMethodId);

              onChange();
            }}
          >
            <input
              name="shippingMethodId"
              aria-label="Shipping method"
              type="radio"
              className="mr-3"
              value={sm.shippingMethodId}
              {...register(`shippingMethodId`)}
            />

            <div className="flex flex-col w-full">
              <div className="text-md leading-tight capitalize">{sm.name}</div>
              {sm.description && <span className="text-xs text-neutral-600">{sm.description}</span>}
            </div>

            <span className="text-md ml-auto font-bold">
              {getShippingMethodPrice(sm) ? (
                <Price value={getShippingMethodPrice(sm)} />
              ) : (
                <span className="uppercase">{t('freeShipping')}</span>
              )}
            </span>
          </div>
        );
      })}
    </form>
  );
};

export default ShippingMethod;
