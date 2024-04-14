import QuizHeader from "./QuizHeader";
import MainMenuButton from "./MainMenuButton";

export default function TimeoutComponent({
  name,
  category,
  showApp,
  setShowApp,
  chooseHome,
}) {
  return (
    <>
      <main className="flex flex-column ">
        <div id="question-wrapper" className="flex flex-column">
          <section id="timer-section" className="flex flex-column">
            <span>You have reached your time limit. <br/>Please restart.</span>
            <MainMenuButton
              name={name}
              className={name}
              showApp={showApp}
              setShowApp={setShowApp}
              chooseHome={chooseHome}
            />
          </section>
        </div>
      </main>
    </>
  );
}
