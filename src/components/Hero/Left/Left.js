import React from "react";
import list from "./Left_list";

import "./Hero.css";
function Left() {
  return (
    <>
      <section className="left-hero">
        {Object.keys(list).map((val, i) => {
          const title = val;
          const items = list[title];

          return (
            <>
              <div className="left-container">
                <div className="left-title">{title}</div>
                <ul className="left-items">
                  {items.map((item, i) => {
                    return (
                      <li
                        className={
                          item === "Acelofenac" || item === "500mg"
                            ? "highlight"
                            : ""
                        }
                      >
                        {item}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
}

export default Left;
