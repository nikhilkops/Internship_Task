import React from "react";
import "./BreadCrumb.css";

import { AiOutlineRight } from "react-icons/ai";

function BreadCrumb() {
  return (
    <>
      <div class="breadcrumb">
        <a>
          Medical Darpan <AiOutlineRight />
        </a>
        <a>
          Search <AiOutlineRight />
        </a>
        <a>
          {" "}
          <strong>FabiFlue Tablet</strong>{" "}
        </a>
      </div>
    </>
  );
}

export default BreadCrumb;
