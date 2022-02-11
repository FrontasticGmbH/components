import React from 'react';

import { Button } from 'components';

type Props = {
  label: string;
  disabled: boolean;
  vouchersLabel?: string;
  onClick: () => void;
};

const OrderButton: React.FC<Props> = ({ label, disabled = false, vouchersLabel, onClick }: Props) => {
  return (
    <>
      <Button className="text-white w-full h-10" disabled={disabled} onClick={onClick}>
        {label}
      </Button>

      {vouchersLabel && <div className="mt-4 text-xs text-neutral-600 text-center">{vouchersLabel}</div>}
    </>
  );
};

export default OrderButton;
