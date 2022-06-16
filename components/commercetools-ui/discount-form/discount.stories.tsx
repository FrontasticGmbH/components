import React from 'react';
import { Story, Meta } from '@storybook/react';
import DiscountForm, { Props as DiscountProps } from './index';

export default {
  title: 'Frontastic/DiscountForm',
  component: DiscountForm,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<DiscountProps> = (args) => <DiscountForm {...args} />;

export const Primary = Template.bind({});
