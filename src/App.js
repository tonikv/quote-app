import React from 'react';
import './App.css';
import Quote from './components/Quote'
import { useState } from 'react';

function App() {
  let quotesData = {}
  const [author, setAuthor] = useState("Toni Virtanen")
  const [quote, setQuote] = useState("Click button to get quote")

  // Load quetes json
  function getQuotes() {
    const data = require("./quotes.json")
    return data.quotes
  }
  
  function getRandomQuote() {
    let index = Math.floor(Math.random() * quotesData.length);
    let randomAuthor = quotesData[index].author;
    let randomQuote = quotesData[index].quote;
    setAuthor(randomAuthor)
    setQuote(randomQuote)
  }

  quotesData = getQuotes()

  return (
    <div className="App">
      <Quote 
        random={getRandomQuote} 
        author={author} 
        quote={quote} 
        />
    </div>
  );
}

export default App;
