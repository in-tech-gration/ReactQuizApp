import Logo from "./Logo";
import CategoryLogo from "./CategoryLogo";
import MainMenuButton from "./MainMenuButton";
import classes from "./QuizHeader.module.css";

export default function QuizHeader({ category, showApp, setShowApp , chooseHome}) {
  return (
    <header className={`flex flex-row ${classes.categoryheader}`}>
      <MainMenuButton name="Home" showApp={showApp} setShowApp={setShowApp} chooseHome={chooseHome}/>
      <CategoryLogo category={category} />
      <Logo />
    </header>
  );
}
