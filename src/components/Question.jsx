export default function Question(props) {
  return (
    <section className="flex flex-row">
      <p className="question-text">{props.questions[props.currentQuestion].question}</p>
    </section>
  );
}
