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
      <div className=" aspect-w-6 aspect-h-2 w-full">
        <Image media={image.media} layout="fill" className="object-cover object-top" alt={header} />
      </div>

      <div className="text-start absolute left-4 top-1/2 flex max-w-[40%] -translate-y-1/2 flex-col md:left-10 md:max-w-[30%]">
        <h2 className="text-md whitespace-pre-line font-extrabold tracking-tight text-black md:text-2xl lg:text-5xl">
          {header}
        </h2>
        <Markdown className="mt-3 text-sm text-gray-400 md:text-lg lg:pl-2" text={text} />
      </div>
    </div>
  );
};

export default Tile;
