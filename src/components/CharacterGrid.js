import React from "react";

import CharacterCard from "./CharacterCard";
import Spinner from "./Spinner";

const CharacterGrid = ({ characters, isLoading }) => {
  return isLoading ? (
    <Spinner />
  ) : (
    <div className="card-section">
      {characters.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  );
};

export default CharacterGrid;
