import React from 'react';
import { useTranslation } from 'react-i18next'; // Import useTranslation hook

const About = () => {
  const { t } = useTranslation(); // Destructure t function for translations

  return (
    <section>
      <h2>{t('title')}</h2>
      <h5>{t('name')}</h5>
      <p>{t('description_p1')}</p>
      <p>{t('description_p2')}</p>
    </section>
  );
};

export default About;