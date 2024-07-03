import { useEffect, useState } from "react";
import MultiChoice from "./MultiChoice";

export default function TriviaQuestion() {
  const [questions, setQuestions] = useState();
  const [loading, setLoading] = useState(true);
  const numQuestions = 30;
  const pageSize = 5;
  const [page, setPage] = useState(0);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch(
          `https://the-trivia-api.com/v2/questions?categories=society_and_culture&limit=${numQuestions}`
        );
        // const response = await fetch(`https://gnews.io/api/v4/top-headlines?category=general&language=en&country=us&max=10&apikey=${apiKey}`);
        const data = await response.json();
        setQuestions(data);
      } catch (error) {
        // setError(error);
      } finally {
        setLoading(false);
      }
    };

    if (!questions) {
      fetchQuestions();
    }
  }, [setQuestions, setLoading, questions]);

  const handlePrevious = () => {
    if (page > 0) {
      setPage((curr) => curr - 1);
    }
  };

  const handleNext = () => {
    if (page < Math.floor(numQuestions / pageSize) - 1) {
      setPage((curr) => curr + 1);
    }
  };

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        questions && (
          <>
            <h4>Questions</h4>
            {questions
              .slice(page * pageSize, (page + 1) * pageSize)
              .map((info) => (
                <MultiChoice
                  key={info.question.toString()}
                  question={info.question}
                  correctAnswer={info.correctAnswer}
                  incorrectAnswers={info.incorrectAnswers}
                  difficulty={info.difficulty}
                />
              ))}
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "10px",
                justifyContent: "center",
              }}
            >
              <button
                style={{ padding: "3px", border: "1px solid black" }}
                onClick={handlePrevious}
              >
                Previous
              </button>
              <button
                style={{ padding: "3px", border: "1px solid black" }}
                onClick={handleNext}
              >
                Next
              </button>
            </div>
          </>
        )
      )}
    </div>
  );
}
