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
      <style>
        {`
        form input[type='checkbox']:checked {
          background-image: url("data:image/svg+xml,<svg viewBox='0 0 16 16' fill='%23CE3E72' xmlns='http://www.w3.org/2000/svg'><path d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/></svg>");
          border-color: rgb(209 213 219 / var(--tw-border-opacity));
        }
        form input[type='checkbox']:checked:hover {
          border-color: rgb(209 213 219 / var(--tw-border-opacity));
        }
        `}
      </style>
      <div className="mt-10 divide-y divide-gray-200">
        <div className="space-y-1">
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            {formatAccountMessage({ id: 'address.myAddresses', defaultMessage: 'My Addresses' })}
          </h3>
          <p className="max-w-2xl text-sm text-gray-500">
            {formatAccountMessage({
              id: 'address.desc',
              defaultMessage: 'Here you can add different delivery addresses for your account',
            })}
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
            className="duration-150ms px:0 mt-4 w-full items-center rounded-md border border-transparent bg-accent-400 py-2 text-center text-sm font-medium text-white shadow-sm transition-colors ease-out focus:outline-none focus:ring-2 focus:ring-accent-400 focus:ring-offset-2 disabled:bg-gray-300 sm:w-fit sm:px-24"
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
