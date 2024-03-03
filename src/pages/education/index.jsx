import React from 'react';
import TextBox from '../../components/textBox';
import { useTranslation } from 'react-i18next';
import style from './styles.module.scss';

const educations = [
  {
    titleKey: 'university_2_title',
    sectionKey: 'university_2_section',
    historyKey: 'university_2_history',
  },
  {
    titleKey: 'university_1_title',
    sectionKey: 'university_section_1',
    historyKey: 'university_history_1',
  },
  {
    titleKey: 'university_3_title',
    sectionKey: 'university_3_section',
    historyKey: 'university_3_history',
  },
];

const Education = () => {
  const { t } = useTranslation();

  return (
    <section className={style['container']}>
      {educations.map((education, index) => (
        <TextBox
          key={index}
          title={t(education.titleKey)}
          subTitle={t(education.sectionKey)}
          text={t(education.historyKey)}
        />
      ))}
    </section>
  );
};

export default Education;
