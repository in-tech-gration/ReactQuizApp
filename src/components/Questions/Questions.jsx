/* eslint-disable react/prop-types */
import { QuizContainerContext } from "../../QuizContainerContext";
import { useContext } from "react";
import "./Questions.css";

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

  // const shuffledAnswers = [
  //   currentQuestion.correctAnswer,
  //   currentQuestion.incorrectAnswer,
  // ].sort(() => Math.random() - 0.5);

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
      }, 2000);
    }
  };

  return (
    <div className="questions-container">
      <h1 className="question-text">{currentQuestion.question}</h1>
      <div className="answers-container">
        {[currentQuestion.correctAnswer, currentQuestion.incorrectAnswer].map(
          (answer, index) => {
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

            return (
              <button
                key={index}
                className={buttonClassName}
                onClick={() => handleAnswer(answer)}
                disabled={isAnswered}
              >
                {answer}
              </button>
            );
          }
        )}
      </div>
    </div>
  );
}
