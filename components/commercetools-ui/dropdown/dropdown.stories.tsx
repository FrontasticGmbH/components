import React from 'react';
import { Story, Meta } from '@storybook/react';
import Dropdown, { DropdownProps } from '.';

export default {
  title: 'Frontastic/Dropdown',
  component: Dropdown,
} as Meta;

const items: DropdownProps['items'] = Array(5)
  .fill('option')
  .map((val) => {
    return {
      label: val,
      value: val,
    };
  });

const Template: Story<DropdownProps> = (args) => <Dropdown items={items} />;

export const Primary = Template.bind({});
