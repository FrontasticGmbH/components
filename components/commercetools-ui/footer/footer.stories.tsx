import React from 'react';
import { Story, Meta } from '@storybook/react';
import { footerColumns, footerCopyrightLinks } from 'components/mockData';
import Highlights from './highlights';
import Footer, { Props as FooterProps } from './index';

export default {
  title: 'Frontastic/Footer',
  component: Footer,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<FooterProps> = (args) => (
  <Footer columns={footerColumns} copyright="Catwalk" copyrightLinks={footerCopyrightLinks} {...args} />
);
const TemplateWithHighlights: Story<FooterProps> = (args) => (
  <div>
    <Highlights />
    <Footer columns={footerColumns} copyright="Catwalk" {...args} />
  </div>
);

export const WithoutHighlights = Template.bind({});
export const WithHighlights = TemplateWithHighlights.bind({});
