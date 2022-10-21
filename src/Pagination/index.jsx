import React from "react";

const Pagination = ({ perPage, setPage, page }) => {
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
    <div style={{ position: "sticky" }}>
      <button disabled={page === 1} onClick={() => setPage(1)}>
        first page
      </button>
      {t.map((el) => (
        <button onClick={() => setPage(el)} key={el.toString()}>
          {el}
        </button>
      ))}
      <button disabled={page === perPage} onClick={() => setPage(perPage)}>
        last page
      </button>
    </div>
  );
};

export default Pagination;
