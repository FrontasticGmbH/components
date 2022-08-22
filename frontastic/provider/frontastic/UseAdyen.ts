export interface UseAdyen {
  createSession: (value: number, currency: string, returnUrl: any) => Promise<any>;
  adyenCheckout: (sessionId: string | string[], redirectResult: string | string[]) => Promise<void>;
}
