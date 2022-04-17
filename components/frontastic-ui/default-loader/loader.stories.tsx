import React from 'react';
import { Story, Meta } from '@storybook/react';
import DefaultLoader from './index';
import '../../../styles/components/default-loader.css';

export default {
  title: 'Frontastic/DefaultLoader',
  component: DefaultLoader,
  argTypes: {},
} as Meta;

const Template: Story = (args) => <DefaultLoader {...args} />;

export const Primary = Template.bind({});
