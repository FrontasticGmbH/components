import React from 'react';
import { Story, Meta } from '@storybook/react';
import OrdersHistory, { Props as OrdersHistoryProps } from './index';
import { orders } from '../../../../mockData';

export default {
  title: 'Frontastic/OrdersHistory',
  component: OrdersHistory,
  argTypes: {},
} as Meta;

const Template: Story<OrdersHistoryProps> = (args) => <OrdersHistory orders={orders} {...args} />;

export const Primary = Template.bind({});

Primary.args = {};
