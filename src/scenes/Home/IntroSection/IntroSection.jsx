import s from './IntroSection.module.scss';
import profile from '../../../assets/profile/profile.png';
import { AiFillGithub } from 'react-icons/ai';
import {
  FaFacebookSquare,
  FaLinkedinIn,
  FaTelegramPlane,
} from 'react-icons/fa';
import Tilt from 'react-parallax-tilt';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const IntroSection = () => {
  return (
    <section className={s.content}>
      <div className={s.introduction}>
        <div className={s.introductionText}>
          <h1 className={s.title}>
            PERMITAME <span className={s.blue}> PRESENTARME </span>{' '}
          </h1>

          <div className={s.description}>
            <p>
              Soy un desarrollador Full Stack con cuatro años de
              experiencia. <br />
              En la creacion de aplicaciones móviles para Android, Web
              y escritorios.
            </p>

            <p>
              Mis habilidades incluyen dominio de{' '}
              <i>
                <b className={s.blue}>
                  React js, React Native, Flutter, .Net de C#
                </b>
              </i>
              <br />
              y otras tecnologías relevantes. Tengo experiencia en la
              integración de varias <br />
              bibliotecas de terceros, integración de API,
              notificaciones push y análisis.
            </p>

            <p>
              Mi campo de interés es la construcción de nuevas
              <i>
                <b className={s.blue}> tecnologías y productos.</b>
              </i>
            </p>
          </div>
        </div>

        <Tilt trackOnWindow={true}>
          <LazyLoadImage
            alt="profile"
            effect="blur"
            src={profile}
            width="400px"
          />
        </Tilt>
      </div>

      <div className={s.introSocial}>
        <h1>Me puedes encontrar en</h1>
        <p>
          No dudes en <span className={s.blue}>contactarte </span>
          conmigo
        </p>
        <ul className={s.socialLinks}>
          <li className={s.socialLink}>
            <a
              href="https://github.com/VictorArdila"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
              aria-label="github"
            >
              <AiFillGithub />
            </a>
          </li>
          <li className={s.socialLink}>
            <a
              href="https://www.facebook.com/VictorArdila2002"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
              aria-label="facebook"
            >
              <FaFacebookSquare />
            </a>
          </li>
          <li className={s.socialLink}>
            <a
              href="https://t.me/Victor_Ardila"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
              aria-label="telegram"
            >
              <FaTelegramPlane />
            </a>
          </li>
          <li className={s.socialLink}>
            <a
              href="https://www.linkedin.com/in/victor-ardila-31a94b230/"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
              aria-label="linkedin"
            >
              <FaLinkedinIn />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default IntroSection;
