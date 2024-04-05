import { useState, useEffect } from "react";
import App from "../App";
import Header from "./Header";
import "../index.css";

export default function MainMenu({ category }) {
  const quizCategories = ["HTML", "CSS", "JavaScript", "React"];
  const [showApp, setShowApp] = useState(false);
  const [categoryValue, setCategoryValue] = useState("");

  function chooseCategory(selectedCategory) {
    const checkSelectedCategory = selectedCategory === "javascript" ? "js" : selectedCategory;
    setCategoryValue(checkSelectedCategory);
    setShowApp(true);
  }

  return (
    <>
      {showApp === false ? (
        <>
          <Header />
          <main className="flex flex-column ">
            <div className="start-menu flex flex-column">
              <div className="left-content">
                <h1>
                  Welcome to the{" "}
                  <span className="bold">Intechgration Developer Quiz!</span>
                </h1>
                <p>choose a category to get started.</p>
              </div>
              <div id="main-menu-choises">
                {quizCategories.map((cat, index) => {
                  const category = cat.toLowerCase();
                  return (
                    <button
                      key={index}
                      id={category}
                      className="answer"
                      onClick={() => chooseCategory(category)}
                    >
                      <div className="button-icon-container">
                        <img
                          src={`./images/icon-${
                            category === "javascript" ? "js" : category
                          }.svg`}
                          alt={`${category} icon`}
                        />
                      </div>
                      {category}
                    </button>
                  );
                })}
              </div>
            </div>
          </main>
        </>
      ) : (
        categoryValue && <App category={categoryValue} />
      )}
    </>
  );
}
