import React, { useState } from "react";

export function shuffleArray(originalArray) {
  // Creating a copy of the original array
  const array = [...originalArray];

  // Fisher-Yates Shuffle Algorithm
  for (let i = array.length - 1; i > 0; i--) {
    // Generate a random index
    const j = Math.floor(Math.random() * (i + 1));

    // Swap elements at indices i and j
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
}

const Card = (props) => {
  const { articles, category, color } = props;

  // const [loading, setLoading] = useState(false);
  const [shuffledArticles, setShuffledArticles] = useState(articles);

  const handleShufle = () => {
    // setLoading(true);
    const shuffleAgain = shuffleArray(shuffledArticles);
    setShuffledArticles(shuffleAgain);
    // setLoading(false);
  };

  return (
    <div
      style={{
        backgroundColor: color,
        padding: "2rem",
        margin: "1rem 2rem",
        borderRadius: "10px",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h3>{category}</h3>
        <button
          onClick={() => {
            handleShufle();
          }}
        >
          refresh
        </button>
      </div>
      <ol>
        {shuffledArticles.slice(0, 5).map((article, i) => {
          const title = article.title;
          const short = title.substring(0, title.lastIndexOf("-"));
          return (
            <li key={`${category}-i`}>
              <div style={{ marginTop: i !== 0 ? "30px" : "0px" }}>
                <h3>{short}</h3>
                <p>
                  {article.description} - {article.source.name}
                </p>
                {/* <p>{article.content}</p> */}
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default Card;
