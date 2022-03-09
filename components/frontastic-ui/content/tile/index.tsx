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
    <div className="relative fixed-screen-width md:relative-width">
      <div className=" w-full aspect-w-6 aspect-h-2">
        <Image media={image.media} layout="fill" className="object-top object-cover" alt={header} />
      </div>

      <div className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 flex flex-col text-start max-w-[40%] md:max-w-[30%]">
        <h2 className="text-md md:text-2xl lg:text-5xl font-extrabold tracking-tight text-black whitespace-pre-line">{header}</h2>
        <Markdown className="mt-3 text-sm md:text-lg text-gray-400 lg:pl-2" text={text} />
      </div>
    </div>
  );
};

export default Tile;
