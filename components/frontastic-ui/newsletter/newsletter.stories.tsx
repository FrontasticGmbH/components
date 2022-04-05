import React from 'react';
import { Story, Meta } from '@storybook/react';
import NewsLetter, { NewsletterProps } from './index';
import { headerLogo, headerButtonLink, headerAccountLink, headerLinks } from '../../mockData';

export default {
  title: 'Frontastic/Newsletter',
  component: NewsLetter,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<NewsletterProps> = (args) => (
  <NewsLetter
    headline="Headline"
    description="Description"
    disclaimer="Disclaimer"
    inputPlaceholder="Input Placeholder"
    successMessage="Success Message"
    successTitle="Success Title"
    ctaLabel="ACTION"
    {...args}
  />
);

export const Primary = Template.bind({});
