import s from './GithubActivity.module.scss';
import GitHubCalendar from 'react-github-calendar';

const GithubActivity = () => {
  const colorThemeLight = {
    background: 'transparent',
    text: '#ffffff',
    level4: 'rgba(26, 176, 124)',
    level3: 'rgba(42, 186, 134, .8)',
    level2: 'rgba(50, 192, 144, .6)',
    level1: 'rgba(66, 198, 154, .4)',
    level0: '#ecd9fc',
  };
  const colorThemeDark = {
    background: 'transparent',
    text: '#ffffff',
    level4: 'rgb(0, 255, 255)',
    level3: 'rgb(50, 255, 255)',
    level2: 'rgb(100, 255, 255)',
    level1: 'rgb(140, 255, 255)',
    level0: '#ecd9fc',
  };
  return (
    <div className={s.container}>
      <GitHubCalendar
        username="VictorArdila"
        blockSize={15}
        blockMargin={5}
        theme={colorThemeLight}
        fontSize={16}
      />
    </div>
  );
};

export default GithubActivity;
