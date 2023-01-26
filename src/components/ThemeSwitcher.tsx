import { BsSun, BsSunFill } from 'react-icons/bs';
import useTheme from '../hooks/useTheme';

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  const onClick = () => (theme === 'light' ? setTheme('dark') : setTheme('light'));

  return <button onClick={onClick}>{theme === 'light' ? <BsSun size={24} color='red' /> : <BsSunFill size={24} color='red' />}</button>;
};
export default ThemeSwitcher;
