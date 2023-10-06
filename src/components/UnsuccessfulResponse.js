import React from "react";
import styles from "./UnSuccessfulResponse.module.css";

const UnsuccessfulResponse = () => {
  return (
    <React.Fragment>
      <p>
        <span className={styles["title"]}>Title:</span> No Definitions Found
      </p>
      <p>
        <span className={styles["title"]}>Resolution:</span> You can try the
        search again at later time or head to the web instead.
      </p>
    </React.Fragment>
  );
};

export default UnsuccessfulResponse;
