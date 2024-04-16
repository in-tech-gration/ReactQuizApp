import { useState } from "react";
import "./Questions_counter_button.css";

function Questions_counter_button({ minValue = 0, maxValue = 100 }) {
  const [numberOfQuestionsCount, setnumberOfQuestionsCount] = useState(minValue);

  const handleIncrementCounter = () => {
    if (numberOfQuestionsCount < maxValue) {
      setCount((prevState) => prevState + 1);
    }
  };

  const handleDecrementCounter = () => {
    if (numberOfQuestionsCount > minValue) {
      setCount((prevState) => prevState - 1);
    }
  };

  return (
    <div className="questions-counter-button-container flex flex-row">
      <p>Number of Questions</p>
      <div className="questions-counter-button btn-group">
      <button className="decrement-btn" onClick={handleDecrementCounter}>
          <span className="material-symbols-outlined">-</span>
        </button>
        <p><input type="number" value={numberOfQuestionsCount}/></p>
        <button className="increment-btn" onClick={handleIncrementCounter}>
          <span className="material-symbols-outlined">+</span>
        </button>
      </div>
    </div>
  );
}

export default Questions_counter_button;
