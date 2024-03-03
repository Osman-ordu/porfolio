import React, { useEffect, useState } from 'react';
import { Dropdown, Menu } from 'antd';
import { FaChevronDown } from 'react-icons/fa';
import i18n from '../../pages/translation';

const LanguageSelect = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('tr');

  useEffect(() => {
    const language = localStorage.getItem('language');
    if (language) {
      setSelectedLanguage(language);
    }
  }, []);

  const handleSelectLanguage = (event) => {
    const selected = event.key;
    setSelectedLanguage(selected);
    localStorage.setItem('language', selected);
    i18n.changeLanguage(selected);
  };

  const languageSwitch = (
    <Menu onClick={handleSelectLanguage} selectedKeys={[selectedLanguage]}>
      <Menu.Item key='en'>EN</Menu.Item>
      <Menu.Item key='tr'>TR</Menu.Item>
    </Menu>
  );

  return (
    <div>
      <Dropdown overlay={languageSwitch} trigger={['click']}>
        <a onClick={(e) => e.preventDefault()}>
          {selectedLanguage.toUpperCase()} <FaChevronDown />
        </a>
      </Dropdown>
    </div>
  );
};

export default LanguageSelect;
