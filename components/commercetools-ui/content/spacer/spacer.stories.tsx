import React from 'react';
import { Story, Meta } from '@storybook/react';
import Spacer from './index';

export default {
  title: 'Frontastic/Spacer',
  component: Spacer,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story = (args) => <Spacer {...args} />;

export const Primary = Template.bind({});
