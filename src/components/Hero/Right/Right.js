import React from "react";
import image from "./77076216.jpg";

import "../Left/Hero.css";
import { FaTelegramPlane } from "react-icons/fa";

const pro = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function Right() {
  return (
    <section className="right-hero">
      {pro.map((value, i) => {
        return (
          <div className="product-card">
            <div>
              <input
                type="image"
                img="true"
                src={image}
                alt="medicine-image"
                className="product-image"
              />
            </div>
            <div className="product-heading">
              <a href="/#">Fevipiravir 400mg(Fabiflu Tablets)</a>
            </div>
            <div className="product-price">
              <span> Rs 1,775 </span>
              <a href="/#">/ stripe</a>
            </div>
            <div className="product-company">
              <a href="/#">Glenmark Pharmaceutical Limited</a>
            </div>
            <div className="company-address">
              {/* <a>Address</a> */}
              <a href="/#"> PARIVAT PATTYA, SURAT, GUJRAT</a>
            </div>
            <div className="contact-supplier">
              <FaTelegramPlane />
              <a href="/#">Contact Supplier</a>
            </div>

            <div className="border"></div>
          </div>
        );
      })}
    </section>
  );
}

export default Right;
