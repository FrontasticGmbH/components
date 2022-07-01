import Typography from 'components/commercetools-ui/typography';
import { Reference, ReferenceLink } from 'helpers/reference';
import Image from 'frontastic/lib/image';

export interface TileProps {
  image: { media: any } | any;
  title: string;
  subtitle: string;
  ctaLabel?: string;
  ctaReference?: Reference;
}

const Tile: React.FC<TileProps> = ({ image, title, subtitle, ctaLabel, ctaReference }) => {
  return (
    <div className="relative flex justify-center p-2 align-middle">
      <div className="aspect-h-7 w-full md:aspect-h-3">
        <Image
          media={image.media ? image.media : { media: '' }}
          src={!image.media ? image : ''}
          className="object-cover object-top opacity-70 md:opacity-100"
          alt={'Tile Image'}
        />
      </div>

      <div className="absolute top-1/2 flex max-w-md -translate-y-1/2 flex-col justify-center text-center md:left-10 md:max-w-xl md:text-left">
        <div className="text-small mb-2 md:font-medium">
          <Typography>{subtitle}</Typography>
        </div>
        <h2
          className={`text-medium w-full whitespace-pre-line px-10 text-center font-extrabold tracking-tight text-black sm:px-0 sm:text-left md:text-4xl lg:w-60 lg:text-5xl`}
        >
          <Typography>{title}</Typography>
        </h2>

        {ctaLabel && ctaReference && (
          <div className="flex w-full justify-center md:justify-start">
            <ReferenceLink
              target={ctaReference}
              className=" mt-8 w-72 rounded-md border border-transparent bg-accent-400 py-2 px-4 text-center text-base font-semibold text-white hover:bg-accent-500 md:w-fit"
            >
              <Typography>{ctaLabel}</Typography>
            </ReferenceLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tile;
