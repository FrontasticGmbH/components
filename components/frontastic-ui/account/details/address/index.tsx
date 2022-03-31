import React, { useState } from 'react';
import type { Address as AddressType } from '../../../../../../types/account/Address';
import { PencilAltIcon as EditIcon, TrashIcon as DeleteIcon } from '@heroicons/react/solid';
import useMediaQuery from 'helpers/hooks/useMediaQuery';
import * as screensizes from 'helpers/utils/screensizes';
import { useAccount } from 'frontastic';
import UpdateAddressModal from '../modals/updateAddress';

export interface AddressProps {
  address: AddressType;
}

const Address: React.FC<AddressProps> = ({ address }) => {
  //account data
  const { removeAddress } = useAccount();

  //responsive
  const [isLargerThanDesktop] = useMediaQuery(screensizes.desktop);

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
      <div className="flex py-4 sm:gap-4 sm:py-8" key={address.addressId}>
        <div className="flex-1">
          <dt className="text-sm font-bold text-gray-700">
            {address.firstName} {address.lastName}
          </dt>
          <dt className="mt-2 text-sm">
            {address.streetName} {address.streetNumber}
          </dt>
          <dt className="text-sm">
            {address.postalCode} {address.city}
          </dt>
          <dt className="mt-2 text-sm text-slate-500">{address.phone}</dt>
        </div>
        <span className="ml-4 flex flex-shrink-0 items-start space-x-4">
          {isLargerThanDesktop ? (
            <button
              type="button"
              className="rounded-md bg-white text-sm font-medium text-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2"
              onClick={openUpdateModal}
            >
              Update
            </button>
          ) : (
            <EditIcon className="h-5 w-5 text-pink-400" onClick={openUpdateModal} />
          )}
          <span className="text-gray-300" aria-hidden="true">
            |
          </span>
          {isLargerThanDesktop ? (
            <button
              type="button"
              className="ounded-md bg-white text-sm font-medium text-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2"
              onClick={handleDelete}
            >
              Remove
            </button>
          ) : (
            <DeleteIcon className="h-5 w-5 text-pink-400" onClick={handleDelete} />
          )}
        </span>
      </div>
      <UpdateAddressModal open={updateModalOpen} onClose={closeUpdateModal} defaultValues={address} />
    </>
  );
};

export default Address;
