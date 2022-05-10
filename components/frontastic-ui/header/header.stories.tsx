import React from 'react';
import { Story, Meta } from '@storybook/react';
import { headerButtonLink, headerAccountLink, headerLinks } from '../../../components/mockData';
import Header, { HeaderProps } from './index';

export default {
  title: 'Frontastic/Header',
  component: Header,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<HeaderProps> = (args) => <Header {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  tagline: '',
  logo: 'https://res.cloudinary.com/dlwdq84ig/image/upload/v1646648997/m1qzalyiebn9boow3tth.webp',
  logoLink: headerButtonLink,
  links: headerLinks,
  accountLink: headerAccountLink,
  searchLink: headerButtonLink,
  cartLink: headerButtonLink,
  wishlistLink: headerButtonLink,
  cartItemCount: 2,
  wishlistItemCount: 3,
};
