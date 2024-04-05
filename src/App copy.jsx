import { useState, useEffect } from "react";
import Header from "./components/Header";
import QuestionsContainer from "./components/QuestionsContainer";
import Answers from "./components/Answers";
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
import questions from './components/questions'

function App() {
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [questionsList, setQuestionsList] = useState([...questions]);
  const [showResult, setShowResult] = useState(false);
  const [showText, setShowText] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showSlider, setShowSlider] = useState("");
  const [correctStatus, setCorrectStatus] = useState(undefined);
  const [isSelectedAnswer, setIsSelectedAnswer] = useState(undefined);

  useEffect(() => {
    setCorrectStatus("");
    if (showSlider === "slide-right") {
      const timeout = setTimeout(() => {
        setShowSlider("");
      }, 1200);
      return () => clearTimeout(timeout);
    }
  }, [showSlider]);

  const chooseAnswer = (isCorrect, isSelectedAnswer) => {
    if (isSelectedAnswer && isCorrect) {
      setCorrectStatus(true);
      setCorrectAnswers(correctAnswers + 1);
    } else if (isCorrect === false) {
      if (isSelectedAnswer === true) {
        setCorrectStatus(false);
      } else {
        setCorrectStatus(true);
      }
    } else if (isCorrect === undefined) {
      setCorrectStatus("");
    }

    setTimeout(() => {
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion);
        setShowSlider("slide-right");
      } else {
        setShowResult(true);
        setShowText(true);
      }
    }, 1200);
  };

  return (
    <div className="app-container">
      <Header />
      {showResult ? (
        <QuizResults
          showText={showText}
          correctAnswers={correctAnswers}
          questions={questions}
        />
      ) : (
        <main className={`flex flex-column ${showSlider}`}>
          <QuestionsContainer
            currentQuestion={currentQuestion}
            questions={questions}
          />
          <Question
            questions={questions}
            currentQuestion={currentQuestion}
            question={questions[currentQuestion].question}
          />
          <Answers
            questions={questionsList}
            isSelectedAnswer={isSelectedAnswer}
            correctStatus={correctStatus}
            correctAnswer={questions[currentQuestion].correctAnswer}
            answers={questions[currentQuestion].answers}
            chooseAnswer={chooseAnswer}
          />
          <Paging correctStatus={correctStatus} />
        </main>
      )}
    </div>
  );
}

export default App;
