import { Reference, ReferenceLink } from 'helpers/reference';
import React from 'react';
import { HeartIcon } from '@heroicons/react/outline';
import classNames from 'classnames';
import { useFormat } from 'helpers/hooks/useFormat';

interface WishListButtonProps {
  wishlistItemCount?: number;
  wishlistLink?: Reference;
}

const WishListButton: React.FC<WishListButtonProps> = ({ wishlistItemCount, wishlistLink }) => {
  //i18n messages
  const { formatMessage: formatWishlistMessage } = useFormat({ name: 'wishlist' });

  const wishlistButtonClassNames = {
    'wishlist-btn': 'flow-root pr-3',
    'wishlist-btn__wrap': 'group relative -m-2 flex items-center p-2',
    'wishlist-btn__icon': 'h-6 w-6 flex-shrink-0 text-primary-400 group-hover:text-primary-500',
    'wishlist-btn__badge': 'absolute -top-[-1px] -right-[2px] h-4 w-4 rounded-full bg-accent-400 hover:bg-accent-500',
    'wishlist-btn__badge-text':
      'font-small flex h-full w-full items-center justify-center text-[12px] text-white group-hover:text-white',
  };
  return (
    <div className={classNames(wishlistButtonClassNames['wishlist-btn'])}>
      <ReferenceLink target={wishlistLink} className={classNames(wishlistButtonClassNames['wishlist-btn__wrap'])}>
        <HeartIcon className={classNames(wishlistButtonClassNames['wishlist-btn__icon'])} aria-hidden="true" />
        {wishlistItemCount > 0 && (
          <>
            <span className={classNames(wishlistButtonClassNames['wishlist-btn__badge'])}>
              <span className={classNames(wishlistButtonClassNames['wishlist-btn__badge-text'])}>
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
