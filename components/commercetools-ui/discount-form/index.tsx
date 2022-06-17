import React, { useEffect, useState } from 'react';
import { Disclosure, Transition } from '@headlessui/react';
import { ChevronDownIcon, XIcon } from '@heroicons/react/outline';
import { Cart } from '@Types/cart/Cart';
import { Discount } from '@Types/cart/Discount';
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

  const handleApply = () => {
    redeemDiscountCode(code);
    setCode('');
  };

  const handleRemove = (discount) => {
    removeDiscountCode(discount);
  };

  return (
    <div className={`${className}`}>
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className={`${open ? 'border-b-2' : ''}  w-full rounded bg-gray-200 py-4 px-6`}>
              <div className="flex justify-between">
                <p className={`font-medium transition`}>
                  {formatCartMessage({ id: 'cart.discount', defaultMessage: 'Discounts' })}
                </p>
                <ChevronDownIcon className={`${open ? 'rotate-180 transform' : ''} h-7 w-7 transition`} />
              </div>
            </Disclosure.Button>
            <Transition
              enter="transition duration-150 ease-out"
              enterFrom="transform scale-y-95 opacity-0"
              enterTo="transform scale-y-100 opacity-100"
              leave="transition duration-100 ease-out"
              leaveFrom="transform scale-y-100 opacity-100"
              leaveTo="transform scale-y-95 opacity-0"
            >
              <Disclosure.Panel className="bg-gray-200 px-5 pb-5">
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
                    onClick={handleApply}
                    disabled={code === '' ? true : false}
                    className="w-24 cursor-pointer content-center rounded border-2 border-accent-400 bg-white p-2 font-bold text-accent-400 hover:bg-accent-400 hover:text-white focus:outline-none disabled:cursor-not-allowed disabled:border-none disabled:bg-gray-300 disabled:text-gray-500"
                  >
                    {formatCartMessage({
                      id: 'cart.apply',
                      defaultMessage: 'Apply',
                    })}
                  </button>
                </div>
                <div className={`flex flex-wrap justify-items-start ${discounts?.length === 0 ? 'pt-0' : 'pt-5'}`}>
                  {discounts?.map((discount) => (
                    <div key={discount.discountId} className="mx-2 mt-3 flex w-fit justify-between rounded bg-gray-400">
                      <label className="px-4 py-1 text-white">{discount.code}</label>
                      <button type="button" onClick={() => handleRemove(discount)} className="py-1 pr-3">
                        <XIcon className="h-6 w-5 text-white" />
                      </button>
                    </div>
                  ))}
                </div>
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
    </div>
  );
};

export default DiscountForm;
