import { Reference, ReferenceLink } from 'helpers/Reference';
import Image from 'frontastic/lib/image';
import Markdown from 'frontastic/lib/markdown';
interface Props {
  image: {
    media: any;
  };
  subtitle: string;
  header: string;
  text: string;
  ctaLabel?: string;
  ctaReference?: Reference;
  headerColor?: string;
  textColor?: string;
}

const Tile: React.FC<Props> = ({
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
          media={image.media}
          layout="fill"
          className="object-cover object-top opacity-70 md:opacity-100"
          alt={header}
        />
      </div>

      <div className="text-start absolute left-4 top-1/2 flex -translate-y-1/2 flex-col md:left-10 md:max-w-[30%]">
        <div className="mb-1 text-md font-medium">
          {subtitle}
        </div>

        <h2
          className={`whitespace-pre-line font-extrabold tracking-tight ${headerColor} text-center sm:text-left text-2xl lg:text-5xl`}
        >
          {header}
        </h2>

        {ctaLabel && ctaReference && (
          <ReferenceLink
            target={ctaReference}
            className="mt-8 py-2 px-4 block bg-[#CE3E72] border border-transparent rounded-md text-base font-medium text-white hover:bg-[#B22C5D] w-36"
          >
            {ctaLabel}
          </ReferenceLink>
        )}
      </div>
    </div>
  );
};

export default Tile;
