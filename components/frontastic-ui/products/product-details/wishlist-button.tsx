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
      className={`ml-5 items-center justify-center rounded-md border-2 border-slate-300 bg-[#fff] py-3 px-4 text-base font-medium text-[#25304D] ring-transparent  hover:border-transparent hover:bg-[#CE3E72] hover:text-[#fff] active:bg-[#B22C5D]  active:text-[#fff] active:outline-none`}
    >
      <HeartIcon className="h-6 w-6 flex-shrink-0 " aria-hidden="true" />
    </button>
  );
}
