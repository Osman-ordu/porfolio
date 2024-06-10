import { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Layout } from "antd";
import { RxHamburgerMenu } from "react-icons/rx";
import { LogoArea } from "../../logoArea";
import Menu from "../../menu";
import splittingPathname from "./../../../utils/helpers/pathName";
import PageTitle from "../../../components/pageTitle";
import CopyRight from "../../../components/copyRight";
import UseIsMobile from "../../isMobile";
import LanguageSelect from "../../languageSwitch";
import style from "./styles.module.scss";

const { Header, Content, Footer, Sider } = Layout;

const MainLayout = () => {
  const location = useLocation();
  const [pageTitle, setPageTitle] = useState("");
  const isMobile = UseIsMobile();

  const handleMenuClick = ({ key }) => {
    setPageTitle(key);
  };
  const handleOpenMobileNav = () => {
    const mobileNav = document.querySelector("#root > div > aside > div > ul");
    if (mobileNav.style.display === "none" || !mobileNav.style.display) {
      mobileNav.style.display = "block";
    } else {
      mobileNav.style.display = "none";
    }
  };

  useEffect(() => {
    const pathSegment = splittingPathname(location?.pathname);
    setPageTitle(pathSegment);
  }, [location]);

  return (
    <>
      {isMobile && (
        <Layout className={style["c-main"]}>
          <Sider className={style["c-main__side"]}>
            <RxHamburgerMenu onClick={handleOpenMobileNav} className={style["c-main__hamburger"]} />
            <Menu onMenuClick={handleMenuClick} />
          </Sider>
          <Layout className={style["c-main__container"]}>
            <Header className={style["c-main__header"]}>
              <PageTitle title={pageTitle} />
              <LanguageSelect />
            </Header>
            <Content className={style["c-main__content__area"]}>
              <div className={style["c-main__content"]}>
                <Outlet />
              </div>
            </Content>
            <Footer className={style["c-main__footer"]}>
              <LogoArea width={24} />
              <CopyRight />
            </Footer>
          </Layout>
        </Layout>
      )}
      {!isMobile && (
        <Layout className={style["c-main"]}>
          <Sider className={style["c-main__side"]}>
            <LogoArea />
            <Menu onMenuClick={handleMenuClick} />
          </Sider>
          <Layout className={style["c-main__container"]}>
            <Header className={style["c-main__header"]}>
              <LanguageSelect />
            </Header>
            <Content className={style["c-main__content__area"]}>
              <PageTitle title={pageTitle} />
              <div className={style["c-main__content"]}>
                <Outlet />
              </div>
            </Content>
            <Footer className={style["c-main__footer"]}>
              <CopyRight />
            </Footer>
          </Layout>
        </Layout>
      )}
    </>
  );
};

export default MainLayout;
