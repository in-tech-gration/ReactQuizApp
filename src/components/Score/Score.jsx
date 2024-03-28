import { QuizContainerContext } from "../../QuizContainerContext";
import { useContext, useEffect, useState } from "react";
import "./Score.css";

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
      <h1 className="score">Your Score: {correctAnswersCount}/10</h1>
      <h2 className="restart-question">Do you wish to play again?</h2>
      <button className="restart" onClick={resetQuiz}>
        Restart Quiz
      </button>
    </div>
  );
}
