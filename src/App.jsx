import React, { useState } from "react";
import { data as cards } from "./emoji.js";
import Form from "./component/Form";
import Header from "./component/Header";
import Main from "./component/Main";
import Container from "./component/Container";
import Card from "./component/Card";
import Select from "./component/Select";
import Pagination from "./component/Pagination";

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
  function getSelect(event) {
    setSelect(event.target.value);
  }

  return (
    <>
      <Header>
        <Form onInput={setValue} />
      </Header>
      <Main>
        <Container>
          {test.map(({ title, symbol, keywords }) => (
            <Card
              key={title}
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
