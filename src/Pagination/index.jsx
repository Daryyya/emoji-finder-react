import React from "react";

const Pagination = ({ perPage, getPage }) => {
  let arr = [];
  for (let i = 1; i <= perPage; i++) {
    arr.push(i);
  }
  return (
    <div style={{ position: "sticky" }}>
      {arr.map((el) => (
        <button onClick={() => getPage(el)} key={el.toString()}>
          {el}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
