import { useState } from 'react';
import { useRouter } from 'next/router';
import languageMap from '../../project.config';

type Languages = keyof typeof languageMap;
type Translation = Record<Languages, string>;

const useI18n = () => {
  const router = useRouter();
  const [country] = useState('DE');

  const locale = languageMap[router.locale || router.defaultLocale];

  function translate(input: Translation | string): string {
    return typeof input === 'string' ? input : input[locale];
  }

  return { country, t: translate };
};

export default useI18n;
