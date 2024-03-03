// MainLayout.jsx

import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import Menu from "../../menu";
import logo from '../../../assets/osmanordu-favicon-white.png'
import style from './styles.module.scss'
import PageTitle from '../../pageTitle'

const { Header, Content, Footer, Sider } = Layout;

const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [pageTitle, setPageTitle] = useState(''); // Başlangıç başlığı

  const handleMenuClick = (title) => {
    setPageTitle(title);
  };

  return (
    
    <Layout className={style['main']}>
      <Sider
        className={style['sidebar']}
        trigger={null}
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className={style['logo_wrapper']}>
          <img src={logo} alt={'logo'} width={64} />
          <span>Osman Ordu</span>
        </div>
        <Menu onMenuClick={handleMenuClick} />
      </Sider>
      <Layout className={style['main__container']}>
        <Header className={style['header']} />
        <Content className={style['main__content__area']}>
          <PageTitle title={pageTitle} />

          <div className={style['main__content']}>
            <Outlet />
          </div>
  
        </Content>

        <Footer className={style['footer']}>Copyright © {new Date().getFullYear()} Osman ORDU</Footer>
      </Layout>
    </Layout>


  );
};

export default MainLayout;
