import React from 'react';
import classnames from 'classnames';

import CheckoutTick from 'components/icons/checkout-tick';

type Props = {
  current: boolean;
  completed: boolean;
  onSelect: () => void;
};

const Step: React.FC<Props> = ({ current = false, completed = false, onSelect }: Props) => {
  return (
    <div className="flex flex-col items-center" onClick={onSelect}>
      <div
        className={classnames({
          'rounded-full border-2 mx-1 h-5 w-5 cursor-pointer z-10': true,
          'bg-neutral-300 border-neutral-300': !current && !completed,
          'bg-background-primary border-indigo-500': current,
          'bg-indigo-500 border-indigo-500': completed,
        })}
      >
        {completed && <CheckoutTick />}
      </div>
    </div>
  );
};

export default Step;
