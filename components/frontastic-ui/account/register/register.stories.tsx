import React from 'react';
import { Story, Meta } from '@storybook/react';
import Register, { RegisterProps } from './index';
import { frontasticImage } from 'components/mockData';

export default {
  title: 'Frontastic/Register',
  component: Register,
  argTypes: {},
} as Meta;

const Template: Story<RegisterProps> = (args) => <Register {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  logo: frontasticImage,
};
