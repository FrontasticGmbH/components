import React from 'react';
import Typography from 'components/commercetools-ui/typography';
import { Reference, ReferenceLink } from 'helpers/reference';
import { renderIcon } from './renderIcon';

export interface Link {
  name: string;
  reference: Reference;
}

export interface Column {
  icon?: string;
  header: string;
  links: Link[];
}

export interface Props {
  column: Column;
}

const Column: React.FC<Props> = ({ column }) => {
  return (
    <div>
      <div className="flex space-x-2">
        {renderIcon(column.icon)}
        <h3 className="text-sm font-medium text-gray-800 dark:text-light-100">
          <Typography>{column.header}</Typography>
        </h3>
      </div>
      <ul role="list" className="mt-6 space-y-3 px-6">
        {column.links.map((item, i) => (
          <li key={i} className="text-sm">
            <ReferenceLink target={item.reference} className="text-gray-700 hover:text-gray-800 dark:text-light-100">
              <Typography>{item.name}</Typography>
            </ReferenceLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Column;
