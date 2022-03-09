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
        return <RocketIcon className="w-6 h-6 text-[#CE3E72]" aria-hidden="true" />;
      case 'loop':
        return <LoopIcon className="w-6 h-6 text-[#CE3E72]" aria-hidden="true" />;
      case 'loop':
        return <LockIcon className="w-6 h-6 text-[#CE3E72]" aria-hidden="true" />;
      case 'question':
        return <QuestionMarkCircleIcon className="w-6 h-6 text-[#CE3E72]" aria-hidden="true" />;
      case 'inbox':
        return <InboxIcon className="w-6 h-6 text-[#CE3E72]" aria-hidden="true" />;
      case 'speaker':
        return <SpeakerphoneIcon className="w-6 h-6 text-[#CE3E72]" aria-hidden="true" />;
      default:
        return <LockIcon className="w-4 h-4 text-[#CE3E72]" aria-hidden="true" />;
    }
  };

  return (
    <footer aria-labelledby="footer-heading">
      {isBiggerThanMobileView && (
        <div className="bg-gray-100 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="px-2 py-10 max-w-5xl mx-auto xl:grid xl:grid-cols-2 xl:gap-8">
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
                        <ReferenceLink target={item.reference} className="text-gray-700 hover:text-gray-800 px-6">
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
        <div className="flex place-content-between bg-gray-100 px-4 sm:px-10 border-t border-gray-200 py-4">
          <p className="text-xs sm:text-sm text-gray-700">© {copyright}</p>
          <ul className="flex">
            {mockCopyrightLinks.map((item, i) => (
              <li key={i} className="text-xs">
                <p className="text-gray-700 sm:text-sm hover:text-white px-2">{item.name}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </footer>
  );
};

export default Footer;
