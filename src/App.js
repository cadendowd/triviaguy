import "./App.css";
import Navbar from "./Components/Navbar";
import Category from "./Components/Category";
import { Divider } from "@chakra-ui/react";

const categories = [
  {
    title: "General",
    url: "https://gnews.io/api/v4/top-headlines?category=general&language=en&country=us&max=10&apikey=",
  },
  {
    title: "Entertainment",
    url: "https://gnews.io/api/v4/top-headlines?category=entertainment&language=en&country=us&max=10&apikey=",
  },
  {
    title: "Sports",
    url: "https://gnews.io/api/v4/top-headlines?category=sports&language=en&country=us&max=10&apikey=",
  },
  {
    title: "World",
    url: "https://gnews.io/api/v4/top-headlines?category=world&language=en&country=us&max=10&apikey=",
  },
];

function App() {
  return (
    <div className="App">
      <Navbar />
      {categories.map((cat, i) => {
        return (
          <>
            <Category title={cat.title} url={cat.url} />
            {i !== categories.length - 1 && <Divider mt={"8px"} />}
          </>
        );
      })}
    </div>
  );
}

export default App;

// "message": "Your API key is invalid or incorrect. Check your key, or go to https://newsapi.org to create a free API key."
