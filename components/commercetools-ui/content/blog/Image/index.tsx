import React, { useCallback } from 'react';
import NextImage, { ImageLoaderProps, ImageProps } from 'next/image';

const Image = (props: ImageProps) => {
  const loader = useCallback(({ src, width, quality }: ImageLoaderProps) => {
    return `${src}?w=${width}&fmt=auto&qlt=${quality ?? 'default'}`;
  }, []);

  return <NextImage {...props} loader={loader} />;
};

export default Image;
