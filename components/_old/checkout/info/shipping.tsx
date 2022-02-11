import React from 'react';
import { useTranslation } from 'next-i18next';

import { convertToCountryName, convertToStateName } from './../countries';
import EditIcon from 'components/icons/edit';

type Props = {
  address: any;
  onClick: () => void;
};

const Shipping: React.FC<Props> = ({ address, onClick }: Props) => {
  const { t } = useTranslation('checkout');

  return (
    <>
      <div className="mb-3 flex items-center justify-between">
        <span className="text-xs text-neutral-600 font-bold leading-tight uppercase">{t('shippingInformation')}</span>

        <span className="text-sm text-blue-500 leading-tight cursor-pointer flex" onClick={onClick}>
          {t('edit')} <EditIcon className="inline fill-current text-sm ml-2" />
        </span>
      </div>

      <div className="text-md text-neutral-900 leading-tight">
        <p className="font-bold">
          {address.firstName} {address.lastName}
        </p>
        <p>{address.streetName}</p>
        <p>{address.city}</p>
        <p>{address.postalCode}</p>
        <p>{convertToCountryName(address.country)}</p>
        {address.stateOrProvince && <p>{convertToStateName(address.country, address.stateOrProvince)}</p>}

        {(address.phone || address.email) && <div className="my-4 h-px bg-gray-200" />}

        <p>{address.phone}</p>
        <p>{address.email}</p>
      </div>
    </>
  );
};

export default Shipping;
