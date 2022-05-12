import React from 'react';
import { Story, Meta } from '@storybook/react';
import { frontasticImage } from 'components/mockData';
import Register, { RegisterProps } from './index';

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
