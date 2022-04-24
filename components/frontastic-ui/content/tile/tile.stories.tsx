import React from 'react';
import { Story, Meta } from '@storybook/react';
import Tile, { TileProps } from './index';
import { headerButtonLink } from 'components/mockData';
import { Reference } from 'helpers/reference';

export default {
  title: 'Frontastic/Tile',
  component: Tile,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<TileProps> = (args) => (
  <Tile
    image={'https://res.cloudinary.com/dlwdq84ig/image/upload/v1648028023/uprtunlmx5h6r6eynyfk.png'}
    ctaLabel="Call To Action"
    ctaReference={headerButtonLink as Reference}
    header="Header Text Title"
    subtitle="Here are some lovely Subtitle texts just for testing if things go great, hopefully so"
    text="Here are some lovely texts just for testing if things go great, hopefully so"
    {...args}
  />
);

export const Primary = Template.bind({});
