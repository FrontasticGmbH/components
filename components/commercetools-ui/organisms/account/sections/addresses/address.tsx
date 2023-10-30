import React from 'react';
import type { Address as AddressType } from 'shared/types/account/Address';
import Radio from 'components/commercetools-ui/atoms/radio';
import Typography from 'components/commercetools-ui/atoms/typography';
import { TypographyProps } from 'components/commercetools-ui/atoms/typography/types';
import { useFormat } from 'helpers/hooks/useFormat';
import useMediaQuery from 'helpers/hooks/useMediaQuery';
import { tablet } from 'helpers/utils/screensizes';
import { AddressFormData } from './address-form';
import usePropsToAddressType from './mapPropsToAddressType';
import EditCTA from '../../account-atoms/edit-cta';

export interface AddressProps {
  address: AddressType;
  isDefaultAddress?: boolean;
  isChecked: boolean;
  selectAddress: (address: AddressFormData) => void;
}

const Address: React.FC<AddressProps> = ({ address, isDefaultAddress, selectAddress }) => {
  const { mapPropsToAddress } = usePropsToAddressType();
  const { label } = mapPropsToAddress(address as AddressFormData);

  const [isTabletSize] = useMediaQuery(tablet);
  const { formatMessage } = useFormat({ name: 'account' });

  const addressInfoTypographyProps: TypographyProps = {
    className: 'text-secondary-black text-14 leading-loose',
  };

  const addressInfoTypographyElements = [
    `${address.firstName} ${address.lastName}`,
    address.streetName,
    `${address.postalCode} ${address.city}`,
  ];

  return (
    <div
      className="flex cursor-pointer items-center justify-between rounded-md border border-neutral-400 p-12 md:px-20 md:py-24 2xl:px-24"
      key={address.addressId}
      onClick={() => isTabletSize && selectAddress(address as AddressFormData)}
    >
      <div className="flex items-center gap-28">
        <Radio
          className="hidden cursor-pointer md:grid"
          inputClassName="cursor-pointer"
          id={address.addressId}
          name={address.addressId}
          value={address.addressId}
          checked={isDefaultAddress}
          onChange={() => selectAddress(address as AddressFormData)}
        />
        <div className="grid gap-24 md:gap-4">
          <div className="flex gap-5 md:mb-4">
            <Typography className="text-14 font-medium capitalize md:text-16">{label}</Typography>
            {isDefaultAddress && (
              <Typography className="text-14 text-secondary-black md:hidden">
                {'- ' + formatMessage({ id: 'default', defaultMessage: 'Default' })}
              </Typography>
            )}
          </div>

          <div className="grid">
            {addressInfoTypographyElements.map((element) => (
              <Typography key={element} {...addressInfoTypographyProps}>
                {element}
              </Typography>
            ))}
          </div>
        </div>
      </div>

      <div onClick={(e) => e.stopPropagation()}>
        <EditCTA editHref={`?hash=addresses&id=address_${address.addressId}`} />
      </div>
    </div>
  );
};

export default Address;
