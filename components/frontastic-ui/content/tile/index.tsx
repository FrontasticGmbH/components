import { Reference, ReferenceLink } from 'helpers/Reference';
import Image from 'frontastic/lib/image';
import Markdown from 'frontastic/lib/markdown';

interface Props {
  image: {
    media: any;
  };
  header: string;
  text: string;
  ctaLabel?: string;
  ctaReference?: Reference;
}

const Tile: React.FC<Props> = ({ image, header, text, ctaLabel, ctaReference }) => {
  const showCta: boolean = Boolean(ctaLabel && ctaReference);

  return (
    <div className="relative">
      <div className=" w-full aspect-w-6 aspect-h-2">
        <Image media={image.media} layout="fill" className="object-top object-cover" alt={header} />
      </div>

      <div className="absolute left-10 top-1/2 -translate-y-1/2 flex flex-col text-start max-w-[30%]">
        <h2 className="text-3xl font-extrabold tracking-tight text-black sm:text-5xl whitespace-pre-line">{header}</h2>
        <Markdown className="mt-3 text-lg text-gray-400 pl-2" text={text} />
        {showCta && (
          <ReferenceLink
            target={ctaReference}
            className="mt-8 w-full block bg-white border border-transparent rounded-md py-3 px-8 text-base font-medium text-gray-900 hover:bg-gray-100 sm:w-auto"
          >
            {ctaLabel}
          </ReferenceLink>
        )}
      </div>
    </div>
  );
};

export default Tile;
