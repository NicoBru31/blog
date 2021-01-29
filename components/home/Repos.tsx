import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';

interface Props {
  repos: {
    id: number;
    html_url: string;
    name: string;
  }[];
}

export default function Repos({ repos }: Props) {
  const { t } = useTranslation('home');
  return (
    <section className='text-left mt-8'>
      <h2 className='text-xl font-bold'>{t('repos')}</h2>
      {repos.map((repo) => (
        <Link key={repo.id} href={repo.html_url} passHref>
          <a
            className='flex justify-start items-center mb-2'
            style={{ width: 'fit-content' }}
            target='_blank'
            rel='noreferrer'
          >
            <p className=''>{repo.name}</p>
          </a>
        </Link>
      ))}
      <Link href='https://lebongustave.com' passHref>
        <a
          className='flex justify-start items-center mb-2'
          style={{ width: 'fit-content' }}
          target='_blank'
          rel='noreferrer'
        >
          <p className=''>Le Bon Gustave - site</p>
        </a>
      </Link>
      <Link
        href='https://play.google.com/store/apps/details?id=com.alienfx.lebongustave.app'
        passHref
      >
        <a
          className='flex justify-start items-center mb-2'
          style={{ width: 'fit-content' }}
          target='_blank'
          rel='noreferrer'
        >
          <p className=''>Le Bon Gustave - application</p>
        </a>
      </Link>
    </section>
  );
}
