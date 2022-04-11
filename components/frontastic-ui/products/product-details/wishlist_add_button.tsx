import React from 'react';
import { HeartIcon } from '@heroicons/react/outline';
import classNames from 'classnames';

const WishlistAddButton = ({ onAddToWishlist }) => {
  const wishlistButtonClassNames = classNames(
    'ml-5 items-center justify-center',
    'rounded-md border-2 border-slate-300',
    'bg-[#fff] py-3 px-4',
    'text-base font-medium text-[#25304D]',
    'ring-transparent',
    'hover:border-transparent hover:bg-[#CE3E72] hover:text-[#fff]',
    'focus:bg-[#B22C5D]  focus:text-[#fff] focus:outline-none',
  );

  return (
    <button type="button" onClick={onAddToWishlist} className={wishlistButtonClassNames}>
      <HeartIcon className="h-6 w-6 flex-shrink-0 " aria-hidden="true" />
    </button>
  );
};

export default WishlistAddButton;
