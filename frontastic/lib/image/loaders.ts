import { ImageProps as NextImageProps } from 'next/image';

function normalizeSrc(src: string): string {
  return src[0] === '/' ? src.slice(1) : src;
}

export function frontasticCloudinaryLoader({ src, width }: NextImageProps): string {
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME; //cloudinary cloud name
  const root = `https://res.cloudinary.com/${cloudName}/image/upload`; //base path

  const query = (src as string).split('?')[1]; //contains the query paremeters
  const queries = new URLSearchParams(query); //injected query params

  const ratio = queries.get('ratio'); //aspect asset ratio
  const gravity = queries.get('gravity'); //required gravity: faces, body, etc..
  const x = queries.get('x__coord'); //x coordinate for custom gravity
  const y = queries.get('y__coord'); //y coordinate for custom gravity

  //cloudinary transformations
  const params = ratio
    ? [
        ...['f_auto', 'c_limit', 'g_' + (gravity ?? 'auto')],
        ...(width ? ['w_' + width, 'q_' + 'auto', 'c_crop'] : []),
        ...(gravity === 'custom' ? ['x_' + x, 'y_' + y] : []),
        ...(ratio ? ['ar_' + ratio] : []),
      ]
    : [...(width ? ['w_' + width, 'q_' + 'auto', 'c_scale'] : [])];

  const transformations = params.join(',');

  //image source with the query paremeters removed
  const source = (src as string).split('?')[0];

  return `${root}/${transformations}/${normalizeSrc(source)}`;
}
