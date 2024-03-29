import { useState, useEffect } from "react";
import Header from './components/Header'
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

function App() {
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [showText, setShowText] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showSlider, setShowSlider] = useState("");
  const [correctStatus, setCorrectStatus] = useState(undefined); 

  const questions = [
    {
      question:
        "What is the correct command to create a new React Vite project?",
      answers: ["npm create vite@latest", "npm install vite@latest"],
      correctAnswer: "npm create vite@latest",
    },
    {
      question:
        "What does ReactApp refer to in the following command? npx create-react-app ReactApp",
      answers: [
        "The name of the new React app we want to create",
        "The directory to create the new app in",
      ],
      correctAnswer: "The directory to create the new app in",
    },
    {
      question:
        "What command is used to start the React local development server?",
      answers: ["npm start", "npm run dev"],
      correctAnswer: "npm run dev",
    },
  ];

  useEffect(() => {
    setCorrectStatus("");
    if (showSlider === "slide-right") {
      const timeout = setTimeout(() => {
        setShowSlider("");
      }, 1200);
      return () => clearTimeout(timeout);
    }
  }, [showSlider]);


  const chooseAnswer = (isCorrect) => {
    if (isCorrect) {
      setCorrectStatus(true);
      setCorrectAnswers(correctAnswers + 1);
    }
    else{
      setCorrectStatus(false);
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
