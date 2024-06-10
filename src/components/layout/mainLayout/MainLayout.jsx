import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import { RxHamburgerMenu } from "react-icons/rx";
import { LogoArea } from "../../logoArea";
import Menu from "../../menu";
import PageTitle from "../../../components/pageTitle";
import CopyRight from "../../../components/copyRight";
import UseIsMobile from "../../isMobile";
import LanguageSelect from "../../languageSwitch";
import style from "./styles.module.scss";

const { Header, Content, Footer, Sider } = Layout;

const MainLayout = () => {
  const [pageTitle, setPageTitle] = useState("");
  const [pageIcon, setPageIcon] = useState(null);
  const isMobile = UseIsMobile();

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
      <Sider className={style["c-main__side"]}>
        {!isMobile && <LogoArea />}
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
        <Footer className={style["c-main__footer"]}>
          {isMobile && <LogoArea width={24} />}
          <CopyRight />
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
