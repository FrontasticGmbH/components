import React from 'react';
// import Reference from '@frontastic/catwalk/src/js/component/reference';
import useBackgroundImageUrl from '@frontastic/catwalk/src/js/helper/hooks/useBackgroundImageUrl';
import { ReferenceLink, type Reference } from 'helpers/reference';
import Image from 'frontastic/lib/image';
import { MediaItemWithMods as MediaItem } from 'frontastic/lib/image/types';

import Cta from './components/CallToAction';
// types

const OrderingEnum = {
  CopyCtaImg: 'copy-cta-img',
  CopyImgCta: 'copy-img-cta',
  ImgCopyCta: 'img-copy-cta',
};

type FgPos = 'left-top' | 'top' | 'right-top' | 'left' | 'center' | 'right' | 'left-bottom' | 'bottom' | 'right-bottom';
type FgSize = '50%' | '60%' | '70%' | '80%' | '90%' | '100%';
type FontSize = 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl';
type Align = 'left' | 'center' | 'right';
type Theme = 'light' | 'dark';
export type CtaColor = 'primary' | 'secondary' | 'neutral';
type Ordering = typeof OrderingEnum[keyof typeof OrderingEnum];

export interface TileTasticData {
  bgColor?: string;
  bgImage?: { media: MediaItem };
  contentPos: FgPos;
  fgImage?: { media: MediaItem };
  fgAlign: Align;
  fgSize: FgSize;
  fgIsFullWidth: boolean;
  headline: string;
  isHeadlineBold: boolean;
  headlineSize: FontSize;
  subhead: string;
  isSubheadBold: boolean;
  subheadSize: FontSize;
  ctaLabel: string;
  ctaColor: CtaColor;
  ctaIsButton: boolean;
  reference: Reference;
  isClickable: boolean;
  theme: Theme;
  ordering: Ordering;
  isFullWidth: boolean;
}

function FullPageWidthWrapper({ children, className = '' }) {
  return (
    <div
      className={className}
      style={{
        width: '100vw',
        position: 'relative',
        left: '50%',
        right: '50%',
        marginLeft: '-50vw',
        marginRight: '-50vw',
      }}
    >
      {children}
    </div>
  );
}

const Hero = ({
  bgColor,
  bgImage,
  contentPos,
  fgImage,
  fgAlign,
  fgSize,
  headline,
  isHeadlineBold,
  headlineSize,
  subhead,
  isSubheadBold,
  subheadSize,
  ctaLabel,
  ctaColor,
  ctaIsButton,
  reference,
  isClickable,
  theme,
  ordering,
  fgIsFullWidth,
  isFullWidth,
}: TileTasticData) => {
  //const DivOrReference = isClickable && reference ? Reference : 'div';
  console.log('reference', reference);
  const DivOrReference = isClickable && reference ? ReferenceLink : 'div';

  // this could've gone easily as values into the schema,
  // but I prefer the schema not having knowledge of
  // which centering mechanism (flex, grid, abs) we use here
  const fgPosCss: { [key in FgPos]: string } = {
    'left-top': 'justify-start items-start',
    top: 'justify-center items-start',
    'right-top': 'justify-end items-start',
    left: 'justify-start items-center',
    center: 'justify-center items-center h-full w-full',
    right: 'justify-end items-center',
    'left-bottom': 'justify-start items-end',
    bottom: 'justify-center items-end',
    'right-bottom': 'justify-end items-end',
  };
  const fgAlignToFlex: { [key in Align]: string } = {
    left: 'items-start',
    center: 'items-center',
    right: 'items-end',
  };
  const themeToTextColor: { [key in Theme]: string } = {
    light: 'text-black',
    dark: 'text-white',
  };
  const fontSizeClass: { [key in FontSize]: string } = {
    base: 'text-base',
    lg: 'text-lg',
    xl: 'text-lg md:text-xl',
    '2xl': 'text-lg md:text-2xl',
    '3xl': 'text-xl md:text-3xl',
    '4xl': 'text-2xl md:text-4xl',
    '5xl': 'text-2xl md:text-5xl',
  };

  // Just a little DRY. The copy doesn't
  // technically need it's own render function,
  // but this way we have all the elements in one place
  const renderImage = () => {
    console.log('fg', fgImage);
    return (
      fgImage && (
        <div className="relative w-full">
          <Image
            className={`mt-6 w-full flex-1 bg-contain bg-center bg-no-repeat`}
            layout="responsive"
            objectFit="contain"
            media={fgImage.media}
            alt=""
          />
        </div>
      )
    );
  };
  // only render Cta when the whole tile is not clickable. Nested a tags are a big No-No!
  const renderCta = () =>
    !isClickable && <Cta label={ctaLabel} reference={reference} color={ctaColor} isButton={ctaIsButton} />;
  const renderCopy = () => (
    <>
      {headline && (
        <h2
          className={`mb-6 ${themeToTextColor[theme]} ${fontSizeClass[headlineSize]} ${
            isHeadlineBold ? 'font-bold' : ''
          }`}
        >
          {headline}
        </h2>
      )}
      {subhead && (
        <h3
          className={`mb-6 ${themeToTextColor[theme]} ${fontSizeClass[subheadSize]} ${
            isSubheadBold ? 'font-bold' : ''
          } leading-tight`}
        >
          {subhead}
        </h3>
      )}
    </>
  );

  // main render offloaded to a function because of conditional rendering (fullwidth yes/no)
  const content = (
    <DivOrReference
      className="relative block overflow-hidden"
      style={{ backgroundColor: bgColor }}
      target={reference || undefined}
    >
      {/*
       * Background
       */}
      <div className="relative w-full">
        {bgImage && <Image alt={headline || ''} className="w-full" media={bgImage} />}
      </div>

      {/*
       * Main Content / Foreground
       */}
      <div className={`absolute top-0 left-0 flex ${fgPosCss[contentPos]} h-full w-full overflow-hidden`}>
        <div
          className={`relative inline-block ${fgIsFullWidth ? 'w-full' : ''} flex flex-col p-3 md:p-8 md:px-24 ${
            fgAlignToFlex[fgAlign]
          } text-${fgAlign}`}
          style={{ height: fgSize }}
        >
          {/* rendering the 3 elements copy, img, cta based on the set order */}
          {ordering === OrderingEnum.ImgCopyCta && renderImage()}
          {renderCopy()}
          {ordering === OrderingEnum.CopyCtaImg && renderCta()}
          {ordering !== OrderingEnum.ImgCopyCta && renderImage()}
          {ordering !== OrderingEnum.CopyCtaImg && renderCta()}
        </div>
      </div>
    </DivOrReference>
  );

  if (isFullWidth) {
    return <FullPageWidthWrapper>{content}</FullPageWidthWrapper>;
  }

  return content;
};

export default Hero;
