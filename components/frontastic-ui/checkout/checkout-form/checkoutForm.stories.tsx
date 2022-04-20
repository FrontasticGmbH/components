import React from 'react';
import { Story, Meta } from '@storybook/react';
import CheckoutForm, { Props as CheckoutFormProps } from './index';
import { account, cart } from '../../../mockData';

export default {
  title: 'Frontastic/CheckoutForm',
  component: CheckoutForm,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<CheckoutFormProps> = (args) => (
  <div className="w-82 px-20">
    <CheckoutForm
      data={cart}
      account={account}
      submitForm={() => console.log('Submitted')}
      submitText="Submitted"
      updateFormInput={() => console.log('Updated')}
      isFormValid={true}
      {...args}
    />
  </div>
);

export const Primary = Template.bind({});

Primary.args = {};
