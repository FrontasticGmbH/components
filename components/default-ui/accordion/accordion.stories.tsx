import React from 'react';
import { Story, Meta } from '@storybook/react';
import { accordionMockItems } from 'helpers/mocks/mockData';
import AccordionBtn from './index';

export default {
  title: 'Frontastic/AccordionButton',
  component: AccordionBtn,
  argTypes: {},
} as Meta;

const Template: Story = (args) => (
  <div className="rounded border-2">
    {accordionMockItems.map((item, index) => (
      <AccordionBtn
        key={index}
        sectionTitle={item.title}
        className={index < accordionMockItems.length - 1 ? 'border-b-2' : ''}
        {...args}
      >
        {item.content}
      </AccordionBtn>
    ))}
  </div>
);

export const Primary = Template.bind({});

Primary.args = {};
