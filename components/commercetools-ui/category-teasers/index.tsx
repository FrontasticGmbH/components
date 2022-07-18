import useI18n from 'helpers/hooks/useI18n';
import { Reference } from 'helpers/reference';
import Image, { MediaItemWithMods } from 'frontastic/lib/image';

export type CategoryTeaser = {
  image: MediaItemWithMods;
  linkLabel: string;
  linkReference: Reference;
};

export default function CategoryTeasers({ items }) {
  const { t } = useI18n();
  return (
    <div className="space-y-2 p-2 sm:flex sm:space-y-0 sm:space-x-2">
      {items.map(
        (item: CategoryTeaser) =>
          item.image && (
            <div key={item.image.media.mediaId} className="group relative aspect-3/4 flex-1 overflow-hidden">
              <div className="absolute inset-0">
                <p className="absolute inset-0 z-10 bg-black/0 text-white group-hover:bg-black/70">
                  <a href="#" className="absolute top-1/2 hidden w-full -translate-y-1/2 text-center group-hover:block">
                    &gt; {t(item.linkLabel)}
                  </a>
                </p>
                <Image
                  media={item.image}
                  alt={item.image.media.name}
                  className="transition duration-500 ease-in-out group-hover:scale-110"
                />
              </div>
            </div>
          ),
      )}
    </div>
  );
}
