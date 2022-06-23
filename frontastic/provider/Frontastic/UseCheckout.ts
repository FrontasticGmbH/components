import { Amount } from '../../../../extensions/adyen/Amount';

export interface UseCheckout {
  createSession: (amount: Amount, returnUrl: any) => Promise<any>;
}
