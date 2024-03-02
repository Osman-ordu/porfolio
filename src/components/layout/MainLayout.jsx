import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Layout, theme } from "antd";
import Menu from "../menu";
import logo from '../../assets/osmanordu-favicon-white.png'
import style from './styles.module.scss'
import PageTitle from "../pageTitle";

const { Header, Content, Footer, Sider } = Layout;

const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { token: { colorBgContainer, borderRadiusLG }, } = theme.useToken();

  return (
    <Layout className={style['main']}>
      <Sider 
      trigger={null} 
      collapsible collapsed={collapsed} 
      onCollapse={(value) => setCollapsed(value)} >
        <div className={style['logo_wrapper']}>
          <img src={logo}  alt={'logo'} width={64}/>
          <span>Osman Ordu</span>
        </div> 
        <Menu />
      </Sider>
      <Layout className={style['main__container']}>

        <Header className={style['header']} />
        <Content className={style['main__content__area']}>
         <PageTitle title={'About'}/>

          <div className={style['main__content']}>
            <Outlet />
          </div>
        </Content>

        <Footer className={style['footer']}> ©{new Date().getFullYear()} Osman ORDU</Footer>
      </Layout>
    </Layout>
  );
};
export default MainLayout;
