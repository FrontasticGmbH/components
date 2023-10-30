import React, { useEffect, useState } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { Discount } from 'shared/types/cart';
import AccordionBtn, { AccordionProps } from 'components/commercetools-ui/atoms/accordion';
import CloseIcon from 'components/icons/close';
import useClassNames from 'helpers/hooks/useClassNames';
import { useFormat } from 'helpers/hooks/useFormat';
import { useCart } from 'frontastic';

export interface Props {
  className?: string;
  accordionProps?: AccordionProps;
}

const DiscountForm: React.FC<Props> = ({ className, accordionProps }) => {
  const { formatMessage: formatCartMessage } = useFormat({ name: 'cart' });

  const [code, setCode] = useState('');
  const [discounts, setDiscounts] = useState<Discount[]>([]);
  const [codeIsInvalid, setCodeIsInvalid] = useState(false);
  const { redeemDiscountCode, removeDiscountCode, data } = useCart();

  const [processing, setProcessing] = useState(false);

  useEffect(() => {
    setDiscounts(data?.discountCodes ?? []);
  }, [data]);

  const inputClassName = useClassNames([
    'h-40 w-full border rounded-sm px-10 py-12 text-14 placeholder:text-secondary-black disabled:bg-neutral-300 focus:outline-none',
    codeIsInvalid ? 'border-accent-red text-accent-red focus:border-accent-red' : 'border-neutral-300',
  ]);

  const discountsContainerClassName = useClassNames([
    'mt-8 flex flex-wrap justify-items-start gap-12',
    discounts?.length === 0 ? 'pt-0' : 'pt-4',
  ]);

  const containerClassName = useClassNames(['py-16 text-16 border-t border-neutral-400 text-14', className]);

  const onApplyDiscount = () => {
    if (processing || !code) return;

    setProcessing(true);

    redeemDiscountCode?.(code)
      .then(() => setCode(''))
      .catch(() => {
        setCodeIsInvalid(true);
      })
      .finally(() => {
        setProcessing(false);
      });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCode(e.target.value);
    setCodeIsInvalid(false);
  };

  const handleRemove = (discount: Discount) => {
    removeDiscountCode?.(discount);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onApplyDiscount();
  };

  const resetCode = () => {
    setCode('');
    setCodeIsInvalid(false);
  };

  return (
    <div className={containerClassName}>
      <AccordionBtn
        closedSectionTitle={formatCartMessage({ id: 'discount.apply', defaultMessage: 'Apply a discount' })}
        buttonClassName="text-secondary-black"
        {...accordionProps}
      >
        <div>
          <form className="mt-24" onSubmit={handleSubmit}>
            <div className="relative">
              <input
                className={inputClassName}
                value={code}
                placeholder={formatCartMessage({
                  id: 'cart.discount.enter',
                  defaultMessage: 'Enter discount code',
                })}
                onChange={handleChange}
                disabled={processing}
              />
              {codeIsInvalid && (
                <span
                  className="absolute right-16 top-1/2 -translate-y-1/2"
                  onClick={(e) => {
                    e.stopPropagation();
                    resetCode();
                  }}
                >
                  <CloseIcon className=" h-10 w-10 cursor-pointer" />
                </span>
              )}
            </div>
            {codeIsInvalid && (
              <p className="mt-16 font-body text-12 font-medium leading-normal text-accent-red">
                {formatCartMessage({ id: 'codeNotValid', defaultMessage: 'The discount code is not valid' })}
              </p>
            )}
          </form>

          {discounts && !!discounts.length && (
            <div className={discountsContainerClassName}>
              {discounts.map((discount) => (
                <div
                  key={discount.discountId}
                  className="mr-2 flex w-fit justify-between gap-8 rounded-sm border border-neutral-400 bg-white px-8 py-4"
                >
                  <label className="text-12 uppercase leading-[16px] text-secondary-black">{discount.code}</label>
                  <button type="button" onClick={() => handleRemove(discount)}>
                    <XMarkIcon className="h-16 w-16 text-secondary-black" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </AccordionBtn>
    </div>
  );
};

export default DiscountForm;
