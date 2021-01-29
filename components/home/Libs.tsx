import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import Image from 'next/image';
import { LIBS } from '../../constants';

export default function Libs() {
  const { t } = useTranslation('home');

  return (
    <section className='text-left mt-8'>
      <h2 className='text-xl font-bold'>{t('libs')}</h2>
      {LIBS.map((lib) => (
        <Link href={lib.site} key={lib.name} passHref>
          <a
            className='flex justify-start items-center mb-2'
            style={{ width: 'fit-content' }}
            target='_blank'
            rel='noreferrer'
          >
            <Image height={20} src={`${lib.site}${lib.icon}`} width={20} />
            <p className='ml-2'>{lib.name}</p>
          </a>
        </Link>
      ))}
    </section>
  );
}
