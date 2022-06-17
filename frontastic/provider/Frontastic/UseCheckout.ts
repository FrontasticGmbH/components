import { Amount } from "../../../../extension-commercetools/adyen/types/Amount";

export interface UseCheckout {
  createSession: (amount: Amount, returnUrl: any) => Promise<any>
}
