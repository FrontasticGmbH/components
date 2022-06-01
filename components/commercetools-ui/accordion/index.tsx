import React, { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/solid';

export interface AccordionProps {
  index?: number;

  accordionListLength?: number;
  className?: string;
  sectionTitle: string;
}

const AccordionBtn: React.FC<AccordionProps> = ({ index, accordionListLength, sectionTitle, children }) => {
  const [showContent, setShowContent] = useState(false);
  function toggleAccordion() {
    setShowContent((prevState) => !prevState);
  }
  return (
    <div className="flex flex-col items-center rounded-t-lg">
      <button
        onClick={toggleAccordion}
        className={`
        flex
        w-full
        items-center justify-between
        py-2 px-4
        text-base font-medium
        ${showContent ? 'text-accent-400' : 'text-primary-400 dark:text-light-100'}
        ${index === accordionListLength - 1 && !showContent ? 'border-0' : 'border-b-2'}
        transition duration-300 ease-in-out`}
      >
        {sectionTitle} {' #'} {index + 1}
        {
          <ChevronDownIcon
            className={`
             h-10 w-10
             flex-shrink-0
             transition
             duration-300
             ease-in-out
             dark:text-light-100
             ${showContent ? 'rotate-180 text-accent-400' : 'rotate-0 text-primary-400'}
             `}
          />
        }
      </button>
      <div
        className={`
          ${index === accordionListLength - 1 ? 'border-0' : 'border-b-2'}
          ${showContent ? 'scale-y-100' : 'scale-y-0'}
          flex
          w-full items-center overflow-hidden px-5
          transition
          duration-300
          ease-in-out
          dark:text-light-100
          `}
      >
        <div
          className={`
          ${showContent ? 'h-fit py-5' : 'h-0'}
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
