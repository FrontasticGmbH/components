import React from 'react';
import Tile from './Tile';
import { Product } from '../../../../../types/product/Product';
import Slider, { SliderProps } from 'components/frontastic-ui/slider';
import useMediaQuery from 'helpers/hooks/useMediaQuery';
import { mediumDesktop } from 'helpers/utils/screensizes';
import { ReferenceLink, Reference } from 'helpers/Reference';

interface Props {
  products: Product[];
  title: string;
  ctaLabel: string;
  ctaLink: Reference;
}

export default function ProductSlider({ products, title, ctaLabel, ctaLink }: Props) {
  const [isDesktopSize] = useMediaQuery(mediumDesktop);

  const commonSliderProps: SliderProps = {
    dots: false,
  };

  const sliderFixedMood: SliderProps = {
    slidesPerView: 4,
    arrows: true,
    ...commonSliderProps,
  };
  const sliderEasyMood: SliderProps = { ...commonSliderProps };
  const sliderConfiguration: SliderProps = isDesktopSize ? sliderFixedMood : sliderEasyMood;

  return (
    <div className="bg-white py-4 lg:max-w-7xl lg:mx-auto">
      <div className="px-4 flex items-center justify-between sm:px-6 lg:px-0">
        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">{title}</h2>
        {ctaLabel && ctaLink && (
          <ReferenceLink
            target={ctaLink}
            className="hidden sm:block text-sm font-semibold text-indigo-600 hover:text-indigo-500"
          >
            {ctaLabel}
            <span aria-hidden="true"> &rarr;</span>
          </ReferenceLink>
        )}
      </div>

      <div className="mt-8 relative">
        <div className="relative w-full pb-6 -mb-6 overflow-x-auto">
          <Slider {...sliderConfiguration}>
            {products.map((product, index: number) => (
              <Tile {...product} key={index} />
            ))}
          </Slider>
        </div>
      </div>

      {ctaLabel && ctaLink && (
        <div className="mt-12 flex px-4 sm:hidden">
          <ReferenceLink target={ctaLink} className="text-sm font-semibold text-indigo-600 hover:text-indigo-500">
            {ctaLabel}
            <span aria-hidden="true"> &rarr;</span>
          </ReferenceLink>
        </div>
      )}
    </div>
  );
}
