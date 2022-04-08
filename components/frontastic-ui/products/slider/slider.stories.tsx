import React from 'react';
import { Story, Meta } from '@storybook/react';
import ProductSlider, { Props as SliderProps } from './index';
import { products, headerButtonLink } from '../../../../components/mockData';

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
