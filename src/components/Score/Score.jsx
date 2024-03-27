import { QuizContainerContext } from "../../QuizContainerContext";
import { useContext } from "react";
import "./Score.css";

export default function Score() {
  const {
    correctAnswersCount,
    setCorrectAnswersCount,
    setCurrentQuestionIndex,
    setAnsweredQuestions,
  } = useContext(QuizContainerContext);

  const resetQuiz = () => {
    setCorrectAnswersCount(0);
    setCurrentQuestionIndex(0);
    setAnsweredQuestions([]);
  };

  return (
    <div className="container-score">
      <h1>Your Score: {correctAnswersCount}/10</h1>
      <h2>Do you wish to play again?</h2>
      <button className="restart" onClick={resetQuiz}>
        Restart Quiz
      </button>
    </div>
  );
}
