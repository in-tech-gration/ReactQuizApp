import { useState, useEffect } from "react";
import QuestionsContainer from "./components/QuestionsContainer";
import Answers from "./components/Answers";
import QuizHeader from "./components/QuizHeader";

// import {
//   CircleSvg,
//   DotSvg,
//   CheckMarkSvg,
//   XMarkSvg,
// } from "./components/SvgComponents/";
// import CircleSvg from "./components/SvgComponents/CircleSvg";
// import DotSvg from "./components/SvgComponents/DotSvg";
// import CheckMarkSvg from "./components/SvgComponents/CheckMarkSvg";
// import XMarkSvg from "./components/SvgComponents/XMarkSvg";
import Question from "./components/Question";
import Paging from "./components/Paging";
import "./App.css";
import "./animate.css";
import QuizResults from "./components/QuizResults";
import questions from "./components/questions";
import ScoreIndicatorBoard from "./components/ScoreIndicatorBoard";

function App(props) {
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState(0);
  const [questionsList, setQuestionsList] = useState([...questions]);
  const [showResult, setShowResult] = useState(false);
  const [showText, setShowText] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showSlider, setShowSlider] = useState("");
  const [correctState, setCorrectState] = useState(undefined);
  const [isSelectedAnswer, setIsSelectedAnswer] = useState(undefined);
  const [answerClassName, setAnswerClassName] = useState(undefined);
  const [pagingTextState, setPagingTextState] = useState("");
  const [currentAnswerClassName, setCurrentAnswerClassName] = useState("");

  const correctAnswersCounter = () => {
    //setCorrectAnswers(prevCorrectAnswers => prevCorrectAnswers + 1);
    setCorrectAnswers(correctAnswers + 1);
  };

  const incorrectAnswersCounter = () => {
    setIncorrectAnswers(incorrectAnswers + 1);
  };

  useEffect(() => {
    setCorrectState([]);
    if (showSlider === "slide-right") {
      const slidertimeout = setTimeout(() => {
        setShowSlider("");
      }, 1200);
      return () => clearTimeout(slidertimeout);
    }
  }, [showSlider]);

  return (
    <div className="app-container">
      <QuizHeader category={props.category}/>
      {showResult ? (
        <QuizResults
          showText={showText}
          correctAnswers={correctAnswers}
          questions={questions}
        />
      ) : (
        <>
          <ScoreIndicatorBoard
            correctAnswers={correctAnswers}
            incorrectAnswers={incorrectAnswers}
            questions={questions}
          />
          <main className={`flex flex-column ${showSlider}`}>
            <QuestionsContainer
              currentQuestion={currentQuestion}
              questions={questions}
            />
            <Question
              questions={questions}
              currentQuestion={currentQuestion}
              question={questions[currentQuestion].question}
              codeblock={questions[currentQuestion].code}
              language="javascript"
            />

            <Answers
              question={questions[currentQuestion]}
              questions={questionsList}
              setShowSlider={setShowSlider}
              setShowResult={setShowResult}
              setShowText={setShowText}
              correctState={correctState}
              correctAnswer={questions[currentQuestion].correctAnswer}
              currentQuestion={currentQuestion}
              setCurrentQuestion={setCurrentQuestion}
              answerClassName={answerClassName}
              correctAnswersCounter={correctAnswersCounter}
              incorrectAnswersCounter={incorrectAnswersCounter}
            />
          </main>
        </>
      )}
    </div>
  );
}

export default App;
