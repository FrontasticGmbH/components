import React from 'react';
import classnames from 'classnames';
import { useTranslation } from 'next-i18next';

import EditIcon from 'components/icons/edit';

type Props = {
  payments: any;
  onClick: () => void;
};

const PaymentMethod: React.FC<Props> = ({ payments, onClick }: Props) => {
  const { t } = useTranslation('checkout');

  return (
    <>
      <div className="mb-3 flex items-center justify-between">
        <span className="text-xs text-neutral-600 font-bold leading-tight uppercase">{t('paymentMethod')}</span>

        <span className="text-sm text-blue-500 leading-tight cursor-pointer flex items-center" onClick={onClick}>
          {t('edit')} <EditIcon className="inline fill-current text-sm ml-2" />
        </span>
      </div>

      <div className="text-md text-neutral-900 leading-tight">
        {payments.map((payment, i: number) => {
          return (
            <span key={i} className={classnames({ 'mt-8': i > 0 })}>
              {payment.paymentMethod}
            </span>
          );
        })}
      </div>
    </>
  );
};

export default PaymentMethod;
