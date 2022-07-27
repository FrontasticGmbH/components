import React from 'react';
import { Disclosure, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';

export interface AccordionProps {
  index?: number;

  accordionListLength?: number;
  className?: string;
  sectionTitle: string;
}

const AccordionBtn: React.FC<AccordionProps> = ({ sectionTitle, children, className }) => {
  return (
    <div className={`${className}`}>
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className={`${open ? 'border-b-2' : ''}  w-full py-2 px-4`}>
              <div className="flex justify-between">
                <p className={`${open ? 'text-accent-400' : ''} transition`}>{sectionTitle}</p>
                <ChevronDownIcon
                  className={`${open ? 'rotate-180 transform text-accent-400' : ''} h-7 w-7 transition`}
                />
              </div>
            </Disclosure.Button>
            <Transition
              enter="transition duration-150 ease-out"
              enterFrom="transform scale-y-95 opacity-0"
              enterTo="transform scale-y-100 opacity-100"
              leave="transition duration-100 ease-out"
              leaveFrom="transform scale-y-100 opacity-100"
              leaveTo="transform scale-y-95 opacity-0"
            >
              <Disclosure.Panel className="p-5 text-gray-500">{children}</Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
    </div>
  );
};

export default AccordionBtn;
