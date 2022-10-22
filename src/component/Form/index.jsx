import React from "react";
import style from "./style.module.scss";

const Form = ({ onInput }) => {
  function handleInput(event) {
    onInput(event.target.value.toLowerCase().trim());
  }

  return (
    <div>
      <form
        className={style.wrapper}
        onSubmit={(event) => event.preventDefault()}
      >
        <input
          className={style.input}
          placeholder="Keywords"
          type="text"
          onInput={handleInput}
        />
      </form>
    </div>
  );
};

export default Form;
