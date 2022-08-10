import React, { useState } from 'react';
import { useFormat } from 'helpers/hooks/useFormat';
import { useAccount } from 'frontastic';
import Address from '../address';
import CreateAddressModal from '../modals/createAddress';

const Addresses = () => {
  //18in messages
  const { formatMessage: formatAccountMessage } = useFormat({ name: 'account' });

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
      <div className="mt-10">
        <div>
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            {formatAccountMessage({ id: 'address.myAddresses', defaultMessage: 'My Addresses' })}
          </h3>
          <p className="max-w-2xl pt-4 text-sm text-gray-500">
            {formatAccountMessage({
              id: 'address.desc',
              defaultMessage: 'Manage or add delivery addresses for your account',
            })}
          </p>
          <div className="flex justify-end">
            <button
              type="button"
              className="hidden rounded-sm border border-transparent bg-accent-400 px-4 py-2 text-center text-sm font-medium tracking-wide text-white shadow-sm transition-colors duration-150 ease-out focus:outline-none focus:ring-2 focus:ring-accent-400 focus:ring-offset-2 disabled:bg-gray-300 lg:block"
              onClick={openCreateModal}
            >
              {formatAccountMessage({ id: 'address.add', defaultMessage: 'Add an address' })}
            </button>
          </div>
        </div>
        <div className="mt-4">
          <dl className="flex flex-col items-stretch lg:gap-4">
            {addresses?.map((address) => (
              <Address key={address.addressId} address={address} />
            ))}
          </dl>
        </div>
        <div className="block border-t border-gray-200 pt-7 lg:hidden">
          <button
            type="button"
            className="w-full rounded-sm border border-transparent bg-accent-400 px-4 py-3 text-center text-sm font-medium tracking-wide text-white shadow-sm transition-colors duration-150 ease-out focus:outline-none focus:ring-2 focus:ring-accent-400 focus:ring-offset-2 disabled:bg-gray-300 lg:block"
            onClick={openCreateModal}
          >
            {formatAccountMessage({ id: 'address.add', defaultMessage: 'Add an address' })}
          </button>
        </div>
      </div>
      <CreateAddressModal open={createModalOpen} onClose={closeCreateModal} />
    </>
  );
};

export default Addresses;
