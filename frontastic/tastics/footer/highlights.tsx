import React from 'react';
import HighlightBar from 'components/frontastic-ui/bar/highlight';
import { GiCycle as CycleIcon } from 'react-icons/gi';
import { IoRocketOutline as RocketIcon } from 'react-icons/io5';
import { HiOutlineLockClosed as LockIcon } from 'react-icons/hi';

const Highlights = () => {
  const highlights = [
    {
      Icon: RocketIcon,
      text: 'Free & fast delivery',
    },
    {
      Icon: CycleIcon,
      text: 'Free returns',
    },
    {
      Icon: LockIcon,
      text: 'Safe payment & data protection',
    },
  ];

  return (
    <HighlightBar>
      {highlights.map(({ Icon, text }, index: number) => (
        <div key={index} className="px-8 lg:px-0 flex gap-5 py-4 flex-1 items-center justify-left lg:justify-center">
          <Icon size={30} color="pink" />
          <span>{text}</span>
        </div>
      ))}
    </HighlightBar>
  );
};

export default Highlights;
