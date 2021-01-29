import { Octokit } from '@octokit/rest';
import { InferGetStaticPropsType } from 'next';
import useTranslation from 'next-translate/useTranslation';
import Libs from '../components/home/Libs';
import Repos from '../components/home/Repos';
import Twitter from '../components/home/Twitter';
import Menu from '../components/menu/Menu';

export const getStaticProps = async () => {
  const octo = new Octokit();
  const { data } = await octo.repos.listForUser({ username: 'NicoBru31' });
  return { props: { repos: data } };
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
        <Libs />
        <Repos repos={repos} />
        <Twitter />
      </main>
    </>
  );
}
