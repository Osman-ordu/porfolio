import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Layout, theme } from "antd";
import { SiWireshark } from "react-icons/si";
import Menu from "../menu";

const { Header, Content, Footer, Sider } = Layout;

const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { token: { colorBgContainer, borderRadiusLG }, } = theme.useToken();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider trigger={null} collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)} >
        <div style={{padding:'15%'}}></div>
        <Menu />
      </Sider>
      <Layout>

        <Header style={{ padding: 20, background: "#001628", }} />
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
