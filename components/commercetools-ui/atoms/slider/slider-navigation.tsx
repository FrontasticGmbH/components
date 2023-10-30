import React, { CSSProperties, FC, LegacyRef } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import SwiperType from 'swiper';

export type SliderNavigationProps = {
  compactNavigation?: boolean;
  arrows?: boolean;
  innerArrows?: boolean;
  solidArrows?: boolean;
  prevButtonStyles?: CSSProperties;
  nextButtonStyles?: CSSProperties;
  prevArrowStyles?: CSSProperties;
  nextArrowStyles?: CSSProperties;
  totalSlides?: number;
  swiperRef?: SwiperType;
  navigationPrevRef?: LegacyRef<HTMLDivElement>;
  navigationNextRef?: LegacyRef<HTMLDivElement>;
};

const SliderNavigation: FC<SliderNavigationProps> = ({
  compactNavigation,
  arrows,
  innerArrows,
  solidArrows,
  prevButtonStyles,
  nextButtonStyles,
  prevArrowStyles,
  nextArrowStyles,
  totalSlides,
  navigationPrevRef,
  navigationNextRef,
  swiperRef,
}) => {
  const compactNavigationArrowsStyle = {
    className: 'h-20 w-20 hover:cursor-pointer',
    strokeWidth: 1,
    color: '#959595',
  };

  if (compactNavigation)
    return (
      <div className="mt-10 flex justify-center gap-16">
        <ChevronLeftIcon {...compactNavigationArrowsStyle} onClick={() => swiperRef?.slidePrev()} />
        <div className="flex font-body text-14 font-regular leading-loose text-secondary-black">
          <span>{((swiperRef?.activeIndex ?? 0) % (totalSlides ?? 1)) + 1}</span>
          <span>/</span>
          <span>{totalSlides}</span>
        </div>
        <ChevronRightIcon {...compactNavigationArrowsStyle} onClick={() => swiperRef?.slideNext()} />
      </div>
    );

  const innerArrowsClassName = innerArrows ? 'slider_arrow_inner' : '';
  const solidArrowsClassName = solidArrows ? 'slider_arrow_solid' : '';

  return (
    <div style={{ display: arrows ? 'block' : 'none' }}>
      <div
        ref={navigationPrevRef}
        className={`slider_arrow slider_arrow_prev ${innerArrowsClassName} ${solidArrowsClassName}`}
        style={prevButtonStyles}
      >
        <span className={`arrow`} style={prevArrowStyles}></span>
      </div>
      <div
        ref={navigationNextRef}
        className={`slider_arrow slider_arrow_next ${innerArrowsClassName} ${solidArrowsClassName}`}
        style={nextButtonStyles}
      >
        <span className={`arrow`} style={nextArrowStyles}></span>
      </div>
    </div>
  );
};

export default SliderNavigation;
