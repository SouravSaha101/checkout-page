import React from "react";
import "./Navbar.css";

function Navbar() {
  const list = ["BAG", "ADDRESS", "PAYMENT"];
  return (
    <>
      <nav className="navbar">
        <div className="logo">MYNTRA</div>
        <ol className="checkout-steps">
          {list.map((el, idx) => (
            <li key={idx}> . {el} ------ </li>
          ))}
        </ol>
        <div className="secureContainer">
          <img
            src="https://constant.myntassets.com/checkout/assets/img/sprite-secure.png"
            className="secureIcon"
            width="26"
            height="28"
            alt="secure"
          />
          <div className="secure">100% SECURE</div>{" "}
        </div>
      </nav>
      <br />
      <div className="headerComponents">
        As per guidelines, we are only delivering essentials in govt-specified
        pincodes
      </div>
    </>
  );
}

export default Navbar;
