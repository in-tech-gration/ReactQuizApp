import "./MainMenuButton.css";

export default function MainMenuButton({
  chooseHome,
  chooseDiff,
  name,
  isSelectedDiff,
  setIsSelectedDiff,
}) {
  const handleClick = (event) => {
    event.preventDefault();
    if (name === "Home" || name === "Restart") {
      chooseHome();
    } else {
      setIsSelectedDiff(event.target.innerText);
      chooseDiff(event.target.innerText);
    }
  };
  return (
    <div className="main-menu-button-container">
      <button
        className={`main-menu-button answer ${name.toLowerCase()} ${
          isSelectedDiff===name ? "selected" : ""
        } `}
        onClick={handleClick}
      >
        {name}
      </button>
    </div>
  );
}
