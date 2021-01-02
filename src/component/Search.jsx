import React, { useState } from "react";
import Axios from "axios";

const Search = () => {
  const [term, setTerm] = useState("");
  const [game, setGame] = useState([]);

  const handleChange = (e) => {
    setTerm(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await Axios.get(
      `https://www.cheapshark.com/api/1.0/games?title=${term}&limit=60&exact=0`
    );
    console.log(response.data);
    setGame(response.data);
  };

  const renderGames = () => {
    return game.map((games) => {
      return (
        <ul>
          <li>
            <img src={games.thumb} alt={games.gameID} />
          </li>
          <li>
            <strong>Game ID: </strong>
            {games.gameID}
          </li>
          <li>
            <strong>Game Name: </strong>
            {games.external}
          </li>
          <li>
            <strong>Cheapest Price: </strong>
            {games.cheapest}
          </li>
        </ul>
      );
    });
  };

  return (
    <div className="search-page">
      <form onSubmit={handleSubmit}>
        <h3>Search for a game!</h3>
        <input type="search" placeholder="Type Game" onChange={handleChange} />
      </form>
      {renderGames()}
    </div>
  );
};

export default Search;
