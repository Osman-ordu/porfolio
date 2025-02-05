import { useTranslation } from 'react-i18next';
import { experiences } from '../../mocks';
import ContentBox from '../../components/contentBox';
import style from './styles.module.scss';

const Experience = () => {
  const { t } = useTranslation();

  return (
    <section className={style['c-experienceContainer']}>
      {experiences.map((experience, index) => (
        <ContentBox
          key={index}
          image={experience.image}
          id={experience.id}
          state={t(experience.state)}
          history={t(experience.history)}
          title={t(experience.titleKey)}
          subTitle={t(experience.subTitleKey)}
          paragraphs={experience.paragraphs.map((paragraph) => t(paragraph))}
        />
      ))}
    </section>
  );
};

export default Experience;
