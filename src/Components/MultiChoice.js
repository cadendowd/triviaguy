import { useState } from "react";
import { shuffleArray } from "./Card";

export default function MultiChoice({
  question,
  correctAnswer,
  incorrectAnswers,
  difficulty,
}) {
  const [showAnswer, setShowAnswer] = useState(false);
  const [showChoices, setShowChoices] = useState(false);
  const answers = shuffleArray([correctAnswer, ...incorrectAnswers]);

  return (
    <div
      style={{ border: "1px solid gray", padding: "4px", marginBottom: "4px" }}
    >
      {showAnswer ? (
        <p>{correctAnswer}</p>
      ) : (
        <div>
          <h5>{question.text}</h5>
          {showChoices && (
            <ul>
              {answers.map((answer) => {
                return <li>{answer}</li>;
              })}
            </ul>
          )}
          <button
            style={{
              padding: "3px",
              border: "1px solid black",
              ...(difficulty === "easy" && {
                backgroundColor: "#29c448",
              }),
              ...(difficulty === "medium" && {
                backgroundColor: "#c4b229",
              }),
              ...(difficulty === "hard" && {
                backgroundColor: "#c43629",
              }),
            }}
            onClick={() => setShowChoices(!showChoices)}
          >
            choices
          </button>
        </div>
      )}
      <button
        style={{ padding: "3px", border: "1px solid black" }}
        onClick={() => setShowAnswer(!showAnswer)}
      >
        {showAnswer ? `hide answer` : `show answer`}
      </button>
    </div>
  );
}
