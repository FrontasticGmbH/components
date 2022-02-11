import { StringHelpers } from './StringHelpers';
import { Money } from '../../../types/product/Money';

export class CurrencyHelpers {
  private static formatNumberForCurrency = function (costInCents: number) {
    return CurrencyHelpers.formatPriceCurreny({
      centAmount: costInCents,
      currencyCode: 'EUR',
      fractionDigits: 2,
    });
  };

  private static formatStringForCurrency = function (costInCents: string) {
    if (!StringHelpers.isNumeric(costInCents)) {
      console.error(`Value (${costInCents}) passed for currency formatting cannot be parsed to a number`);
      return '';
    }
    return CurrencyHelpers.formatNumberForCurrency(parseInt(costInCents, 10));
  };

  private static formatMoneyCurreny = function (price: Money) {
    return Intl.NumberFormat('en-US', { style: 'currency', currency: price.currencyCode ?? 'USD' }).format(
      (price.centAmount ?? 0) / Math.pow(10, price.fractionDigits ?? 2),
    );
  };

  /**
   * formatForCurrency formats a string of number into a cost representation. If
   * passing a string it must be numeric only.
   */
  static formatForCurrency = (costInCents: string | number | Money) =>
    typeof costInCents === 'string'
      ? CurrencyHelpers.formatStringForCurrency(costInCents)
      : typeof costInCents === 'number'
      ? CurrencyHelpers.formatNumberForCurrency(costInCents)
      : CurrencyHelpers.formatMoneyCurreny(costInCents);
}
