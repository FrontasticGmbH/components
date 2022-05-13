import React from 'react';
import { Story, Meta } from '@storybook/react';
import { addresses, orders } from 'components/mockData';
import UpdateAddress, { UpdateAddressProps } from './index';

export default {
  title: 'Frontastic/UpdateAddress',
  component: UpdateAddress,
  argTypes: {},
} as Meta;

const Template: Story<UpdateAddressProps> = (args) => (
  <UpdateAddress
    addressId="adrs-1"
    defaultValues={addresses[0]}
    onClose={() => console.log('Closed')}
    open={true}
    {...args}
  />
);

export const Primary = Template.bind({});

Primary.args = {};
