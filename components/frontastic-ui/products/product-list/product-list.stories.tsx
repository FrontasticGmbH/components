import React from 'react';
import { Story, Meta } from '@storybook/react';
import ProductList, { ProductListProps } from './index';
import { products } from '../../../mockData';

export default {
  title: 'Frontastic/ProductList',
  component: ProductList,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<ProductListProps> = (args) => <ProductList products={products} {...args} />;

export const Primary = Template.bind({});
