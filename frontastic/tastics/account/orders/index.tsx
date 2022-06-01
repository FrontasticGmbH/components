import React, { useEffect, useState } from 'react';
import { Order } from '@Types/cart/Order';
import OrdersHistory from 'components/commercetools-ui/account/details/sections/orders';
import { useCart } from 'frontastic/provider';

const AccountOrdersHistoryTastic: React.FC = () => {
  const [accountOrders, setAccountOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  //account data
  const { orderHistory } = useCart();
  useEffect(() => {
    orderHistory().then((data) => {
      setAccountOrders(data);
      setTimeout(() => setLoading(false), 500);
    });
  }, []);
  return <OrdersHistory loading={loading} accountOrders={accountOrders} />;
};

export default AccountOrdersHistoryTastic;
