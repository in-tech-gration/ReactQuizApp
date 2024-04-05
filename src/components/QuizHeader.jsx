import Logo from "./Logo";
import CategoryLogo from "./CategoryLogo";
import MainMenuButton from "./MainMenuButton";
import classes from "./QuizHeader.module.css";

export default function QuizHeader({ category }) {
  return (
    <header className={`flex flex-row ${classes.categoryheader}`}>
      <MainMenuButton />
      <CategoryLogo category={category} />
      <Logo />
    </header>
  );
}
