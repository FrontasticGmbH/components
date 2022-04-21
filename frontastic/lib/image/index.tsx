import NextImage from 'next/image';
import { NextFrontasticImage } from './types';
import { frontasticCloudinaryLoader } from './loaders';

export default function Image({
  width,
  height: baseHeight,
  ratio,
  media,
  gravity,
  layout = 'responsive',
  alt = '',
  src = '',
  ...props
}: NextFrontasticImage) {
  // eslint-disable-next-line @next/next/no-img-element
  if (!media?.mediaId) return <img src={src as string} alt={alt} {...props} />; //not a frontastic image

  //paremeters to inject in the source to be used in loader
  const paremeters = {
    ratio,
    gravity: gravity?.mode,
    x__coord: gravity?.coordinates?.x,
    y__coord: gravity?.coordinates?.y,
  };

  //query string construction
  const paremeterizedSrc = `${media.mediaId}?${Object.entries(paremeters)
    .map(([key, value]) => (value ? `${key}=${value}` : ''))
    .filter((val) => !!val) //remove empty strings returned from falsy values
    .join('&')}`;

  //width getter
  const getImageWidth = () => {
    //return the original width
    return +(width ?? media.width);
  };

  //height getter
  const getImageHeight = () => {
    //if ratio is not supplied return the original height
    if (!ratio) return +(baseHeight ?? media.height);
    //Use the crop ratio to calculate the height
    const [nominator, denominator] = ratio.split(':') as [string, string];
    return getImageWidth() * (+denominator / +nominator);
  };

  //layout fill doesn't make use of width and height
  if (layout === 'fill')
    return (
      <NextImage {...props} loader={frontasticCloudinaryLoader} layout={layout} src={paremeterizedSrc} alt={alt} />
    );

  return (
    <NextImage
      {...props}
      loader={frontasticCloudinaryLoader}
      width={getImageWidth()}
      height={getImageHeight()}
      src={paremeterizedSrc}
      layout={layout}
      alt={alt}
    />
  );
}

export * from './types';
export * from './loaders';
