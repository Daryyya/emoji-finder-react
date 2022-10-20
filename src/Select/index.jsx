import React from "react";

const Select = ({ getSelect }) => {
  return (
    <select onChange={getSelect} style={{ position: "sticky" }}>
      <option value={12}>12</option>
      <option value={24}>24</option>
      <option value={48}>48</option>
    </select>
  );
};

export default Select;
