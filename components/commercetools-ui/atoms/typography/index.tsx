import React, { createElement, Fragment, ReactElement, useCallback } from 'react';
import { useParams } from 'next/navigation';
import { useFormat } from 'helpers/hooks/useFormat';
import { TypographyProps } from './types';
import Skeleton from '../skeleton';

const Typography: React.FC<TypographyProps> = ({
  children,
  className = '',
  translation,
  as = 'p',
  asSkeleton = false,
  ...props
}) => {
  const { locale } = useParams();

  const { formatMessage } = useFormat({ name: translation?.file });

  const getContent = useCallback(() => {
    // Check if the children has different locales
    if (typeof children !== 'string') {
      // Update text based on locale
      return children?.[locale as string];
    }

    // Check if there is translation
    if (translation) {
      const content = formatMessage({ id: translation.id, defaultMessage: children });
      return content;
    }

    return children;
  }, [formatMessage, locale, translation, children]);

  // Constructing default props of the element
  const elementProps: ReactElement['props'] = {
    className: `${className} relative`,
    ...props,
  };

  const TypographyElement = createElement(
    as == 'fragment' ? Fragment : as,
    as !== 'fragment' && elementProps,
    <>
      {asSkeleton && <Skeleton />}
      {getContent()}
    </>,
  );

  return TypographyElement;
};

export default Typography;
