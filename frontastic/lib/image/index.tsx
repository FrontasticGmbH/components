import NextImage from 'next/image';
import { frontasticCloudinaryLoader } from './loaders';
import { NextFrontasticImage } from './types';

export default function Image({
  width,
  height: baseHeight,
  ratio,
  media: mediaProp,
  gravity,
  layout = 'responsive',
  src,
  alt = '',
  ...props
}: NextFrontasticImage) {
  // if src is provided, we need to render a normal img
  // eslint-disable-next-line @next/next/no-img-element
  if (src) return <img src={src} alt={alt} {...props} />; //not a frontastic image

  // The api used to be that we supply the media object,
  // ratio and gravity seperately. But, it's more elegant
  // to just supply the image object from the studio
  // and let the component figure out the rest.
  // <Image media={image.media} gravity={image.gravity} ratio={image.ratio} />
  // versus
  // <Image media={image} />
  // This conditional makes sure that either works..
  let media;
  if (mediaProp.mediaId) {
    media = mediaProp;
  } else {
    media = mediaProp.media;
    gravity = mediaProp.gravity;
    ratio = mediaProp.ratio;
  }

  //parameters to inject in the source to be used in loader
  const parameters = {
    ratio: ratio,
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
      <NextImage {...props} loader={frontasticCloudinaryLoader} layout={layout} src={parameterizedSrc} alt={alt} />
    );

  return (
    <NextImage
      {...props}
      loader={frontasticCloudinaryLoader}
      width={getImageWidth()}
      height={getImageHeight()}
      src={parameterizedSrc}
      layout={layout}
      alt={alt}
    />
  );
}

export * from './types';
export * from './loaders';
