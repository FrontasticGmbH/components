import React from 'react';
import { MoonIcon, SunIcon } from '@heroicons/react/outline';
import { useDarkMode } from 'frontastic/provider';

export interface Props {
  className?: string;
}

const DarkModeWidget: React.FC<Props> = ({ className }) => {
  //Context
  const { enabled, toggle } = useDarkMode();

  //Icon to display based on active mode
  const Icon = enabled ? SunIcon : MoonIcon;

  return <>{<Icon className={`h-6 w-6 cursor-pointer ${className}`} aria-hidden="true" onClick={toggle} />}</>;
};

export default DarkModeWidget;
