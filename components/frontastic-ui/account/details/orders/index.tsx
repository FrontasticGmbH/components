import React from 'react';
import { Order } from '../../../../../../types/cart/Order';

export interface Props {
  orders: Order[];
}

const OrdersHistory: React.FC<Props> = ({ orders }) => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8 lg:pb-24">
        <div className="max-w-xl">
          <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">Order history</h1>
          <p className="mt-1 text-sm text-gray-500">
            Check the status of recent orders, manage returns, and download invoices.
          </p>
        </div>

        <section aria-labelledby="recent-heading" className="mt-16">
          <h2 id="recent-heading" className="sr-only">
            Recent orders
          </h2>

          <div className="space-y-20">
            {orders?.map((order) => (
              <div key={order.orderId}>
                <h3 className="sr-only">
                  Order placed on <time dateTime={order.email}>{order.email}</time>
                </h3>

                <div className="rounded-lg bg-[#F5F1EC] py-6 px-4 sm:flex sm:items-center sm:justify-between sm:space-x-6 sm:px-6 lg:space-x-8">
                  <dl className="flex-auto space-y-6 divide-y divide-gray-200 text-sm text-gray-600 sm:grid sm:grid-cols-3 sm:gap-x-6 sm:space-y-0 sm:divide-y-0 lg:w-1/2 lg:flex-none lg:gap-x-8">
                    <div className="flex justify-between pt-6 sm:block sm:pt-0">
                      <dt className="font-medium text-gray-900">Order number</dt>
                      <dd className="sm:mt-1">{order.orderId}</dd>
                    </div>
                    <div className="flex justify-between pt-6 font-medium text-gray-900 sm:block sm:pt-0">
                      <dt>Total amount</dt>
                      <dd className="sm:mt-1">
                        {(order.sum.centAmount / 100).toFixed(2)}
                        {order.lineItems[0].price.currencyCode}
                      </dd>
                    </div>
                  </dl>
                  <a
                    href={order.orderId}
                    className="mt-6 flex w-full items-center justify-center rounded-md border border-[#CE3E72] bg-white py-2 px-4 text-sm font-medium text-[#CE3E72] shadow-sm hover:bg-gray-50 focus:outline-none sm:mt-0 sm:w-auto"
                  >
                    View Invoice
                    <span className="sr-only">for order {order.orderId}</span>
                  </a>
                </div>

                <table className="mt-4 w-full text-gray-500 sm:mt-6">
                  <caption className="sr-only">Products</caption>
                  <thead className="sr-only text-left text-sm text-gray-800 sm:not-sr-only">
                    <tr>
                      <th scope="col" className="py-3 pr-8 font-normal sm:w-2/5 lg:w-1/3">
                        Product
                      </th>
                      <th scope="col" className="hidden w-1/5 py-3 pr-8 font-normal sm:table-cell">
                        Price
                      </th>
                      <th scope="col" className="hidden py-3 pr-8 font-normal sm:table-cell">
                        Size
                      </th>
                      <th scope="col" className="hidden py-3 pr-8 font-normal sm:table-cell">
                        Order status
                      </th>
                      <th scope="col" className="w-0 py-3 text-right font-normal">
                        Info
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 border-b border-gray-200 text-sm sm:border-t">
                    {order.lineItems.map((product) => (
                      <tr key={product.lineItemId}>
                        <td className="py-6 pr-8">
                          <div className="flex items-center">
                            <img
                              src={product.variant.images[0]}
                              alt={product.name}
                              className="mr-6 h-16 w-16 rounded object-cover object-center"
                            />
                            <div>
                              <div className="font-medium text-gray-900">{product.name}</div>
                              <div className="mt-1 sm:hidden">
                                {(product.price.centAmount / 100).toFixed(2)}
                                {product.price.currencyCode}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="hidden py-6 pr-8 sm:table-cell">
                          {(product.price.centAmount / 100).toFixed(2)}
                          {product.price.currencyCode}
                        </td>
                        <td className="hidden py-6 pr-8 sm:table-cell">{product.variant.attributes.size}</td>
                        <td className="hidden py-6 pr-8 sm:table-cell">{order.orderState}</td>
                        <td className="whitespace-nowrap py-6 text-right font-medium">
                          {
                            //TODO: get product href and link
                          }
                          <a href={product._url} className="text-[#CE3E72]">
                            View<span className="hidden lg:inline"> Product</span>
                            <span className="sr-only">, {product.name}</span>
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default OrdersHistory;
