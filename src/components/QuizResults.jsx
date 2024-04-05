export default function QuizResults(props) {
  const success = props.correctAnswers === props.questions.length;
  const fail = props.correctAnswers !== props.questions.length;

  return (
    <section id="quiz-results" className="flex flex-row">
      <div className="resultsdiv">
        {props.showText && (
          <h4>
            {success ? (
              <div className="flex flex-row">
                <span className="purple-color">Congratulations! </span> <br />
                <span>You got all the answers correct!</span>
                <br />
                <span>
                  You answered{" "}
                  <span className="orange-color">{props.correctAnswers} </span>
                  correct answers out of total{" "}
                  <span className="green-color">
                    {props.questions.length}
                  </span>{" "}
                  answers
                </span>
              </div>
            ) : fail ? (
              <div className="flex flex-row">
                <span className="purple-color">
                  You didn't get it but you will next time! <br />
                </span>
                <span>
                  You answered{" "}
                  <span className="orange-color">{props.correctAnswers} </span>
                  correct answers out of total{" "}
                  <span className="green-color">
                    {props.questions.length}
                  </span>{" "}
                  answers
                </span>
              </div>
            ) : (
              ""
            )}
          </h4>
        )}
      </div>
    </section>
  );
}
