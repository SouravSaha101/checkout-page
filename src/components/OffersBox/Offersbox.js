import React from "react";
import "./Offersbox.css";

function Offersbox(props) {
  const style = {
    background: props.isFee ? "#f2faf9" : "#fff1ec",
    padding: "12px 12px 12px 63px",
    fontSize: "12px",
    position: "relative",
    borderRadius: "4px",
    lineHeight: "16px",
  };
  const couponStyle = {
    padding: "10px 16px 12px 35px",
  };
  return (
    <div>
      <div className="coupons-base-header"> {props.header}</div>
      <div style={props.isGift ? style : couponStyle}>
        <h6>
          {props.message}
          {props.isGift && !props.isFee ? (
            <button type="button" className="button arrow-float">
              Apply
            </button>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="7"
              height="12"
              viewBox="0 0 7 12"
              className="arrow-float"
            >
              <path
                fillRule="evenodd"
                d="M6.797 5.529a.824.824 0 0 0-.042-.036L1.19.193a.724.724 0 0 0-.986 0 .643.643 0 0 0 0 .94L5.316 6 .203 10.868a.643.643 0 0 0 0 .938.724.724 0 0 0 .986 0l5.566-5.299a.644.644 0 0 0 .041-.978"
              ></path>
            </svg>
          )}
        </h6>
      </div>
    </div>
  );
}

export default Offersbox;
