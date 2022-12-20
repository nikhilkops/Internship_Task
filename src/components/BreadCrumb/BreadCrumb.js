import React from "react";
import "./BreadCrumb.css";

import { AiOutlineRight } from "react-icons/ai";

function BreadCrumb() {
  return (
    <>
      <div className="breadcrumb">
        <a href="/#">
          Medical Darpan <AiOutlineRight />
        </a>
        <a href="/#">
          Search <AiOutlineRight />
        </a>
        <a href="/#">
          {" "}
          <strong>FabiFlue Tablet</strong>{" "}
        </a>
      </div>
    </>
  );
}

export default BreadCrumb;
