import React from 'react';
import { Reference, ReferenceLink } from 'helpers/Reference';
import useMediaQuery from 'helpers/hooks/useMediaQuery';
import { InboxIcon, QuestionMarkCircleIcon, SpeakerphoneIcon } from '@heroicons/react/outline';
import { default as RocketIcon } from '../../icons/rocket';
import { default as LoopIcon } from '../../icons/loop';
import { default as LockIcon } from '../../icons/lock';

interface Link {
  name: string;
  reference: Reference;
}

interface Column {
  icon?: string;
  header: string;
  links: Link[];
}
interface CopyrightLink {
  name: string;
  reference: Reference;
}
interface Props {
  columns: Column[];
  copyright?: string;
  copyrightLinks?: CopyrightLink[];
}

const Footer: React.FC<Props> = ({ columns, copyright }) => {
  const isBiggerThanMobileView = useMediaQuery(480)[0];

  const mockCopyrightLinks = [
    { name: 'Cookies', reference: '/' },
    { name: 'Privacy policy', reference: '/' },
    { name: 'T&C', reference: '/' },
  ];

  const renderIcon = (name: string) => {
    switch (name) {
      case 'rocket':
        return <RocketIcon className="h-6 w-6 text-[#CE3E72]" aria-hidden="true" />;
      case 'loop':
        return <LoopIcon className="h-6 w-6 text-[#CE3E72]" aria-hidden="true" />;
      case 'loop':
        return <LockIcon className="h-6 w-6 text-[#CE3E72]" aria-hidden="true" />;
      case 'question':
        return <QuestionMarkCircleIcon className="h-6 w-6 text-[#CE3E72]" aria-hidden="true" />;
      case 'inbox':
        return <InboxIcon className="h-6 w-6 text-[#CE3E72]" aria-hidden="true" />;
      case 'speaker':
        return <SpeakerphoneIcon className="h-6 w-6 text-[#CE3E72]" aria-hidden="true" />;
      default:
        return <LockIcon className="h-4 w-4 text-[#CE3E72]" aria-hidden="true" />;
    }
  };

  return (
    <footer aria-labelledby="footer-heading">
      {isBiggerThanMobileView && (
        <div className="mx-auto max-w-7xl bg-gray-100 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl px-2 py-10 xl:grid xl:grid-cols-2 xl:gap-8">
            <div className="grid grid-cols-3 gap-4 xl:col-span-2">
              {columns.map((column, index) => (
                <div key={index}>
                  <div className="flex space-x-2">
                    {renderIcon(column.icon)}
                    <h3 className="text-sm font-medium text-gray-800">{column.header}</h3>
                  </div>
                  <ul role="list" className="mt-6 space-y-3">
                    {column.links.map((item, i) => (
                      <li key={i} className="text-sm">
                        <ReferenceLink target={item.reference} className="px-6 text-gray-700 hover:text-gray-800">
                          {item.name}
                        </ReferenceLink>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      {copyright && (
        <div className="flex place-content-between border-t border-gray-200 bg-gray-100 px-4 py-4 sm:px-10">
          <p className="text-xs text-gray-700 sm:text-sm">© {copyright}</p>
          <ul className="flex">
            {mockCopyrightLinks.map((item, i) => (
              <li key={i} className="text-xs">
                <p className="px-2 text-gray-700 hover:text-white sm:text-sm">{item.name}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </footer>
  );
};

export default Footer;
