import { useContext } from "react";
import { QuizContainerContext } from "../../QuizContainerContext";
import "./Progress.css";
import { FaStar } from "react-icons/fa";
import { AiFillForward } from "react-icons/ai";

export default function Progress() {
  const { answeredQuestions, correctAnswersCount, questions } =
    useContext(QuizContainerContext);

  const getBackgroundColor = (index) => {
    const isAnswered = answeredQuestions.includes(index);
    const currentQuestion = questions[index];

    if (!isAnswered) {
      return "gray";
    }

    if (
      currentQuestion.correctAnswer === currentQuestion.incorrectAnswer ||
      currentQuestion.selectedAnswer === null
    ) {
      return "gray";
    } else if (
      currentQuestion.correctAnswer === currentQuestion.selectedAnswer
    ) {
      return "green";
    } else {
      return "red";
    }
  };

  return (
    <div className="progress-container">
      {questions.map((_, index) => (
        <div
          key={index}
          className="progress-number"
          style={{ backgroundColor: getBackgroundColor(index) }}
        >
          {index + 1}
        </div>
      ))}
      <FaStar className="star" color="black" size={35} />
      <div className="correct-answers-count">{correctAnswersCount}</div>
      <AiFillForward className="arrow" color="gray" size={45} />
    </div>
  );
}
