import React from 'react';
import { useRouter } from 'next/router';

export const normalize = (content: string, locale: string) => {
  return (typeof content === 'string' ? content : content[locale]) ?? '';
};

export interface TypographyProps {
  children?: string;
}

const Typography: React.FC<TypographyProps> = ({ children }) => {
  //next/router
  const router = useRouter();

  //locale
  const locale = router?.locale || router?.defaultLocale;

  //normalize content
  const normalized = children && normalize(children, locale);

  return <>{normalized}</>;
};

export default Typography;
