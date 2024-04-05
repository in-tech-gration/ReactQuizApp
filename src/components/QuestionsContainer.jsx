import QuestionsCounter from "./QuestionsCounter";
import Timer from "./Timer";

export default function QuestionsContainer(props) {
  return (
    <div id="question-wrapper" className="flex flex-column">
      <QuestionsCounter
        questions={props.questions}
        currentQuestion={props.currentQuestion + 1}
      />
      <Timer />
    </div>
  );
}
