import React, { useRef, useState } from "react";
import styles from "./InputSection.module.css";
import { BsSearch } from "react-icons/bs";

const InputSection = (props) => {
  const enteredWordRef = useRef();
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  async function submitHandler(e) {
    e.preventDefault();
    console.log("press");
    setIsButtonDisabled(true);
    props.onLoadingLifter(true);

    setTimeout(async () => {
      let response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${enteredWordRef.current.value}`
      );
      let data = await response.json();
      props.inputLifter(data);
      props.onLoadingLifter(false);
      setIsButtonDisabled(false);
    }, 1000);
  }

  return (
    <form onSubmit={submitHandler} className={styles["input-section"]}>
      <label htmlFor="input">Enter a word:</label>
      <input
        ref={enteredWordRef}
        id="input"
        type="text"
        placeholder="e.g., money"
      ></input>
      <button disabled={isButtonDisabled} type="submit">
        <BsSearch />
      </button>
    </form>
  );
};

export default InputSection;
