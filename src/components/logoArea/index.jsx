import logo from "../../assets/osmanordu-favicon-white.png";
import style from "./styles.module.scss";

export const LogoArea = ({ width = 64 }) => {
  return (
    <div className={style["c-logoarea"]}>
      <img src={logo} alt={"logo"} width={width} />
      <span>Osman Ordu</span>
    </div>
  );
};
