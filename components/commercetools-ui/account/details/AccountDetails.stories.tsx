import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { FrontasticContext } from 'frontastic';
import { FrontasticState } from 'frontastic/provider/frontastic/FrontasticState';
import { UseAccount } from 'frontastic/provider/frontastic/UseAccount';
import AccountDetails from './index';

export default {
  title: 'Frontastic/Account Details',
  component: AccountDetails,
  argTypes: {},
  decorators: [
    (Story) => (
      <FrontasticContext.Provider
        value={
          {
            useAccount: {
              loggedIn: true,
              account: {
                accountId: '1',
                firstName: 'Eren',
                lastName: 'Jaegar',
                email: 'eren@jaegar.com',
                confirmed: true,
                addresses: [
                  {
                    addressId: '1',
                    firstName: 'Eren',
                    lastName: 'Jaegar',
                    streetName: 'Shiganshina',
                    postalCode: '11111',
                    city: 'Marley',
                    country: 'Shiganshina District',
                    phone: '+123456789',
                    isDefaultBillingAddress: true,
                    isDefaultShippingAddress: true,
                  },
                  {
                    addressId: '1',
                    firstName: 'Eren',
                    lastName: 'Jaegar',
                    streetName: 'Karanes',
                    postalCode: '11111',
                    city: 'Wall Rose',
                    country: 'Karanes District',
                    phone: '+123456789',
                  },
                ],
              },
            } as UseAccount,
          } as FrontasticState
        }
      >
        <Story />
      </FrontasticContext.Provider>
    ),
  ],
} as ComponentMeta<typeof AccountDetails>;

const Template: ComponentStory<typeof AccountDetails> = (args) => <AccountDetails {...args} />;

export const Primary = Template.bind({});

Primary.args = {};
