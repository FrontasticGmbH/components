import React from 'react';
import SlickSlider from 'react-slick';

type Props = {
  options?: any;
  children?: React.ReactNode;
  afterChange?: void;
};

export const Slider: React.FC<Props> = ({ options, children, afterChange }: Props) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    ...options,
  };

  return (
    <SlickSlider {...settings} afterChange={afterChange}>
      {children}
    </SlickSlider>
  );
};
