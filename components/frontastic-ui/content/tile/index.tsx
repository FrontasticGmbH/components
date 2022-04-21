import { Reference, ReferenceLink } from 'helpers/Reference';
import Image from 'frontastic/lib/image';
import Typography from 'components/frontastic-ui/typography';

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
      <div className="aspect-w-6 aspect-h-4 w-full md:aspect-h-3">
        <Image
          media={image.media ? image.media : { media: '' }}
          src={!image.media ? image : ''}
          layout="fill"
          className="object-cover object-top opacity-70 md:opacity-100"
          alt={header}
        />
      </div>

      <div className="text-start absolute left-4 top-1/2 flex -translate-y-1/2 flex-col md:left-10 md:max-w-[30%]">
        <div className="text-md mb-1 font-medium">
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
            className="mt-8 block w-36 rounded-md border border-transparent bg-[#CE3E72] py-2 px-4 text-base font-medium text-white hover:bg-[#B22C5D]"
          >
            <Typography>{ctaLabel}</Typography>
          </ReferenceLink>
        )}
      </div>
    </div>
  );
};

export default Tile;
