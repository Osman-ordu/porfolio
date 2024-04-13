import { useTranslation } from 'react-i18next';
import { about } from '../../mocks';
import ImageTextBox from '../../components/imageTextBox';

const About = () => {
  const { t } = useTranslation();

  return (
    <section>
      {about.map((about, index) => (
        <ImageTextBox key={index} image={about.image} title={t(about.titleKey)} subTitle={t(about.subTitleKey)} text={about.paragraphs.map((paragraph) => t(paragraph))} />
      ))}
    </section>
  );
};

export default About;
