import React from 'react';
import { Story, Meta } from '@storybook/react';
import ProductDetails, { Props as ProductDetailsProps } from './index';
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
    {...args}
  />
);

export const Primary = Template.bind({});
