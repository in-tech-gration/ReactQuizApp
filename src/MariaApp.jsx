import QuizContainer from "./components/QuizContainer/QuizContainer";
import { useState, useEffect } from "react";
import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";

export default function MariaApp() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      event.preventDefault();
      event.returnValue =
        "Are you sure you want to leave? Your changes may not be saved.";
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  return (
    <>
      <div className={isDarkMode ? "dark" : "light"}>
        <button onClick={toggleDarkMode}>
          {isDarkMode ? (
            <MdOutlineLightMode
              size={30}
              style={{ marginLeft: "10px", marginTop: "10px" }}
            />
          ) : (
            <MdOutlineDarkMode
              size={30}
              style={{ marginLeft: "10px", marginTop: "10px" }}
            />
          )}
        </button>
        <QuizContainer />
      </div>
    </>
  );
}
