import React from "react";
import styles from "./ResultSection.module.css";
import SuccessfulResponse from "./SuccessfulResponse";
import UnsuccessfulResponse from "./UnsuccessfulResponse";
import Waiting from "./Waiting";

const ResultSection = (props) => {
  return (
    <div className={styles["result-container"]}>
      {props.loading && <Waiting />}
      {!props.loading && props.results.hasOwnProperty("title") && (
        <UnsuccessfulResponse />
      )}

      {!props.loading && !props.results.hasOwnProperty("title") && (
        <SuccessfulResponse answer={props.results} />
      )}
    </div>
  );
};

export default ResultSection;
