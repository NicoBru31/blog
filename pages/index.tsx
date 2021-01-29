import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import Image from 'next/image';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import Menu from '../components/menu/Menu';
import { ACCOUNTS, LIBS } from '../constants';
import { InferGetStaticPropsType } from 'next';
import { Octokit } from '@octokit/rest';

export const getStaticProps = async () => {
  const octo = new Octokit();
  const { data } = await octo.repos.listForUser({
    username: 'NicoBru31',
  });
  console.log(data);
  return {
    props: {
      repos: data,
    },
  };
};

export default function Home({
  repos,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { t } = useTranslation('home');

  return (
    <>
      <Menu />
      <main className='text-center p-6 md:py-14 md:px-28'>
        <h1 className='text-3xl font-bold'>{t('title')}</h1>
        <p>{t('description')}</p>
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
        <section className='text-left mt-8'>
          <h2 className='text-xl font-bold'>{t('leaders')}</h2>
          <div className='flex justify-between'>
            {ACCOUNTS.map((account) => (
              <TwitterTimelineEmbed
                key={account}
                sourceType='profile'
                screenName={account}
                noFooter
                options={{ height: 400 }}
              />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
