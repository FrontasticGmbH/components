import React from 'react';
import classnames from 'classnames';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

import { useCart } from 'frontastic';
import { EmptyState, Summary } from 'components';

import Product from './product';
import PaymentMethods from './payment-methods';

import { LineItem } from '../../../types/cart/LineItem';

export const Cart: React.FC = () => {
  const router = useRouter();
  const { data } = useCart();
  const { t } = useTranslation('cart');

  const productDiscountedPrice = (item: LineItem) => {
    return (
      item.discountedPrice +
      item.count *
      item.discounts.reduce((previous, discount) => {
        return previous + discount.discountedAmount;
      }, 0)
    );
  };

  if (data && data.cart.lineItems && data.cart.lineItems.length > 0) {
    const { lineItems } = data.cart;

    return (
      <div style={{ maxWidth: 980 }} className="flex mx-auto">
        <div className="w-2/3">
          <div className="md:shadow-md md:rounded bg-white">
            <div className="p-4 border-b-2 border-neutral-100">
              <h1 className="hidden md:block md:px-2 md:pt-1 md:pb-5 text-2xl text-neutral-900 font-bold leading-none">
                {t('myCart')}
              </h1>

              <section>
                {lineItems.map((item: LineItem, i: number) => {
                  return (
                    <div key={i} className={classnames({ 'mt-8': i > 0 })}>
                      <Product
                        itemId={item.lineItemId}
                        name={item.name}
                        designer={item.variant.attributes.designer?.label}
                        image={item.variant.images[0]}
                        count={item.count.toString()}
                        price={item.price}
                        discountedPrice={productDiscountedPrice(item)}
                        color={item.variant.attributes.color?.label || item.variant.attributes.color}
                        size={item.variant.attributes.size?.label || item.variant.attributes.size}
                      />
                    </div>
                  );
                })}
              </section>
            </div>

            <div className="px-4 py-5 border-b-2 border-neutral-100 md:border-0">
              <PaymentMethods />
            </div>
          </div>
        </div>

        <div className="w-1/3 ml-4">
          <div className="p-4 border-b-2 border-neutral-100 border-0 shadow-md md:rounded bg-white">
            <Summary
              buttonLabel={t('checkout')}
              onClick={() => {
                router.push('/checkout/checkout');
              }}
            />
          </div>
        </div>
      </div>
    );
  } else {
    return <EmptyState icon={'😿😿😿'} title={'Nothing here yet'} />;
  }
};
