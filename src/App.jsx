import Form from "./Form";
import Header from "./Header";
import Main from "./Main";
import Container from "./Container";
import { data as cards } from "./emoji.js";
import Card from "./Card";
import React, { useState } from "react";
import Select from "./Select";
import Pagination from "./Pagination";

function App() {
  const [value, setValue] = useState("");
  const [select, setSelect] = useState(12);
  const [page, setPage] = useState(1);

  let sortArr = cards.filter(
    ({ title, keywords }) =>
      !value ||
      title.toLowerCase().includes(value) ||
      keywords.toLowerCase().includes(value)
  );

  let perPage = Math.ceil(sortArr.length / select);

  let lastElem = page * select;
  let firstElem = page * select - select;

  let test = sortArr.slice(firstElem, lastElem);

  function getValue(event) {
    setValue(event.target.value.toLowerCase().trim());
  }
  function getSelect(event) {
    setSelect(event.target.value);
  }

  return (
    <>
      <Header>
        <Form test={getValue} />
      </Header>
      <Main>
        <Container>
          {test.map(({ title, symbol, keywords }, index) => (
            <Card
              key={index}
              title={title}
              symbol={symbol}
              keywords={[...new Set(keywords.split(" "))].join(",")}
            />
          ))}
        </Container>

        <Pagination perPage={perPage} setPage={setPage} page={page}>
          <Select getSelect={getSelect} />
        </Pagination>
      </Main>
    </>
  );
}

export default App;
