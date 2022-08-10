import React from 'react';
import { useRouter } from 'next/router';
import { formatLocaleName } from 'helpers/utils/formatLocaleName';
import Dropdown, { DropdownProps } from 'components/commercetools-ui/dropdown';

interface Props {
  className: string;
}

const LanguageSwitcher: React.FC<Props> = ({ className }) => {
  const router = useRouter();

  const items: DropdownProps['items'] = router.locales.map((locale) => {
    return { label: formatLocaleName(locale), value: locale };
  });

  return (
    <div className={`relative inline-block text-left ${className}`}>
      <Dropdown
        defaultValue={router?.locale}
        items={items}
        onChange={(selectedValue) => {
          router.push(router.asPath, router.asPath, { locale: selectedValue });
        }}
      />
    </div>
  );
};

export default LanguageSwitcher;
