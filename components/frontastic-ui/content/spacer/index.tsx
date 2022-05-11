import React from 'react';
import useMediaQuery from 'helpers/hooks/useMediaQuery';
import * as screenSizes from 'helpers/utils/screensizes';

export type SpacerProps = {
  variant?: 'sm' | 'md' | 'lg' | 'custom';
  customDesktop?: number;
  customMobile?: number;
};

const Spacer: React.FC<SpacerProps> = ({ customDesktop, customMobile, variant = 'md' }) => {
  //responsivness
  const [isLargerThanDesktop] = useMediaQuery(screenSizes.desktop);

  //pre defined variants
  const variants = {
    sm: isLargerThanDesktop ? 24 : 16,
    md: isLargerThanDesktop ? 32 : 24,
    lg: isLargerThanDesktop ? 56 : 32,
  } as Record<typeof variant, number>;

  //if custom px specified
  const custom = isLargerThanDesktop ? customDesktop : customMobile;

  //applied styles
  const margin = !!custom ? custom : variants[variant];

  return <div style={{ marginTop: `${margin}px` }} />;
};

export default Spacer;
