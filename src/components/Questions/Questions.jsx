import { QuizContainerContext } from "../../QuizContainerContext";
import { useContext, useEffect, useState } from "react";
import "./Questions.css";
import { FaCheck } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

export default function Questions() {
  const {
    questions,
    currentQuestionIndex,
    setCurrentQuestionIndex,
    setCorrectAnswersCount,
    answeredQuestions,
    setAnsweredQuestions,
    setQuestions,
  } = useContext(QuizContainerContext);

  const currentQuestion = questions[currentQuestionIndex];

  const [shuffledAnswers, setShuffledAnswers] = useState([]);
  const [isWrongAnswer, setIsWrongAnswer] = useState(false);

  useEffect(() => {
    const allAnswers = [
      currentQuestion.correctAnswer,
      ...currentQuestion.incorrectAnswers,
    ];
    const shuffled = allAnswers.sort(() => Math.random() - 0.5);
    setShuffledAnswers(shuffled);
  }, [currentQuestion.correctAnswer, currentQuestion.incorrectAnswers]);

  // Function to handle user's answer selection
  const handleAnswer = (selectedAnswer) => {
    const isCorrect = selectedAnswer === currentQuestion.correctAnswer;
    const updatedQuestions = questions.map((question, index) =>
      index === currentQuestionIndex
        ? { ...question, selectedAnswer }
        : question
    );
    setQuestions(updatedQuestions);

    if (isCorrect) {
      setCorrectAnswersCount((prevCount) => prevCount + 1);
    } else {
      setIsWrongAnswer(true);
    }

    // Update the list of answered questions
    const updatedAnsweredQuestions = [
      ...answeredQuestions,
      currentQuestionIndex,
    ];
    setAnsweredQuestions(updatedAnsweredQuestions);

    const allQuestionsAnswered =
      updatedAnsweredQuestions.length === questions.length;

    // If not all questions have been answered, move to the next question after a delay
    if (!allQuestionsAnswered) {
      setTimeout(() => {
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
        setIsWrongAnswer(false);
      }, 3000);
    }
  };

  // Reset isWrongAnswer when the quiz is restarted
  useEffect(() => {
    setIsWrongAnswer(true);
  }, [answeredQuestions, currentQuestionIndex]);

  return (
    <div className="questions-container">
      <h1 className="question-text">{currentQuestion.question}</h1>
      <div className="answers-container">
        <div className="answer-row">
          {shuffledAnswers.map((answer, index) => {
            const isAnswered = answeredQuestions.includes(currentQuestionIndex);
            const isSelectedAnswerCorrect =
              answer === currentQuestion.correctAnswer;
            const isSelected = currentQuestion.selectedAnswer === answer;
            let buttonClassName = "answer-button";

            if (isAnswered) {
              if (isSelected) {
                buttonClassName += isSelectedAnswerCorrect
                  ? " correct"
                  : " incorrect";
              } else if (answer === currentQuestion.correctAnswer) {
                buttonClassName += " correct";
              }
            }

            if (isSelected && !isSelectedAnswerCorrect && isWrongAnswer) {
              buttonClassName += " wrong-answer-animation";
            }

            return (
              <div key={index} className="answer-wrapper">
                <button
                  className={buttonClassName}
                  onClick={() => handleAnswer(answer)}
                  disabled={isAnswered}
                >
                  {answer}
                  {isSelected && isSelectedAnswerCorrect && (
                    <FaCheck className="check" />
                  )}
                  {isSelected && !isSelectedAnswerCorrect && (
                    <FaTimes className="wrong-answer-icon" />
                  )}
                </button>
                {isAnswered && isSelectedAnswerCorrect && (
                  <span className="answer-message">Correct answer</span>
                )}
                {isAnswered && !isSelectedAnswerCorrect && isSelected && (
                  <span className="answer-message">Wrong answer</span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
