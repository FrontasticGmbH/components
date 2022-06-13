import React from 'react';
import { Story, Meta } from '@storybook/react';
import { headerButtonLink } from 'components/mockData';
import { Reference } from 'helpers/reference';
import Tile, { TileProps } from './index';

export default {
  title: 'Frontastic/Tile',
  component: Tile,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<TileProps> = (args) => (
  <Tile
    image="https://res.cloudinary.com/dlwdq84ig/image/upload/v1648028023/uprtunlmx5h6r6eynyfk.png"
    title="Here are some lovely texts just for testing if things go great, hopefully so"
    subtitle="Here are some lovely Subtitle texts just for testing if things go great, hopefully so"
    ctaLabel="Call To Action"
    ctaReference={headerButtonLink as Reference}
    {...args}
  />
);

export const Primary = Template.bind({});
