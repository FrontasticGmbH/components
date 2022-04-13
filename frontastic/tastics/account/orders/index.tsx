import React, { useEffect, useState } from 'react';
import OrdersHistory from 'components/frontastic-ui/account/details/orders';
import { useCart } from 'frontastic/provider';

const AccountOrdersHistoryTastic: React.FC = () => {
  const { orderHistory } = useCart();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    orderHistory().then((data) => setOrders(data));
  }, []);

  return <OrdersHistory orders={orders} />;
};

export default AccountOrdersHistoryTastic;
