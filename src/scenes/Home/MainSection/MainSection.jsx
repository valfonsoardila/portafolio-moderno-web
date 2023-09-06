import s from './MainSection.module.scss';
import homeMainRobot from '../../../assets/imgs/robot.gif';
import homeMainAstronaut from '../../../assets/imgs/astronaut.gif';
import Typewriter from '../../../components/UIElements/Typewriter/Typewriter';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const MainSection = () => {
  return (
    <section className={s.content}>
      <div className={s.header}>
        <h2 style={{ paddingBottom: 15 }} className={s.title}>
          Hola, Bienvenido! <span className={s.wave}>👋🏻</span>
        </h2>

        <h1 className={s.mainTitle}>
          Yo soy
          <strong className={s.mainName}> Victor Ardila</strong>
        </h1>

        <div style={{ paddingTop: 50 }}>
          <Typewriter
            strings={[
              'Potenciando el aprendizaje',
              'Desarrollador FullStack',
              'React master ⚛️',
            ]}
            wrapperClassName={s.typewriterWrapper}
            cursorClassName={s.typewriterCursor}
          />
        </div>
      </div>

      <LazyLoadImage
        alt="home-img"
        effect="blur"
        src={homeMainAstronaut}
        wrapperClassName={s.homeMainIcon}
        width="450"
        height="500"
      />
    </section>
  );
};

export default MainSection;
