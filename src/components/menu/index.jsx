import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import { SiAboutdotme,  SiMedium  } from "react-icons/si";
import { MdOutlineWorkOutline } from "react-icons/md";
import { GoBook } from "react-icons/go";
import { LiaCertificateSolid } from "react-icons/lia";
import { FaRegFolder } from "react-icons/fa";
import style from './styles.module.scss'

const MenuGroup = () => {

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
      icon: <LiaCertificateSolid />,
      title: "Certificates",
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

  const handleMenuClick = ( {key }) => {
    localStorage.setItem('page',key)
  }

  return (

      <Menu className={style['side_menu']} theme="dark" defaultSelectedKeys={["about"]} mode="inline">
        {menuData.map((item) => (
          <Menu.Item className={style['menu_item']} key={item.key} icon={item.icon} onClick={handleMenuClick}>
            <Link to={item.link}>{item.title}</Link>
          </Menu.Item>
        ))}
      </Menu>

  );
};

export default MenuGroup;
