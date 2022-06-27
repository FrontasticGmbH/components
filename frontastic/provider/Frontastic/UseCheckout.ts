import { Amount } from '../../../../extensions/payment-adyen/Amount';

export interface UseCheckout {
  createSession: (amount: Amount, returnUrl: any) => Promise<any>;
}
