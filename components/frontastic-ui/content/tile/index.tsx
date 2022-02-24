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
    <div className="relative bg-gray-800 py-32 px-6 sm:py-40 sm:px-12 lg:px-16">
      <div className="absolute inset-0 overflow-hidden">
        <Image media={image.media} className="w-full h-full object-center object-cover" alt={header} />
      </div>
      <div aria-hidden="true" className="absolute inset-0 bg-gray-900 bg-opacity-50" />
      <div className="relative max-w-3xl mx-auto flex flex-col items-center text-center">
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">{header}</h2>
        <Markdown className="mt-3 text-xl text-white" text={text} />
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
