import { ImageProps as NextImageProps } from 'next/image';

export type Gravity = {
  mode?: 'string';
  coordinates?: { x: number; y: number };
};

export type FrontasticImage = {
  media?: {
    mediaId?: string;
    file?: string;
    format?: string;
    name?: string;
    width?: number | string;
    height?: number | string;
    metaData?: string;
    resourceType?: string;
    size?: number;
    tags?: string[];
    _type?: string;
  };
  ratio?: string;
  gravity?: Gravity;
};

export type NextFrontasticImage = FrontasticImage & Partial<Pick<NextImageProps, 'src'>> & Omit<NextImageProps, 'src'>;
