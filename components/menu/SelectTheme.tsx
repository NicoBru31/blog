import { useTheme } from 'next-themes';
import { Icon } from 'semantic-ui-react';

export default function SelectTheme() {
  const { theme, setTheme } = useTheme();

  const switchTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  return (
    <button
      aria-label={`Toggle ${theme === 'light' ? 'dark' : 'light'} mode`}
      className='cursor-pointer'
      onClick={switchTheme}
    >
      <Icon
        bordered
        className='rounded'
        color='grey'
        inverted
        name={theme === 'light' ? 'moon' : 'sun'}
      />
    </button>
  );
}
