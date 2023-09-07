import { useMemo } from 'react';
// import s from './BtnToggleTheme.module.scss';
import Button from '../UIElements/Button/Button';
import { useThemeContext } from '../../hooks/themeHook/themeHook';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCloudMoon, faCloudSun} from '@fortawesome/free-solid-svg-icons';

const BtnToggleTheme = ({ className }) => {
  const { dark, toggleTheme } = useThemeContext();

  const ToggleThemeIcon = useMemo(
    () => (dark ? faCloudSun : faCloudMoon),
    [dark],
  );

  return (
    <Button
      addClass={className}
      onClick={toggleTheme}
      label="theme toggle"
    >
      <FontAwesomeIcon icon={ToggleThemeIcon} />
    </Button>
  );
};

export default BtnToggleTheme;
