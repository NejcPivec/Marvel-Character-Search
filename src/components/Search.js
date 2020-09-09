import React, { useState } from "react";

const Search = ({ getSearched }) => {
  const [text, setText] = useState("");

  const onChange = (e) => {
    setText(e);
    getSearched(e);
  };

  return (
    <div className="search">
      <form>
        <input
          type="text"
          className="form-control"
          placeholder="Search character..."
          value={text}
          onChange={(e) => onChange(e.target.value)}
        />
      </form>
    </div>
  );
};

export default Search;
