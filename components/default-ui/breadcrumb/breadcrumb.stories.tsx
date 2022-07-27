import React from 'react';
import { Story, Meta } from '@storybook/react';
import Breadcrumb, { BreadcrumbProps } from './index';

export default {
  title: 'Frontastic/Breadcrumb',
  component: Breadcrumb,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const links = ['link 1', 'link 2', 'link 3', 'link 4', 'link 5'];

const Template: Story<BreadcrumbProps> = (args) => (
  <Breadcrumb Separator={'/'} {...args}>
    {links}
  </Breadcrumb>
);

export const Primary = Template.bind({});

Primary.args = {};
