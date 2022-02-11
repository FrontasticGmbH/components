import React from 'react';

import { Button } from 'components';

export const Newsletter: React.FC = () => {
  return (
    <div className="bg-gray-800 text-white py-8 px-7 sm:px-12 sm:py-12 ">
      <form className="flex flex-col items-center">
        <p className="text-sm text-white">Join our newsletter</p>
        <h3 className="font-bold text-white text-2xl lg:text-3xl mb-5">Sign up for exclusive early access</h3>
        <div className="flex flex-col sm:flex-row mb-6 max-w-screen-sm w-full">
          <input
            type="text"
            placeholder="Yes, here's my email"
            className="mb-2 sm:mb-0 sm:mr-2 rounded text-sm p-2.5 flex-1"
          />
          <Button className="px-10" onClick={console.log}>
            Send
          </Button>
        </div>
        <p className="text-sm text-gray-400 max-w-screen-sm text-center md:px-14">
          By clicking Submit you agree that we may use your information in accordance with our privacy policy process
          the data for a specific purpose.
        </p>
      </form>
    </div>
  );
};
