import { FC } from 'react';
import { ArrowLongRightIcon } from '@heroicons/react/24/outline';
import Typography from 'components/commercetools-ui/atoms/typography';
import useImageSizes from 'helpers/hooks/useImageSizes';
import Image from 'frontastic/lib/image';
import { ContentSliderSlideProps } from './types';
import Link from '../../atoms/link';

const ContentSliderSlide: FC<ContentSliderSlideProps> = ({ image, title, ctaLabel, summary, ctaReference }) => {
  const tileImageSizes = useImageSizes({ md: 1, lg: 0.33, defaultSize: 0.33 });

  return (
    <Link link={ctaReference} className="w-full overflow-hidden">
      {image && (
        <div className="relative h-[220px] md:h-[356px]">
          <div className="absolute z-10 h-full w-full rounded-md bg-black opacity-20"></div>
          <Image {...image} sizes={tileImageSizes} className="mb-5 rounded-md" fill style={{ objectFit: 'cover' }} />
        </div>
      )}
      {title && (
        <Typography
          as="h4"
          className="mt-12 max-w-[90%] overflow-hidden text-ellipsis whitespace-pre text-20 text-primary-black"
        >
          {title}
        </Typography>
      )}
      {summary && <Typography className="mt-12 leading-[24px]">{summary}</Typography>}
      {ctaLabel && (
        <div className="mt-20 flex gap-1.5">
          <Typography className="hidden text-black md:block">{ctaLabel}</Typography>
          <ArrowLongRightIcon className="mt-2 h-20 w-24 text-secondary-black" />
        </div>
      )}
    </Link>
  );
};

export default ContentSliderSlide;
