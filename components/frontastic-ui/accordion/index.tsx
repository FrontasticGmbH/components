import React, { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/solid';

export interface AccordionProps {
  className?: string;
  sectionTitle: string;
}

const AccordionBtn: React.FC<AccordionProps> = ({ sectionTitle, children }) => {
  const [showContent, setShowContent] = useState(false);
  function toggleAccordion() {
    setShowContent((prevState) => !prevState);
  }
  return (
    <div className="flex flex-col  items-center rounded-t-lg ">
      <button
        onClick={toggleAccordion}
        className={`
        flex
        w-full
        items-center
        justify-between
        py-2 px-4
        text-base
        ${showContent ? 'text-accent-400' : 'text-primary-400'}
        rounded
        border-b-2
        bg-white
        transition
        duration-300
        ease-in-out`}
      >
        {sectionTitle}
        {
          <ChevronDownIcon
            className={`h-10 w-10 flex-shrink-0
             transition
             duration-300
             ease-in-out
             ${showContent ? 'text-accent-400' : 'text-primary-400'}
             ${showContent ? 'rotate-180' : 'rotate-0'}
             `}
          />
        }
      </button>
      <div
        className={`
          border-b-2
          ${showContent ? 'scale-y-100' : 'scale-y-0'}
          w-full
          ${showContent ? 'visible' : 'hidden'}
          flex items-center overflow-hidden px-5
          py-5
          transition
          delay-150
          duration-300
          ease-in-out`}
      >
        <div
          className={`

          transition
          duration-300
          ease-in-out`}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default AccordionBtn;
