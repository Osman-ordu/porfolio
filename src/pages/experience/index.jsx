import { useTranslation } from 'react-i18next';
import ContentBox from '../../components/contentBox';

const experiences = [
  {
    id: 'primetech',
    titleKey: 'experience_1_title',
    subTitleKey: 'title',
    history: 'experience_1_title_sub',
    paragraphs: ['experience_1_description_1', 'experience_1_description_2'],
  },
  {
    id: 'segmentify',
    titleKey: 'experience_2_title',
    subTitleKey: 'title',
    history: 'experience_2_title_sub',
    paragraphs: ['experience_2_description_1', 'experience_2_description_2', 'experience_2_description_3'],
  },
  {
    id: 'bilge-adam',
    titleKey: 'experience_3_title',
    subTitleKey: 'title',
    history: 'experience_3_title_sub',
    paragraphs: ['experience_3_description_1', 'experience_3_description_2', 'experience_3_description_3'],
  },
  {
    id: 'inditex',
    titleKey: 'experience_4_title',
    subTitleKey: 'Visual Merchandiser',
    history: 'experience_4_title_sub',
    paragraphs: ['experience_4_description_1', 'experience_4_description_2', 'experience_4_description_3'],
  },
];

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
