import React from 'react';
import { useRouter } from 'next/navigation';
import Button from 'components/commercetools-ui/atoms/button';
import { Option } from 'components/commercetools-ui/atoms/dropdown';
import Typography from 'components/commercetools-ui/atoms/typography';
import { useFormat } from 'helpers/hooks/useFormat';
import PaymentCard from './payment-card';
export interface Payment {
  id: string;
  cardNumber: string;
  cardExpiryMonth: Option;
  cardExpiryYear: Option;
}

export const payments: Payment[] = [
  {
    id: '1',
    cardNumber: '4646464646464644',
    cardExpiryMonth: { name: '03', value: '03' },
    cardExpiryYear: { name: '27', value: '27' },
  },
  {
    id: '2',
    cardNumber: '4988438843884305',
    cardExpiryMonth: { name: '03', value: '03' },
    cardExpiryYear: { name: '25', value: '25' },
  },
  {
    id: '3',
    cardNumber: '5555444433337777',
    cardExpiryMonth: { name: '03', value: '03' },
    cardExpiryYear: { name: '30', value: '30' },
  },
];

const PaymentMethods = () => {
  const { formatMessage: formatPaymentMessage } = useFormat({ name: 'payment' });
  const router = useRouter();

  return (
    <div className="px-16 md:mt-24 md:px-24 lg:mt-40 lg:px-44">
      <div className="hidden md:block">
        <Typography as="h2" className="text-18 text-primary-black md:text-22 lg:text-24">
          {formatPaymentMessage({
            id: 'payment.methods',
            defaultMessage: 'Payment methods',
          })}
        </Typography>
      </div>
      <div className="mt-20 lg:mt-36">
        <Typography as="h2" className="text-14 text-secondary-black md:text-16">
          {formatPaymentMessage({
            id: 'payment.details',
            defaultMessage: 'Delete or add payment methods.',
          })}
        </Typography>
      </div>
      <Button
        variant="primary"
        onClick={() => router.push('?hash=payment&id=add')}
        className="mt-24 min-w-full md:min-w-[150px] lg:mt-36 lg:min-w-[200px]"
      >
        {formatPaymentMessage({
          id: 'add.card',
          defaultMessage: 'Add new card',
        })}
      </Button>
      <div className="mt-32 w-full lg:w-[90%]">
        {payments.map((payment) => (
          <PaymentCard key={payment.id} payment={payment} />
        ))}
      </div>
    </div>
  );
};

export default PaymentMethods;
