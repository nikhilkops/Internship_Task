import React from "react";
import "./Resulttext.css";

import tags from "./tags";
function ResultText() {
  return (
    <>
      <section className="Results">
        <div className="search-result">
          <a className="main-search">Paracetamol</a>
          <a className="no-of-products"> (128 products)</a>
        </div>

        <div className="tags">
          <ul className="tags-list">
            {tags.map((val, i) => {
              return (
                <li className="tag" key={val + i}>
                  <a>{val} &#10005;</a>
                </li>
              );
            })}
          </ul>

          <span className="remove-tags">Remove All</span>
        </div>
      </section>
    </>
  );
}

export default ResultText;
