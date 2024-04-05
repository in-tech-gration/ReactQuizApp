import "./MainMenuButton.css";

export default function MainMenuButton(props) {
  return (
    <div className="main-menu-button-container">
      <button
        className="main-menu-button answer"
        onClick={() => props.chooseCategory(category)}
      >
        Home
      </button>
    </div>
  );
}
