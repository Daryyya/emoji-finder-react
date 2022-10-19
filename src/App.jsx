import Form from "./Form";
import Header from "./Header";
import Main from "./Main";
import Container from "./Container";
import { data as cards } from "./emoji.js";
import Card from "./Card";
import React, { useState } from "react";

function App() {
  const [value, setValue] = useState("");
  let sortArr = cards.filter(
    ({ title, keywords }) =>
      !value ||
      title.toLowerCase().includes(value) ||
      keywords.toLowerCase().includes(value)
  );
  function getValue(event) {
    setValue(event.target.value.toLowerCase().trim());
  }
  return (
    <>
      <Header>
        <Form test={getValue} />
      </Header>
      <Main>
        <Container>
          {sortArr.map(({ title, symbol, keywords }) => (
            <Card
              key={title}
              title={title}
              symbol={symbol}
              keywords={keywords}
            />
          ))}
        </Container>
      </Main>
    </>
  );
}

export default App;
