import React from 'react';
import { Story, Meta } from '@storybook/react';
import Login, { LoginProps } from './index';
import { frontasticImage } from '../../../../components/mockData';

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
