import { useCallback } from 'react';
import { useRouter } from 'next/navigation';
import useI18n from 'helpers/hooks/useI18n';
import { useAccount, useCart } from 'frontastic/hooks';

const useUpdateCartAddresses = () => {
  const router = useRouter();

  const { account, accountLoading } = useAccount();
  const { updateCart } = useCart();
  const { country } = useI18n();

  const updateCartAddresses = useCallback(() => {
    if (account) {
      const email = account.email;
      const addresses = account.addresses?.filter((address) => address.country === country);
      const shippingAddress = addresses?.find((address) => address.isDefaultShippingAddress) || addresses?.[0];
      const billingAddress = addresses?.find((address) => address.isDefaultBillingAddress) || addresses?.[0];

      updateCart({
        account: { email },
        shipping: shippingAddress,
        billing: billingAddress,
      });
    } else if (accountLoading) {
    } else {
      router.push('login');
    }
  }, [account, router, updateCart, accountLoading, country]);

  return updateCartAddresses;
};

export default useUpdateCartAddresses;
