import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import { RxHamburgerMenu } from "react-icons/rx";
import Menu from "../../menu";
import PageTitle from "../../../components/pageTitle";
import UseIsMobile from "../../isMobile";
import LanguageSelect from "../../languageSwitch";
import logo from "../../../assets/osmanordu-favicon-white.png";
import style from "./styles.module.scss";

const { Header, Content, Footer, Sider } = Layout;

const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [pageTitle, setPageTitle] = useState("");
  const [pageIcon, setPageIcon] = useState(null);
  const isMobile = UseIsMobile();
  console.log(isMobile);

  const handleMenuClick = ({ key, icon }) => {
    setPageTitle(key);
    setPageIcon(icon);
  };
  const handleOpenMobileNav = () => {
    const mobileNav = document.querySelector("#root > div > aside > div > ul");
    if (mobileNav.style.display === "none" || !mobileNav.style.display) {
      mobileNav.style.display = "block";
    } else {
      mobileNav.style.display = "none";
    }
  };

  return (
    <Layout className={style["c-main"]}>
      <Sider className={style["c-main__side"]} trigger={null} collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        {!isMobile && (
          <div className={style["c-main__logo-area"]}>
            <img src={logo} alt={"logo"} width={64} />
            <span>Osman Ordu</span>
          </div>
        )}
        {isMobile && <RxHamburgerMenu onClick={handleOpenMobileNav} className={style["c-main__hamburger"]} />}
        <Menu onMenuClick={handleMenuClick} />
      </Sider>
      <Layout className={style["c-main__container"]}>
        <Header className={style["c-main__header"]}>
          <LanguageSelect />
        </Header>
        <Content className={style["c-main__content__area"]}>
          <PageTitle title={pageTitle} icon={pageIcon} />
          <div className={style["c-main__content"]}>
            <Outlet />
          </div>
        </Content>
        <Footer className={style["c-main__footer"]}>Copyright © {new Date().getFullYear()} Osman ORDU</Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
