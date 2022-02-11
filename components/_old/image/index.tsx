import React from 'react';
import classnames from 'classnames';
import { ImageProps as NextImageProps } from 'next/image';
import NextImage from 'next/image';
import FrontasticImage, {
  FrontasticImage as FrontasticImageType,
  frontasticCloudinaryLoader,
} from 'frontastic/lib/image';

export type MediaImage = {
  src?: string;
  width?: string | number;
  height?: string | number;
} & Partial<FrontasticImageType>;

export type ImageProps = Omit<NextImageProps, 'src'> & {
  rounded?: string | boolean;
  media?: MediaImage;
};

const Image: React.FC<ImageProps> = ({
  rounded = false,
  className = '',
  alt = '',
  loading = 'lazy',
  quality = 75,
  media,
  layout,
  ...props
}) => {
  const imageCls = classnames('image', className, {
    'image--rounded': rounded,
    'image--rounded-full': rounded === 'full',
    'image--fill': layout === 'fill',
  });

  // eslint-disable-next-line @next/next/no-img-element
  if (!media || !media.media || !media.width) {
    if (media?.src && layout === 'fill') {
      return <NextImage loader={({ src }) => src} src={image?.src} layout={layout} alt={alt} unoptimized {...props} />;
    }
    if (media?.src && media?.width)
      return (
        <NextImage
          loader={({ src }) => src}
          width={media?.width}
          height={media?.height}
          src={media?.src}
          alt={alt}
          layout={layout}
          unoptimized
          {...props}
        />
      );
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={media?.src} alt={alt} />;
  }

  return (
    <FrontasticImage
      loader={frontasticCloudinaryLoader}
      media={media.media}
      width={media.width}
      height={media.height}
      ratio={media.ratio}
      gravity={media.gravity}
      loading={loading}
      quality={quality}
      className={imageCls}
      layout={layout}
      {...props}
    />
  );
};

export default Image;
