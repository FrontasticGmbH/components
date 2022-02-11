import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

type Props = {
  className?: string;
};

export const LanguageSwitcher: React.FC<Props> = ({ className }: Props) => {
  const router = useRouter();

  useEffect(() => {
    if (router.locale !== router.defaultLocale) {
      const date = new Date();
      const expireMs = 100 * 365 * 24 * 60 * 60 * 1000; // 100 days
      date.setTime(date.getTime() + expireMs);
      document.cookie = `NEXT_LOCALE=${router.locale};expires=${date.toUTCString()};path=/`;
    }
  }, [router.locale, router.defaultLocale]);

  return (
    <select
      className={`${className} uppercase`}
      value={router.locale}
      onChange={(event) => {
        router.push(router.asPath, router.asPath, { locale: event.target.value, scroll: false });
      }}
    >
      {router.locales.map((locale, i: number) => {
        return (
          <option key={i} value={locale}>
            {locale.substring(0, 2)}
          </option>
        );
      })}
    </select>
  );
};
