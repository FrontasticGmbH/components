import React, { useState } from 'react';
import { useTranslation } from 'next-i18next';

import { useCart } from 'frontastic';
import { Checkbox, Summary } from 'components';

import ShippingForm from '../forms/shipping';
import BillingForm from '../forms/billing';

type Props = {
  data: any;
  countries: any;
  goToNextPanel: () => void;
};

const ShippingPanel: React.FC<Props> = ({ data, countries, goToNextPanel }: Props) => {
  const { t } = useTranslation('checkout');

  const { updateCart } = useCart();

  const isValid = () => {
    if (isBillingSameAsShipping) {
      return (
        email &&
        shipping.firstName &&
        shipping.lastName &&
        shipping.streetName &&
        shipping.postalCode &&
        shipping.country
      );
    } else {
      return (
        email &&
        shipping.firstName &&
        shipping.lastName &&
        shipping.streetName &&
        shipping.postalCode &&
        shipping.country &&
        billing.firstName &&
        billing.lastName &&
        billing.streetName &&
        billing.postalCode &&
        billing.country
      );
    }
  };

  const onNextClicked = () => {
    if (isValid()) {
      updateCart({
        account: {
          email: email,
        },
        shipping: {
          firstName: shipping.firstName,
          lastName: shipping.lastName,
          phone: shipping.phone,
          streetName: shipping.streetName,
          postalCode: shipping.postalCode,
          city: shipping.city,
          country: shipping.country,
          state: shipping.state,
        },
        billing: {
          firstName: isBillingSameAsShipping ? shipping.firstName : billing.firstName,
          lastName: isBillingSameAsShipping ? shipping.lastName : billing.lastName,
          phone: isBillingSameAsShipping ? shipping.phone : billing.phone,
          streetName: isBillingSameAsShipping ? shipping.streetName : billing.streetName,
          postalCode: isBillingSameAsShipping ? shipping.postalCode : billing.postalCode,
          city: isBillingSameAsShipping ? shipping.city : billing.city,
          country: isBillingSameAsShipping ? shipping.country : billing.country,
          state: isBillingSameAsShipping ? shipping.state : billing.state,
        },
      }).then(() => {
        goToNextPanel();
      });
    }
  };

  const isSameAddress = () => {
    return (
      shipping.firstName === billing.firstName &&
      shipping.lastName === billing.lastName &&
      shipping.streetName === billing.streetName &&
      shipping.postalCode === billing.postalCode &&
      shipping.country === billing.country &&
      shipping.state === billing.state
    );
  };

  const [email, setEmail] = useState(data.email);
  const [shipping, setShipping] = useState(data.shippingAddress ? data.shippingAddress : {});
  const [billing, setBilling] = useState(data.billingAddress ? data.billingAddress : {});
  const [isBillingSameAsShipping, setBillingIsSameAsShipping] = useState(isSameAddress());

  return (
    <div className="md:grid md:gap-4 md:grid-cols-1-340 md:grid-rows-1 md:my-4 md:px-4 max-w-960px mx-auto">
      <div className="md:shadow-md md:rounded bg-white">
        <div className="px-4 py-5 md:px-6 border-t-2 md:border-t-0 border-neutral-100 bg-white">
          <ShippingForm
            countries={countries}
            defaultValues={{ ...data.shippingAddress, email: data.email }}
            onSubmit={(data) => {
              setEmail(data.email);
              setShipping(data);
            }}
          />

          <div className="mt-4 p-4 bg-gray-100 rounded">
            <div className="text-sm text-neutral-900 flex items-center">
              <Checkbox
                className="text-xl"
                label={t('billingDetailsLabel')}
                value={isBillingSameAsShipping}
                onClick={() => {
                  setBillingIsSameAsShipping(!isBillingSameAsShipping);
                }}
              />
            </div>
          </div>
        </div>

        {!isBillingSameAsShipping && (
          <div className="px-4 py-5 md:px-6 border-t-2 border-neutral-100">
            <BillingForm
              countries={countries}
              defaultValues={data.billingAddress}
              onSubmit={(data) => {
                setBilling(data);
              }}
            />
          </div>
        )}
      </div>

      <div className="self-baseline md:sticky md:top-0">
        <div className="px-4 py-6 md:py-4 md:shadow-md md:rounded border-t-2 md:border-t-0 border-neutral-100 bg-white">
          <Summary buttonLabel={t('nextOverview')} buttonDisabled={!isValid()} onClick={onNextClicked} />
        </div>
      </div>
    </div>
  );
};

export default ShippingPanel;
