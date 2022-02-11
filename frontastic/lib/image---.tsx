import NextImage from 'next/image';
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
  };
  ratio?: string;
  gravity?: Gravity;
};

export type NextFrontasticImage = FrontasticImage &
  Required<Pick<NextImageProps, 'width'>> &
  Partial<Pick<NextImageProps, 'src'>> &
  Omit<NextImageProps, 'width' | 'src'>;

function normalizeSrc(src: string): string {
  return src[0] === '/' ? src.slice(1) : src;
}

export function frontasticCloudinaryLoader({ src, width }: NextImageProps): string {
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME; //cloudinary cloud name
  const root = `https://res.cloudinary.com/${cloudName}/image/upload`; //base path

  const query = (src as string).split('?')[1]; //contains the query parameters
  const queries = new URLSearchParams(query); //injected query params

  const ratio = queries.get('ratio'); //aspect asset ratio
  const gravity = queries.get('gravity'); //required gravity: faces, body, etc..
  const x = queries.get('x__coord'); //x coordinate for custom gravity
  const y = queries.get('y__coord'); //y coordinate for custom gravity

  //cloudinary transformations
  const params = [
    ...['f_auto', 'c_limit', 'g_' + (gravity ?? 'auto')],
    ...(ratio ? ['w_' + width, 'q_' + 'auto', 'c_crop'] : []),
    ...(gravity === 'custom' ? ['x_' + x, 'y_' + y] : []),
    ...(ratio ? ['ar_' + ratio] : []),
  ];
  const transformations = params.join(',');

  //image source with the query parameters removed
  const source = (src as string).split('?')[0];

  return `${root}/${transformations}/${normalizeSrc(source)}`;
}

export default function Image({
  width,
  height: baseHeight,
  ratio,
  media,
  gravity,
  layout = 'responsive',
  ...props
}: NextFrontasticImage) {
  //parameters to inject in the source to be used in loader
  const parameters = {
    ratio,
    gravity: gravity?.mode,
    x__coord: gravity?.coordinates?.x,
    y__coord: gravity?.coordinates?.y,
  };

  //query string construction
  const parameterizedSrc = `${media.mediaId}?${Object.entries(parameters)
    .map(([key, value]) => (value ? `${key}=${value}` : ''))
    .filter((val) => !!val) //remove empty strings returned from falsy values
    .join('&')}`;

  //width getter
  const getImageWidth = () => {
    //return the original width
    return width;
  };

  //height getter
  const getImageHeight = () => {
    //if ratio is not supplied return the original height
    if (!ratio) return baseHeight;
    //Use the crop ratio to calculate the height
    const [nominator, denominator] = ratio.split(':') as [string, string];
    const height = +width * (+denominator / +nominator);
    return height;
  };

  //layout fill doesn't make use of width and height
  if (layout === 'fill') return <NextImage {...props} layout={layout} src={parameterizedSrc} />;

  return (
    <NextImage {...props} width={getImageWidth()} height={getImageHeight()} src={parameterizedSrc} layout={layout} />
  );
}
