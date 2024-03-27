import GameMain from "../GameMain/GameMain";
import Score from "../Score/Score";
import { QuizContainerContext } from "../../QuizContainerContext";
import { useEffect, useState } from "react";
import "./QuizContainer.css";

export default function QuizContainer() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState([]);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);

  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchQuestions() {
      setLoading(true);
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
          setError("Failed to fetch products. Please try again later.");
        }
      } finally {
        setLoading(false);
      }
    }

    fetchQuestions();
  }, []);

  const handleSetQuestions = (updatedQuestions) => {
    setQuestions(updatedQuestions);
  };

  const totalQuestions = questions.length;

  if (
    !totalQuestions ||
    currentQuestionIndex < 0 ||
    currentQuestionIndex >= totalQuestions
  ) {
    return <p style={{ color: "red" }}>Invalid questions data.</p>;
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p style={{ color: "red" }}>Something went wrong {error} </p>;
  }

  const allQuestionsAnswered = answeredQuestions.length === totalQuestions;

  return (
    <main className="container">
      <QuizContainerContext.Provider
        value={{
          questions,
          currentQuestionIndex,
          setCurrentQuestionIndex,
          answeredQuestions,
          setAnsweredQuestions,
          correctAnswersCount,
          setCorrectAnswersCount,
          setQuestions: handleSetQuestions,
        }}
      >
        {!allQuestionsAnswered && <GameMain />}
        {allQuestionsAnswered && <Score />}
      </QuizContainerContext.Provider>
    </main>
  );
}
