import Progress from "../Progress/Progress";
import Questions from "../Questions/Questions";
import { QuizContainerContext } from "../../QuizContainerContext";
import { useContext } from "react";

export default function GameMain() {
  const { questions, currentQuestionIndex } = useContext(QuizContainerContext);

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <>
      <Questions key={currentQuestion.id} question={currentQuestion} />
      <Progress />
    </>
  );
}
