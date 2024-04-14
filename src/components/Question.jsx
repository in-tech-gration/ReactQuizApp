import { useEffect, useRef } from "react";
import hljs from "highlight.js";
import 'highlight.js/styles/atom-one-dark.css';

export default function Question(props) {
  const questionblock = props.questions[props.currentQuestion].question;
  const codeblock = props.questions[props.currentQuestion].code;

  const codeRef = useRef();
  useEffect(() => {
    if (codeRef && codeRef.current) {
      hljs.highlightElement(codeRef.current);
    }
  }, [codeblock]);

  return (
    <section id="question-text-wrapper" className="flex flex-column">
      <p className="question-text">{questionblock}</p>
      {codeblock && (
          <code className={`language-${props.language} question-code`} ref={codeRef}>
            {codeblock}
          </code>
      )}
    </section>
  );
}
