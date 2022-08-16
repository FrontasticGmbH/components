import React from 'react';
import { Disclosure, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';

export interface AccordionProps {
  index?: number;
  accordionListLength?: number;
  className?: string;
  openSectionTitle: string;
  closedSectionTitle: string;
  iconColor?: string;
}

const AccordionBtn: React.FC<AccordionProps> = ({
  openSectionTitle,
  closedSectionTitle,
  iconColor,
  children,
  className,
}) => {
  return (
    <div className={`${className}`}>
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="w-full py-2 px-4 text-sm">
              <div className="flex justify-between">
                <p className="transition"> {open ? openSectionTitle : closedSectionTitle}</p>
                <ChevronDownIcon className={`${open ? 'rotate-180 transform' : ''} h-7 w-7 ${iconColor} transition`} />
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
