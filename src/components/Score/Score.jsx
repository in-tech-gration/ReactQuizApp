import { QuizContainerContext } from "../../QuizContainerContext";
import { useContext, useEffect, useState } from "react";
import "./Score.css";
import { GiJumpingDog } from "react-icons/gi";
import { FaStar } from "react-icons/fa";

export default function Score() {
  const {
    correctAnswersCount,
    setCorrectAnswersCount,
    setCurrentQuestionIndex,
    setAnsweredQuestions,
    setQuestions,
  } = useContext(QuizContainerContext);

  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchQuestions() {
      try {
        const response = await fetch("/questions.json");
        if (!response.ok) {
          throw new Error("Failed to fetch questions");
        }
        const data = await response.json();
        setQuestions(data);
      } catch (error) {
        console.log("Error:", error);
        if (error instanceof SyntaxError) {
          setError(
            "Error parsing JSON data. Please check the format of the JSON file."
          );
        } else {
          setError(`Failed to fetch questions: ${error.message}`);
        }
      }
    }

    fetchQuestions();
  }, [setQuestions]);

  if (error) {
    return (
      <p style={{ color: "red" }}>{`Something went wrong ${error.message} `}</p>
    );
  }

  const resetQuiz = () => {
    setCorrectAnswersCount(0);
    setCurrentQuestionIndex(0);
    setAnsweredQuestions([]);
    setQuestions([]);
  };

  return (
    <div className="container-score">
      <h1 className="score">
        Your Score: <span className="correct-count">{correctAnswersCount}</span>
        /10
      </h1>
      <div className="retry">
        <h2 className="restart-question">Do you wish to play again?</h2>
        <button className="restart-button" onClick={resetQuiz}>
          Restart Quiz
        </button>
        <FaStar className="star-2" color="gold" size={35} />
        <GiJumpingDog className="dog-icon" size={150} />
        <FaStar className="star-2 bottom" color="gold" size={35} />
      </div>
    </div>
  );
}
