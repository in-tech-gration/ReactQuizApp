import { CheckMarkSvg, XMarkSvg } from "./SvgComponents";
import { useState, useEffect } from "react";

export default function ScoreIndicatorBoard({
  incorrectAnswers,
  correctAnswers,
}) {
  // Create an array to keep track of all answers
  const [totalAnswers, setTotalAnswers] = useState([]);
  const [prevCorrectAnswers, setPrevCorrectAnswers] = useState(0);
  const [prevIncorrectAnswers, setPrevIncorrectAnswers] = useState(0);

  useEffect(() => {
    // Check if correctAnswers have been incremented
    if (correctAnswers > prevCorrectAnswers) {
      setTotalAnswers((prevTotalAnswers) => [...prevTotalAnswers, true]);
      // Update the previous value of correctAnswers
      setPrevCorrectAnswers(correctAnswers);
      // Perform any other actions you want when correctAnswers are incremented
    }
    if (incorrectAnswers > prevIncorrectAnswers) {
      setTotalAnswers((prevTotalAnswers) => [...prevTotalAnswers, false]);
      // Update the previous value of correctAnswers
      setPrevIncorrectAnswers(incorrectAnswers);
      // Perform any other actions you want when correctAnswers are incremented
    }
  }, [
    correctAnswers,
    prevCorrectAnswers,
    incorrectAnswers,
    prevIncorrectAnswers,
  ]);

  return (
    <div id="score-indicator-wrapper" className="flex flex-row">
      {/* Loop through each answer */}
      {totalAnswers.map((answerState, index) => {
        return (
          <div key={`answer-${index}`} className="score-indicator">
            {/* Conditionally render the correct or incorrect answer */}
            {answerState === true ? (
              <span className="correct">
                <sup>{index + 1}</sup>
                <CheckMarkSvg />
              </span>
            ) : (
              <span className="incorrect">
                <sup>{index + 1}</sup>
                <XMarkSvg />
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
}
