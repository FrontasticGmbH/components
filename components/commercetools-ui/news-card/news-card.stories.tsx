import { ComponentMeta, ComponentStory } from '@storybook/react';
import NewsCard from '.';

export default {
  title: 'Frontastic/News Card',
  component: NewsCard,
} as ComponentMeta<typeof NewsCard>;

const Template: ComponentStory<typeof NewsCard> = (args) => <NewsCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  headline: 'Noteworthy technology acquisitions 2021',
  subline: 'Big case study',
  description:
    'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
  buttonText: 'Read more',
  link: 'https://technologymagazine.com/digital-transformation/top-technology-acquisitions-2021',
};
