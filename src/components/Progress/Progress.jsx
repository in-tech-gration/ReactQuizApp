import { useContext } from "react";
import { QuizContainerContext } from "../../QuizContainerContext";
import "./Progress.css";
import { FaStar } from "react-icons/fa";

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
      <FaStar color="gold" size={20} />
      <div className="correct-answers-count">{correctAnswersCount}</div>
    </div>
  );
}
