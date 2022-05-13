import React from 'react';
import { Story, Meta } from '@storybook/react';
import { frontasticImage } from 'components/mockData';
import Login, { LoginProps } from './index';

export default {
  title: 'Frontastic/Login',
  component: Login,
  argTypes: {},
} as Meta;

const Template: Story<LoginProps> = (args) => <Login {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  logo: frontasticImage,
};
