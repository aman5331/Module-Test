// HomePage.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToHistory } from "./actions";
import axios from "axios";

const HomePage = ({ history }) => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [definitions, setDefinitions] = useState([]);

  const handleSearch = async () => {
    setLoading(true);

    try {
      const response = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm}`
      );

      setDefinitions(response.data);
      dispatch(addToHistory(searchTerm));
    } catch (error) {
      console.error("Error fetching word definitions", error);
      setDefinitions([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Word Search App</h1>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {loading && <div className="loader"></div>}

      {definitions.length > 0 && (
        <div>
          <h2>Definitions for {searchTerm}:</h2>
          <ul>
            {definitions.map((definition, index) => (
              <li key={index}>{definition.meanings[0].definition}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default HomePage;
