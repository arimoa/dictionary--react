import React, { useState } from "react";
import styles from "./Dictionary.module.css";
import InputSection from "./InputSection";
import ResultSection from "./ResultSection";

const Dictionary = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [value, setValue] = useState({
    phonetic: "",
    partOfSpeech: "",
    definition: "",
  });

  function loadingHandler(state) {
    setIsLoading(state);
  }

  function inputHandller(result) {
    if (typeof result.length === "number") {
      const updatedValue = {
        phonetic: result[0].phonetic,
        partOfSpeech: result[0].meanings[0].partOfSpeech,
        definition: result[0].meanings[0].definitions[0].definition,
      };
      setValue(updatedValue);
    } else {
      const updatedValue = {
        title: result.title,
        resolution: result.resolution,
      };
      setValue(updatedValue);
    }
  }

  return (
    <div className={styles["container"]}>
      <InputSection
        inputLifter={inputHandller}
        onLoadingLifter={loadingHandler}
      />
      <ResultSection results={value} loading={isLoading} />
    </div>
  );
};

export default Dictionary;
