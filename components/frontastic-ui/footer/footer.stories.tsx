import React from 'react';
import { Story, Meta } from '@storybook/react';
import Footer, { FooterProps } from './index';
import { footerColumns, footerCopyrightLinks } from '../../../components/mockData';

export default {
  title: 'Frontastic/Footer',
  component: Footer,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<FooterProps> = (args) => <Footer columns={footerColumns} copyright={'Catwalk'} {...args} />;

export const Primary = Template.bind({});
