import { useState, useEffect } from "react";
import Answer from "./Answer";
import Paging from "./Paging";
import { nanoid } from "nanoid";

export default function Answers(props) {
  const [correctState, setCorrectState] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(undefined);
  const [currentAnswerClassName, setCurrentAnswerClassName] = useState("");

  const divKey = nanoid();
  const answersExist = props.question && props.question.answers;
  useEffect(() => {
    setCorrectState([]);
    setCurrentAnswerClassName(currentAnswerClassName);
    setSelectedAnswer(undefined); // Clear selectedAnswer
    if (props.showSlider === "slide-right") {
      const timeout = setTimeout(() => {
        props.setShowSlider("");
      }, 1200);
      return () => clearTimeout(timeout);
    }
  }, [props.showSlider, props.currentQuestion]);

  const chooseAnswer = (selectedAnswer, currentQuestion) => {
    const currentQuestionIndex = props.questions.indexOf(currentQuestion);

    setSelectedAnswer(selectedAnswer);
    const correctAnswer = currentQuestion.correctAnswer;
    const isSelectedAnswerCorrect = selectedAnswer === correctAnswer;

    const answerStates = currentQuestion.answers.map((answer) => {
      if (answer === correctAnswer) {
        // Check if the answer is the correct answer
        if (isSelectedAnswerCorrect) {
          props.correctAnswersCounter();
          // If the answer is selected and correct, apply the "correct" class
          return "correct";
        } else if (!isSelectedAnswerCorrect) {
          // If the answer is correct but not selected, apply the "correct" class
          return "correct";
        }
      } else {
        // If the answer is not the correct answer
        if (selectedAnswer === answer) {
          props.incorrectAnswersCounter();
          // If the answer is selected and incorrect, apply the "incorrect" class
          return "incorrect";
        } else {
          // If the answer is not selected and not correct, return an empty string
          return "";
        }
      }
    });

    setCorrectState(answerStates);

    const currentAnswerClassName = isSelectedAnswerCorrect
      ? "correct"
      : "incorrect";
    setCurrentAnswerClassName(currentAnswerClassName);

    const nextQuestiontimeout = setTimeout(() => {
      const nextQuestion = props.currentQuestion + 1;
      if (nextQuestion < props.questions.length) {
        setCurrentAnswerClassName("");
        props.setCurrentQuestion(nextQuestion);
        props.setShowSlider("slide-right");
      } else {
        props.setShowResult(true);
        props.setShowText(true);
      }
    }, 1200);

    // Cleanup the timeout to prevent memory leaks
    return () => clearTimeout(nextQuestiontimeout);
  };
  return (
    <>
      <section id="quiz-progress" className="flex flex-row">
        <Paging currentAnswerClassName={currentAnswerClassName} />
      </section>
      <section id="answers-section" className="flex flex-row">
        <div key={divKey} className="flex flex-row">
        { answersExist && props.question.answers.map((answer, answerIndex) => {
          const isSelected = selectedAnswer === answer;
          const answerClassName =
            correctState && correctState[answerIndex]
              ? correctState[answerIndex]
              : "";
          const answerEffectClassName = () => {
            if (correctState) {
              if (answerClassName === "correct") {
                return "animate__animated animate__heartBeat";
              }
              {
                return "animate__animated animate__shakeX";
              }
            }
            return "";
          };
          return (
            <div key={`answer${answerIndex}`} className="flex flex-row">
              <Answer
                key={`answer${answerIndex}`}
                id={`answer${answerIndex}`}
                selected={isSelected}
                answerClassName={answerClassName}
                answerEffectClassName={answerEffectClassName()}
                answerCurrentIndex={answerIndex}
                answer={answer}
                correctState={props.correctState}
                correctAnswer={props.correctAnswer}
                onClickHandler={() => chooseAnswer(answer, props.question)}
              >
                {answer}
              </Answer>
              </div>
          );
        }
        )}
        </div>
      </section>
    </>
  );
}
