import React from 'react';
import { useTranslation } from 'next-i18next';

import { Summary } from 'components';

import PaymentMethodForm from '../forms/payment-method';

type Props = {
  data: any;
};

const PaymentPanel: React.FC<Props> = ({ data }: Props) => {
  const { t } = useTranslation('checkout');

  //const { checkoutCart } = useCart();

  const onChangePaymentMethod = (pm: any) => {
    /*updateCart({
      paymentMethod: pm,
    })*/
  };

  const onNextClicked = () => {
    //if (cart.paymentMethod) {
    alert('call checkout');
    //checkoutCart()
    //}
  };

  return (
    <div className="md:grid md:gap-4 md:grid-cols-1-340 md:grid-rows-1 md:my-4 md:px-4 max-w-960px mx-auto">
      <div className="md:shadow-md md:rounded bg-white">
        <div className="px-4 py-5 md:px-6 border-t-2 md:border-t-0 border-neutral-100 bg-white">
          <PaymentMethodForm
            paymentMethods={data.paymentMethods}
            onSubmit={(pm) => {
              onChangePaymentMethod(pm);
            }}
          />
        </div>
      </div>

      <div className="self-baseline md:sticky md:top-0">
        <div className="px-4 py-6 md:py-4 md:shadow-md md:rounded border-t-2 md:border-t-0 border-neutral-100 bg-white">
          <Summary buttonLabel={t('pay')} onClick={onNextClicked} />
        </div>
      </div>
    </div>
  );
};

export default PaymentPanel;
