import React from 'react';
import { Story, Meta } from '@storybook/react';
import CheckoutSuccess from './index';

export default {
  title: 'Frontastic/CheckoutSuccess',
  component: CheckoutSuccess,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story = (args) => <CheckoutSuccess {...args} />;

export const Primary = Template.bind({});
