import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Layout } from 'antd';
import Menu from '../../menu';
import PageTitle from '../../../components/pageTitle';
import LanguageSelect from '../../languageSwitch';
import logo from '../../../assets/osmanordu-favicon-white.png';
import style from './styles.module.scss';

const { Header, Content, Footer, Sider } = Layout;

const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [pageTitle, setPageTitle] = useState('');
  const [pageIcon, setPageIcon] = useState(null);


  const handleMenuClick = ({ key, icon }) => {
    setPageTitle(key);
    setPageIcon(icon);
  };

  return (
    <Layout className={style['c-main']}>
      <Sider className={style['c-main__side']} trigger={null} collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className={style['c-main__logo-area']}>
          <img src={logo} alt={'logo'} width={64} />
          <span>Osman Ordu</span>
        </div>
        <Menu onMenuClick={handleMenuClick} />
      </Sider>
      <Layout className={style['c-main__container']}>
        <Header className={style['c-main__header']}>
          <LanguageSelect />
        </Header>
        <Content className={style['c-main__content__area']}>
        <PageTitle title={pageTitle} icon={pageIcon} />
          <div className={style['c-main__content']}>
            <Outlet />
          </div>
        </Content>
        <Footer className={style['c-main__footer']}>Copyright © {new Date().getFullYear()} Osman ORDU</Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
