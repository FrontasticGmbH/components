import { Amount } from '@Types/adyen/Amount';

export interface UseAdyen {
  createSession: (amount: Amount, returnUrl: any) => Promise<any>;
  adyenCheckout: (sessionId: string | string[], redirectResult: string | string[]) => Promise<void>;
}
