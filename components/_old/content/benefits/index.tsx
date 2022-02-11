import React from 'react';

import Lock from 'components/icons/lock';
import Loop from 'components/icons/loop';
import Rocket from 'components/icons/rocket';

export const Benefits: React.FC = () => {
  return (
    <ul className="px-4 py-2 flex flex-col md:flex-row md:justify-items-stretch text-sm">
      <li className="flex flex-grow-0 w-full  h-14 md:h-24 items-center md:justify-center md:px-8 border-b md:border-b-0 md:border-r border-gray-200">
        <Rocket className="mr-2 w-7" />
        <span>Free & fast delivery</span>
      </li>
      <li className="flex flex-grow-0 w-full  h-14 md:h-24 items-center md:justify-center md:px-8 border-b md:border-b-0 md:border-r border-gray-200">
        <Loop className="mr-3 w-6" />
        <span>Free returns</span>
      </li>
      <li className="flex flex-grow-0 w-full  h-14 md:h-24 items-center md:justify-center md:px-8 border-b md:border-b-0 md:border-r border-gray-200 border-opacity-0">
        <Lock className="mr-3 w-6" />
        <span>Safe payment and data protection</span>
      </li>
    </ul>
  );
};
