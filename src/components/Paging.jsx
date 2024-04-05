import { useState, useEffect } from "react";

export default function Paging(props) {

  const firstLetterofString = (string) => string[0];
  const StringWithoutFirstLetter = (string) => string.slice(1);
  const answerText =
  props.currentAnswerClassName === "correct"
      ? "Correct"
      :  props.currentAnswerClassName === "incorrect"
      ? "Wrong"
      : "";
  const answerTextBox =
  props.currentAnswerClassName === "correct"
      ? "answer-text-box correct-box"
      :  props.currentAnswerClassName === "incorrect"
      ? "answer-text-box incorrect-box"
      : "";

  const answerTextClass =
  props.currentAnswerClassName === "correct"
      ? "correct-text"
      :  props.currentAnswerClassName === "incorrect"
      ? "incorrect-text"
      : "";

  return (
      <div className="answer-text-container">
        <div className={`flex flex-row ${answerTextBox}`}>
          {firstLetterofString(answerText)}
        </div>
        <span className={`flex flex-row ${answerTextClass}`}>
          {StringWithoutFirstLetter(answerText)}
        </span>
      </div>
  );
}
