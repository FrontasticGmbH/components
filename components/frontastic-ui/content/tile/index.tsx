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
  return (
    <div className="fixed-screen-width md:relative-width relative">
      <div className=" aspect-w-6 h-96 w-full">
        <Image media={image.media} layout="fill" className="object-cover object-top" alt={header} />
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform text-center md:left-1/4 md:w-96">
        <h2 className="whitespace-pre-line  text-center text-4xl font-extrabold tracking-tight text-[#25304D] sm:text-left  lg:text-5xl">
          {header}
        </h2>
        <Markdown className="text-md mt-3 text-center text-gray-400 sm:text-left md:text-lg lg:pl-2" text={text} />
      </div>
    </div>
  );
};

export default Tile;
