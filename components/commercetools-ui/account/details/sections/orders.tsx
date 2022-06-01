import React from 'react';
import NextLink from 'next/link';
import { Order } from '@Types/cart/Order';
import Spinner from 'components/commercetools-ui/spinner';
import { useFormat } from 'helpers/hooks/useFormat';
import Image from 'frontastic/lib/image';

export interface OrdersHistoryProps {
  loading: boolean;
  accountOrders: Order[];
}

const OrdersHistory: React.FC<OrdersHistoryProps> = ({ loading, accountOrders }) => {
  //18in messages
  const { formatMessage: formatAccountMessage } = useFormat({ name: 'account' });
  const { formatMessage: formatProductMessage } = useFormat({ name: 'product' });

  return (
    <div>
      <div className="mt-10">
        <div className="space-y-1">
          <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-light-100">
            {formatAccountMessage({ id: 'orders.history', defaultMessage: 'My order history' })}
          </h3>
          <p className="max-w-2xl text-sm text-gray-500">
            {formatAccountMessage({
              id: 'orders.desc',
              defaultMessage: 'Check the status of recent orders, manage returns, and download invoices.',
            })}
          </p>
        </div>
        <div className="divide-y divide-gray-200"></div>
        {loading ? (
          <div className="flex items-stretch justify-center py-10 px-12">
            <Spinner />
          </div>
        ) : accountOrders && accountOrders.length ? (
          <section aria-labelledby="recent-heading" className="mt-16">
            <h2 id="recent-heading" className="sr-only">
              Recent orders
            </h2>
            <div className="space-y-20">
              {accountOrders?.map((order) => (
                <div key={order.orderId}>
                  <h3 className="sr-only">
                    Order placed on <time dateTime={order.email}>{order.email}</time>
                  </h3>
                  <div className="rounded-lg bg-gray-100 py-6 px-4 sm:flex sm:items-center sm:justify-between sm:space-x-6 sm:px-6 lg:space-x-8">
                    <dl className="flex-auto space-y-6 divide-y divide-gray-200 text-sm text-gray-600 sm:grid sm:grid-cols-3 sm:gap-x-6 sm:space-y-0 sm:divide-y-0 lg:w-1/2 lg:flex-none lg:gap-x-8">
                      <div className="flex justify-between pt-6 sm:block sm:pt-0">
                        <dt className="font-medium text-gray-900">
                          {formatAccountMessage({
                            id: 'orders.number',
                            defaultMessage: 'Order Number',
                          })}
                        </dt>
                        <dd className="sm:mt-1">{order.orderId}</dd>
                      </div>
                      <div className="flex justify-between pt-6 font-medium text-gray-900 sm:block sm:pt-0">
                        <dt>
                          {formatAccountMessage({
                            id: 'orders.total.amount',
                            defaultMessage: 'Total amount',
                          })}
                        </dt>
                        <dd className="sm:mt-1">
                          {(+order.sum / 100).toFixed(2)}
                          {order.lineItems[0].price.currencyCode}
                        </dd>
                      </div>
                    </dl>
                    <a
                      href={order.orderId}
                      className="mt-6 flex w-full items-center justify-center rounded-md border border-accent-400 bg-white py-2 px-4 text-sm font-medium text-accent-400 shadow-sm hover:bg-gray-50 focus:outline-none sm:mt-0 sm:w-auto"
                    >
                      {formatAccountMessage({
                        id: 'orders.view.invoice',
                        defaultMessage: 'View invoice',
                      })}
                      <span className="sr-only">for order {order.orderId}</span>
                    </a>
                  </div>

                  <table className="mt-4 w-full text-gray-500 sm:mt-6">
                    <caption className="sr-only">
                      {formatProductMessage({
                        id: 'products',
                        defaultMessage: 'Products',
                      })}
                    </caption>
                    <thead className="sr-only text-left text-sm text-gray-800 sm:not-sr-only">
                      <tr>
                        <th scope="col" className="py-3 pr-8 font-normal dark:text-light-100 sm:w-2/5 lg:w-1/3">
                          {formatProductMessage({
                            id: 'product',
                            defaultMessage: 'Product',
                          })}
                        </th>
                        <th
                          scope="col"
                          className="hidden w-1/5 py-3 pr-8 font-normal dark:text-light-100 sm:table-cell"
                        >
                          {formatProductMessage({
                            id: 'price',
                            defaultMessage: 'Price',
                          })}
                        </th>
                        <th scope="col" className="hidden py-3 pr-8 font-normal dark:text-light-100 sm:table-cell">
                          {formatProductMessage({
                            id: 'size',
                            defaultMessage: 'Size',
                          })}
                        </th>
                        <th scope="col" className="hidden py-3 pr-8 font-normal dark:text-light-100 sm:table-cell">
                          {formatAccountMessage({
                            id: 'orders.status',
                            defaultMessage: 'Order status',
                          })}
                        </th>
                        <th scope="col" className="w-0 py-3 text-right font-normal dark:text-light-100">
                          {formatProductMessage({
                            id: 'product.info',
                            defaultMessage: 'Product information',
                          })}
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 border-b border-gray-200 text-sm sm:border-t">
                      {order.lineItems.map((product) => (
                        <tr key={product.lineItemId}>
                          <td className="py-6 pr-8">
                            <div className="flex items-center">
                              <Image
                                src={product.variant.images[0]}
                                alt={product.name}
                                className="mr-6 h-16 w-16 rounded object-cover object-center"
                              />
                              <div>
                                <div className="font-medium text-gray-900 dark:text-light-100">{product.name}</div>
                                <div className="mt-1 dark:text-light-100 sm:hidden">
                                  {(product.price.centAmount / 100).toFixed(2)}
                                  {product.price.currencyCode}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="hidden py-6 pr-8 dark:text-light-100 sm:table-cell">
                            {(product.price.centAmount / 100).toFixed(2)}
                            {product.price.currencyCode}
                          </td>
                          <td className="hidden py-6 pr-8 dark:text-light-100 sm:table-cell">
                            {product.variant.attributes.size}
                          </td>
                          <td className="hidden py-6 pr-8 dark:text-light-100 sm:table-cell">{order.orderState}</td>
                          <td className="whitespace-nowrap py-6 text-right font-medium dark:text-light-100">
                            {
                              //TODO: get product href and link
                            }
                            <NextLink href={product._url || ''}>
                              <a className="text-accent-400">
                                {formatProductMessage({
                                  id: 'product.view',
                                  defaultMessage: 'View product',
                                })}
                                <span className="sr-only">, {product.name}</span>
                              </a>
                            </NextLink>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ))}
            </div>
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
