import React from 'react';
import { Story, Meta } from '@storybook/react';
import { wishlist } from 'components/mockData';
import WishList, { Props } from './index';

export default {
  title: 'Frontastic/Wishlist',
  component: WishList,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<Props> = (args) => (
  <WishList items={wishlist} removeLineItems={() => console.log('CLICK')} {...args} />
);

export const Primary = Template.bind({});
