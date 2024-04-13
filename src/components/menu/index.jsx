import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu } from 'antd';
import { SiAboutdotme, SiMedium } from 'react-icons/si';
import { MdOutlineWorkOutline } from 'react-icons/md';
import { GoBook } from 'react-icons/go';
import { LiaCertificateSolid } from 'react-icons/lia';
import { FaRegFolder } from 'react-icons/fa';
import { RiStackshareLine } from 'react-icons/ri';
import style from './styles.module.scss';

const menuData = [
  { key: 'about', icon: <SiAboutdotme />, title: 'about', link: '/about' },
  {
    key: 'experience',
    icon: <MdOutlineWorkOutline />,
    title: 'experience',
    link: '/experience',
  },
  {
    key: 'education',
    icon: <GoBook />,
    title: 'education',
    link: '/education',
  },
  // {
  //   key: 'certificates',
  //   icon: <LiaCertificateSolid />,
  //   title: 'certificates',
  //   link: '/certificates',
  // },
  // { key: 'blog', icon: <SiMedium />, title: 'Blog', link: '/blog' },
  // {
  //   key: 'projects',
  //   icon: <FaRegFolder />,
  //   title: 'projects',
  //   link: '/projects',
  // },
  {
    key: 'stack',
    icon: <RiStackshareLine />,
    title: 'stack',
    link: '/stack',
  },
];

const MenuGroup = ({ onMenuClick }) => {
  const { t } = useTranslation();

  const handleMenuClick = ({ key,icon }) => {
    onMenuClick({ key, icon });
  };

  return (
    <Menu className={style['c-sidemenu']} theme='dark' defaultSelectedKeys={['about']} mode='inline'>
      {menuData.map((item) => (
        <Menu.Item className={style['c-sidemenu__group']} key={t(item.key)} icon={item.icon} onClick={() => handleMenuClick(item)}>
          <Link to={item.link}>{t(item.title)}</Link>
        </Menu.Item>
      ))}
    </Menu>
  );
};

export default MenuGroup;
