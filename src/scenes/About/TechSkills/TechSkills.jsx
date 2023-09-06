import s from './TechSkills.module.scss';
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
  DiFirebase,
} from 'react-icons/di';
import {
  SiFlutter,
  SiCsharp,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiSupabase,
} from 'react-icons/si';

const TechSkills = () => {
  return (
    <ul className={s.container}>
      <li className={s.techIcon}>
        <DiJavascript1 />
      </li>
      <li className={s.techIcon}>
        <SiFlutter />
      </li>
      <li className={s.techIcon}>
        <DiNodejs />
      </li>
      <li className={s.techIcon}>
        <DiReact />
      </li>
      <li className={s.techIcon}>
        <DiMongodb />
      </li>
      <li className={s.techIcon}>
        <DiFirebase />
      </li>
      <li className={s.techIcon}>
        <SiAdobeillustrator />
      </li>
      <li className={s.techIcon}>
        <SiCsharp />
      </li>
      <li className={s.techIcon}>
        <SiAdobephotoshop />
      </li>
      <li className={s.techIcon}>
        <DiGit />
      </li>
      <li className={s.techIcon}>
        <SiSupabase />
      </li>
    </ul>
  );
};

export default TechSkills;
