import React from 'react';
import { Story, Meta } from '@storybook/react';
import ThankYou from './index';

export default {
  title: 'Frontastic/ThankYou',
  component: ThankYou,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story = (args) => <ThankYou {...args} />;

export const Primary = Template.bind({});
