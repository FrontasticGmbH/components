import React from 'react';
import Slider, { SliderProps } from 'components/frontastic-ui/slider';
import useMediaQuery from 'helpers/hooks/useMediaQuery';
import { ReferenceLink, Reference } from 'helpers/reference';
import { mobile, tablet, desktop } from 'helpers/utils/screensizes';
import { Product } from '../../../../../types/product/Product';
import Tile from './tile';
// import Tile from './Tile';

export interface Props {
  products: Product[];
  title: string;
  subline?: string;
  ctaLabel: string;
  ctaLink: Reference;
}

export default function ProductSlider({ products, title, subline, ctaLabel, ctaLink }: Props) {
  const [isMobileSize] = useMediaQuery(mobile);
  const [isTabletSize] = useMediaQuery(tablet);
  const [isDesktopSize] = useMediaQuery(desktop);

  const sliderFixedMood: SliderProps = {
    slidesPerView: isMobileSize ? (isTabletSize ? (isDesktopSize ? 4 : 3) : 2) : 1,
    arrows: isMobileSize ? true : false,
    dots: isMobileSize ? false : true,
  };

  const sliderConfiguration: SliderProps = sliderFixedMood;

  return (
    <div className="py-4 bg-white lg:mx-auto lg:max-w-7xl">
      <div className="text-center w-100">
        <h2 className="text-xl tracking-tight text-gray-400">{subline}</h2>
        <h2 className="mt-2 text-4xl font-extrabold tracking-tight text-gray-900">{title}</h2>
      </div>
      {ctaLabel && ctaLink && (
        <div className="flex justify-end items-center px-4 sm:px-6 lg:px-0">
          <ReferenceLink target={ctaLink} className="hidden text-sm font-semibold text-accent-400 sm:block">
            {ctaLabel}
            <span aria-hidden="true"> &rarr;</span>
          </ReferenceLink>
        </div>
      )}
      <div className="relative mt-8">
        <div className="overflow-x-auto relative pb-6 -mb-6 w-full">
          <Slider {...sliderConfiguration}>
            {products.slice(0, 15).map((product, index: number) => (
              <Tile {...product} key={index} />
            ))}
          </Slider>
        </div>
      </div>

      {ctaLabel && ctaLink && (
        <div className="flex px-4 mt-12 sm:hidden">
          <ReferenceLink target={ctaLink} className="text-sm font-semibold text-accent-400 hover:text-accent-500">
            {ctaLabel}
            <span aria-hidden="true"> &rarr;</span>
          </ReferenceLink>
        </div>
      )}
    </div>
  );
}
