import { ImageProps as NextImageProps } from 'next/image';

export type Ratio = string;

export type Gravity = {
  mode?: 'string';
  coordinates?: { x: number; y: number };
};

type MediaObject = {
  mediaId: string;
  file: string;
  format: string;
  name: string;
  width: number;
  height: number;
  metaData: string;
  resourceType: 'image';
  size: number;
  tags: string[];
  _type: string;
};

export type FrontasticImage = {
  media: MediaObject;
  ratio?: Ratio;
  gravity?: Gravity;
};

export type NextFrontasticImage =
  | (FrontasticImage & NextImageProps)
  | (NextImageProps & MediaObject & Gravity & Ratio)
  | NextImageProps;
