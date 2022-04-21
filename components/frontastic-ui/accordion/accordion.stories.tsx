import React from 'react';
import { Story, Meta } from '@storybook/react';
import AccordionBtn from './index';

export default {
  title: 'Frontastic/AccordionButton',
  component: AccordionBtn,
  argTypes: {},
} as Meta;

const Template: Story = (args) => (
  <div>
    <AccordionBtn sectionTitle={'Title'} {...args}>
      We built Tailwind UI as an HTML-only, bring-your-own-JS product to make it as universal as possible, but many
      designs are inherently interactive and porting those interactive behaviors between JavaScript frameworks is
      unfortunately not always very easy.
    </AccordionBtn>

    <AccordionBtn sectionTitle={'Title'} {...args}>
      We built Tailwind UI as an HTML-only, bring-your-own-JS product to make it as universal as possible, but many
      designs are inherently interactive and porting those interactive behaviors between JavaScript frameworks is
      unfortunately not always very easy.
    </AccordionBtn>
  </div>
);

export const Primary = Template.bind({});

Primary.args = {};
