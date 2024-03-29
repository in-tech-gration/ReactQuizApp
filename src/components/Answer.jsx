import { useState, useEffect } from "react";
import { CircleSvg, DotSvg, CheckMarkSvg, XMarkSvg } from "./SvgComponents/";


export default function Answer(props) {
  const [correctStatus, setCorrectStatus] = useState(undefined);
  const [checkmarkClassName, setCheckmarkClassName] = useState("");
  const [answerClassName, setAnswerClassName] = useState("");

  const handleEvent = () => {
    const isCorrect = props.answer === props.correctAnswer;
    setCorrectStatus(isCorrect);
    props.chooseAnswer(isCorrect);
  };
  
  useEffect(() => {

    if (correctStatus === true) {
      setAnswerClassName("correct");
      setCheckmarkClassName("animate__animated animate__heartBeat");
    } else if (correctStatus === false) {
      setAnswerClassName("false");
      setCheckmarkClassName("animate__animated animate__shakeX");
    } else if (correctStatus === undefined) {
      setCheckmarkClassName("");
      setAnswerClassName("");
    }

    if (correctStatus !== undefined) {
      const timeout = setTimeout(() => {
        setCorrectStatus(undefined);
      }, 1200);
      return () => clearTimeout(timeout);
    }


  }, [correctStatus]);



  return (
    <section className="flex flex-row">
      <button
        onClick={(event) => {
          event.preventDefault();
          handleEvent();
        }}
        className={`answer row ${answerClassName}`}
      >
        <CircleSvg />
        <DotSvg />
        <p id={props.children} className="answertitle">
          {props.children}
        </p>
        <p className={`checkmark ${checkmarkClassName}`}>
          {correctStatus ? <CheckMarkSvg /> : <XMarkSvg />}
        </p>
      </button>
    </section>
  );
}
