import { useCallback, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Option } from 'components/commercetools-ui/atoms/dropdown';
import { useFormat } from 'helpers/hooks/useFormat';
import useCardNumberFormatter from './useFormatCredit';
import usePaymentHelpers from './usePaymentHelpers';
import { payments } from '..';

const useAddPaymentMethod = () => {
  const router = useRouter();
  const { formatMessage: formatPaymentMessage } = useFormat({ name: 'payment' });
  const [cardNumber, setCardNumber] = useState('');
  const cardNumberFormatted = useCardNumberFormatter(cardNumber ?? '');
  const { expiryDateMonthOptions, expiryDateYearOptions, hasNumbersAndSpaces } = usePaymentHelpers();
  const [cardExpMonthDate, setCardExpMonthDate] = useState<Option>(expiryDateMonthOptions[0]);
  const [cardExpYearDate, setCardExpYearDate] = useState<Option>(expiryDateYearOptions[0]);
  const [dateError, setDateError] = useState('');

  const concatCardNumber = useMemo(() => {
    return cardNumber.replaceAll(' ', '');
  }, [cardNumber]);

  const isCardNumber = () => concatCardNumber.length >= 12 && concatCardNumber.length <= 19;

  const monthAndYearSelected = () => cardExpMonthDate.name !== 'MM' && cardExpYearDate.name !== 'YY';

  const handleCardNumberChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (hasNumbersAndSpaces(e.target.value)) {
        if (e.target.value.replaceAll(' ', '').length > 19) {
          e.preventDefault();
          setCardNumber(e.target.value.substring(0, e.target.value.length - 1));
        } else {
          setCardNumber(e.target.value);
        }
      }
    },
    [setCardNumber, hasNumbersAndSpaces],
  );

  const handleExpiryMonthDateChange = useCallback(
    (option: Option) => {
      setDateError('');
      setCardExpMonthDate(option);
    },
    [setDateError, setCardExpMonthDate],
  );

  const handleExpiryYearDateChange = useCallback(
    (option: Option) => {
      setDateError('');
      setCardExpYearDate(option);
    },
    [setDateError, setCardExpYearDate],
  );

  const handleAddClick = () => {
    if (!isCardNumber()) return;

    if (!monthAndYearSelected()) {
      setDateError(
        formatPaymentMessage({ id: 'card.expiry.error', defaultMessage: 'Please select the card expiration date' }),
      );
      return;
    }

    payments.push({
      id: Date.now().toString(),
      cardNumber: concatCardNumber ?? '',
      cardExpiryMonth: cardExpMonthDate ?? { name: '', value: '' },
      cardExpiryYear: cardExpYearDate ?? { name: '', value: '' },
    });
    router.push('/account#payment');
  };

  return {
    dateError,
    expiryDateMonthOptions,
    expiryDateYearOptions,
    cardNumber,
    cardNumberFormatted,
    cardExpMonthDate,
    cardExpYearDate,
    isCardNumber,
    handleCardNumberChange,
    handleExpiryMonthDateChange,
    handleExpiryYearDateChange,
    handleAddClick,
  };
};
export default useAddPaymentMethod;
