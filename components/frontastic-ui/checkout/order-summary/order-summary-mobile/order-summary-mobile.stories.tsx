import React from 'react';
import { Story, Meta } from '@storybook/react';
import { shippingMethods } from 'frontastic/actions/cart/shipping-methods';
import { cart } from '../../../../mockData';
import MobileOrderSummary, { Props as MobileOrderSummaryProps } from './index';

export default {
  title: 'Frontastic/OrderSummaryMobile',
  component: MobileOrderSummary,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<MobileOrderSummaryProps> = (args) => (
  <div>
    <h2 className="py-10 text-2xl">Decrease Screen Size for visibility </h2>
    <MobileOrderSummary
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
