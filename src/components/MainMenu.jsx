import { useState, useEffect } from "react";
import App from "../App";
import Header from "./Header";
import "../index.css";
import DiffOptions from "./DiffOptions";
import Questions_counter_button from "./Questions_counter_button/Questions_counter_button";

export default function MainMenu({
  showApp,
  setShowApp,
  chooseHome,
  chooseDiff,
  category,
  setCategoryValue,
  setQuestionsList,
  questionList,
  isSelectedDiff,
  setIsSelectedDiff,
  html5_questions,
  css3_questions,
  js_questions,
  react_questions,
}) {
  const quizCategories = ["HTML", "CSS", "JavaScript", "React"];

  function getCategoryLength(category) {
    switch (category) {
      case "html":
        return html5_questions.length;
        break;
      case "css":
        return css3_questions.length;
        break;
      case "js":
        return js_questions.length;
        break;
      case "react":
        return react_questions.length;
        break;
      default:
        return;
    }
  }

  function chooseCategory(selectedCategory) {
    const checkSelectedCategory =
      selectedCategory === "javascript" ? "js" : selectedCategory;
    setCategoryValue(checkSelectedCategory);

    switch (checkSelectedCategory) {
      case "html":
        setQuestionsList([...html5_questions]);
        break;
      case "css":
        setQuestionsList([...css3_questions]);
        break;
      case "js":
        setQuestionsList([...js_questions]);
        break;
      case "react":
        setQuestionsList([...react_questions]);
        break;
      default:
        setQuestionsList([]);
    }

    setShowApp(true);
  }

  const arrayFromCategory = (category) =>
    Array.from(
      { length: getCategoryLength(category) },
      (_, index) => index + 1
    );


  return (
    <>
      <Header />
      <main className="flex flex-column ">
        <div className="start-menu flex flex-column">
          <div className="left-content">
            <h1>
              Welcome to the{" "}
              <span className="bold">Intechgration Developer Quiz!</span>
            </h1>
            <Questions_counter_button minValue={1} maxValue={45} />
            <DiffOptions
              chooseDiff={chooseDiff}
              isSelectedDiff={isSelectedDiff}
              setIsSelectedDiff={setIsSelectedDiff}
            />
            <p>choose a category to get started.</p>
          </div>
          <div id="main-menu-choises">
            {quizCategories.map((cat, index) => {
              const category = cat.toLowerCase();
              const categoryFiltered =
                category === "javascript" ? "js" : category;
              return (
                <div className="flex flex-column" key={index}>
                  <button
                    key={index}
                    id={category}
                    className="answer"
                    onClick={() => chooseCategory(category)}
                  >
                    <div className="button-icon-container">
                      <img
                        src={`./images/icon-${categoryFiltered}.svg`}
                        alt={`${category} icon`}
                      />
                    </div>
                    {category}
                    <p className="questions-counter-text">
                      {getCategoryLength(categoryFiltered)}
                    </p>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
}
