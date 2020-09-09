import React from "react";

import CharacterCard from "./CharacterCard";

const CharacterGrid = ({ characters }) => {
  return (
    <div className="card-section">
      {characters.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  );
};

export default CharacterGrid;