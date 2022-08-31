export interface UseAdyen {
  createSession: (value: number, currency: string, returnUrl: any) => Promise<any>;
}
