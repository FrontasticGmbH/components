import { ImageProps as NextImageProps } from 'next/image';

export type Gravity = {
  mode?: 'string';
  coordinates?: { x: number; y: number };
};

export type FrontasticImage = {
  media: {
    mediaId?: string;
    file: string;
    name: string;
    width: number;
    height: number;
  };
  ratio?: string;
  gravity?: Gravity;
};

export type NextFrontasticImage = FrontasticImage & Partial<Pick<NextImageProps, 'src'>> & Omit<NextImageProps, 'src'>;
