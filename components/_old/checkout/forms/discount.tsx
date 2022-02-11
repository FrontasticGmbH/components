import React, { useState } from 'react';
import { useTranslation } from 'next-i18next';

const Discount: React.FC = () => {
  const { t } = useTranslation('checkout');

  const [discountCode, setDiscountCode] = useState('');

  const redeemDiscount = () => {
    if (discountCode) {
      /*app.getLoader('cart')
        .redeemDiscount(discountCode)
        .then(() => {*/
      setDiscountCode('');
      /*})
       */
    }
  };

  return (
    <>
      <div className="text-md text-neutral-900 leading-none font-bold">{t('enterYourDiscountCode')}</div>
      <input
        type="text"
        className="form-input my-3"
        placeholder="Discount"
        value={discountCode}
        onChange={(e) => setDiscountCode(e.target.value)}
      />
      <button
        name={t('apply')}
        className="btn-outline btn-outline-black outline-none focus:outline-none flex ml-auto h-10"
        onClick={redeemDiscount}
      >
        {t('apply')}
      </button>
    </>
  );
};

export default Discount;
