import { useState, useRef, useEffect } from "react";
import { ProgressBar } from "react-progressbar-fancy";
import ClockSVG from "./SvgComponents/ClockSVG";
import TimeoutComponent from "./TimeoutComponent";

// Function to format the time string
const timeString = (time) => {
  const minutes = time.getMinutes();
  const seconds = time.getSeconds().toString().padStart(2, "0");
  return `${minutes}:${seconds}`;
};

const calcPercentage = (time, initialtotalTime) => {
  const totaltimeleft = time.getMinutes() * 60 + time.getSeconds();
  const totalTime = initialtotalTime * 60;
  const percentage = (totaltimeleft / totalTime) * 100;
  return percentage;
};

// Custom hook to manage the timer
function useTime(
  time,
  setTime,
  totalTime,
  setTotalTime,
  percentage,
  setPercentage,
  timerRunning,
  setTimerRunning
) {
  const currentTimeRef = useRef(time); // Ref to hold the current time value

  useEffect(() => {
    // Update the ref with the current time value
    currentTimeRef.current = time;

    // Set up the interval to decrement the time every second
    const intervalId = setInterval(() => {
      if (timerRunning) {
        setTime((prevTime) => {
          // Decrement the time by 1 second
          const newTime = new Date(prevTime.getTime() - 1000);
          const newPercentage = calcPercentage(newTime, totalTime);
          setPercentage(newPercentage);

          // Stop the timer if it reaches 00:00

          if (newTime.getMinutes() === 0 && newTime.getSeconds() === 0) {
            setTimerRunning(false);
            setTime(new Date(0, 0, 0, 0, 1));
          }
          return newTime;
        });
      }
    }, 1000);

    // Cleanup function to clear the interval
    return () => clearInterval(intervalId);

    // Dependencies: time, timerRunning (only re-run the effect if these values change)
  }, [
    time,
    setTime,
    totalTime,
    setTotalTime,
    percentage,
    setPercentage,
    timerRunning,
    setTimerRunning,
  ]);

  // Return the current time state
  return {
    time,
    setTime,
    totalTime,
    setTotalTime,
    percentage,
    setPercentage,
    timerRunning,
    setTimerRunning,
  };
}

// Timer component using the useTime hook
export default function Timer({
  time,
  setTime,
  totalTime,
  setTotalTime,
  percentage,
  setPercentage,
  timerRunning,
  setTimerRunning,
  category,
  showApp,
  setShowApp,
  chooseHome,
}) {
  // Get the current time using the useTime hook
  const {
    time: initialTime,
    setTime: updateTime,
    totalTime: updateTotalTime,
    setTotalTime: updateSetTotalTime,
    percentage: updatePercentage,
    setPercentage: updateSetPercentage,
    timerRunning: updateTimerRunning,
    setTimerRunning: updateSetTimerRunning,
  } = useTime(
    time,
    setTime,
    totalTime,
    setTotalTime,
    percentage,
    setPercentage,
    timerRunning,
    setTimerRunning
  );
  const per = updatePercentage.toFixed(0);
  // Render the formatted time string
  return (
    <section id="timer-section" className="flex flex-column">
      {timerRunning ? (
        <>
          <ProgressBar
            className="space"
            label={"Time left "}
            primaryColor={
              per < 30 ? "#ff0358" : per < 50 ? "#1ee226" : "#555aab"
            }
            secondaryColor={
              per < 30 ? "#ff0358" : per < 50 ? "#4caf50" : "#0575e6"
            }
            //darkTheme
            progressWidth={`${per}%`}
            score={per}
          />
          <ClockSVG />
          <span>{timeString(initialTime)}</span>
        </>
      ) : (
        <TimeoutComponent
          timerRunning={updateTimerRunning}
          setTimerRunning={updateSetTimerRunning}
          time={initialTime}
          setTime={updateTime}
          totalTime={updateTotalTime}
          setTotalTime={updateSetTotalTime}
          percentage={updatePercentage}
          setPercentage={updateSetPercentage}
          name="Restart"
          showApp={showApp}
          setShowApp={setShowApp}
          chooseHome={chooseHome}
        />
      )}
    </section>
  );
}
