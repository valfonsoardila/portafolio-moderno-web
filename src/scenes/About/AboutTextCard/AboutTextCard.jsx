import s from './AboutTextCard.module.scss';
import { ImPointRight } from 'react-icons/im';

const AboutTextCard = () => {
  return (
    <div className={s.card}>
      <p style={{ textAlign: 'justify' }}>
        Hola ¿que tal? Soy{' '}
        <span className={s.purple}>Victor Ardila </span>
        de <span className={s.purple}> Valledupar, Colombia.</span>
        <br />
        Ingeniero de sistemas con experiencia en desarrollo
        multiplataforma
        <br />
        usando React en cualquiera de sus ambitos mayormente React Js
        y React Native.
        <br />
        <br />
        Tambien estoy certificado en mantenimiento de computadores
        <br />
        y manejo de herrammientas ofimaticas.
        <br />
        <br />
        Además de codificar, ¡hay otras actividades que me encanta hacer!
      </p>

      <ul>
        <li className={s.aboutActivity}>
          <ImPointRight /> Leer articulos de tecnologia.
        </li>
        <li className={s.aboutActivity}>
          <ImPointRight /> Tocar la guitarra.
        </li>
        <li className={s.aboutActivity}>
          <ImPointRight /> Viajar y conocer nuevos lugares.
        </li>
      </ul>
    </div>
  );
};

export default AboutTextCard;
