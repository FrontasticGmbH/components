import React, { useState } from 'react';
import { StarIcon } from '@heroicons/react/solid';
import type { Address as AddressType } from '@Types/account/Address';
import { useFormat } from 'helpers/hooks/useFormat';
import { useAccount } from 'frontastic';
import UpdateAddressModal from '../modals/updateAddress';

export interface AddressProps {
  address: AddressType;
}

const Address: React.FC<AddressProps> = ({ address }) => {
  //account data
  const { removeAddress } = useAccount();

  //i18n messages
  const { formatMessage } = useFormat({ name: 'common' });

  //handle address deletion
  const handleDelete = () => {
    removeAddress(address.addressId);
  };

  //update modal
  const [updateModalOpen, setUpdateModalOpen] = useState(false);

  const openUpdateModal = () => setUpdateModalOpen(true);

  const closeUpdateModal = () => setUpdateModalOpen(false);

  return (
    <>
      <div className="flex flex-col gap-4 py-4 sm:py-8 md:flex-row" key={address.addressId}>
        <div className="flex-1">
          <dt className="flex items-center justify-start gap-2">
            <span className="text-base font-bold text-gray-700 dark:text-light-100">
              {address.firstName} {address.lastName}
            </span>
            {(address.isDefaultBillingAddress || address.isDefaultShippingAddress) && (
              <StarIcon className="h-4 text-accent-400" />
            )}
          </dt>
          <dt className="mt-2 text-sm dark:text-light-100">
            {address.streetName} {address.streetNumber}
          </dt>
          <dt className="text-sm dark:text-light-100">
            {address.postalCode} {address.city}
          </dt>
          <dt className="mt-2 text-sm text-slate-500 dark:text-light-100">{address.phone}</dt>
        </div>
        <span className="flex shrink-0 items-start space-x-4 md:ml-4">
          <button
            type="button"
            className="rounded-md text-sm font-medium text-accent-400 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:ring-offset-2"
            onClick={openUpdateModal}
          >
            {formatMessage({ id: 'update', defaultMessage: 'Update' })}
          </button>
          <span className="text-gray-300" aria-hidden="true">
            |
          </span>
          <button
            type="button"
            className="rounded-md text-sm font-medium text-accent-400 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:ring-offset-2"
            onClick={handleDelete}
          >
            {formatMessage({ id: 'remove', defaultMessage: 'Remove' })}
          </button>
        </span>
      </div>
      <UpdateAddressModal open={updateModalOpen} onClose={closeUpdateModal} defaultValues={address} />
    </>
  );
};

export default Address;
