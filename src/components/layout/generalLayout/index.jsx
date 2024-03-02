import { useEffect } from 'react';
import i18n from '../../../pages/translation/index'

const GeneralLayout = ({ children }) => {
  useEffect(() => {
    const language = localStorage.getItem('language');

    if (!language || (language !== 'en' && language !== 'tr')) {
      localStorage.setItem('language', 'tr');
      i18n.changeLanguage('tr');
    } else {
      i18n.changeLanguage(language);
    }
  }, [i18n]);

  return children;
};
export default GeneralLayout;
