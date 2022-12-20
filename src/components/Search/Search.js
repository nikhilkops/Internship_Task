import React from "react";
import "./Search.css";
function Search() {
  return (
    <>
      <form className="Search">
        <input type="text" name="search" placeholder="Search.." />
        <div>
          <a className="Search-btn" href="/#">
            Search
          </a>
        </div>
      </form>
    </>
  );
}

export default Search;
