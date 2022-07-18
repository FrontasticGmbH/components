import { ImageProps as NextImageProps } from 'next/image';

export type Ratio = string;

export type Gravity = {
  mode?: string;
  coordinates?: { x: number; y: number };
};

export interface MediaItem {
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
  created: string;
  _type: string;
}

export interface MediaItemWithMods {
  media: MediaItem;
  ratio?: Ratio;
  gravity?: Gravity;
}
// old api vs new api
export type FrontasticImage = { media: MediaItemWithMods; ratio?: Ratio; gravity?: Gravity } | MediaItemWithMods;

// Explanation
// - Partial<Pick<NextImageProps, 'src'> takes src from next/image and makes it optional
// - Omit<NextImageProps, 'src'> adds all other next/image props except src
// - adds FrontasticImage props (union between old and new api, see above)
//   entirely optional in case user's just render images via src prop
export type NextFrontasticImage = Partial<Pick<NextImageProps, 'src'>> &
  Omit<NextImageProps, 'src'> &
  Partial<FrontasticImage>;
