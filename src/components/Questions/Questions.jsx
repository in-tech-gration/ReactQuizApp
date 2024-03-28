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
  const totalQuestions = questions.length;

  const [shuffledAnswers, setShuffledAnswers] = useState([]);
  const [isWrongAnswer, setIsWrongAnswer] = useState(false);

  useEffect(() => {
    const shuffled = [
      currentQuestion.correctAnswer,
      currentQuestion.incorrectAnswer,
    ].sort(() => Math.random() - 0.5);
    setShuffledAnswers(shuffled);
  }, [currentQuestion.correctAnswer, currentQuestion.incorrectAnswer]);

  const handleAnswer = (selectedAnswer) => {
    const isCorrect = selectedAnswer === currentQuestion.correctAnswer;

    const updatedQuestions = questions.map((question, index) => {
      if (index === currentQuestionIndex) {
        return { ...question, selectedAnswer };
      }
      return question;
    });
    setQuestions(updatedQuestions);

    if (isCorrect) {
      setCorrectAnswersCount((prevCount) => prevCount + 1);
    } else {
      setIsWrongAnswer(true);
    }

    const updatedAnsweredQuestions = [
      ...answeredQuestions,
      currentQuestionIndex,
    ];
    setAnsweredQuestions(updatedAnsweredQuestions);

    const allQuestionsAnswered =
      updatedAnsweredQuestions.length === totalQuestions;

    if (!allQuestionsAnswered) {
      setTimeout(() => {
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
        setIsWrongAnswer(false);
      }, 2000);
    }
  };

  return (
    <div className="questions-container">
      <h1 className="question-text">{currentQuestion.question}</h1>
      <div className="answers-container">
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
            <button
              key={index}
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
          );
        })}
      </div>
    </div>
  );
}
