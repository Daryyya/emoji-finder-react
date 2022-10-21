import React from "react";
import style from "./style.module.scss";

const Pagination = ({ perPage, setPage, page, children }) => {
  let arr = [];

  for (let i = 1; i <= perPage; i++) {
    arr.push(i);
  }

  let t = arr.filter((el) =>
    page === 1
      ? el === page ||
        el === page + 1 ||
        el === page + 2 ||
        el === page + 3 ||
        el === page + 4
      : page === 2
      ? el === page ||
        el === page - 1 ||
        el === page + 1 ||
        el === page + 2 ||
        el === page + 3
      : page === perPage
      ? el === page ||
        el === page - 1 ||
        el === page - 2 ||
        el === page - 3 ||
        el === page - 4
      : page === perPage - 1
      ? el === page ||
        el === page + 1 ||
        el === page - 1 ||
        el === page - 2 ||
        el === page - 3
      : el === page ||
        el === page + 1 ||
        el === page - 1 ||
        el === page + 2 ||
        el === page - 2
  );

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
        {t.map((el) => (
          <button
            className={style.btn}
            onClick={() => setPage(el)}
            key={el.toString()}
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
