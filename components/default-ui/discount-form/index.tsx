import React, { useEffect, useState } from 'react';
import { XIcon } from '@heroicons/react/outline';
import { Cart } from '@Types/cart/Cart';
import { Discount } from '@Types/cart/Discount';
import toast from 'react-hot-toast';
import { useFormat } from 'helpers/hooks/useFormat';
import { useCart } from 'frontastic/provider';

export interface Props {
  className?: string;
  cart: Cart;
}

const DiscountForm: React.FC<Props> = ({ className, cart }) => {
  const { formatMessage: formatCartMessage } = useFormat({ name: 'cart' });
  const [code, setCode] = useState('');
  const [discounts, setDiscounts] = useState<Discount[]>([]);
  const { redeemDiscountCode, removeDiscountCode } = useCart();

  useEffect(() => {
    setDiscounts(cart?.discountCodes);
  }, [cart?.discountCodes]);

  const onApplyDiscount = () => {
    redeemDiscountCode(code)
      .catch((e: Error) => {
        if ((e.message = '101')) {
          toast.error(formatCartMessage({ id: 'codeNotValid', defaultMessage: 'Code is not valid' }));
        }
      })
      .finally(() => setCode(''));
  };

  const handleRemove = (discount) => {
    removeDiscountCode(discount);
  };

  return (
    <div className={`${className}`}>
      <div className="w-full rounded border-b-2 bg-gray-200 py-4 px-6">
        <div className="flex justify-between">
          <p className={`font-medium transition`}>
            {formatCartMessage({ id: 'cart.discount', defaultMessage: 'Discounts' })}
          </p>
        </div>
      </div>
      <div className="bg-gray-200 px-5 pb-5">
        <div className="flex w-full justify-between">
          <div className=" pr-3">
            <input
              className=" w-full appearance-none rounded border-none py-3 px-4 leading-tight text-gray-700 shadow focus:border-accent-400"
              type="text"
              value={code}
              placeholder={formatCartMessage({
                id: 'cart.discount.code',
                defaultMessage: 'code',
              })}
              onChange={(e) => setCode(e.target.value)}
            />
          </div>
          <button
            type="button"
            onClick={onApplyDiscount}
            disabled={code === '' ? true : false}
            className="w-24 cursor-pointer content-center rounded border-2 border-accent-400 bg-white p-2 font-bold text-accent-400 hover:bg-accent-400 hover:text-white focus:outline-none disabled:cursor-not-allowed disabled:border-none disabled:bg-gray-300 disabled:text-gray-500"
          >
            {formatCartMessage({
              id: 'cart.apply',
              defaultMessage: 'Apply',
            })}
          </button>
        </div>

        <div className={`flex flex-wrap justify-items-start ${discounts?.length === 0 ? 'pt-0' : 'pt-4'}`}>
          {discounts?.map((discount) => (
            <div key={discount.discountId} className="mr-2 mt-3 flex w-fit justify-between rounded bg-gray-400">
              <label className="px-4 py-1 text-white">{discount.code}</label>
              <button type="button" onClick={() => handleRemove(discount)} className="py-1 pr-3">
                <XIcon className="h-6 w-5 text-white" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DiscountForm;
