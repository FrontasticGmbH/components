import { Amount } from '../../../../extensions/payment-adyen/Session';

export interface UseCheckout {
  createSession: (amount: Amount, returnUrl: any) => Promise<any>;
}
