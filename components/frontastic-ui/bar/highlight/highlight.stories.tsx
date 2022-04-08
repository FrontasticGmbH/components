import React from 'react';
import { Story, Meta } from '@storybook/react';
import HighlightBar from './index';

export default {
  title: 'Frontastic/HighlightBar',
  component: HighlightBar,
  argTypes: {},
} as Meta;

const Template: Story = (args) => <HighlightBar {...args}>{'This is Highlight Component'} </HighlightBar>;

export const Primary = Template.bind({});

Primary.args = {};
