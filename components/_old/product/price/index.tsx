import React from 'react';

type Props = {
  value: number;
  className?: string;
  currency?: string;
};

export const Price: React.FC<Props> = ({ value, className = '', currency = 'EUR' }: Props) => {
  /*const { locale, currency } = useSelector((state) => {
      return {
          locale: state.app.context.locale.replace('_', '-').split('@')[0],
          currency: variantCurrency || state.app.context.currency,
      }
  })*/

  return (
    <span className={`${className}`}>
      {(value / 100).toLocaleString('en-EN', { style: 'currency', currency: currency })}
    </span>
  );
};
