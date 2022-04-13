import React from 'react';
import { Story, Meta } from '@storybook/react';
import DesktopOrderSummary, { Props as DesktopOrderSummaryProps } from './index';
import { cart } from '../../../../mockData';
import { shippingMethods } from 'frontastic/actions/cart/shipping-methods';

export default {
  title: 'Frontastic/OrderSummaryDesktop',
  component: DesktopOrderSummary,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<DesktopOrderSummaryProps> = (args) => (
  <div>
    <h2 className="py-10 text-2xl">Increase Screen Size for visibility </h2>
    <DesktopOrderSummary
      cart={cart}
      editCartItem={() => console.log('Edited')}
      removeCartItem={() => console.log('Removed')}
      selectedShipping={shippingMethods[0]}
      goToProductPage={() => console.log('Gone')}
      {...args}
    />
  </div>
);

export const Primary = Template.bind({});

Primary.args = {};
