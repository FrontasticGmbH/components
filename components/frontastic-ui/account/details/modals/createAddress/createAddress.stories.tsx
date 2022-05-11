import React from 'react';
import { Story, Meta } from '@storybook/react';
import { addresses, orders } from 'components/mockData';
import CreateAddress, { CreateAddressProps } from './index';

export default {
  title: 'Frontastic/CreateAddress',
  component: CreateAddress,
  argTypes: {},
} as Meta;

const Template: Story<CreateAddressProps> = (args) => (
  <CreateAddress addressId="adrs-1" onClose={() => console.log('Closed')} open={true} {...args} />
);

export const Primary = Template.bind({});

Primary.args = {};
