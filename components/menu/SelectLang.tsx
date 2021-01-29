import * as React from 'react';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';
import { Dropdown, DropdownProps } from 'semantic-ui-react';

const countryOptions = [
  { key: 'fr', value: 'fr', flag: 'fr', text: 'France' },
  { key: 'en', value: 'en', flag: 'uk', text: 'English' },
];

export default function SelectLang() {
  const { lang } = useTranslation('common');
  const router = useRouter();

  const changeLang = (
    event: React.SyntheticEvent<HTMLElement, Event>,
    data: DropdownProps,
  ) => {
    if (typeof data.value === 'string') {
      router.push(router.route, router.route, { locale: data.value });
    }
  };

  return (
    <Dropdown
      className='w-32'
      defaultValue={lang}
      item
      options={countryOptions}
      selection
      simple
      onChange={changeLang}
    />
  );
}
