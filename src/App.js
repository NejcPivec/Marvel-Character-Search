import React, { useState, useEffect } from "react";
import "./App.css";
import md5 from "md5";

import Header from "./components/Header";
import Search from "./components/Search";
import CharacterGrid from "./components/CharacterGrid";

function App() {
  const [characters, setCharacters] = useState([]);
  const [searched, setSearched] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const publickey = process.env.REACT_APP_PUBLIC_KEY;
  const privatekey = process.env.REACT_APP_PRIVATE_KEY;

  var ts = new Date().getTime();
  var stringToHash = ts + privatekey + publickey;
  var hash = md5(stringToHash);
  const limit = 40;

  useEffect(() => {
    const fetchCharacters = async () => {
      if (searched === "") {
        await fetch(
          `https://gateway.marvel.com/v1/public/characters?limit=${limit}&ts=${ts}&apikey=${publickey}&hash=${hash}`
        )
          .then((res) => res.json())
          .then((data) => {
            setCharacters(data.data.results);
            setIsLoading(false);
          });
      } else {
        await fetch(
          `https://gateway.marvel.com/v1/public/characters?nameStartsWith=${searched}&limit=${limit}&ts=${ts}&apikey=${publickey}&hash=${hash}`
        )
          .then((res) => res.json())
          .then((data) => {
            setCharacters(data.data.results);
            setIsLoading(false);
          });
      }
    };
    fetchCharacters();
  }, [searched]);

  return (
    <div className="container">
      <Header />
      <Search getSearched={(e) => setSearched(e)} />
      <CharacterGrid isLoading={isLoading} characters={characters} />
    </div>
  );
}

export default App;
