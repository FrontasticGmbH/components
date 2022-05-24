import React from 'react';
import { HeartIcon } from '@heroicons/react/outline';
import { useFormat } from 'helpers/hooks/useFormat';
import { Reference, ReferenceLink } from 'helpers/reference';

interface WishListButtonProps {
  wishlistItemCount?: number;
  wishlistLink?: Reference;
}

const WishListButton: React.FC<WishListButtonProps> = ({ wishlistItemCount, wishlistLink }) => {
  //i18n messages
  const { formatMessage: formatWishlistMessage } = useFormat({ name: 'wishlist' });

  return (
    <div className="flow-root pr-3">
      <ReferenceLink target={wishlistLink} className="group relative -m-2 flex items-center p-2">
        <HeartIcon className="h-6 w-6 shrink-0 text-primary-400 group-hover:text-primary-500" aria-hidden="true" />
        {wishlistItemCount > 0 && (
          <>
            <span className="absolute -top-[-1px] -right-[2px] h-4 w-4 rounded-full bg-accent-400 hover:bg-accent-500">
              <span className="flex h-full w-full items-center justify-center text-[12px] text-white group-hover:text-white">
                {wishlistItemCount}
              </span>
            </span>
            <span className="sr-only">
              {formatWishlistMessage({
                id: 'wishlist.items.in.view',
                defaultMessage: 'items in wishlist, view wishlist',
              })}
            </span>
          </>
        )}
      </ReferenceLink>
    </div>
  );
};

export default WishListButton;
