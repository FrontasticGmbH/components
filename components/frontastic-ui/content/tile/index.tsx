import Typography from 'components/frontastic-ui/typography';
import { Reference, ReferenceLink } from 'helpers/reference';
import Image from 'frontastic/lib/image';

export interface TileProps {
  image: { media: any } | any;
  imageAlt: string;
  title: string;
  subtitle: string;
  ctaLabel?: string;
  ctaReference?: Reference;
}

const Tile: React.FC<TileProps> = ({ image, imageAlt, title, subtitle, ctaLabel, ctaReference }) => {
  return (
    <div className="relative flex justify-center align-middle">
      <div className="aspect-w-6 aspect-h-7 w-full md:aspect-h-3">
        <Image
          media={image.media ? image.media : { media: '' }}
          src={!image.media ? image : ''}
          layout="fill"
          className="object-cover object-top opacity-70 md:opacity-100"
          alt={imageAlt}
        />
      </div>

      <div className="absolute top-1/2 flex max-w-md -translate-y-1/2 flex-col justify-center text-center md:left-10 md:max-w-xl md:text-left">
        <div className="mb-2 text-base font-medium">
          <Typography>{subtitle}</Typography>
        </div>
        <h2
          className={`w-full whitespace-pre-line px-10 text-center text-4xl font-extrabold tracking-tight text-black sm:px-0 sm:text-left lg:w-60 lg:text-5xl`}
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
