import React, { useState, useRef } from 'react';
import { useTranslation } from 'next-i18next';

import Stepper from './stepper';
import Panels from './panels';

import ShippingPanel from '../panels/shipping';
import OverviewPanel from '../panels/overview';
import PaymentPanel from '../panels/payment';

type Props = {
  data: any;
  countries: any;
  policy: string;
  isLoading: boolean;
};

const CheckoutLayout: React.FC<Props> = ({ data, countries, policy, isLoading = false }: Props) => {
  const [current, setCurrent] = useState(0);
  const ts = useRef(null);

  const { t } = useTranslation('checkout');

  const steps = [
    {
      name: t('shipping'),
      component: ShippingPanel,
    },
    {
      name: t('overview'),
      component: OverviewPanel,
    },
    {
      name: t('payment'),
      component: PaymentPanel,
    },
  ];

  return (
    <>
      <Stepper steps={steps} current={current} setCurrent={setCurrent} ref={ts} />
      <Panels
        data={data}
        countries={countries}
        policy={policy}
        steps={steps}
        current={current}
        setCurrent={setCurrent}
        ref={ts}
        isLoading={isLoading}
      />
    </>
  );
};

export default CheckoutLayout;
