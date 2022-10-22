import React, { useMemo } from "react";
import generateArray from '../../helper/generateArray';
import style from "./style.module.scss";

const Pagination = ({ perPage, setPage, page, children }) => {
  const itemsToShow = generateArray(perPage, 1)
  .filter((pg) => {
    if (page === 1) return pg <= page + 4
    if (page === 2) return pg < page + 4;
    if (page === perPage) return pg >= page - 4;
    if (page === perPage - 1) return pg > page - 4;

    return pg + 2 >= page && pg - 2 <= page;
  });

  return (
    <div className={style.wrapper}>
      <div>
        <button
          className={style.btn}
          disabled={page === 1}
          onClick={() => setPage(1)}
        >
          first page
        </button>
        {itemsToShow.map((el) => (
          <button
            className={style.btn}
            onClick={() => setPage(el)}
            key={el}
          >
            {el}
          </button>
        ))}
        <button
          className={style.btn}
          disabled={page === perPage}
          onClick={() => setPage(perPage)}
        >
          last page
        </button>
      </div>
      {children}
    </div>
  );
};

export default Pagination;
