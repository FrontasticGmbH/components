import React from 'react';
import { Story, Meta } from '@storybook/react';
import CartPage, { Props } from './index';
import { cart, shippingMethods } from '../../mockData';

export default {
  title: 'Frontastic/Cart',
  component: CartPage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<Props> = (args) => (
  <CartPage
    cart={cart}
    editItemQuantity={() => console.log('Clicked')}
    removeItem={() => console.log('Clicked')}
    shippingMethods={shippingMethods}
    {...args}
  />
);

export const Primary = Template.bind({});

Primary.args = {};
