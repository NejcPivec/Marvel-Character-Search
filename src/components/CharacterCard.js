import React from "react";
import noImg from "../img/no-img.png";

const CharacterCard = ({ character }) => {
  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <img
            src={
              character.thumbnail.path ===
              "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available"
                ? `${noImg}`
                : `${character.thumbnail.path}.${character.thumbnail.extension}`
            }
            alt="Character profile"
          />
        </div>
        <div className="card-back">
          <h1>{character.name}</h1>
          <h5>Description:</h5>
          <p>
            {character.description === ""
              ? "There is no describtion available"
              : `${character.description}`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;
