import React from 'react';
import { useTranslation } from 'next-i18next';

const PaymentMethods: React.FC = () => {
  const { t } = useTranslation('product');

  return (
    <>
      <h2 className="text-lg text-neutral-900 font-bold leading-none">{t('paymentMethods')}</h2>

      <div className="mt-4">💳 💳 💳</div>
    </>
  );
};

export default PaymentMethods;
