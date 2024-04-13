import { useTranslation } from 'react-i18next';
import { experiences } from '../../mocks';
import ContentBox from '../../components/contentBox';

const Experience = () => {
  const { t } = useTranslation();

  return (
    <section>
      {experiences.map((experience, index) => (
        <ContentBox
          key={index}
          id={experience.id}
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
