import { useRouter } from 'next/router';
import React from 'react';

export const normalize = (content: string, locale = 'de_CH') => {
  return (typeof content === 'string' ? content : content[locale]) ?? '';
};

export interface TypographyProps {
  children?: string;
}

const Typography: React.FC<TypographyProps> = ({ children }) => {
  //next/router
  const router = useRouter();

  //normalize content
  const normalized = normalize(children, router?.locale);

  return <>{normalized}</>;
};

export default Typography;
