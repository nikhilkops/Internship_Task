import React from "react";
import "./Resulttext.css";

import tags from "./tags";
function ResultText() {
  return (
    <>
      <section class="Results">
        <div className="search-result">
          <a class="main-search">Paracetamol</a>
          <a className="no-of-products"> (128 products)</a>
        </div>

        <div className="tags">
          {tags.map((val, i) => {
            return (
              <span class="tag">
                <a>{val} &#10005;</a>
              </span>
            );
          })}

          <span className="remove-tags">Remove All</span>
        </div>
      </section>
    </>
  );
}

export default ResultText;
