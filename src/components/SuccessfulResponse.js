import React from "react";
import styles from "./SuccessfulResponse.module.css";

const SuccessfulResponse = (props) => {
  return (
    <React.Fragment>
      <p className={styles["phonetic"]}>
        <span className={styles["title"]}>Phonetic:</span>{" "}
        {props.answer.phonetic}
      </p>
      <p className={styles["partOfSpeech"]}>
        <span className={styles["title"]}>Part of Speech:</span>{" "}
        {props.answer.partOfSpeech}
      </p>
      <p className={styles["definition"]}>
        <span className={styles["title"]}>Definition:</span>{" "}
        {props.answer.definition}
      </p>
    </React.Fragment>
  );
};

export default SuccessfulResponse;
