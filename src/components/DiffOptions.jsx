import MainMenuButton from "./MainMenuButton";

const options = ["easy", "medium", "hard"];

export default function DiffOptions({
  name,
  category,
  showApp,
  setShowApp,
  chooseHome,
  chooseDiff,
  isSelectedDiff,
  setIsSelectedDiff,
}) {
  return (
    <>
      <main className="flex flex-column ">
        <div id="question-wrapper" className="flex flex-column">
          <section id="timer-section" className="flex flex-column">
            <span>
              Choose difficuly
              <br />
              More difficulty = less time
            </span>
            <div className="flex flex-row">
              {options.map((option, optionIndex) => {
                return (
                  <div key={optionIndex} className="flex flex-column">
                    <MainMenuButton
                      key={optionIndex}
                      name={option}
                      className={option}
                      showApp={showApp}
                      setShowApp={setShowApp}
                      chooseHome={chooseHome}
                      chooseDiff={chooseDiff}
                      isSelectedDiff={isSelectedDiff}
                      setIsSelectedDiff={setIsSelectedDiff}
                    />
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
