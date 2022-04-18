import { Meta, Story } from '@storybook/react';
import Showcase, { Props as ShowcaseProps } from '.';

export default {
  title: 'Frontastic/Show Case',
  component: Showcase,
} as Meta;

const Template: Story<ShowcaseProps> = (args) => <Showcase {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  content:
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt ratione veritatis, mollitia cumque sit voluptates neque expedita nulla ad similique quis odit dolorum ut facere corporis? Et dolorem aliquid magni?',
} as ShowcaseProps;
