import React from 'react';
import { Story, Meta } from '@storybook/react';
import { frontasticImage } from 'components/mockData';
import ResetPassword, { ResetPasswordProps } from './index';

export default {
  title: 'Frontastic/ResetPassword',
  component: ResetPassword,
  argTypes: {},
} as Meta;

const Template: Story<ResetPasswordProps> = (args) => <ResetPassword {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  logo: frontasticImage,
};
