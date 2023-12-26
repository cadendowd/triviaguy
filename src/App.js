import { useState } from 'react';
import './App.css';
import Card from './Card';

const categories = [
  {
    category: "General",
    color: "lightgreen",
  },
  {
    category: "Entertainment",
    color: "lightpink",
  },
  {
    category: "Sports",
    color: "lightblue",
  },
  {
    category: "Business",
    color: "lavendar",
  },
  {
    category: "Technology",
    color: "lightgray",
  },
];

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleCall =  async () => {
    const fetchArticles = async () => {
      try {
        setLoading(true);
        // abc news
        // const response = await fetch('https://newsapi.org/v2/top-headlines?pageSize=21&sources=abc-news&language=en&apiKey=ff6c70e621e54ff19b943a356a78973d');
        // all business sources 
        // const response = await fetch('https://newsapi.org/v2/top-headlines/sources?category=business&apiKey=ff6c70e621e54ff19b943a356a78973d');

        const apiKey = process.env.REACT_APP_NEWS_API_KEY;
        const responses = await Promise.all([
          fetch(`https://newsapi.org/v2/top-headlines?category=general&language=en&apiKey=${apiKey}`),
          // fetch(`https://newsapi.org/v2/top-headlines?category=entertainment&language=en&apiKey=${apiKey}`),
          // fetch(`https://newsapi.org/v2/top-headlines?category=sports&language=en&apiKey=${apiKey}`),
          // fetch(`https://newsapi.org/v2/top-headlines?category=business&language=en&apiKey=${apiKey}`),
          // fetch(`https://newsapi.org/v2/top-headlines?category=technology&language=en&apiKey=${apiKey}`),

          // fetch('https://newsapi.org/v2/top-headlines/sources?country=us&language=en&apiKey=ff6c70e621e54ff19b943a356a78973d'),
        ]);

        const data = await Promise.all(responses.map(response => response.json()));
        console.log(data);
        const zipped = data.map((article, i) => {
          return {
            "articles": article.articles,
            "category": categories[i].category,
            "color": categories[i].color,
          }
        })
        console.log(zipped);
        setData(zipped);
        // sf headlines === try nbc northern california? 
        // const resp = await fetch('https://newsapi.org/v2/top-headlines?q=san%20francisco&q=bay%20area&pageSize=30&language=en&apiKey=ff6c70e621e54ff19b943a356a78973d');
        // const sf = await resp.json();
        // console.log(sf)
        // setSf(sf.articles

      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    await fetchArticles();
  };


  return (
    <div className="App">
      {/* TODO nav bar with our info */}
      <h2>Caden's trivia helper v1</h2>
      <p>click below for recent headlines</p>
      <button
        style={{marginTop: '10px'}}
        onClick={() => {handleCall()}}
      >
        click me
      </button>
      {
        error &&
        <div>there was an error. try again tomorrow.</div>
      }
      {
        data?.status === 'error' ? 
          <div>error please try again tomorrow.</div>
         : data ?
          data.map((item, i) => {
            return (<Card
              key={i}
              articles={item.articles}
              category={item.category}
              color={item.color}
            />)
          }) :
        <></>
      } 
    </div>
  );
}

export default App;


// "message": "Your API key is invalid or incorrect. Check your key, or go to https://newsapi.org to create a free API key."
