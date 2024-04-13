import { useTranslation } from 'react-i18next';
import { educations } from '../../mocks';
import TextBox from '../../components/textBox';
import style from './styles.module.scss';

const Education = () => {
  const { t } = useTranslation();

  return (
    <section className={style['container']}>
      {educations.map((education, index) => (
        <TextBox key={index} title={t(education.titleKey)} subTitle={t(education.sectionKey)} text={t(education.historyKey)} />
      ))}
    </section>
  );
};

export default Education;
