import { Amount } from '@Types/Amount';

export interface UseCheckout {
  createSession: (amount: Amount, returnUrl: any) => Promise<any>;
}
