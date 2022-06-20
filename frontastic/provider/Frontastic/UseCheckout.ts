import { Amount } from '@Types/adyen/Amount';

export interface UseCheckout {
  createSession: (amount: Amount, returnUrl: any) => Promise<any>;
}
