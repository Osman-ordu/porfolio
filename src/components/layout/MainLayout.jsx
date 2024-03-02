import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Layout, theme } from "antd";
import Menu from "../menu";
import logo from '../../assets/osmanordu-favicon-white.png'
import style from './styles.module.scss'

const { Header, Content, Footer, Sider } = Layout;

const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { token: { colorBgContainer, borderRadiusLG }, } = theme.useToken();

  return (
    <Layout className={style['main_container']}>
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
      <Layout className={style['main_content']}>

        <Header className={style['header']} />
        <Content style={{ margin: "0 16px" }}>
          <div style={{margin:'16px '}}></div>

          <div style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG, }} >
            <Outlet />
          </div>
        </Content>

        <Footer style={{ textAlign: "center", }}> ©{new Date().getFullYear()} Osman ORDU</Footer>
      </Layout>
    </Layout>
  );
};
export default MainLayout;
