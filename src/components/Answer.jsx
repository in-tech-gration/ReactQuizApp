import { CircleSvg, DotSvg, CheckMarkSvg, XMarkSvg } from "./SvgComponents";

export default function Answer({
  id,
  answer,
  answerIndex,
  onClickHandler,
  children,
  selected,
  answerClassName,
  answerEffectClassName,
}) {
  const section_id = id.replace("answer", "");

  const answerEffectSvg =
    answerClassName === "correct" ? <CheckMarkSvg /> : <XMarkSvg />;
  const selectedClass = selected ? "selected" : "";
  return (
    <section
      key={answerIndex}
      id={section_id}
      data-selected={selectedClass}
      className="flex flex-row"
    >
      <button
        onClick={(event) => {
          event.preventDefault();
          onClickHandler(answer, answerIndex);
        }}
        className={`answer row ${selectedClass} ${answerClassName}`}
      >
        <CircleSvg />
        <DotSvg />
        <p id={children} className="answertitle">
          {children}
        </p>
        <p className={`answerEffectElement ${answerEffectClassName}`}>
          {answerEffectSvg}
        </p>
      </button>
    </section>
  );
}
