import { useTranslation } from 'react-i18next';
import aboutImage from '../../assets/osmanordu.png';
import ImageTextBox from '../../components/imageTextBox';

const about = [
  {
    titleKey: 'title',
    subTitleKey: 'name',
    image: aboutImage,
    paragraphs: ['description_p1', 'description_p2'],
  },
];

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
