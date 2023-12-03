// WordDetailsPage.js
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const WordDetailsPage = () => {
  const { word } = useParams();
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
        );

        setDetails(response.data[0]);
      } catch (error) {
        console.error("Error fetching word details", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [word]);

  return (
    <div>
      {loading && <div className="loader"></div>}

      {!loading && details && (
        <div>
          <h1>{word} Details</h1>
          <p>Phonetics: {details.phonetics[0].text}</p>
          <h2>Meanings:</h2>
          <ul>
            {details.meanings.map((meaning, index) => (
              <li key={index}>
                <strong>Part of Speech:</strong> {meaning.partOfSpeech},{" "}
                <strong>Definition:</strong> {meaning.definitions[0].definition}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default WordDetailsPage;
