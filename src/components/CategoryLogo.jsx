import classes from "./QuizHeader.module.css";

export default function CategoryLogo({ category }) {
  return (
    <div className={classes.categorylogo}>
      <div className="button-icon-container">
        <img
          className="category-img"
          src={`./images/icon-${
            category === "javascript" ? "js" : category
          }.svg`}
          alt={`${category} icon`}
        />
      </div>
      <h2 className="category-chosen">{category}</h2>
    </div>
  );
}
