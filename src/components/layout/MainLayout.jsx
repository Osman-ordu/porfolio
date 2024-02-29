import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { SiAboutdotme } from "react-icons/si";
import { MdOutlineWorkOutline } from "react-icons/md";
import { GoBook } from "react-icons/go";
import { GrCertificate } from "react-icons/gr";
import { SiMedium } from "react-icons/si";
import { FaRegFolder } from "react-icons/fa";

const { Header,Content, Footer, Sider } = Layout;

const menuData = [
  { key: "about", icon: <SiAboutdotme />, title: "About", link: "/about" },
  {
    key: "experience",
    icon: <MdOutlineWorkOutline />,
    title: "Experience",
    link: "/experience",
  },
  {
    key: "education",
    icon: <GoBook />,
    title: "Education",
    link: "/education",
  },
  {
    key: "certificates",
    icon: <GrCertificate />,
    title: "Licence And Certificates",
    link: "/certificates",
  },
  { key: "blog", icon: <SiMedium />, title: "Blog", link: "/blog" },
  {
    key: "projects",
    icon: <FaRegFolder />,
    title: "Projects",
    link: "/projects",
  },
];

const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();


  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="demo-logo-vertical" />
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          {menuData.map((item) => (
            <Menu.Item
              key={item.key}
              icon={item.icon}
            
            >
              <Link to={item.link}>{item.title}</Link>
            </Menu.Item>
          ))}
        </Menu>
      </Sider>

      <Layout>
        <Header
          style={{
            padding: 20,
            background: "#444",
          }}
        />
  <Content style={{ margin: "0 16px" }}>
  <Breadcrumb style={{ margin: "16px 0" }}>
    <Breadcrumb.Item>User</Breadcrumb.Item>
    <Breadcrumb.Item>Bill</Breadcrumb.Item>
  </Breadcrumb>

  <div
  style={{
    padding: 24,
    minHeight: 360,
    background: colorBgContainer,
    borderRadius: borderRadiusLG,
  }}
>
<Outlet/>
</div>
</Content>

        <Footer
          style={{
            textAlign: "center",
          }}
        >
          ©{new Date().getFullYear()} Osman ORDU
        </Footer>
      </Layout>
    </Layout>
  );
};
export default MainLayout;
