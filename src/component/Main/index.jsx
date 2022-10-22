import React from "react";
import style from "./style.module.scss";

const Main = ({ children }) => {
  return <main className={style.main}>{children}</main>;
};

export default Main;
