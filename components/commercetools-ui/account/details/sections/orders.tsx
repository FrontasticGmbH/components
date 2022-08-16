import React, { FC, useEffect, useState } from 'react';
import NextLink from 'next/link';
import { Order } from '@Types/cart/Order';
import Accordion from 'components/commercetools-ui/accordion';
import Price from 'components/commercetools-ui/price';
import Spinner from 'components/commercetools-ui/spinner';
import { useFormat } from 'helpers/hooks/useFormat';
import useMediaQuery from 'helpers/hooks/useMediaQuery';
import { tablet } from 'helpers/utils/screensizes';
import { useCart } from 'frontastic';
import Image from 'frontastic/lib/image';

export interface Props {
  orders?: Order[];
}

const OrdersHistory: FC<Props> = ({ orders }) => {
  const [accountOrdersState, setAccountOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [isTabletSize] = useMediaQuery(tablet);
  //account data
  const { orderHistory } = useCart();

  useEffect(() => {
    if (orderHistory) {
      orderHistory().then((data) => {
        setAccountOrders(data);
        setLoading(false);
      });
    } else {
      setAccountOrders(orders);
      setLoading(false);
    }
  }, [orders, orderHistory]);
  //18in messages
  const { formatMessage: formatAccountMessage } = useFormat({ name: 'account' });
  const { formatMessage: formatProductMessage } = useFormat({ name: 'product' });
  const { formatMessage: formatOrderMessage } = useFormat({ name: 'cart' });

  return (
    <div>
      <div className="mt-10">
        <div className="space-y-1">
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            {formatAccountMessage({ id: 'my.orders.history', defaultMessage: 'My order history' })}
          </h3>
          <p className="max-w-2xl text-sm text-gray-500">
            {formatAccountMessage({
              id: 'orders.desc',
              defaultMessage: 'Check the status of recent orders, manage returns, and download invoices.',
            })}
          </p>
        </div>
        {loading ? (
          <div className="flex items-stretch justify-center py-10 px-12">
            <Spinner />
          </div>
        ) : accountOrdersState && accountOrdersState.length ? (
          <section aria-labelledby="recent-heading" className="mt-16">
            <h2 id="recent-heading" className="sr-only">
              Recent orders
            </h2>
            <ul className="space-y-4 sm:space-y-16">
              {accountOrdersState?.map((order) => (
                <li className="border-t border-gray-200 sm:border" key={order.orderId}>
                  <dl className="flex flex-col gap-4 px-4 pt-4 sm:grid sm:grid-cols-4  sm:border-b sm:bg-gray-50 sm:py-6 lg:space-x-8">
                    <div className="inline">
                      <dt className="mr-2 inline text-sm font-medium text-gray-900">
                        {formatAccountMessage({
                          id: 'orders.id',
                          defaultMessage: 'Order ID',
                        })}
                        :
                      </dt>
                      <dd className="inline text-sm text-gray-700 sm:mt-1">{order.orderId}</dd>
                    </div>
                    <div className="text-sm sm:pt-0">
                      <dt className="mr-2 inline font-medium text-gray-900 sm:block">
                        <span>
                          {formatAccountMessage({
                            id: 'orders.total.amount',
                            defaultMessage: 'Total',
                          })}
                        </span>
                        <span className="sm:hidden">:</span>
                      </dt>

                      <dd className="inline sm:mt-1 sm:block ">
                        <Price price={order.sum} className="inline text-gray-700" />
                      </dd>
                    </div>
                    <div className="text-sm sm:pt-0">
                      <dt className="fmr-2 mr-2 inline font-medium text-gray-900 sm:block">
                        <span>
                          {formatAccountMessage({
                            id: 'orders.status',
                            defaultMessage: 'Status',
                          })}
                        </span>
                        <span className="sm:hidden">:</span>
                      </dt>
                      <dd className="inline text-gray-700 sm:mt-1 sm:block ">{order.orderState}</dd>
                    </div>
                    <button
                      type="button"
                      className="h-[40px] w-[110px] content-center self-start rounded-sm bg-accent-400 text-xs text-white transition-colors duration-150 ease-out focus:outline-none disabled:bg-gray-300 sm:self-center md:w-[150px] md:text-sm"
                      onClick={() => {
                        alert('This feature is not available yet');
                      }}
                    >
                      {formatAccountMessage({ id: 'view.invoice', defaultMessage: 'View invoice' })}
                    </button>
                  </dl>

                  <div className="mt-2 w-full text-gray-500">
                    <caption className="sr-only">
                      {formatProductMessage({
                        id: 'products',
                        defaultMessage: 'Products',
                      })}
                    </caption>
                    <Accordion
                      closedSectionTitle=""
                      openSectionTitle={formatOrderMessage({ id: 'order.summary', defaultMessage: 'Order summary' })}
                      iconColor={isTabletSize ? 'text-gray-500' : 'text-accent-400'}
                    >
                      <div className="flex flex-row gap-4 divide-y divide-gray-200 text-sm">
                        {order.lineItems.map((product) => (
                          <div key={product.lineItemId} className="shrink-1 w-24 text-center sm:w-40">
                            <NextLink href={product._url || ''}>
                              <a className="text-accent-400">
                                <span className="sr-only"> {product.name}</span>
                                <div className="sm:h-50 h-30 relative w-24 sm:w-40">
                                  <Image
                                    src={product.variant.images[0]}
                                    alt={product.name}
                                    className="h-full w-full rounded object-cover"
                                  />
                                </div>
                                <div className="mt-2 hidden font-medium text-neutral-700 sm:block">{product.name}</div>
                                <Price price={product.price} className="mt-2 hidden text-gray-500 sm:block" />
                                <div className="mt-2 hidden text-xs text-gray-500 sm:block">
                                  {formatProductMessage({
                                    id: 'size',
                                    defaultMessage: 'Size',
                                  })}
                                  : {product.variant.attributes.size}
                                </div>
                              </a>
                            </NextLink>
                          </div>
                        ))}
                      </div>
                    </Accordion>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        ) : (
          <p className="mt-10 max-w-2xl text-sm text-gray-500">
            {formatAccountMessage({
              id: 'orders.no.orders',
              defaultMessage: 'You have not placed any orders yet! ',
            })}
          </p>
        )}
      </div>
    </div>
  );
};

export default OrdersHistory;
