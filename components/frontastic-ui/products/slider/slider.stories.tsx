import React from 'react';
import { Story, Meta } from '@storybook/react';
import { products, headerButtonLink } from '../../../../components/mockData';
import ProductSlider, { Props as SliderProps } from './index';

export default {
  title: 'Frontastic/ProductSlider',
  component: ProductSlider,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<SliderProps> = (args) => (
  <ProductSlider
    products={products}
    title="This is a Product Slider"
    ctaLabel="A Call to Action"
    ctaLink={headerButtonLink}
    {...args}
  />
);

export const Primary = Template.bind({});

Primary.args = {};
