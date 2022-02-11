import React from 'react';

import { LanguageSwitcher } from 'components';

export const Footer: React.FC = () => {
  return (
    <div className="bg-gray-800 text-xs text-white flex p-4 items-center justify-center ">
      <div className="flex justify-between items-center w-full max-w-screen-lg">
        <p className="font-bold">© Catwalk</p>
        <div className="flex">
          <LanguageSwitcher className="mr-4 bg-gray-800" />
          <p className="mr-4">Cookies</p>
          <p className="mr-4">Privacy policy</p>
          <p className="">T&amp;C</p>
        </div>
      </div>
    </div>
  );
};
