import React, { useEffect, useState } from "react";
// import { data as cards } from "./emoji.js";
import Form from "./component/Form";
import Header from "./component/Header";
import Main from "./component/Main";
import Container from "./component/Container";
import Card from "./component/Card";
import Select from "./component/Select";
import Pagination from "./component/Pagination";
import Preloader from "./component/Preloader/Preloader";

function App() {
  const [emoji, setEmoji] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    async function getEmoji() {
      try {
        const url = "https://emoji-api-app.herokuapp.com/";
        const data = await (await fetch(url)).json();
        setIsLoading(false);
        setEmoji(data);
      } catch (error) {
        setIsLoading(false);
        setIsError(true);
        console.log(error);
      }
    }
    getEmoji();
  }, []);

  const [value, setValue] = useState("");
  const [select, setSelect] = useState(12);
  const [page, setPage] = useState(1);

  let sortArr = emoji.filter(
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
        {isLoading && <Preloader />}
        {isError && <p style={{position: 'relative', left : '50%', top: '60px',}}>Что-то пошло не так</p>}

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
