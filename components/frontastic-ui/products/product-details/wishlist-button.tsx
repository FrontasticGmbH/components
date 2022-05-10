import React from 'react';
import { HeartIcon } from '@heroicons/react/outline';
import { Variant } from '../../../../../types/product/Variant';

export interface WishlistButtonProps {
  onAddToWishlist: (variant: Variant, num: number) => void;
  variant: Variant;
}

export default function WishlistButton({ onAddToWishlist, variant }: WishlistButtonProps) {
  const handleAddToWishlist = () => {
    onAddToWishlist(variant, 1);
  };

  return (
    <button
      type="button"
      onClick={() => handleAddToWishlist()}
      className={`ml-5 items-center justify-center rounded-md border-2 border-slate-300 bg-white py-3 px-4 text-base font-medium text-primary-400 ring-transparent  hover:border-transparent hover:bg-accent-400 hover:text-[#fff] active:bg-accent-500  active:text-[#fff] active:outline-none`}
    >
      <HeartIcon className="shrink-0 w-6 h-6 " aria-hidden="true" />
    </button>
  );
}
