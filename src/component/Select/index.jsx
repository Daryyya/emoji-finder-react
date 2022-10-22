import React from "react";
import style from './style.module.scss';

const Select = ({ getSelect }) => {
  return (
    <select className={style.select} onChange={getSelect}>
      <option value={12}>12</option>
      <option value={24}>24</option>
      <option value={48}>48</option>
    </select>
  );
};

export default Select;
