import React, { FC } from 'react';
import { ChevronLeftIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { Category } from 'shared/types/product/Category';
import Button from 'components/commercetools-ui/atoms/button';
import Typography from 'components/commercetools-ui/atoms/typography';
import HeaderLogo from 'components/commercetools-ui/organisms/header/header-logo';
import { useFormat } from 'helpers/hooks/useFormat';
import { Reference } from 'types/reference';
import { ImageProps } from 'frontastic/lib/image';

export interface Props {
  logo: ImageProps;
  logoLink: Reference;
  categories: Category[];
  onArrowClick: () => void;
  hideHeaderMenu: () => void;
}

const MobileMenuHeader: FC<Props> = ({ onArrowClick, logo, logoLink, hideHeaderMenu, categories }) => {
  const { formatMessage } = useFormat({ name: 'common' });
  return (
    <div className="flex h-52 w-full justify-between border-b border-neutral-400 px-20">
      {categories.length > 0 && (
        <div className="flex h-full items-center justify-start">
          <Button variant="ghost" size="fit" onClick={onArrowClick} className="px-0">
            <ChevronLeftIcon className="w-20 text-secondary-black" />
          </Button>
        </div>
      )}
      {categories.length <= 0 ? (
        <HeaderLogo
          logo={logo}
          logoLink={logoLink}
          onClick={hideHeaderMenu}
          imageClassName="flex h-full w-160 justify-center text-center text-16 font-bold md:text-28"
        />
      ) : (
        <div className="flex w-full items-center justify-center whitespace-nowrap">
          <Typography className="text-center font-medium">{categories[categories.length - 1].name}</Typography>
        </div>
      )}
      <div className="flex h-full items-center justify-end">
        <Button
          variant="ghost"
          size="xs"
          onClick={hideHeaderMenu}
          title={formatMessage({ id: 'close', defaultMessage: 'Close' })}
          className="px-0"
        >
          <XMarkIcon className="w-24 text-secondary-black" />
        </Button>
      </div>
    </div>
  );
};

export default MobileMenuHeader;
