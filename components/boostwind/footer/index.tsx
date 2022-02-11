import React from 'react';
import { Reference, ReferenceLink } from 'helpers/Reference';
import { ArrayHelpers } from 'helpers/ArrayHelpers';

interface Link {
  name: string;
  reference: Reference;
}

interface Column {
  header: string;
  links: Link[];
}

interface Props {
  columns: Column[];
  copyright?: string;
}

const Footer: React.FC<Props> = ({ columns, copyright }) => {
  return (
    <footer aria-labelledby="footer-heading" className="bg-gray-900">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-20 max-w-5xl mx-auto xl:grid xl:grid-cols-2 xl:gap-8">
          <div className="grid grid-cols-2 gap-8 xl:col-span-2">
            {ArrayHelpers.chunk(columns, 2).map((columnChunk, chunkIndex) => (
              <div key={chunkIndex} className="space-y-12 md:space-y-0 md:grid md:grid-cols-2 md:gap-8">
                {columnChunk.map((column, index) => (
                  <div key={index}>
                    <h3 className="text-sm font-medium text-white">{column.header}</h3>
                    <ul role="list" className="mt-6 space-y-6">
                      {column.links.map((item) => (
                        <li key={item.name} className="text-sm">
                          <ReferenceLink target={item.reference} className="text-gray-300 hover:text-white">
                            {item.name}
                          </ReferenceLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {copyright && (
          <div className="border-t border-gray-800 py-10">
            <p className="text-sm text-gray-400">{copyright}</p>
          </div>
        )}
      </div>
    </footer>
  );
};

export default Footer;
