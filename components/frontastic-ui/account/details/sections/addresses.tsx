import { useAccount } from 'frontastic';
import React, { useState } from 'react';
import Address from '../address';

import CreateAddressModal from '../modals/createAddress';

const Addresses = () => {
  //account data
  const { account } = useAccount();

  //user addresses
  const addresses = account?.addresses;

  //create address modal
  const [createModalOpen, setCreateModalOpen] = useState(false);

  const openCreateModal = () => {
    setCreateModalOpen(true);
  };

  const closeCreateModal = () => {
    setCreateModalOpen(false);
  };

  return (
    <>
      <div className="mt-10 divide-y divide-gray-200">
        <div className="space-y-1">
          <h3 className="text-lg font-medium leading-6 text-gray-900">My Addresses</h3>
          <p className="max-w-2xl text-sm text-gray-500">
            Here you can add different delivery addresses for your account
          </p>
        </div>
        <div className="mt-6">
          <dl className="divide-y divide-gray-200">
            {addresses?.map((address) => (
              <Address key={address.addressId} address={address} />
            ))}
          </dl>
        </div>
        <div className="py-4 sm:py-8">
          <button
            type="button"
            className="duration-150ms px:0 mt-4 w-full items-center rounded-md border border-transparent bg-pink-400 py-2 text-center text-sm font-medium text-white shadow-sm transition-colors ease-out focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2 disabled:bg-gray-300 sm:w-fit sm:px-24"
            onClick={openCreateModal}
          >
            Add an address
          </button>
        </div>
      </div>
      <CreateAddressModal open={createModalOpen} onClose={closeCreateModal} />
    </>
  );
};

export default Addresses;
