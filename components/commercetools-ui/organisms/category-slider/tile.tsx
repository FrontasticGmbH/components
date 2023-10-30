import React from 'react';
import useImageSizes from 'helpers/hooks/useImageSizes';
import { Reference } from 'types/reference';
import Image, { ImageProps } from 'frontastic/lib/image';
import Link from '../../atoms/link';
import Typography from '../../atoms/typography';

export interface Props {
  tile: {
    title: string;
    image: ImageProps;
    target?: Reference;
  };
}

const Tile: React.FC<Props> = ({ tile }) => {
  const tileImageSizes = useImageSizes({ md: 0.5, lg: 0.25, defaultSize: 0.25 });

  return (
    <Link link={tile.target} className="block shrink-0 grow basis-0">
      <div className="relative" style={{ paddingBottom: '122%' }}>
        <Image
          {...tile.image}
          sizes={tileImageSizes}
          alt={tile.title}
          fill
          style={{ objectFit: 'cover' }}
          className="brightness-75"
          loading="eager"
        />
      </div>
      <Typography
        as="h2"
        className="mt-5 block overflow-hidden truncate rounded-b-sm border-neutral-300 py-5 text-center text-14 text-primary-black md:text-16 lg:mt-0 lg:border lg:bg-white lg:py-10"
      >
        {tile.title}
      </Typography>
    </Link>
  );
};

export default Tile;
