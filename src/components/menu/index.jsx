import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Menu } from "antd";
import UseIsMobile from "../../components/isMobile";
import closedNavMobile from "../../components/closedNavMobile";
import { menuData } from "../../mocks";
import style from "./styles.module.scss";

const MenuGroup = ({ onMenuClick }) => {
  const { t } = useTranslation();
  const isMobile = UseIsMobile();

  const handleMenuClick = ({ key, icon }) => {
    onMenuClick({ key, icon });
    if (isMobile) {
      closedNavMobile();
    }
  };

  return (
    <Menu className={style["c-sidemenu"]} theme="dark" defaultSelectedKeys={["about"]} mode="inline">
      {menuData.map((item) => (
        <Menu.Item className={style["c-sidemenu__group"]} key={t(item.key)} icon={item.icon} onClick={() => handleMenuClick(item)}>
          <Link to={item.link}>{t(item.title)}</Link>
        </Menu.Item>
      ))}
    </Menu>
  );
};

export default MenuGroup;
