import React from 'react';
import ContentBox from '../../components/contentBox';
import { useTranslation } from 'react-i18next';

const experiences = [
  {
    id: 'primetech',
    titleKey: 'experience_1_title',
    paragraphs: ['experience_1_description_1', 'experience_1_description_2'],
  },
  {
    id: 'segmentify',
    titleKey: 'experience_2_title',
    paragraphs: [
      'experience_2_description_1',
      'experience_2_description_2',
      'experience_2_description_3',
    ],
  },
  {
    id: 'bilge-adam',
    titleKey: 'experience_3_title',
    paragraphs: ['experience_3_description'],
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
          title={t(experience.titleKey)}
          paragraphs={experience.paragraphs.map((paragraph) => t(paragraph))}
        />
      ))}
    </section>
  );
};

export default Experience;
