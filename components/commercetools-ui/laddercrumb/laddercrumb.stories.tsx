import React from 'react';
import { Story, Meta } from '@storybook/react';
import Laddercrumb from './index';

export default {
  title: 'Frontastic/Laddercrumb',
  component: Laddercrumb,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const links = ['link1', 'link2', 'link3', 'link4', 'link5', 'link6'];

const Template: Story = (args) => <Laddercrumb {...args}>{links}</Laddercrumb>;

export const Primary = Template.bind({});

Primary.args = {};
