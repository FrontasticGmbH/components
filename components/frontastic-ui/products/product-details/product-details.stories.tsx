import React from 'react';
import { Story, Meta } from '@storybook/react';
import ProductDetails, { ProductDetailsProps } from './index';
import { productItem } from '../../../mockData';

export default {
  title: 'Frontastic/ProductDetails',
  component: ProductDetails,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<ProductDetailsProps> = (args) => (
  <ProductDetails
    product={productItem}
    onAddToCart={() => console.log('Added to Cart')}
    onChangeVariantIdx={() => console.log('EVENT CLICKED')}
    variant={productItem.variants[0]}
    {...args}
  />
);

export const Primary = Template.bind({});
