import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useParams } from 'next/navigation';
import Button from 'components/commercetools-ui/atoms/button';
import Radio from 'components/commercetools-ui/atoms/radio';
import { CurrencyHelpers } from 'helpers/currencyHelpers';
import { useFormat } from 'helpers/hooks/useFormat';
import useProcessing from 'helpers/hooks/useProcessing';
import { useCart } from 'frontastic';

export interface Props {
  goToNextStep: () => void;
}

const Shipping: React.FC<Props> = ({ goToNextStep }) => {
  const { formatMessage: formatCartMessage } = useFormat({ name: 'cart' });

  const { locale } = useParams();

  const { data, setShippingMethod } = useCart();

  const [selectedId, setSelectedId] = useState('');

  const shippingMethods = useMemo(() => data?.availableShippingMethods ?? [], [data?.availableShippingMethods]);

  useEffect(() => {
    if (!selectedId && shippingMethods?.[0]) setSelectedId(shippingMethods[0].shippingMethodId);
  }, [shippingMethods, selectedId]);

  const getEstimatedDate = useCallback((days: number) => {
    if (isNaN(days)) return '';

    const date = new Date(Date.now());

    date.setDate(date.getDate() + days);

    return date.toLocaleDateString().replace(/\//g, '-');
  }, []);

  const { processing, startProcessing, stopProcessing } = useProcessing();

  const submit = useCallback(async () => {
    if (!selectedId || processing) return;

    startProcessing();

    await setShippingMethod(selectedId);

    stopProcessing();
    goToNextStep();
  }, [goToNextStep, setShippingMethod, selectedId, processing, startProcessing, stopProcessing]);

  return (
    <div className="lg:px-36 lg:pb-36 lg:pt-0">
      <div className="mt-24 border-x border-t border-neutral-400 bg-white lg:mt-0">
        {shippingMethods.map((shippingMethod) => (
          <div
            key={shippingMethod.shippingMethodId}
            className="flex cursor-pointer items-center justify-between border-b border-neutral-400 p-16"
            onClick={() => setSelectedId(shippingMethod.shippingMethodId)}
          >
            <div className="flex items-center gap-16">
              <Radio name="checkout-shipping-method" checked={shippingMethod.shippingMethodId === selectedId} />
              <div>
                <p className="text-14 font-medium">{shippingMethod.name}</p>
                <p className="mt-4 text-14 text-secondary-black">
                  Est: {getEstimatedDate(+(shippingMethod.description ?? 0))}
                </p>
              </div>
            </div>

            <span className="text-14 font-medium">
              {CurrencyHelpers.formatForCurrency(shippingMethod.rates?.[0]?.price ?? {}, locale)}
            </span>
          </div>
        ))}
      </div>
      <div className="mt-24">
        <Button
          variant="primary"
          className="w-full min-w-[200px] md:text-16 lg:w-fit lg:px-36"
          loading={processing}
          type="submit"
          onClick={submit}
        >
          {formatCartMessage({ id: 'continue.to', defaultMessage: 'Continue to' })}{' '}
          <span className="lowercase">{formatCartMessage({ id: 'payment', defaultMessage: 'Payment' })}</span>
        </Button>
      </div>
    </div>
  );
};

export default Shipping;
