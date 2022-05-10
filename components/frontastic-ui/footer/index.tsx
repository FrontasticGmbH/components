import React from 'react';
import { InboxIcon, QuestionMarkCircleIcon, SpeakerphoneIcon } from '@heroicons/react/outline';
import Typography from 'components/frontastic-ui/typography';
import { default as LockIcon } from 'components/icons/lock';
import { default as LoopIcon } from 'components/icons/loop';
import { default as RocketIcon } from 'components/icons/rocket';
import { useFormat } from 'helpers/hooks/useFormat';
import { Reference, ReferenceLink } from 'helpers/reference';

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
export interface FooterProps {
  columns: Column[];
  copyright?: string;
  copyrightLinks?: CopyrightLink[];
}

const Footer: React.FC<FooterProps> = ({ columns, copyright }) => {
  const { formatMessage } = useFormat({ name: 'common' });

  const footerCopyrightLinks = [
    { name: formatMessage({ id: 'cookies', defaultMessage: 'Cookies' }), reference: '/' },
    {
      name: formatMessage({ id: 'privacy.policy', defaultMessage: 'Privacy policy' }),
      reference: '/',
    },
    {
      name: formatMessage({ id: 'terms.conditions', defaultMessage: 'T&C' }),
      reference: '/',
    },
  ];

  const renderIcon = (name: string) => {
    switch (name) {
      case 'rocket':
        return <RocketIcon className="w-6 h-6 text-[#A0AEC0]" aria-hidden="true" />;
      case 'loop':
        return <LoopIcon className="w-6 h-6 text-[#A0AEC0]" aria-hidden="true" />;
      case 'loop':
        return <LockIcon className="w-6 h-6 text-[#A0AEC0]" aria-hidden="true" />;
      case 'question':
        return <QuestionMarkCircleIcon className="w-6 h-6 text-[#A0AEC0]" aria-hidden="true" />;
      case 'inbox':
        return <InboxIcon className="w-6 h-6 text-[#A0AEC0]" aria-hidden="true" />;
      case 'speaker':
        return <SpeakerphoneIcon className="w-6 h-6 text-[#A0AEC0]" aria-hidden="true" />;
      default:
        return <LockIcon className="w-4 h-4 text-[#A0AEC0]" aria-hidden="true" />;
    }
  };

  return (
    <footer aria-labelledby="footer-heading">
      <div className="px-6 mx-auto w-full bg-gray-100 lg:px-8">
        <div className="py-10 px-2 mx-auto max-w-5xl xl:grid xl:grid-cols-2 xl:gap-8">
          <div className={`grid grid-cols-1 gap-10 md:gap-4 md:grid-cols-${columns.length.toString()} xl:col-span-2`}>
            {columns.map((column, index) => (
              <div key={index} className="md:flex md:justify-center">
                <div>
                  <div className="flex space-x-2">
                    {renderIcon(column.icon)}
                    <h3 className="text-sm font-medium text-gray-800">
                      <Typography>{column.header}</Typography>
                    </h3>
                  </div>
                  <ul role="list" className="mt-6 space-y-3">
                    {column.links.map((item, i) => (
                      <li key={i} className="text-sm">
                        <ReferenceLink target={item.reference} className="px-6 text-gray-700 hover:text-gray-800">
                          <Typography>{item.name}</Typography>
                        </ReferenceLink>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {copyright && (
        <div className="flex place-content-between p-4 bg-primary-400 border-t border-gray-200 sm:px-10">
          <p className="text-xs text-[#FFFFFF] sm:text-sm">© {copyright}</p>
          <ul className="flex">
            {footerCopyrightLinks.map((item, i) => (
              <li key={i} className="text-xs">
                <p className="px-2 text-[#CBD5E0] hover:text-white sm:text-sm">
                  <Typography>{item.name}</Typography>
                </p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </footer>
  );
};

export default Footer;
