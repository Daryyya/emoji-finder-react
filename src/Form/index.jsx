import React from "react";
import style from "./style.module.scss";

const Form = ({ test }) => {
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
          onInput={test}
        />
      </form>
    </div>
  );
};

export default Form;
