import { FC } from 'react';
import { Account } from 'shared/types/account';
import { Order } from 'shared/types/cart/Order';
import Typography from 'components/commercetools-ui/atoms/typography';
import { useFormat } from 'helpers/hooks/useFormat';
import useOrderInfoData from '../hooks/useOrderInfoData';

type ThankYouOrderInfoProps = {
  firstName?: Account['firstName'];
  order?: Order;
};

const ThankYouOrderInfo: FC<ThankYouOrderInfoProps> = ({ firstName, order }) => {
  const { formatMessage } = useFormat({ name: 'thank-you' });

  const loading = !order;

  const { orderNumber, deliveryMethod, shippingAddress, paymentInfo } = useOrderInfoData(order);

  const orderInfo = [
    { label: formatMessage({ id: 'order.number', defaultMessage: 'Order number' }), value: orderNumber || '-' },
    { label: formatMessage({ id: 'delivery.by', defaultMessage: 'Delivery by' }), value: deliveryMethod || '-' },
    {
      label: formatMessage({ id: 'delivery.to', defaultMessage: 'Delivery to' }),
      value: firstName || '',
      subValue: shippingAddress || '-',
    },
    { label: formatMessage({ id: 'payment.by', defaultMessage: 'Payment by' }), value: paymentInfo || '-' },
  ];

  return (
    <div className="grid gap-16 border-b border-neutral-400 py-24 md:gap-24 lg:py-36">
      {orderInfo.map(({ label, value, subValue }, index) => (
        <div key={index}>
          <div className="flex flex-wrap gap-5 md:gap-0">
            <div className="md:w-136">
              <Typography className="w-fit text-14 leading-loose text-secondary-black md:text-16" asSkeleton={loading}>
                {label + ':'}
              </Typography>
            </div>
            <Typography
              className="text-14 font-medium leading-loose text-primary-black md:text-16"
              asSkeleton={loading}
            >
              {value}
            </Typography>
          </div>
          {subValue && (
            <Typography
              className="mt-4 w-fit text-14 leading-loose text-primary-black md:ml-136 md:text-16"
              asSkeleton={loading}
            >
              {subValue}
            </Typography>
          )}
        </div>
      ))}
    </div>
  );
};

export default ThankYouOrderInfo;
