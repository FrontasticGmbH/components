import { useCallback, useEffect, useState } from 'react';
import { Order } from 'shared/types/cart/Order';
import { ShippingMethod } from 'shared/types/cart/ShippingMethod';
import { shippingMethods as shippingMethodsMock } from 'helpers/mocks/mockCommonData';
import { useCart } from 'frontastic';

const useOrderInfoData = (order?: Order) => {
  const { shippingMethods } = useCart();

  const [orderNumber, setOrderNumber] = useState('');
  const [deliveryMethod, setDeliveryMethod] = useState('');
  const [shippingAddress, setShippingAddress] = useState('');
  const [paymentInfo, setPaymentInfo] = useState('');

  const updateOrderNumber = useCallback(() => {
    const label = order?.orderId?.split('-').join(' ') ?? '';
    setOrderNumber(label);
  }, [order?.orderId]);

  const updateDeliveryMethod = useCallback(() => {
    const shippingMethod = shippingMethods.data?.find(
      (method) => method.shippingMethodId === order?.shippingInfo?.shippingMethodId,
    ) as ShippingMethod;

    const shippingDate = new Date();

    shippingDate.setDate(shippingDate.getDate() + +(shippingMethod?.description ?? 0));

    const label = `${shippingDate.toISOString().split('T')[0]} by ${
      shippingMethod?.name ?? shippingMethodsMock[0].name
    }`;

    setDeliveryMethod(label);
  }, [order?.shippingInfo?.shippingMethodId, shippingMethods.data]);

  const updateShippingAddress = useCallback(() => {
    if (order?.shippingAddress) {
      const { streetName, city, postalCode } = order.shippingAddress;
      const label = `${streetName}, ${city}, ${postalCode}`;
      setShippingAddress(label);
    }
  }, [order?.shippingAddress]);

  const updatePaymentInfo = useCallback(() => {
    const payment = order?.payments?.[0];
    // const lastDigits = payment?.cardSummary;
    const lastDigits = undefined;
    const cardType = payment?.paymentMethod == 'mc' ? 'MASTERCARD' : 'VISA';
    const label = lastDigits ? `${cardType} **${lastDigits}` : cardType;
    setPaymentInfo(label);
  }, [order?.payments]);

  useEffect(() => {
    if (order) {
      updateOrderNumber();
      updateDeliveryMethod();
      updateShippingAddress();
      updatePaymentInfo();
    }
  }, [order, updateDeliveryMethod, updateOrderNumber, updatePaymentInfo, updateShippingAddress]);

  return {
    orderNumber,
    deliveryMethod,
    shippingAddress,
    paymentInfo,
  };
};

export default useOrderInfoData;
