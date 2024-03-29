import QuestionsCounter from "./QuestionsCounter";

export default function QuestionsContainer(props) {
  return (
    <div id="question-wrapper" className="flex flex-row">
      <QuestionsCounter
        questions={props.questions}
        currentQuestion={props.currentQuestion + 1}
      />
    </div>
  );
}
