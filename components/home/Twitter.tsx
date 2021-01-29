import useTranslation from 'next-translate/useTranslation';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import { ACCOUNTS } from '../../constants';

export default function Twitter() {
  const { t } = useTranslation('home');
  return (
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
  );
}
