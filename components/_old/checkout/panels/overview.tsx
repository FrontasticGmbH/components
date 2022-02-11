import React from 'react';
import { useTranslation } from 'next-i18next';

import { useCart } from 'frontastic';
import { Summary } from 'components';

import Products from '../info/products';
import Shipping from '../info/shipping';
import Billing from '../info/billing';
import OrderButton from '../info/order-button';
import ShippingMethodForm from '../forms/shipping-method';

type Props = {
  data: any;
  policy: string;
  countries: any;
  goToNextPanel: () => void;
  goToPanelIndex: (i: number) => void;
};

const OverviewPanel: React.FC<Props> = ({ data, policy, countries, goToNextPanel, goToPanelIndex }: Props) => {
  const { t } = useTranslation('checkout');

  const { updateCart } = useCart();

  const isValid = () => {
    return data.shippingMethod?.shippingMethodId;
  };

  const onChangeShippingMethod = (data) => {
    updateCart({
      shippingMethodName: data.shippingMethodId,
    });
  };

  const onNextClicked = () => {
    if (data.shippingMethod?.shippingMethodId) {
      goToNextPanel();
    }
  };

  return (
    <div className="md:grid md:gap-4 md:grid-cols-1-340 md:grid-rows-1 md:my-4 md:px-4 max-w-960px mx-auto">
      <div className="md:shadow-md md:rounded bg-white">
        <div className="sm:hidden px-4 py-3 md:px-6 border-b-4 border-neutral-100 border-t-4 md:border-t-0">
          <OrderButton label={t('nextPayment')} vouchersLabel={policy} disabled={!isValid()} onClick={onNextClicked} />
        </div>

        <div className="px-4 py-5 md:px-6 border-t-2 md:border-t-0 border-neutral-100 bg-white">
          <ShippingMethodForm
            shippingMethods={data.shippingMethods}
            defaultValues={data.shippingMethod}
            onSubmit={(data) => {
              onChangeShippingMethod(data);
            }}
          />
        </div>

        <div className="px-4 py-5 md:px-6 border-b-2 border-neutral-100">
          <Products products={data.lineItems} />
        </div>

        <div className="px-4 py-5 md:px-6 border-b-2 border-neutral-100">
          {data.shippingAddress && (
            <Shipping
              address={data.shippingAddress}
              onClick={() => {
                goToPanelIndex(0);
              }}
            />
          )}
        </div>

        <div className="px-4 py-5 md:px-6 border-b-2 border-neutral-100">
          {data.billingAddress && (
            <Billing
              address={data.billingAddress}
              onClick={() => {
                goToPanelIndex(0);
              }}
            />
          )}
        </div>
      </div>

      <div className="self-baseline md:sticky md:top-0">
        <div className="px-4 py-6 md:py-4 md:shadow-md md:rounded border-t-2 md:border-t-0 border-neutral-100 bg-white">
          <Summary
            buttonLabel={t('nextPayment')}
            buttonDisabled={!isValid()}
            vouchersLabel={policy}
            onClick={onNextClicked}
          />
        </div>
      </div>
    </div>
  );
};

export default OverviewPanel;
