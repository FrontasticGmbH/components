import React from 'react';
import { Story, Meta } from '@storybook/react';
import { account, cart } from 'helpers/mocks/mockData';
import CheckoutForm, { Props as CheckoutFormProps } from './index';

export default {
  title: 'Frontastic/CheckoutForm',
  component: CheckoutForm,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<CheckoutFormProps> = (args) => (
  <div className="w-80 px-20">
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
