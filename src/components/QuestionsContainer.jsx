import QuestionsCounter from "./QuestionsCounter";
import Timer from "./Timer";

export default function QuestionsContainer(props) {
  return (
    <div id="question-wrapper" className="flex flex-column">
      {props.timerRunning ? (
        <QuestionsCounter
          questions={props.questions}
          currentQuestion={props.currentQuestion + 1}
        />
      ) : (
        ""
      )}
      <Timer
        showApp={props.showApp}
        setShowApp={props.setShowApp}
        chooseHome={props.chooseHome}
        timerRunning={props.timerRunning}
        setTimerRunning={props.setTimerRunning}
        time={props.time}
        setTime={props.setTime}
        totalTime={props.totalTime}
        setTotalTime={props.setTotalTime}
        percentage={props.percentage}
        setPercentage={props.setPercentage}
      />
    </div>
  );
}
