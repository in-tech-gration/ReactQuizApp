import Progress from "../Progress/Progress";
import Questions from "../Questions/Questions";
import { QuizContainerContext } from "../../QuizContainerContext";
import { useContext } from "react";
import { FaDotCircle } from "react-icons/fa";
import { GiThink } from "react-icons/gi";
import "./GameMain.css";

export default function GameMain() {
  const { questions, currentQuestionIndex } = useContext(QuizContainerContext);

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <>
      <Questions key={currentQuestion.id} question={currentQuestion} />
      <Progress />
      <div className="star-thinking-icons">
        <FaDotCircle className="circle" color="gold" size={35} />
        <GiThink size={40} />
        <FaDotCircle className="circle" color="gold" size={35} />
        <GiThink size={40} />
        <FaDotCircle className="circle" color="gold" size={35} />
        <GiThink size={40} />
        <FaDotCircle className="circle" color="gold" size={35} />
        <GiThink size={40} />
        <FaDotCircle className="circle" color="gold" size={35} />
        <GiThink size={40} />
      </div>
    </>
  );
}
