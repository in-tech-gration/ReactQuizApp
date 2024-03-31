import Progress from "../Progress/Progress";
import Questions from "../Questions/Questions";
import { QuizContainerContext } from "../../QuizContainerContext";
import { useContext } from "react";
import { FaDotCircle } from "react-icons/fa";
import { GiThink } from "react-icons/gi";
import "./GameMain.css";
import React from "react";

export default function GameMain() {
  const { questions, currentQuestionIndex } = useContext(QuizContainerContext);
  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="container-main">
      <Questions key={currentQuestion.id} question={currentQuestion} />
      <Progress />
      <ThinkingIcons />
    </div>
  );
}

// ThinkingIcons component renders a series of icons
function ThinkingIcons() {
  return (
    <div className="star-thinking-icons">
      {[...Array(5)].map((_, index) => (
        <React.Fragment key={index}>
          <FaDotCircle className="circle" color="gray" size={35} />
          <GiThink size={40} />
        </React.Fragment>
      ))}
    </div>
  );
}
