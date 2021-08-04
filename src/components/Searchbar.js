import { useState } from "react";

const Searchbar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const onSearchHandle = (e) => {
    e.preventDefault();
    console.log("Searching for term" + searchTerm);
    setSearchTerm("");
  };

  return (
    <div className="searchbar">
      <form className="searchbar__form">
        <input
          type="text"
          placeholder="Search for movies and tv shows"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
        <button className="btn btn-block" onClick={onSearchHandle}>
          SEARCH
        </button>
      </form>
    </div>
  );
};

export default Searchbar;
