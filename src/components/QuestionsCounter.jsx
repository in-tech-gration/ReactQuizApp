import { useState, useEffect } from "react";

export default function QuestionsCounter(props) {
  const [questionClassName, setQuestionClassName] = useState("");

  useEffect(() => {
    setQuestionClassName("");

    const addClassTimeout = setTimeout(() => {
      setQuestionClassName("animate__animated animate__bounceIn");
    }, 1200);

    const removeClassTimeout = setTimeout(() => {
      setQuestionClassName("");
    }, 2200);

    return () => {
      clearTimeout(addClassTimeout);
      clearTimeout(removeClassTimeout);
    };
  }, [props.currentQuestion]);

  return (
    <section className="flex flex-row">
      <h3 className="questions-counter">
        Question{" "}
        <span className={`current-question-index ${questionClassName}`}>
          {props.currentQuestion}
        </span>
        /<span>{props.questions.length}</span>
      </h3>
    </section>
  );
}
