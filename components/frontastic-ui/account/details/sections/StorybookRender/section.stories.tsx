import React from 'react';
import { Story, Meta } from '@storybook/react';
import Sections from './index';

export default {
  title: 'Frontastic/AccountDetailsSections',
  component: Sections,
  argTypes: {},
} as Meta;

const Template: Story = (args) => <Sections {...args} />;

export const Primary = Template.bind({});

Primary.args = {};
