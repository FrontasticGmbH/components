import React from 'react';
import AdyenCheckout from 'components/commercetools-ui/adyen-checkout';

const CheckoutTastic = ({ data }) => {
  return (
    <AdyenCheckout termsLink={data.termsLink} cancellationLink={data.cancellationLink} privacyLink={data.privacyLink} />
  );
};

export default CheckoutTastic;
