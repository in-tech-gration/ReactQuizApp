import { useContext } from "react";
import { QuizContainerContext } from "../../QuizContainerContext";
import "./Progress.css";
import { FaStar } from "react-icons/fa";
import { AiFillForward } from "react-icons/ai";

export default function Progress() {
  const {
    answeredQuestions,
    correctAnswersCount,
    questions,
    currentQuestionIndex,
  } = useContext(QuizContainerContext);

  // Function to determine background color for each progress item
  const getBackgroundColor = (index) => {
    const isAnswered = answeredQuestions.includes(index);
    const currentQuestion = questions[index];

    switch (true) {
      case index === currentQuestionIndex && !isAnswered:
        return "gray";
      case !isAnswered:
        return "light-gray";
      case currentQuestion.correctAnswer === currentQuestion.selectedAnswer:
        return "green";
      default:
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
      <FaStar className="star" color="black" size={20} />
      <div className="correct-answers-count">{correctAnswersCount}</div>
      <AiFillForward className="arrow" color="gray" size={27} />
    </div>
  );
}
