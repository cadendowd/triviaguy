import React, { useState } from "react";

import {
  Button,
  Container,
  OrderedList,
  ListItem,
  Heading,
  Text,
} from "@chakra-ui/react";

function shuffleArray(originalArray) {
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

const Category = (props) => {
  const { title, url } = props;
  const [data, setData] = useState(null);
  // const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const pageSize = 5;
  const [page, setPage] = useState(0);

  console.log(data);

  const handleCall = async () => {
    const fetchArticles = async () => {
      try {
        const apiKey = process.env.REACT_APP_NEWS_API_KEY;
        const response = await fetch(`${url}${apiKey}`);
        // const response = await fetch(`https://gnews.io/api/v4/top-headlines?category=general&language=en&country=us&max=10&apikey=${apiKey}`);
        const data = await response.json();
        setData(data.articles);
      } catch (error) {
        setError(error);
      } finally {
        // setLoading(false);
      }
    };

    await fetchArticles();
  };

  const handleShuffle = () => {
    // setLoading(true);
    const shuffleAgain = shuffleArray(data);
    setData(shuffleAgain);
    // setLoading(false);
  };

  const handlePrevious = () => {
    if (page > 0) {
      setPage((curr) => curr - 1);
    }
  };

  const handleNext = () => {
    if (page < Math.floor(data?.length / pageSize) - 1) {
      setPage((curr) => curr + 1);
    }
  };

  return (
    <Container mt={"8px"}>
      <Button onClick={data ? null : handleCall}>{title}</Button>
      {error && <Text>Something went wrong try again tomorrow</Text>}
      {data && (
        <>
          <Container mt={"8px"}>
            <OrderedList>
              {data
                .slice(page * pageSize, (page + 1) * pageSize)
                .map((article, i) => {
                  return (
                    <ListItem key={`${title}-${i}`}>
                      <Heading size="md">{article.title}</Heading>
                      <Text>
                        {article.description} -{" "}
                        <a href={`${article.url}`} style={{ color: "blue" }}>
                          {article.source.name}
                        </a>
                      </Text>
                    </ListItem>
                  );
                })}
            </OrderedList>
          </Container>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "10px",
              justifyContent: "center",
            }}
          >
            <Button onClick={handlePrevious} mt={"8px"}>
              Previous
            </Button>
            <Button onClick={handleNext} mt={"8px"}>
              Next
            </Button>
          </div>
        </>
      )}
    </Container>
  );
};

export default Category;
