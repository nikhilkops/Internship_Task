import React from "react";

import "./combine.css";
import Left from "./Left/Left";
import Right from "./Right/Right";
function combine() {
  return (
    <>
      <section className="combine-hero">
        <Left />
        <Right />
      </section>
    </>
  );
}

export default combine;
