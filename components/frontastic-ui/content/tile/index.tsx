import Typography from 'components/frontastic-ui/typography';
import { Reference, ReferenceLink } from 'helpers/reference';
import Image from 'frontastic/lib/image';

export interface TileProps {
  image: { media: any } | any;
  subtitle: string;
  header: string;
  text: string;
  ctaLabel?: string;
  ctaReference?: Reference;
  headerColor?: string;
  textColor?: string;
}

const Tile: React.FC<TileProps> = ({
  image,
  subtitle,
  header,
  text,
  ctaLabel,
  ctaReference,
  headerColor = 'text-black',
  textColor = 'text-gray-400',
}) => {
  return (
    <div className="relative">
      <div className="w-full aspect-w-6 aspect-h-4 md:aspect-h-3">
        <Image
          media={image.media ? image.media : { media: '' }}
          src={!image.media ? image : ''}
          layout="fill"
          className="object-cover object-top opacity-70 md:opacity-100"
          alt={header}
        />
      </div>

      <div className="flex absolute top-1/2 left-4 flex-col -translate-y-1/2 md:left-10 md:max-w-[30%] text-start">
        <div className="mb-1 font-medium text-md">
          <Typography>{subtitle}</Typography>
        </div>

        <h2
          className={`whitespace-pre-line font-extrabold tracking-tight ${headerColor} text-center text-2xl sm:text-left lg:text-5xl`}
        >
          <Typography>{header}</Typography>
        </h2>

        {ctaLabel && ctaReference && (
          <ReferenceLink
            target={ctaReference}
            className="block py-2 px-4 mt-8 w-36 text-base font-medium text-white bg-accent-400 hover:bg-accent-500 rounded-md border border-transparent"
          >
            <Typography>{ctaLabel}</Typography>
          </ReferenceLink>
        )}
      </div>
    </div>
  );
};

export default Tile;
