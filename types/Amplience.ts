export type AmplienceScheme<T> = T&{
  _meta: {
    deliveryId: string;
    name: string;
    schema: string;
  };
}
