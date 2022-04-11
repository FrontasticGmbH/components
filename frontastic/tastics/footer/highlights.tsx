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
        <div key={index} className="justify-left flex flex-1 items-center gap-5 px-8 py-4 lg:justify-center lg:px-0">
          <Icon size={30} color="#CE3E72" />
          <span>{text}</span>
        </div>
      ))}
    </HighlightBar>
  );
};

export default Highlights;
