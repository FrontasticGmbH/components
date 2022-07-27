import React from 'react';
import { Story, Meta } from '@storybook/react';
import Typography from './index';

export default {
  title: 'Frontastic/Typography',
  component: Typography,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story = (args) => <Typography {...args}>Typography Story </Typography>;

export const Primary = Template.bind({});

Primary.args = {};
