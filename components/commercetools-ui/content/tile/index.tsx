import Typography from 'components/commercetools-ui/typography';
import { Reference, ReferenceLink } from 'helpers/reference';
import Image, { MediaItemWithMods } from 'frontastic/lib/image';

export interface TileProps {
  image: MediaItemWithMods;
  title: string;
  titleColor?: string;
  subtitle: string;
  subtitleColor?: string;
  ctaLabel?: string;
  ctaReference?: Reference;
  titleFont?: string;
  subtitleFont?: string;
}

const Tile: React.FC<TileProps> = ({
  image,
  title,
  titleColor = 'text-black',
  titleFont = 'font-sans',
  subtitle,
  subtitleColor = 'text-black',
  subtitleFont = 'font-sans',
  ctaLabel,
  ctaReference,
}) => {
  return (
    <div className="relative flex justify-center overflow-hidden p-2 align-middle">
      <div className="w-full">
        <Image media={image} className="opacity-70 md:opacity-100" alt={title} />
      </div>

      <div className="absolute top-1/2 flex max-w-md -translate-y-1/2 flex-col justify-center text-center md:left-10 md:max-w-xl md:text-left">
        <div className={`text-md mb-2 md:font-medium ${subtitleFont} ${subtitleColor}`}>
          <Typography>{subtitle}</Typography>
        </div>
        <h2
          className={`w-full whitespace-pre-line px-10 text-center text-5xl font-extrabold ${titleFont} tracking-tight ${titleColor} sm:px-0 md:w-60 md:text-left md:text-4xl lg:text-5xl`}
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
