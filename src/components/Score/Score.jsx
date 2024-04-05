import { QuizContainerContext } from "../../QuizContainerContext";
import { useContext } from "react";
import "./Score.css";
// import { GiJumpingDog } from "react-icons/gi";
import { FaStar } from "react-icons/fa";

export default function Score() {
  const { questions, correctAnswersCount, resetQuiz } =
    useContext(QuizContainerContext);

  const totalQuestions = questions.length;

  const handleResetQuiz = () => {
    resetQuiz();
  };

  return (
    <div className="container-score">
      <h1 className="score">
        Your Score: <span className="correct-count">{correctAnswersCount}</span>{" "}
        / {totalQuestions}
      </h1>
      <div className="retry">
        <h2 className="restart-question">Do you wish to play again?</h2>
        <button className="restart-button" onClick={handleResetQuiz}>
          Restart Quiz
        </button>
        <FaStar className="star-2" color="gold" size={35} />
        {/* <GiJumpingDog className="dog-icon" size={150} /> */}
        <img src="./Unicorn2-dance.jpg" className="unicorns-dancing" />
        <FaStar className="star-2 bottom" color="gold" size={35} />
      </div>
    </div>
  );
}
