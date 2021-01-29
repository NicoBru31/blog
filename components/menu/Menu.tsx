import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import SelectLang from './SelectLang';
import SelectTheme from './SelectTheme';

export default function Menu() {
  const { t } = useTranslation('common');

  return (
    <nav className='glassmorphism fixed w-full top-0 px-6 md:px-60 py-2 flex justify-between items-baseline'>
      <SelectLang />
      <Link href='/'>
        <a>{t('home')}</a>
      </Link>
      <SelectTheme />
    </nav>
  );
}
