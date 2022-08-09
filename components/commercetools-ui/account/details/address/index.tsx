import React, { useState } from 'react';
import { StarIcon } from '@heroicons/react/solid';
import type { Address as AddressType } from '@Types/account/Address';
import { useFormat } from 'helpers/hooks/useFormat';
import { useAccount } from 'frontastic';
import UpdateAddressModal from '../modals/updateAddress';
import DeleteConfirmationModal from '../modals/deleteConfirmation';
import { PencilAltIcon as EditIcon } from '@heroicons/react/outline';

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
    return removeAddress(address.addressId);
  };

  //update modal
  const [updateModalOpen, setUpdateModalOpen] = useState(false);

  const openUpdateModal = () => setUpdateModalOpen(true);

  const closeUpdateModal = () => setUpdateModalOpen(false);

  //delete confirmation modal
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);

  const openDeleteModal = () => setDeleteModalOpen(true);

  const closeDeleteModal = () => setDeleteModalOpen(false);

  return (
    <>
      <div className="flex flex-row items-center gap-4 border-t border-neutral-300 py-8 lg:border lg:px-8">
        <div className="flex-1">
          <dt className="flex items-center justify-start gap-2">
            <span className="text-base font-medium text-neutral-700">
              {address.firstName} {address.lastName}
            </span>
            {(address.isDefaultBillingAddress || address.isDefaultShippingAddress) && (
              <StarIcon className="h-4 text-accent-400" />
            )}
          </dt>
          <dt className="mt-2 text-sm text-neutral-700">
            {address.streetName} {address.streetNumber}
          </dt>
          <dt className="text-sm text-neutral-700">
            {address.postalCode} {address.city}
          </dt>
          <dt className="text-md mt-2 text-sm text-neutral-700">
            <span className="font-medium">{formatMessage({ id: 'phone', defaultMessage: 'Phone' })}:</span>{' '}
            {address.phone}
          </dt>
        </div>
        <span className="hidden shrink-0 items-start space-x-4 lg:flex">
          <button
            type="button"
            className="rounded-md text-sm font-medium text-accent-400 transition hover:text-accent-600 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:ring-offset-2"
            onClick={openUpdateModal}
          >
            {formatMessage({ id: 'edit', defaultMessage: 'Edit' })}
          </button>
          <span className="text-gray-300" aria-hidden="true">
            |
          </span>
          <button
            type="button"
            className="rounded-md text-sm font-medium text-accent-400 transition hover:text-accent-600 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:ring-offset-2"
            onClick={openDeleteModal}
          >
            {formatMessage({ id: 'remove', defaultMessage: 'Remove' })}
          </button>
        </span>
        <span className="block shrink-0 lg:hidden">
          <button type="button" className="text-accent-400" onClick={openUpdateModal}>
            <EditIcon className="h-8 w-8 stroke-[1.5px]" />
          </button>
        </span>
      </div>
      <UpdateAddressModal
        open={updateModalOpen}
        onClose={closeUpdateModal}
        defaultValues={address}
        openDeleteModal={openDeleteModal}
      />
      <DeleteConfirmationModal open={deleteModalOpen} onClose={closeDeleteModal} onConfirm={handleDelete} />
    </>
  );
};

export default Address;
