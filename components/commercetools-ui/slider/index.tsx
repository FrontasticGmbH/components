import React, { useState, FC, Children, CSSProperties } from 'react';
import classnames from 'classnames';
import { Navigation, Pagination, Thumbs } from 'swiper';
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react'; // eslint-disable-line import/no-unresolved
import 'swiper/css'; // eslint-disable-line import/no-unresolved
import 'swiper/css/navigation'; // eslint-disable-line import/no-unresolved
import 'swiper/css/pagination'; // eslint-disable-line import/no-unresolved
import 'swiper/css/scrollbar'; // eslint-disable-line import/no-unresolved

export type SliderProps = {
  className?: string;
  spaceBetween?: number;
  slidesPerView?: number;
  arrows?: boolean;
  dots?: boolean;
  fitToSlides?: boolean;
  slideWidth?: number;
  withThumbs?: boolean;
  overlapDots?: boolean;
} & SwiperProps;

const Slider: FC<SliderProps> = ({
  className,
  slideWidth,
  slidesPerView,
  fitToSlides = false,
  arrows = false,
  dots = true,
  spaceBetween = 20,
  overlapDots = false,
  withThumbs,
  children,
  ...props
}) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const validToFit: boolean = Boolean(fitToSlides) && Boolean(slideWidth) && Boolean(slidesPerView);
  const sliderWidth: CSSProperties['width'] = validToFit
    ? `${spaceBetween * (slidesPerView! - 1) + slideWidth! * slidesPerView!}px`
    : '';

  const slides = Children.map(children, (child) => (
    <SwiperSlide style={slideWidth ? { width: `${slideWidth}px` } : {}}>{child}</SwiperSlide>
  ));
  const thumbs = Children.map(children, (child) => (
    <SwiperSlide className="slider__thumb" style={{ height: '80px', overflow: 'hidden' }}>
      {child}
    </SwiperSlide>
  ));

  const containerClassName = classnames('slider__container', {
    'slider__container--fit': validToFit,
    'slider__container--with-thumbs': withThumbs,
  });
  const slidesClassName = classnames('slider', className);
  const thumbsClassName = classnames('slider__thumbs');

  const mainSlider = (
    <Swiper
      className={slidesClassName}
      modules={[Navigation, Pagination, Thumbs]}
      thumbs={{ swiper: thumbsSwiper }}
      pagination={dots ? { clickable: true, bulletActiveClass: 'slider__bullet--active' } : false}
      slidesPerView={slidesPerView ?? 'auto'}
      spaceBetween={spaceBetween}
      navigation={arrows}
      style={{ width: sliderWidth, paddingBottom: overlapDots ? 0 : 40 }}
      {...props}
    >
      {slides}
    </Swiper>
  );

  return (
    <div className={containerClassName}>
      {withThumbs ? (
        <>
          <div className="slider__thumbs">
            <Swiper
              className={thumbsClassName}
              modules={[Navigation, Thumbs]}
              navigation
              spaceBetween={15}
              slidesPerView={5}
              direction={'vertical'}
              watchSlidesProgress
              onSwiper={setThumbsSwiper}
            >
              {thumbs}
            </Swiper>
          </div>
          <div className="slider__slides">{mainSlider}</div>
        </>
      ) : (
        mainSlider
      )}
    </div>
  );
};

export default Slider;
