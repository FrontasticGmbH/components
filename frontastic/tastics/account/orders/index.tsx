import React, { useEffect, useState } from 'react';
import OrdersHistory from 'components/frontastic-ui/account/details/sections/orders';
import { useCart } from 'frontastic/provider';

const AccountOrdersHistoryTastic: React.FC = () => {
  return <OrdersHistory />;
};

export default AccountOrdersHistoryTastic;
