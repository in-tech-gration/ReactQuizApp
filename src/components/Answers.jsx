import Answer from "./Answer";

export default function Answers(props) {
  return (
    <section id="answers-section" className="flex flex-row">
      {props.answers.map((answer, answerindex) => {
        return (
          <Answer
            key={answerindex}
            id={`answer${answerindex}`}
            answerCurrentIndex={answerindex}
            answer={answer}
            correctAnswer={props.correctAnswer}
            correctStatus={props.correctStatus}
            svg={answer}
            chooseAnswer={props.chooseAnswer}
          >
            {answer}
          </Answer>
        );
      })}
    </section>
  );
}
