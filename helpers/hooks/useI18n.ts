import { useState } from 'react';
import { useRouter } from 'next/router';
import { languageMapper } from '../../project.config';

type Languages = keyof typeof languageMapper;
type Translation = Record<Languages, string>;

const useI18n = () => {
  const router = useRouter();
  const [country] = useState('DE');

  const locale = languageMapper[router.locale || router.defaultLocale];

  function translate(input: Translation | string): string {
    return typeof input === 'string' ? input : input[locale];
  }

  return { country, t: translate };
};

export default useI18n;
