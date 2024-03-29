export default function Paging(props) {
  const firstLetterofString = (string) => string[0]; 
  const StringWithoutFirstLetter = (string) => string.slice(1);
  const correctStatusText = props.correctStatus
    ? "Correct"
    : props.correctStatus === false
    ? "Wrong"
    : "";
  const correctStatusClassBox = props.correctStatus
    ? "correctStatusClassBox correct-box"
    : props.correctStatus === false
    ? "correctStatusClassBox false-box"
    : "";

  const correctStatusClassText = props.correctStatus
    ? "correct-text"
    : props.correctStatus === false
    ? "false-text"
    : "";

  return (
    <section id="quiz-progress" className="flex flex-row">
      <div className="correctStatusClassContainer">
        <div className={`flex flex-row ${correctStatusClassBox}`}>{firstLetterofString(correctStatusText)}</div>
        <span className={`flex flex-row ${correctStatusClassText}`}>
          {StringWithoutFirstLetter(correctStatusText)}
        </span>
      </div>
    </section>
  );
}
